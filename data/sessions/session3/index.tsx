import { LectureData } from '@/data/lectures/types'
import { Slide01Launch } from './Slide01Launch'

/* One slide: the idea, then the notebook. The longer version — an overview
   card and a four-type reference — is in _archive/ if the room ever needs it. */
export const session3Data: LectureData = {
  id: 'session-3',
  title: 'Lab 1 — Session 3: Data Types',
  slides: [
    { title: 'Data types — recap and notebook', content: <Slide01Launch /> },
  ],
}
