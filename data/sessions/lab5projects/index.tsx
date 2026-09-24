import { LectureData } from '@/data/lectures/types'
import { Slide01ColabLied } from './Slide01ColabLied'
import { Slide02Init } from './Slide02Init'
import { Slide03Sync } from './Slide03Sync'
import { Slide04AddNumpy } from './Slide04AddNumpy'
import { Slide05WhyEnvironments } from './Slide05WhyEnvironments'
import { Slide06Handover } from './Slide06Handover'
import { Slide07YourTurn } from './Slide07YourTurn'

export const lab5ProjectsData: LectureData = {
  id: 'lab-5-projects',
  title: 'Lab 5 · Projects & Environments',
  slides: [
    { title: 'Colab has been hiding something', content: <Slide01ColabLied /> },
    { title: 'uv init — a project is one file', content: <Slide02Init /> },
    { title: 'uv sync — make it real', content: <Slide03Sync /> },
    { title: 'uv add numpy', content: <Slide04AddNumpy /> },
    { title: 'Why not install it everywhere?', content: <Slide05WhyEnvironments /> },
    { title: 'Terminal first, then VS Code', content: <Slide06Handover /> },
    { title: 'Your turn — five neurons', content: <Slide07YourTurn /> },
  ],
}
