import { readFileSync } from 'node:fs'
import path from 'node:path'
import { NextResponse } from 'next/server'
import {
  ANSWER_SCHEMA,
  buildSystemPrompt,
  decide,
  OFF_TOPIC,
  parseFacts,
  type Draft,
  type Fact,
} from '@/lib/chatbot'

// Résumé chatbot, answered by Groq.
//
// The model never writes the reply directly. It fills in a form (Groq
// structured outputs, strict mode): what kind of question this is, a draft
// answer, and the IDs of the facts the answer rests on. decide() in
// src/lib/chatbot.ts then chooses what the visitor sees:
//   - greetings, off-topic requests and uncovered questions get fixed
//     messages, whatever the model drafted;
//   - answers about Namare are shown only if they cite real facts and stay
//     short and plain (no tables, no code).
// So a visitor who talks the model into drafting a project plan still never
// sees one.
//
// What the bot knows lives in content/chatbot/facts.md, one fact per bullet.
// Needs GROQ_API_KEY; GROQ_CHAT_MODEL overrides the model (it must support
// strict structured outputs on Groq).

export const runtime = 'nodejs'
export const maxDuration = 30

const GROQ_MODEL = process.env.GROQ_CHAT_MODEL || 'openai/gpt-oss-120b'
// Some reasoning helps it pick the right facts; "low" keeps the token cost down
const REASONING_EFFORT = GROQ_MODEL.includes('gpt-oss') ? 'low' : undefined
const TEMPERATURE = 0.2
// Includes reasoning tokens
const MAX_OUTPUT_TOKENS = 1024

const MAX_QUESTION_CHARS = 500
// Only the previous question and answer: enough for "tell me more", not
// enough for a long back-and-forth to wear the rules down
const MAX_HISTORY_TURNS = 2
const MAX_TURN_CHARS = 800

const UNAVAILABLE =
  "I'm having trouble generating a response right now. This might be a rate limit — please try again in a moment."

type Turn = { role: 'user' | 'assistant'; content: string }

// Read once per server instance
let facts: Map<string, Fact> | null = null
let systemPrompt = ''
function getFacts(): Map<string, Fact> {
  if (facts === null) {
    const file = path.join(process.cwd(), 'content', 'chatbot', 'facts.md')
    facts = parseFacts(readFileSync(file, 'utf8'))
    systemPrompt = buildSystemPrompt(facts)
  }
  return facts
}

// Best-effort per-instance limit. Serverless instances don't share memory, so
// this only slows down one client hammering one instance; it is not a quota.
const RATE_LIMIT = 10
const RATE_WINDOW_MS = 60_000
const hits = new Map<string, number[]>()
function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > RATE_LIMIT
}

function parseHistory(raw: unknown): Turn[] {
  if (!Array.isArray(raw)) return []
  const turns = raw
    .filter(
      (t): t is Turn =>
        !!t &&
        (t.role === 'user' || t.role === 'assistant') &&
        typeof t.content === 'string' &&
        t.content.trim().length > 0,
    )
    .map((t) => ({ role: t.role, content: t.content.slice(0, MAX_TURN_CHARS) }))
    .slice(-MAX_HISTORY_TURNS)
  // Start the conversation on a user turn
  while (turns.length && turns[0].role !== 'user') turns.shift()
  return turns
}

// Returns null when the model couldn't finish the form within its limits
async function draftAnswer(question: string, history: Turn[]): Promise<Draft | null> {
  const key = process.env.GROQ_API_KEY
  if (!key) throw new ChatError('no_api_key', 'GROQ_API_KEY is not set')
  getFacts()

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        ...history,
        { role: 'user', content: question },
      ],
      temperature: TEMPERATURE,
      max_tokens: MAX_OUTPUT_TOKENS,
      ...(REASONING_EFFORT && { reasoning_effort: REASONING_EFFORT }),
      response_format: {
        type: 'json_schema',
        json_schema: { name: 'chat_answer', strict: true, schema: ANSWER_SCHEMA },
      },
    }),
    signal: AbortSignal.timeout(20_000),
  })
  if (!res.ok) {
    const text = await res.text()
    let code = ''
    try {
      code = JSON.parse(text).error?.code ?? ''
    } catch {}
    // Groq rejects a form the model couldn't finish, usually because it
    // started writing something long (code, a plan) into the answer and ran
    // out of tokens. That is a refusal, not an outage.
    if (res.status === 400 && code === 'json_validate_failed') return null
    throw new ChatError(`groq_${res.status}${code ? `_${code}` : ''}`, text.slice(0, 300))
  }

  const data = await res.json()
  const choice = data.choices?.[0]
  if (choice?.finish_reason === 'length') return null
  const content = choice?.message?.content
  if (!content) throw new ChatError('groq_no_content', JSON.stringify(choice).slice(0, 300))
  return JSON.parse(content) as Draft
}

// reason is safe to show (a short code); detail only goes to the logs
class ChatError extends Error {
  constructor(
    readonly reason: string,
    readonly detail: string,
  ) {
    super(`${reason}: ${detail}`)
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json(
      { answer: 'You are asking a little fast. Please wait a minute and try again.', model_used: '' },
      { status: 429 },
    )
  }

  let body: { question?: unknown; history?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const question = typeof body.question === 'string' ? body.question.trim() : ''
  if (!question || question.length > MAX_QUESTION_CHARS) {
    return NextResponse.json(
      { error: `question must be 1-${MAX_QUESTION_CHARS} characters` },
      { status: 400 },
    )
  }

  try {
    const draft = await draftAnswer(question, parseHistory(body.history))
    if (draft === null) {
      console.info(`chat kind=unfinished q=${JSON.stringify(question.slice(0, 120))}`)
      return NextResponse.json({ answer: OFF_TOPIC, kind: 'unfinished', model_used: GROQ_MODEL })
    }
    const { kind, answer } = decide(draft, getFacts())
    console.info(
      `chat kind=${draft.kind}->${kind} facts=${draft.facts_used.join(',') || '-'} q=${JSON.stringify(question.slice(0, 120))}`,
    )
    return NextResponse.json({ answer, kind, model_used: GROQ_MODEL })
  } catch (error) {
    console.error('Chat failed:', error)
    const reason = error instanceof ChatError ? error.reason : 'internal'
    return NextResponse.json({ answer: UNAVAILABLE, reason, model_used: '' }, { status: 503 })
  }
}
