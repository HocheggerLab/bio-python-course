import { LectureData } from '@/data/lectures/types'
import { Slide01Launch } from './Slide01Launch'

/* One slide: the idea, then the notebook. The longer version is in _archive/. */
export const session2Data: LectureData = {
  id: 'session-2',
  title: 'Lab 1 — Session 2: Variables & print',
  slides: [
    { title: 'Variables & print — recap and notebook', content: <Slide01Launch /> },
  ],
}
