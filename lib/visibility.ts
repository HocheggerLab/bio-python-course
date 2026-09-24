/**
 * Whether unpublished sessions are visible in the nav and on the cards.
 *
 * Production shows only what is finished. But while a lecture is being
 * written it has to be reachable the ordinary way — clicking through the menu,
 * not remembering a URL — so everywhere that is *not* production shows the
 * whole course.
 *
 * Three cases, in order of how they fire:
 *
 *   `next dev`            NODE_ENV is 'development'      → everything visible
 *   Vercel preview build  NEXT_PUBLIC_VERCEL_ENV=preview → everything visible
 *   production            neither                        → published only
 *
 * `NEXT_PUBLIC_SHOW_ALL_SESSIONS=1` forces it on anywhere, which is what to
 * use for a local production build (`next build && next start`) when you want
 * to check an unfinished deck as it will actually render.
 *
 * All three are read at build time and inlined, so this costs nothing at
 * runtime — and production cannot be talked into showing a draft by a query
 * string or a cookie.
 */
export const showUnpublishedSessions: boolean =
  process.env.NODE_ENV === 'development' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
  process.env.NEXT_PUBLIC_SHOW_ALL_SESSIONS === '1'
