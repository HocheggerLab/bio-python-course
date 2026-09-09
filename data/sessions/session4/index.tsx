import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02Operators } from './Slide02Operators'
import { Slide03Comparisons } from './Slide03Comparisons'
import { Slide04Launch } from './Slide04Launch'

export const session4Data: LectureData = {
  id: 'session-4',
  title: 'Lab 1 — Session 4: Operators',
  slides: [
    { title: 'Session 4 — Operators', content: <Slide01Overview /> },
    { title: 'Arithmetic & String Operators', content: <Slide02Operators /> },
    { title: 'Comparisons & a Mini-Program', content: <Slide03Comparisons /> },
    { title: 'Now open the notebook', content: <Slide04Launch /> },
  ],
}
