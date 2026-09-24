import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

export const TEACHER_COOKIE = 'pfb_teach'

/* Bumping this string invalidates every issued cookie — useful if a laptop
   with teacher mode on it goes missing. */
const PAYLOAD = 'teacher-mode-v1'

/**
 * The cookie holds an HMAC of a fixed payload keyed by POLL_ADMIN_TOKEN, not
 * the token itself: it cannot be forged without the token, and if a cookie
 * does leak it exposes nothing that would let someone open or reset a poll.
 */
export function teacherCookieValue(): string | null {
  const secret = process.env.POLL_ADMIN_TOKEN
  if (!secret) return null
  return createHmac('sha256', secret).update(PAYLOAD).digest('hex')
}

export function tokenIsValid(candidate: string): boolean {
  const secret = process.env.POLL_ADMIN_TOKEN
  if (!secret || candidate.length !== secret.length) return false
  return timingSafeEqual(Buffer.from(candidate), Buffer.from(secret))
}

/**
 * Is this request in teacher mode?
 *
 * Read on the server so answer slides are filtered out before the page is
 * rendered — a student's browser never receives them, which a client-side
 * check could not promise.
 */
export async function isTeacher(): Promise<boolean> {
  const expected = teacherCookieValue()
  if (!expected) return false
  const got = (await cookies()).get(TEACHER_COOKIE)?.value
  if (!got || got.length !== expected.length) return false
  return timingSafeEqual(Buffer.from(got), Buffer.from(expected))
}
