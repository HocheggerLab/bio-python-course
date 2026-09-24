import { getStore } from '@/lib/poll/store'

export const dynamic = 'force-dynamic'

/**
 * Which store is actually live.
 *
 * Exists because the memory store fails *silently* in production — votes
 * scatter across serverless instances and the totals come out partially
 * right, with no error to notice. Checking this before a lecture is cheaper
 * than discovering it during one.
 */
export async function GET() {
  const store = getStore()
  return Response.json({
    store: store.kind,
    safeForLecture: store.kind !== 'memory',
    adminTokenConfigured: Boolean(process.env.POLL_ADMIN_TOKEN),
    current: await store.current(),
  })
}
