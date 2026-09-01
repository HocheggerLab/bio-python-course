import { LectureData } from '@/data/lectures/types'
import { Slide01ColabLied } from './Slide01ColabLied'
import { Slide02Project } from './Slide02Project'
import { Slide03AddNumpy } from './Slide03AddNumpy'
import { Slide04WhyEnvironments } from './Slide04WhyEnvironments'
import { Slide05UvRun } from './Slide05UvRun'
import { Slide06YourTurn } from './Slide06YourTurn'

export const lab5ProjectsData: LectureData = {
  id: 'lab-5-projects',
  title: 'Lab 5 · Projects & Environments',
  slides: [
    { id: 1, title: 'Colab has been hiding something', contentType: 'center', content: <Slide01ColabLied /> },
    { id: 2, title: 'A project, not a loose script',   contentType: 'center', content: <Slide02Project /> },
    { id: 3, title: 'uv add numpy',                    contentType: 'center', content: <Slide03AddNumpy /> },
    { id: 4, title: 'Why not install it everywhere?',  contentType: 'center', content: <Slide04WhyEnvironments /> },
    { id: 5, title: 'uv run',                          contentType: 'center', content: <Slide05UvRun /> },
    { id: 6, title: 'Your turn — five neurons',        contentType: 'center', content: <Slide06YourTurn /> },
  ],
}
