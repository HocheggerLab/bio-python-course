/**
 * Admin actions (open, close, reset, reading results while a poll runs) sit
 * behind a bearer token from the environment.
 *
 * Not obscurity: without this, anyone who reads the client bundle could reset
 * the poll mid-lecture. The token lives in POLL_ADMIN_TOKEN and is pasted once
 * into the teacher page.
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

/** Constant-time-ish comparison so the token can't be guessed byte by byte. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}
