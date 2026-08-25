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
    { id: 1, title: "What's an IDE?",      contentType: 'center', content: <Slide01WhatIsIde /> },
    { id: 2, title: 'Meet the IDEs',       contentType: 'center', content: <Slide02MeetIdes /> },
    { id: 3, title: 'The VS Code window',  contentType: 'center', content: <Slide03Window /> },
    { id: 4, title: 'The workflow',        contentType: 'center', content: <Slide04Workflow /> },
    { id: 5, title: 'Your turn',           contentType: 'center', content: <Slide05YourTurn /> },
  ],
}
