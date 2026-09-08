import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02DataTypes } from './Slide02DataTypes'
import { Slide03Launch } from './Slide03Launch'

export const session3Data: LectureData = {
  id: 'session-3',
  title: 'Lab 1 — Session 3: Data Types',
  slides: [
    { id: 1, title: 'Session 3 — Data Types',    contentType: 'center', content: <Slide01Overview /> },
    { id: 2, title: 'Four Core Data Types',      contentType: 'center', content: <Slide02DataTypes /> },
    { id: 3, title: 'Now open the notebook',     contentType: 'center', content: <Slide03Launch /> },
  ],
}
