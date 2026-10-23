import { readFileSync } from 'node:fs'
import path from 'node:path'
import { NextResponse } from 'next/server'

// Résumé chatbot, answered by Groq. Ported from the old FastAPI service on
// Render (github.com/namaray/resume-rag-chatbot): the knowledge base is about
// a thousand words, so every question gets all of it instead of a top-k
// search. To change what the bot knows, edit the markdown files in
// content/chatbot/. Needs GROQ_API_KEY; GROQ_CHAT_MODEL overrides the model.

export const runtime = 'nodejs'
export const maxDuration = 30

const NAME = 'Namare Shakib Angkon'
const SHORT_NAME = 'Namare'
const PRONOUNS = 'he/him/his'

// gpt-oss-120b has published limits on Groq's rate-limit page; Llama 3.3 70B
// no longer does. Each question sends ~2.5K tokens (the whole knowledge base),
// so the tokens-per-minute limit is what visitors hit first.
const GROQ_MODEL = process.env.GROQ_CHAT_MODEL || 'openai/gpt-oss-120b'
// Some reasoning stops it attaching skills to the wrong projects; "low" keeps
// the token cost down. Only reasoning models accept the parameter.
const REASONING_EFFORT = GROQ_MODEL.includes('gpt-oss') ? 'low' : undefined

const TEMPERATURE = 0.2
// Includes reasoning tokens
const MAX_OUTPUT_TOKENS = 1536

const MAX_QUESTION_CHARS = 500
const MAX_TURN_CHARS = 4000
const MAX_HISTORY_TURNS = 6

const KNOWLEDGE_FILES = ['resume.md', 'projects.md', 'bio.md']

const SYSTEM_PROMPT = `You are the AI assistant embedded in ${NAME}'s portfolio website. Visitors are usually recruiters, interviewers, or potential collaborators who want to learn about ${NAME}.

WHO YOU ARE
- You are not ${NAME}. You are ${NAME}'s portfolio assistant, and you answer questions about ${NAME}.
- Refer to ${NAME} in the third person (${PRONOUNS}) — e.g. "He has experience in..." or "His project ARGUS...".
- Visitors will often address you as if you were ${NAME} ("What's your name?", "Tell me about yourself", "What are your skills?"). Treat "you" and "your" in such questions as referring to ${NAME}, and answer about ${NAME}.

SUBJECT IDENTITY — always true, always available to you
- Full name: ${NAME}
- Commonly called: ${SHORT_NAME}
- Pronouns: ${PRONOUNS}

ANSWERING RULES
1. For questions about ${NAME}'s background, skills, projects, education, experience, or achievements, use ONLY the KNOWLEDGE BASE plus the SUBJECT IDENTITY above. Do not use outside knowledge. The knowledge base is complete: everything known about ${NAME} is in it, so read all of it before answering, and combine facts from different sections when a question needs them.
2. Identity questions ("What's your name?", "Who are you?", "Who is this?") are answered from SUBJECT IDENTITY. You always know the name — never claim otherwise. Never say "my name is ${NAME}"; say whose assistant you are, e.g. "This is ${NAME}'s portfolio, and I'm ${SHORT_NAME}'s assistant. Ask me about the projects, skills or experience."
3. Greetings and meta questions ("hi", "what can you do?", "how does this work?") are answered directly from SUBJECT IDENTITY and your role.
4. Answer the question that was asked, directly, in the first sentence. Reasonable inference from the knowledge base is fine ("Is he good with hardware?" → yes, and cite the hardware projects); inventing facts is not.
5. NEVER invent or embellish skills, employers, job titles, dates, numbers, grades, certifications, or projects. If a detail is not in the knowledge base, leave it out. Only say a project used a technology if that project's own entry names it; a skill listed in his skills section does not mean every project used it.
6. If the knowledge base genuinely does not cover the question, say so in one sentence and offer what you can cover instead — projects, skills, education, experience, achievements, or how to contact ${SHORT_NAME}. Only ever name projects that appear in the knowledge base.

STYLE
- Concise and professional: a short paragraph, or a few bullets. No padding, no preamble.
- Use markdown for readability (bold, bullet lists). No headings larger than ###.
- Mentioning the section or project a fact came from is good when it adds credibility.
`

// Deliberately narrow: there is nothing secret behind this prompt, so a filter
// that blocks ordinary questions ("how does he act as a team lead?") costs more
// than it protects.
const BLOCKED_PATTERNS = [
  /\bignore\s+(all\s+|any\s+)?(your\s+|the\s+)?(previous|prior|above|earlier)\b.{0,20}\b(instruction|prompt|rule|direction)/i,
  /\bforget\s+(all\s+|everything\s+)?(your|the|these)\s+(instruction|prompt|rule|direction)/i,
  /\b(reveal|show|print|repeat|output|leak)\b.{0,30}\b(system\s+prompt|initial\s+instruction|your\s+instruction)/i,
  /\byou\s+are\s+now\s+(a|an|no\s+longer)\b/i,
  /\bpretend\s+(to\s+be|you\s+are)\b/i,
]

const REFUSAL = `I can only answer questions about ${NAME}'s background and work. Try asking about his projects, skills, education, or experience.`
const UNAVAILABLE =
  "I'm having trouble generating a response right now. This might be a rate limit — please try again in a moment."

type Turn = { role: 'user' | 'assistant'; content: string }

// Read once per server instance
let systemPrompt: string | null = null
function getSystemPrompt(): string {
  if (systemPrompt === null) {
    const dir = path.join(process.cwd(), 'content', 'chatbot')
    const knowledgeBase = KNOWLEDGE_FILES.map(
      (file) => `[Source: ${file}]\n${readFileSync(path.join(dir, file), 'utf8').trim()}`,
    ).join('\n\n---\n\n')
    systemPrompt = `${SYSTEM_PROMPT}\n\n--- KNOWLEDGE BASE ---\n${knowledgeBase}\n--- END KNOWLEDGE BASE ---\n`
  }
  return systemPrompt
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

async function generateGroq(question: string, history: Turn[]): Promise<string> {
  const key = process.env.GROQ_API_KEY
  if (!key) throw new Error('GROQ_API_KEY is not set')

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: 'system', content: getSystemPrompt() },
        ...history,
        { role: 'user', content: question },
      ],
      temperature: TEMPERATURE,
      max_tokens: MAX_OUTPUT_TOKENS,
      ...(REASONING_EFFORT && { reasoning_effort: REASONING_EFFORT }),
    }),
    signal: AbortSignal.timeout(20_000),
  })
  if (!res.ok) throw new Error(`Groq ${res.status}: ${(await res.text()).slice(0, 300)}`)

  const data = await res.json()
  const answer = (data.choices?.[0]?.message?.content ?? '').trim()
  if (!answer) throw new Error('Groq returned no text')
  return answer
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

  if (BLOCKED_PATTERNS.some((p) => p.test(question))) {
    return NextResponse.json({ answer: REFUSAL, model_used: '' })
  }

  const history = parseHistory(body.history)

  try {
    return NextResponse.json({ answer: await generateGroq(question, history), model_used: GROQ_MODEL })
  } catch (error) {
    console.error('Groq failed:', error)
    return NextResponse.json({ answer: UNAVAILABLE, model_used: '' }, { status: 503 })
  }
}
