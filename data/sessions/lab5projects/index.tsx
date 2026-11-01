import { LectureData } from '@/data/lectures/types'
import { Slide01ColabLied } from './Slide01ColabLied'
import { Slide02Environments } from './Slide02Environments'
import { Slide03UvStart } from './Slide03UvStart'
import { Slide04WhatYouGot } from './Slide04WhatYouGot'
import { Slide05OpenInVsCode } from './Slide05OpenInVsCode'
import { Slide06GetTheFiles } from './Slide06GetTheFiles'
import { Slide07YourTurn } from './Slide07YourTurn'
import { Slide08WhenItBreaks } from './Slide08WhenItBreaks'

export const lab5ProjectsData: LectureData = {
  id: 'lab-5-projects',
  title: 'Lab 5 · Projects & Environments',
  slides: [
    { title: 'Colab has been hiding something', content: <Slide01ColabLied /> },
    { title: 'Where packages come from', content: <Slide02Environments /> },
    { title: 'One command, a whole project', content: <Slide03UvStart /> },
    { title: 'What you got', content: <Slide04WhatYouGot /> },
    { title: 'Open it in VS Code', content: <Slide05OpenInVsCode /> },
    { title: "Get this week's notebooks", content: <Slide06GetTheFiles /> },
    { title: 'Your turn — locally', content: <Slide07YourTurn /> },
    { title: 'When it breaks', content: <Slide08WhenItBreaks /> },
  ],
}
