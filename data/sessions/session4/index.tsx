import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02Operators } from './Slide02Operators'
import { Slide03Comparisons } from './Slide03Comparisons'
import { Slide04Launch } from './Slide04Launch'

export const session4Data: LectureData = {
  id: 'session-4',
  title: 'Lab 1 — Session 4: Operators',
  slides: [
    { id: 1, title: 'Session 4 — Operators',            contentType: 'center', content: <Slide01Overview /> },
    { id: 2, title: 'Arithmetic & String Operators',    contentType: 'center', content: <Slide02Operators /> },
    { id: 3, title: 'Comparisons & a Mini-Program',     contentType: 'center', content: <Slide03Comparisons /> },
    { id: 4, title: 'Now open the notebook', contentType: 'center', content: <Slide04Launch /> },
  ],
}
