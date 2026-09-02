import { LectureData } from '@/data/lectures/types'
import { Slide01ColabLied } from './Slide01ColabLied'
import { Slide02Init } from './Slide02Init'
import { Slide03Sync } from './Slide03Sync'
import { Slide04AddNumpy } from './Slide04AddNumpy'
import { Slide04WhyEnvironments } from './Slide04WhyEnvironments'
import { Slide06Handover } from './Slide06Handover'
import { Slide06YourTurn } from './Slide06YourTurn'

export const lab5ProjectsData: LectureData = {
  id: 'lab-5-projects',
  title: 'Lab 5 · Projects & Environments',
  slides: [
    { id: 1, title: 'Colab has been hiding something', contentType: 'center', content: <Slide01ColabLied /> },
    { id: 2, title: 'uv init — a project is one file', contentType: 'center', content: <Slide02Init /> },
    { id: 3, title: 'uv sync — make it real',          contentType: 'center', content: <Slide03Sync /> },
    { id: 4, title: 'uv add numpy',                    contentType: 'center', content: <Slide04AddNumpy /> },
    { id: 5, title: 'Why not install it everywhere?',  contentType: 'center', content: <Slide04WhyEnvironments /> },
    { id: 6, title: 'Terminal first, then VS Code',    contentType: 'center', content: <Slide06Handover /> },
    { id: 7, title: 'Your turn — five neurons',        contentType: 'center', content: <Slide06YourTurn /> },
  ],
}
