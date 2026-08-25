import { LectureData } from '@/data/lectures/types'
import { Slide01Sandbox } from './Slide01Sandbox'
import { Slide02Mission } from './Slide02Mission'
import { Slide03OpenTerminal } from './Slide03OpenTerminal'

export const session5Data: LectureData = {
  id: 'session-5',
  title: 'Lab 1 — Session 5: The Terminal',
  slides: [
    { id: 1, title: 'Your First Terminal — Safe to Touch', contentType: 'center', content: <Slide01Sandbox /> },
    { id: 2, title: 'TIY — Make Your Course Folder',        contentType: 'center', content: <Slide02Mission /> },
    { id: 3, title: 'Open Your Own Terminal',              contentType: 'center', content: <Slide03OpenTerminal /> },
  ],
}
