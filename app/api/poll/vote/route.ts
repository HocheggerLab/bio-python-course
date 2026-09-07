import { getStore } from '@/lib/poll/store'
import { getQuestion, MAX_BALLOTS_PER_QUESTION } from '@/lib/poll/questions'

export const dynamic = 'force-dynamic'

/** Guard the body before touching it: an oversized payload is refused outright. */
const MAX_BODY_BYTES = 1024

interface VoteBody {
  questionId?: unknown
  optionIndex?: unknown
  voterToken?: unknown
}

export async function POST(request: Request) {
  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ error: 'body too large' }, { status: 413 })
  }

  let body: VoteBody
  try {
    body = JSON.parse(raw)
  } catch {
    return Response.json({ error: 'invalid JSON' }, { status: 400 })
  }

  const { questionId, optionIndex, voterToken } = body

  if (typeof questionId !== 'string' || typeof voterToken !== 'string') {
    return Response.json({ error: 'questionId and voterToken must be strings' }, { status: 400 })
  }
  if (voterToken.length < 8 || voterToken.length > 64) {
    return Response.json({ error: 'voterToken out of range' }, { status: 400 })
  }

  const def = getQuestion(questionId)
  if (!def) {
    return Response.json({ error: 'unknown question' }, { status: 400 })
  }

  /* The only value we accept is an integer index into a known option list.
     No free text ever reaches storage, which is what rules out injection,
     stored XSS and using the poll as a scratch database in one go. */
  if (
    typeof optionIndex !== 'number' ||
    !Number.isInteger(optionIndex) ||
    optionIndex < 0 ||
    optionIndex >= def.optionCount
  ) {
    return Response.json({ error: 'optionIndex out of range' }, { status: 400 })
  }

  const store = getStore()

  if (!(await store.isOpen(questionId))) {
    return Response.json({ error: 'poll is closed' }, { status: 403 })
  }

  /* Cap new voters only — someone changing their mind is already counted and
     must not be turned away by the limit. Decided before storing anything, so
     a refused vote leaves no trace. */
  if (!(await store.hasVoted(questionId, voterToken))) {
    const total = await store.total(questionId)
    if (total >= MAX_BALLOTS_PER_QUESTION) {
      return Response.json({ error: 'too many responses' }, { status: 429 })
    }
  }

  const status = await store.cast(questionId, voterToken, optionIndex)
  return Response.json({ status })
}
