import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02Lists } from './Slide02Lists'
import { Slide03Strings } from './Slide03Strings'
import { Slide04Dicts } from './Slide04Dicts'

export const lab2RecapData: LectureData = {
  id: 'lab-2-recap',
  title: 'Lab 2 — Lecture 2 Recap: Lists, Strings & Maps',
  slides: [
    { id: 1, title: 'Lab 2 — Recap',     contentType: 'top', content: <Slide01Overview /> },
    { id: 2, title: 'Lists',             contentType: 'top', content: <Slide02Lists /> },
    { id: 3, title: 'Strings',           contentType: 'top', content: <Slide03Strings /> },
    { id: 4, title: 'Dictionaries',      contentType: 'top', content: <Slide04Dicts /> },
  ],
}
