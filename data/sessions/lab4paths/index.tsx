import { LectureData } from '@/data/lectures/types'
import { Slide01Intro } from './Slide01Intro'
import { Slide02TheProject } from './Slide02TheProject'
import { Slide03TheMap } from './Slide03TheMap'
import { Slide04OpenAndCheck } from './Slide04OpenAndCheck'
import { Slide05GetTheFiles } from './Slide05GetTheFiles'
import { Slide06WhatIsFasta } from './Slide06WhatIsFasta'
import { Slide07TheBiology } from './Slide07TheBiology'
import { Slide08Peek } from './Slide08Peek'
import { Slide09TerminalToPython } from './Slide09TerminalToPython'
import { Slide10Loop } from './Slide10Loop'
import { Slide11BreakIt } from './Slide11BreakIt'
import { Slide12Homework } from './Slide12Homework'

export const lab4PathsData: LectureData = {
  id: 'lab-4-paths',
  title: 'Lab 4 · Paths & Files',
  slides: [
    { title: 'Your first real project', content: <Slide01Intro /> },
    { title: 'The project', content: <Slide02TheProject /> },
    { title: 'The map', content: <Slide03TheMap /> },
    { title: 'Does Python run?', content: <Slide04OpenAndCheck /> },
    { title: 'Get the files', content: <Slide05GetTheFiles /> },
    { title: 'Look before you code', content: <Slide06WhatIsFasta /> },
    { title: 'The biology', content: <Slide07TheBiology /> },
    { title: 'Peek inside one file', content: <Slide08Peek /> },
    { title: 'Terminal → Python', content: <Slide09TerminalToPython /> },
    { title: 'Now all 99', content: <Slide10Loop /> },
    { title: 'Break it on purpose', content: <Slide11BreakIt /> },
    { title: 'Homework', content: <Slide12Homework /> },
  ],
}
