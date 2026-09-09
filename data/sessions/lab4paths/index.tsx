import { LectureData } from '@/data/lectures/types'
import { Slide01WhereAmI } from './Slide01WhereAmI'
import { Slide02TerminalToPython } from './Slide02TerminalToPython'
import { Slide03PathObjects } from './Slide03PathObjects'
import { Slide04ReadWrite } from './Slide04ReadWrite'
import { Slide05CwdVsFile } from './Slide05CwdVsFile'
import { Slide06YourTurn } from './Slide06YourTurn'

export const lab4PathsData: LectureData = {
  id: 'lab-4-paths',
  title: 'Lab 4 · Paths & Files',
  slides: [
    { title: 'Where am I?', content: <Slide01WhereAmI /> },
    { title: 'Terminal → Python', content: <Slide02TerminalToPython /> },
    { title: 'A path is an object', content: <Slide03PathObjects /> },
    { title: 'Opening files with with', content: <Slide04ReadWrite /> },
    { title: 'cwd vs __file__', content: <Slide05CwdVsFile /> },
    { title: 'Your turn — 99 bees', content: <Slide06YourTurn /> },
  ],
}
