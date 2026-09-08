import { isTeacher } from './teacher'

/**
 * Admin actions (open, close, reset, reading results while a poll runs) sit
 * behind a bearer token from the environment.
 *
 * Not obscurity: without this, anyone who reads the client bundle could reset
 * the poll mid-lecture. The token lives in POLL_ADMIN_TOKEN.
 */
export function isAdmin(request: Request): boolean {
  const expected = process.env.POLL_ADMIN_TOKEN
  // Refuse rather than fall open if the deployment forgot to set a token.
  if (!expected) return false

  const header = request.headers.get('authorization') ?? ''
  const prefix = 'Bearer '
  if (!header.startsWith(prefix)) return false

  const given = header.slice(prefix.length)
  return timingSafeEqual(given, expected)
}

/**
 * Either credential will do: the bearer token (scripts, load tests) or the
 * teacher cookie set once at /teach.
 *
 * The cookie is what makes the lecture workable — the controls now live on the
 * question slide itself, and pasting a token before every question in a dark
 * room was never going to happen.
 */
export async function isAuthorised(request: Request): Promise<boolean> {
  return isAdmin(request) || (await isTeacher())
}

/** Constant-time-ish comparison so the token can't be guessed byte by byte. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}
