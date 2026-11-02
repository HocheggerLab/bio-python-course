import {
  AGREEMENT,
  CHOICES,
  COMMENTS,
  MAX_COMMENT_CHARS,
  RATINGS,
  type FeedbackAnswers,
} from './questions'

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v)

const isIndex = (v: unknown, count: number): v is number =>
  typeof v === 'number' && Number.isInteger(v) && v >= 0 && v < count

/**
 * Rebuild the answers from the known question set rather than trusting the
 * submitted shape: unknown keys are dropped, out-of-range numbers rejected,
 * comments trimmed and capped. What reaches the database is only ever what
 * the form could have produced.
 *
 * Returns 'invalid' for a malformed body, 'empty' when nothing is answered.
 */
export function sanitiseAnswers(raw: unknown): FeedbackAnswers | 'invalid' | 'empty' {
  if (!isRecord(raw)) return 'invalid'
  const ratingsIn = isRecord(raw.ratings) ? raw.ratings : {}
  const choicesIn = isRecord(raw.choices) ? raw.choices : {}
  const commentsIn = isRecord(raw.comments) ? raw.comments : {}

  const out: FeedbackAnswers = { ratings: {}, choices: {}, comments: {} }

  for (const q of RATINGS) {
    const v = ratingsIn[q.id]
    if (v === undefined || v === null) continue
    if (!isIndex(v, AGREEMENT.length)) return 'invalid'
    out.ratings[q.id] = v
  }
  for (const q of CHOICES) {
    const v = choicesIn[q.id]
    if (v === undefined || v === null) continue
    if (!isIndex(v, q.options.length)) return 'invalid'
    out.choices[q.id] = v
  }
  for (const q of COMMENTS) {
    const v = commentsIn[q.id]
    if (v === undefined || v === null) continue
    if (typeof v !== 'string') return 'invalid'
    const text = v.trim()
    if (text.length > MAX_COMMENT_CHARS) return 'invalid'
    if (text) out.comments[q.id] = text
  }

  const answered =
    Object.keys(out.ratings).length +
    Object.keys(out.choices).length +
    Object.keys(out.comments).length
  return answered > 0 ? out : 'empty'
}
