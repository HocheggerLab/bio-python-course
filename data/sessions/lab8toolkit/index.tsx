import { LectureData } from '@/data/lectures/types'
import {
  SlideMap, SlideTerminal, SlideUv, SlideVsCode, SlideProjects, SlideNotebooksScripts, SlideGit,
  SlideAllOfIt, SlideWhenItBreaks,
} from './Slides'

export const lab8ToolkitData: LectureData = {
  id: 'lab-8-toolkit',
  title: 'Lab 8 · Your toolkit, reviewed',
  slides: [
    { title: 'Your toolkit, from the top', content: <SlideMap /> },
    { title: 'The terminal', content: <SlideTerminal /> },
    { title: 'uv and Python', content: <SlideUv /> },
    { title: 'VS Code, set up your way', content: <SlideVsCode /> },
    { title: 'Projects and virtual environments', content: <SlideProjects /> },
    { title: 'Notebooks and scripts', content: <SlideNotebooksScripts /> },
    { title: 'git and GitHub', content: <SlideGit /> },
    { title: 'All of it, once', content: <SlideAllOfIt /> },
    { title: 'When it breaks', content: <SlideWhenItBreaks /> },
  ],
}
