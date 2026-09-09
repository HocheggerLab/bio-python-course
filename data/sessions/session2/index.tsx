import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02Variables } from './Slide02Variables'
import { Slide03PrintFStrings } from './Slide03PrintFStrings'
import { Slide04Launch } from './Slide04Launch'

export const session2Data: LectureData = {
  id: 'session-2',
  title: 'Lab 1 — Session 2: Variables & print',
  slides: [
    { title: 'Session 2 — Variables & print', content: <Slide01Overview /> },
    { title: 'Variables & Assignment', content: <Slide02Variables /> },
    { title: 'Showing Results — print & f-strings', content: <Slide03PrintFStrings /> },
    { title: 'Now open the notebook', content: <Slide04Launch /> },
  ],
}
