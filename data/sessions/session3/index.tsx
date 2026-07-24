import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02DataTypes } from './Slide02DataTypes'

export const session3Data: LectureData = {
  id: 'session-3',
  title: 'Lab 1 — Session 3: Data Types',
  slides: [
    { id: 1, title: 'Session 3 — Data Types',    contentType: 'top', content: <Slide01Overview /> },
    { id: 2, title: 'Four Core Data Types',      contentType: 'top', content: <Slide02DataTypes /> },
  ],
}
