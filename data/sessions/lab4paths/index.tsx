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
    { id: 1, title: 'Where am I?',            contentType: 'center', content: <Slide01WhereAmI /> },
    { id: 2, title: 'Terminal → Python',      contentType: 'center', content: <Slide02TerminalToPython /> },
    { id: 3, title: 'A path is an object',    contentType: 'center', content: <Slide03PathObjects /> },
    { id: 4, title: 'Opening files with with', contentType: 'center', content: <Slide04ReadWrite /> },
    { id: 5, title: 'cwd vs __file__',        contentType: 'center', content: <Slide05CwdVsFile /> },
    { id: 6, title: 'Your turn — 99 bees',    contentType: 'center', content: <Slide06YourTurn /> },
  ],
}
