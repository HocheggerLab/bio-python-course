import type { LectureData } from '@/data/lectures/types'
import { lecture1Data } from '@/data/lectures/lecture1'
import { lecture2Data } from '@/data/lectures/lecture2'
import { lecture3Data } from '@/data/lectures/lecture3'
import { lecture4Data } from '@/data/lectures/lecture4'

const DECKS: Record<number, LectureData> = { 1: lecture1Data, 2: lecture2Data, 3: lecture3Data, 4: lecture4Data }

/**
 * Link to one slide of a lecture deck, found by its title.
 *
 * Looking the slide up by title (rather than storing a number) keeps the link
 * right when slides are added or reordered. A title that no longer exists
 * throws, so the build fails instead of shipping a link to the wrong slide.
 */
export function slideHref(lecture: number, title: string): string {
  const deck = DECKS[lecture]
  if (!deck) throw new Error(`practice: no lecture ${lecture}`)
  const slides = deck.slides.filter((s) => !s.teacher)
  const index = slides.findIndex((s) => s.title === title)
  if (index === -1) throw new Error(`practice: lecture ${lecture} has no slide titled "${title}"`)
  return `/lectures/${lecture}?slide=${index + 1}`
}
