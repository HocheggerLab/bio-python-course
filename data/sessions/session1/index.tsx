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
    { id: 1, title: 'What is a Notebook?',     contentType: 'center', content: <Slide01WhatIsANotebook /> },
    { id: 2, title: 'Why Google Colab?',       contentType: 'center', content: <Slide02WhyColab /> },
    { id: 3, title: 'Two Kinds of Cells',      contentType: 'center', content: <Slide03Cells /> },
    { id: 4, title: 'Open, Save, Share',       contentType: 'center', content: <Slide04OpenAndSave /> },
    { id: 5, title: 'Top Tips & Gotchas',      contentType: 'center', content: <Slide05Tips /> },
    { id: 6, title: 'Using Gemini in Colab',   contentType: 'center', content: <Slide06Gemini /> },
    { id: 7, title: 'Now open the notebook', contentType: 'center', content: <Slide07Launch /> },
  ],
}
