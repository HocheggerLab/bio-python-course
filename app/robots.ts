import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * /robots.txt
 *
 * Crawling is open, with three exceptions that are not teaching material and
 * should not appear in search results:
 *
 *   /teach      the lecturer sign-in
 *   /poll       only meaningful with a question open in a live lecture
 *   /api/       no pages
 *
 * Note this is a request, not a gate: /teach is already protected by the
 * signed cookie, and Disallow only keeps the page out of results.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/teach', '/poll', '/api/', '/under-construction', '/test-pyodide'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
