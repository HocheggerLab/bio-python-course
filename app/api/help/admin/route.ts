import { isAuthorised } from '@/lib/poll/admin'
import { getHelpStore } from '@/lib/help/store'

export const dynamic = 'force-dynamic'

const unauthorised = () => Response.json({ error: 'unauthorised' }, { status: 401 })

/** The whole queue, with names and questions — helpers only. */
export async function GET(request: Request) {
  if (!(await isAuthorised(request))) return unauthorised()
  try {
    return Response.json(
      { queue: await getHelpStore().list() },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  } catch {
    return Response.json({ error: 'queue unavailable' }, { status: 500 })
  }
}

type Action = 'claim' | 'release' | 'done' | 'clear'
const ACTIONS: readonly Action[] = ['claim', 'release', 'done', 'clear']

/**
 * claim: "on my way" — the student's page changes, and other helpers see it
 * is taken. release: back to waiting, in the same place. done: removes the
 * entry. clear: empties the queue at the end of the lab.
 */
export async function POST(request: Request) {
  if (!(await isAuthorised(request))) return unauthorised()

  let body: { action?: unknown; id?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'invalid JSON' }, { status: 400 })
  }
  const action = body.action as Action
  if (!ACTIONS.includes(action)) {
    return Response.json({ error: 'unknown action' }, { status: 400 })
  }
  const id = Number(body.id)
  if (action !== 'clear' && !Number.isInteger(id)) {
    return Response.json({ error: 'id required' }, { status: 400 })
  }

  const store = getHelpStore()
  try {
    if (action === 'claim') await store.setStatus(id, 'helping')
    else if (action === 'release') await store.setStatus(id, 'waiting')
    else if (action === 'done') await store.remove(id)
    else await store.clear()
    return Response.json({ queue: await store.list() })
  } catch {
    return Response.json({ error: `${action} failed — please try again` }, { status: 500 })
  }
}
