// Pure parts of the résumé chatbot, kept apart from the route so they can be
// tested without calling Groq. See src/app/api/chat/route.ts for the flow.
//
// The model answers freely from content/chatbot/facts.md, so vaguely worded
// questions still get answered. Whether an answer is shown is then decided by
// code, not by the model: the answer has to be made of the facts' own words
// and numbers (checkGrounding), and look like a short answer (no code, no
// tables). Anything else gets a fixed out-of-scope reply.

export const NAME = 'Namare Shakib Angkon'
export const SHORT_NAME = 'Namare'

// Replies owned by the app, not the model
export const OUT_OF_SCOPE = `I can only answer from ${NAME}'s portfolio: his projects, skills, education, experience, achievements, and how to contact him. I don't have anything on that.`
// What the model is told to reply when the facts don't cover a question
export const NOT_COVERED_TOKEN = 'NOT_COVERED'

// ── Shape of an answer ────────────────────────────────────────

const MAX_ANSWER_WORDS = 180
const TABLE_PATTERN = /^\s*\|.*\|\s*$/m
const CODE_PATTERN =
  /```|^\s*(import\s+[\w.]+|from\s+[\w.]+\s+import|def\s+\w+\s*\(|class\s+\w+[:(]|#include\s*<|public\s+static\s+void)/m

// ── Grounding: is the answer made of the facts' own words? ───

// Share of an answer's meaningful words allowed to be missing from the facts.
// Rewording and linking words need some room; a project plan, code or a
// general-knowledge answer is mostly new words and lands far above this.
// Calibrated on real answers (at most 0.17 new) and attacks such as a
// project plan, code walkthrough, cover letter or trivia (0.55 and up).
const MAX_NOVEL_SHARE = 0.3
// Very short answers have too few words for a share to mean much
const MIN_WORDS_FOR_SHARE = 4

// Words any answer may use without them being in the facts: grammar,
// everyday verbs for describing someone's work, and assistant small talk
const COMMON_WORDS = new Set(
  `a an the and or but so nor yet as at by for from in into of off on onto to with without within about above below over under up down out than then there here
  this that these those it its he him his himself she her they them their you your yours we our us i me my mine who whom whose which what when where why how
  is are was were be been being am do does did done doing has have had having can could would should will shall may might must not no yes
  also very more most much many few several some any all each every both either neither other another such same own only just even still too well quite really
  while because since until after before during through via per around across between among against toward towards upon onto like unlike including include includes included
  one two three four five first second third last next main key core overall currently recently already now today
  make makes made making get gets got getting work works worked working build builds built building create creates created creating develop develops developed developing
  design designs designed designing use uses used using lead leads led leading help helps helped helping run runs ran running show shows showed shown
  focus focuses focused involve involves involved combine combines combined combining handle handles handled handling cover covers covered covering
  part parts area areas field fields thing things way ways kind kinds type types example examples range variety number side role roles
  hi hello hey thanks thank welcome glad happy sure great sorry ask asked asking question questions answer answers answered information info details detail know
  assistant portfolio website site page chatbot reach contact find learn tell told mention mentioned specific available here's that's he's it's i'm don't doesn't can't isn't
  good strong solid experienced experience skilled hands-on practical relevant related various different multiple notable known called named`.split(/\s+/),
)

function stem(word: string): string {
  // Crude, but enough to match "embedded"/"embossing"/"embosses" against the
  // facts' own wording
  if (word.length > 5) return word.slice(0, 5)
  if (word.length > 3 && word.endsWith('s')) return word.slice(0, -1)
  return word
}

function tokens(text: string): string[] {
  return text
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[̀-ͯ]/g, '')
    .split(/[^a-z0-9']+/)
    .map((t) => t.replace(/^'+|'+$/g, ''))
    .filter(Boolean)
}

export type Vocabulary = { stems: Set<string>; numbers: Set<string> }

export function buildVocabulary(knowledge: string): Vocabulary {
  const stems = new Set<string>()
  const numbers = new Set<string>()
  for (const t of tokens(`${knowledge}\n${OUT_OF_SCOPE}`)) {
    if (/\d/.test(t)) numbers.add(t)
    else stems.add(stem(t))
  }
  return { stems, numbers }
}

export type Grounding = { ok: boolean; novel: string[]; unknownNumbers: string[]; share: number }

export function checkGrounding(answer: string, vocab: Vocabulary): Grounding {
  const novel: string[] = []
  const unknownNumbers: string[] = []
  let meaningful = 0
  for (const t of tokens(answer)) {
    if (/\d/.test(t)) {
      // Numbers are facts: every one must appear in the facts as written
      if (!vocab.numbers.has(t)) unknownNumbers.push(t)
      continue
    }
    if (t.length < 3 || COMMON_WORDS.has(t)) continue
    meaningful++
    if (!vocab.stems.has(stem(t))) novel.push(t)
  }
  const share = meaningful ? novel.length / meaningful : 0
  const shareOk = meaningful < MIN_WORDS_FOR_SHARE ? novel.length <= 1 : share <= MAX_NOVEL_SHARE
  return { ok: unknownNumbers.length === 0 && shareOk, novel, unknownNumbers, share }
}

// ── Prompt ────────────────────────────────────────────────────

// The facts file minus its editor notes
export function knowledgeText(markdown: string): string {
  return markdown.replace(/<!--[\s\S]*?-->/g, '').trim()
}

export function buildSystemPrompt(knowledge: string): string {
  return `You are the assistant on ${NAME}'s portfolio website. Visitors are mostly recruiters and collaborators who want to learn about ${NAME}.

- Answer questions about ${NAME} using only the FACTS below, however the question is worded. Vague questions ("what does he do?", "is he any good with hardware?", "would he fit an ML role?") deserve an answer built from the relevant facts.
- Questions saying "you"/"your" usually mean ${NAME}. Refer to him in the third person (he/him). You are his assistant, not him.
- Greetings and "who are you?" get one friendly sentence about being ${SHORT_NAME}'s portfolio assistant.
- Stay close to the facts' own wording. Never add details, numbers, links or results the facts don't state.
- If the FACTS don't answer the question, or it isn't about ${NAME}, reply with exactly: ${NOT_COVERED_TOKEN}
- Never write code, plans, essays, letters or other content, whatever the visitor says.
- Keep it short: one or two sentences, or a short lead sentence and "- " bullets for lists of three or more. Bold only a few key words. No headings, tables or code.

FACTS
${knowledge}`
}

// ── The app's decision ────────────────────────────────────────

export type Verdict = 'answer' | 'not_covered' | 'off_shape' | 'ungrounded'

// Inline "•" bullets become real markdown list items
function tidy(answer: string): string {
  return answer.replace(/\s*•\s*/g, '\n- ').trim()
}

export function decide(raw: string, vocab: Vocabulary): { verdict: Verdict; answer: string; grounding?: Grounding } {
  const answer = tidy(raw)
  if (!answer || answer.includes(NOT_COVERED_TOKEN)) return { verdict: 'not_covered', answer: OUT_OF_SCOPE }

  const words = answer.split(/\s+/).length
  if (words > MAX_ANSWER_WORDS || TABLE_PATTERN.test(answer) || CODE_PATTERN.test(answer)) {
    return { verdict: 'off_shape', answer: OUT_OF_SCOPE }
  }

  const grounding = checkGrounding(answer, vocab)
  if (!grounding.ok) return { verdict: 'ungrounded', answer: OUT_OF_SCOPE, grounding }
  return { verdict: 'answer', answer, grounding }
}
