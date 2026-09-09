import { LectureData } from '@/data/lectures/types'
import { Slide01WhatIsANotebook } from './Slide01WhatIsANotebook'
import { Slide02WhyColab } from './Slide02WhyColab'
import { Slide03Cells } from './Slide03Cells'
import { Slide04OpenAndSave } from './Slide04OpenAndSave'
import { Slide05Tips } from './Slide05Tips'
import { Slide06Gemini } from './Slide06Gemini'
import { Slide07Launch } from './Slide07Launch'

export const session1Data: LectureData = {
  id: 'session-1',
  title: 'Lab Session 1 — Using Notebooks',
  slides: [
    { title: 'What is a Notebook?', content: <Slide01WhatIsANotebook /> },
    { title: 'Why Google Colab?', content: <Slide02WhyColab /> },
    { title: 'Two Kinds of Cells', content: <Slide03Cells /> },
    { title: 'Open, Save, Share', content: <Slide04OpenAndSave /> },
    { title: 'Top Tips & Gotchas', content: <Slide05Tips /> },
    { title: 'Using Gemini in Colab', content: <Slide06Gemini /> },
    { title: 'Now open the notebook', content: <Slide07Launch /> },
  ],
}
