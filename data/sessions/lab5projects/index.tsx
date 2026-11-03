import { LectureData } from '@/data/lectures/types'
import { Slide01ColabLied } from './Slide01ColabLied'
import { Slide02Environments } from './Slide02Environments'
import { Slide03UvStart } from './Slide03UvStart'
import { Slide04WhatYouGot } from './Slide04WhatYouGot'
import { Slide05PyVsIpynb } from './Slide05PyVsIpynb'
import { Slide06OpenInVsCode } from './Slide06OpenInVsCode'
import { Slide07GetTheFiles } from './Slide07GetTheFiles'
import { Slide08YourTurn } from './Slide08YourTurn'
import { Slide09WhenItBreaks } from './Slide09WhenItBreaks'

export const lab5ProjectsData: LectureData = {
  id: 'lab-5-projects',
  title: 'Lab 5 · Projects & Environments',
  slides: [
    { title: 'Colab has been hiding something', content: <Slide01ColabLied /> },
    { title: 'Where packages come from', content: <Slide02Environments /> },
    { title: 'One command, a whole project', content: <Slide03UvStart /> },
    { title: 'What you got', content: <Slide04WhatYouGot /> },
    { title: 'Notebooks and scripts', content: <Slide05PyVsIpynb /> },
    { title: 'Open it in VS Code', content: <Slide06OpenInVsCode /> },
    { title: "Get this week's notebooks", content: <Slide07GetTheFiles /> },
    { title: 'Your turn — locally', content: <Slide08YourTurn /> },
    { title: 'When it breaks', content: <Slide09WhenItBreaks /> },
  ],
}
