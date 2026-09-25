import type { MetadataRoute } from 'next'
import { coreSessionsData, isLecturePublished } from '@/data/lectures'
import { labs, isLabPublished } from '@/app/labs/_shared/labs'
import { SITE_URL } from '@/lib/site'

/**
 * The sitemap Google reads at /sitemap.xml.
 *
 * Only published material is listed. Unpublished lectures and labs still build
 * and still answer 200 by direct URL, but listing them would be an invitation
 * to index half-written teaching material — and a page Google indexes today is
 * a page it shows students for months.
 *
 * `isLecturePublished` / `isLabPublished` open up outside production (see
 * lib/visibility.ts), which is harmless here: preview deployments are not
 * crawled, and nothing but the production build is served to search engines.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'
  ) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  })

  return [
    page('/', 1.0, 'weekly'),
    page('/about', 0.8),
    page('/schedule', 0.7),
    page('/assessment', 0.7),
    page('/labs', 0.8, 'weekly'),
    page('/notebooks', 0.7, 'weekly'),
    page('/labs/cheatsheets', 0.5),
    page('/labs/datacamp', 0.4),

    ...coreSessionsData
      .filter((l) => isLecturePublished(l.id))
      .map((l) => page(`/lectures/${l.id}`, 0.9, 'weekly')),

    ...labs
      .filter((l) => isLabPublished(l.num))
      .map((l) => page(`/labs/${l.num}`, 0.8, 'weekly')),
  ]
}
