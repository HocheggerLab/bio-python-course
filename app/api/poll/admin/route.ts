import { getStore } from '@/lib/poll/store'
import { getQuestion } from '@/lib/poll/questions'
import { isAuthorised } from '@/lib/poll/admin'

export const dynamic = 'force-dynamic'

const ACTIONS = ['open', 'close', 'reset'] as const
type Action = (typeof ACTIONS)[number]

function isAction(value: unknown): value is Action {
  return typeof value === 'string' && (ACTIONS as readonly string[]).includes(value)
}

/** Open, close or clear a question. Opening one closes whatever else was open. */
export async function POST(request: Request) {
  if (!(await isAuthorised(request))) {
    return Response.json({ error: 'unauthorised' }, { status: 401 })
  }

  let body: { questionId?: unknown; action?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'invalid JSON' }, { status: 400 })
  }

  const { questionId, action } = body
  if (typeof questionId !== 'string' || !getQuestion(questionId)) {
    return Response.json({ error: 'unknown question' }, { status: 400 })
  }
  if (!isAction(action)) {
    return Response.json({ error: `action must be one of ${ACTIONS.join(', ')}` }, { status: 400 })
  }

  const store = getStore()
  if (action === 'open') await store.setOpen(questionId, true)
  if (action === 'close') await store.setOpen(questionId, false)
  if (action === 'reset') await store.reset(questionId)

  return Response.json({ questionId, action, open: await store.isOpen(questionId) })
}
