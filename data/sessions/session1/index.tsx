import { LectureData } from '@/data/lectures/types'
import { Slide01Gemini } from './Slide01Gemini'
import { Slide02Launch } from './Slide02Launch'

/* Two slides, not one: notebook 01 is the orientation, so the deck only keeps
   what has to be said out loud before anyone starts — how to use the AI
   assistant, and save-a-copy-first. The six-slide version is in _archive/. */
export const session1Data: LectureData = {
  id: 'session-1',
  title: 'Lab 1 — Session 1: Using Notebooks',
  slides: [
    { title: 'Using Gemini in Colab', content: <Slide01Gemini /> },
    { title: 'Notebooks — recap and notebook', content: <Slide02Launch /> },
  ],
}
