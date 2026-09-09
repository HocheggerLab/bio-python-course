import { LectureData } from '@/data/lectures/types'
import { Slide01Launch } from './Slide01Launch'
import { Slide02Mission } from './Slide02Mission'

/* Two slides, not one: this session has no notebook, so the in-browser
   sandbox *is* the exercise. The launch slide then sends them to their own
   terminal to do it for real. */
export const session5Data: LectureData = {
  id: 'session-5',
  title: 'Lab 1 — Session 5: The Terminal',
  slides: [
    { title: 'The terminal — recap and mission', content: <Slide01Launch /> },
    { title: 'TIY — Make Your Course Folder', content: <Slide02Mission /> },
  ],
}
