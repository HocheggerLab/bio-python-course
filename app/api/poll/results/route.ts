import { getStore } from '@/lib/poll/store'
import { getQuestion } from '@/lib/poll/questions'
import { isAuthorised } from '@/lib/poll/admin'

export const dynamic = 'force-dynamic'

/**
 * The tally, for the teacher's screen.
 *
 * Behind the admin token on purpose. If students could read this while voting
 * was open they would herd — latecomers pick whatever is already ahead — and
 * the answer distribution stops telling us what anyone actually understood.
 */
export async function GET(request: Request) {
  if (!(await isAuthorised(request))) {
    return Response.json({ error: 'unauthorised' }, { status: 401 })
  }

  const questionId = new URL(request.url).searchParams.get('questionId')
  if (!questionId) {
    return Response.json({ error: 'questionId required' }, { status: 400 })
  }

  const def = getQuestion(questionId)
  if (!def) {
    return Response.json({ error: 'unknown question' }, { status: 400 })
  }

  const store = getStore()
  const [counts, total, isOpen] = await Promise.all([
    store.counts(questionId, def.optionCount),
    store.total(questionId),
    store.isOpen(questionId),
  ])

  return Response.json({
    questionId,
    isOpen,
    total,
    counts,
    correctIndex: def.correctIndex,
  })
}
