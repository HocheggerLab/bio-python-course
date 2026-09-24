import { LectureData } from '@/data/lectures/types'
import { Slide01WhatIsIde } from './Slide01WhatIsIde'
import { Slide02MeetIdes } from './Slide02MeetIdes'
import { Slide03Window } from './Slide03Window'
import { Slide04Workflow } from './Slide04Workflow'
import { Slide05YourTurn } from './Slide05YourTurn'

export const lab3VsCodeData: LectureData = {
  id: 'lab-3-vscode',
  title: 'Lab 3 · Writing code in VS Code',
  slides: [
    { title: "What's an IDE?", content: <Slide01WhatIsIde /> },
    { title: 'Meet the IDEs', content: <Slide02MeetIdes /> },
    { title: 'The VS Code window', content: <Slide03Window /> },
    { title: 'The workflow', content: <Slide04Workflow /> },
    { title: 'Your turn', content: <Slide05YourTurn /> },
  ],
}
