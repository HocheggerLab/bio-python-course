import { LectureData } from '@/data/lectures/types'
import { Slide01Sandbox } from './Slide01Sandbox'
import { Slide02Mission } from './Slide02Mission'
import { Slide03OpenTerminal } from './Slide03OpenTerminal'
import { Slide04Launch } from './Slide04Launch'

export const session5Data: LectureData = {
  id: 'session-5',
  title: 'Lab 1 — Session 5: The Terminal',
  slides: [
    { title: 'Your First Terminal — Safe to Touch', content: <Slide01Sandbox /> },
    { title: 'TIY — Make Your Course Folder', content: <Slide02Mission /> },
    { title: 'Open Your Own Terminal', content: <Slide03OpenTerminal /> },
    { title: 'Now do it on your machine', content: <Slide04Launch /> },
  ],
}
