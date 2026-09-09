import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02DataTypes } from './Slide02DataTypes'
import { Slide03Launch } from './Slide03Launch'

export const session3Data: LectureData = {
  id: 'session-3',
  title: 'Lab 1 — Session 3: Data Types',
  slides: [
    { title: 'Session 3 — Data Types', content: <Slide01Overview /> },
    { title: 'Four Core Data Types', content: <Slide02DataTypes /> },
    { title: 'Now open the notebook', content: <Slide03Launch /> },
  ],
}
