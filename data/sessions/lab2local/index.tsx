import { LectureData } from '@/data/lectures/types'
import { Slide01WhyLocal } from './Slide01WhyLocal'
import { Slide02InstallUv } from './Slide02InstallUv'
import { Slide03Repl } from './Slide03Repl'
import { Slide04RunProgram } from './Slide04RunProgram'
import { Slide05YourTurn } from './Slide05YourTurn'

export const lab2LocalData: LectureData = {
  id: 'lab-2-local-python',
  title: 'Lab 2 · Local Python & uv',
  slides: [
    { id: 1, title: 'Why local?',            contentType: 'center', content: <Slide01WhyLocal /> },
    { id: 2, title: 'Install uv & Python',   contentType: 'center', content: <Slide02InstallUv /> },
    { id: 3, title: 'A quick hello',         contentType: 'center', content: <Slide03Repl /> },
    { id: 4, title: 'Run a real program',    contentType: 'center', content: <Slide04RunProgram /> },
    { id: 5, title: 'Your turn',             contentType: 'center', content: <Slide05YourTurn /> },
  ],
}
