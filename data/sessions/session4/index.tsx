import { LectureData } from '@/data/lectures/types'
import { Slide01Launch } from './Slide01Launch'

/* One slide: the idea, then the notebook. The longer version is in _archive/. */
export const session4Data: LectureData = {
  id: 'session-4',
  title: 'Lab 1 — Session 4: Operators',
  slides: [
    { title: 'Operators — recap and notebook', content: <Slide01Launch /> },
  ],
}
