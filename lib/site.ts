/**
 * The site's own address.
 *
 * Needed by the sitemap and robots routes, which have to emit absolute URLs —
 * a relative sitemap entry is ignored. Vercel sets VERCEL_PROJECT_PRODUCTION_URL
 * to the production domain on every deployment, so this keeps working if the
 * site ever moves to a custom domain without anyone remembering to edit it.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://python-for-biologists.vercel.app')
