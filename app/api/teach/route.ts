import { cookies } from 'next/headers'
import { TEACHER_COOKIE, teacherCookieValue, tokenIsValid } from '@/lib/poll/teacher'

export const dynamic = 'force-dynamic'

/** A teaching term, so this is done once per machine rather than once a week. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180

export async function POST(request: Request) {
  let body: { token?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'invalid JSON' }, { status: 400 })
  }

  if (typeof body.token !== 'string' || !tokenIsValid(body.token)) {
    return Response.json({ error: 'wrong token' }, { status: 401 })
  }

  const value = teacherCookieValue()
  if (!value) {
    return Response.json({ error: 'server has no POLL_ADMIN_TOKEN' }, { status: 500 })
  }

  /* Secure follows the actual protocol rather than NODE_ENV: `next start`
     runs in production mode, so keying off NODE_ENV marked the cookie Secure
     on http://localhost and the browser silently refused to store it — the
     sign-in appeared to do nothing. */
  const proto =
    request.headers.get('x-forwarded-proto') ?? new URL(request.url).protocol.replace(':', '')

  const store = await cookies()
  store.set(TEACHER_COOKIE, value, {
    // httpOnly: page scripts never need this, and it keeps the value out of
    // reach of anything running in the browser.
    httpOnly: true,
    secure: proto === 'https',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  })
  return Response.json({ teacher: true })
}

/** Sign out — for a shared or borrowed machine. */
export async function DELETE() {
  const store = await cookies()
  store.delete(TEACHER_COOKIE)
  return Response.json({ teacher: false })
}
