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
    { title: 'Why local?', content: <Slide01WhyLocal /> },
    { title: 'Install uv & Python', content: <Slide02InstallUv /> },
    { title: 'A quick hello', content: <Slide03Repl /> },
    { title: 'Run a real program', content: <Slide04RunProgram /> },
    { title: 'Your turn', content: <Slide05YourTurn /> },
  ],
}
