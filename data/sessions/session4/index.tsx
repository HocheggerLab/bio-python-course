import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02Operators } from './Slide02Operators'
import { Slide03Comparisons } from './Slide03Comparisons'

export const session4Data: LectureData = {
  id: 'session-4',
  title: 'Lab 1 — Session 4: Operators',
  slides: [
    { id: 1, title: 'Session 4 — Operators',            contentType: 'top', content: <Slide01Overview /> },
    { id: 2, title: 'Arithmetic & String Operators',    contentType: 'top', content: <Slide02Operators /> },
    { id: 3, title: 'Comparisons & a Mini-Program',     contentType: 'top', content: <Slide03Comparisons /> },
  ],
}
