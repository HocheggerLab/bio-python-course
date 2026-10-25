import { LectureData } from '@/data/lectures/types'
import { Slide01OpenAndCheck } from './Slide01OpenAndCheck'
import { Slide02GetTheFiles } from './Slide02GetTheFiles'
import { Slide03WhatIsFasta } from './Slide03WhatIsFasta'
import { Slide04TheBiology } from './Slide04TheBiology'
import { Slide05Peek } from './Slide05Peek'
import { Slide06TerminalToPython } from './Slide06TerminalToPython'
import { Slide07Loop } from './Slide07Loop'
import { Slide08BreakIt } from './Slide08BreakIt'
import { Slide09Homework } from './Slide09Homework'

export const lab4PathsData: LectureData = {
  id: 'lab-4-paths',
  title: 'Lab 4 · Paths & Files',
  slides: [
    { title: 'Does Python run?', content: <Slide01OpenAndCheck /> },
    { title: 'Get the files', content: <Slide02GetTheFiles /> },
    { title: 'Look before you code', content: <Slide03WhatIsFasta /> },
    { title: 'The biology', content: <Slide04TheBiology /> },
    { title: 'Peek inside one file', content: <Slide05Peek /> },
    { title: 'Terminal → Python', content: <Slide06TerminalToPython /> },
    { title: 'Now all 99', content: <Slide07Loop /> },
    { title: 'Break it on purpose', content: <Slide08BreakIt /> },
    { title: 'Homework', content: <Slide09Homework /> },
  ],
}
