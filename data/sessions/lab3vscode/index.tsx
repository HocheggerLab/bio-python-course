import { LectureData } from '@/data/lectures/types'
import { Slide01WhatIsIde } from './Slide01WhatIsIde'
import { Slide02MeetIdes } from './Slide02MeetIdes'
import { Slide03Window } from './Slide03Window'
import { Slide04Setup } from './Slide04Setup'
import { Slide05FirstRun } from './Slide05FirstRun'
import { Slide06YourTurn } from './Slide06YourTurn'

export const lab3VsCodeData: LectureData = {
  id: 'lab-3-vscode',
  title: 'Lab 3 · Writing code in VS Code',
  slides: [
    { title: "What's an IDE?", content: <Slide01WhatIsIde /> },
    { title: 'Meet the IDEs', content: <Slide02MeetIdes /> },
    { title: 'The VS Code window', content: <Slide03Window /> },
    { title: 'Set up', content: <Slide04Setup /> },
    { title: 'Your first run', content: <Slide05FirstRun /> },
    { title: 'Your turn', content: <Slide06YourTurn /> },
  ],
}
