import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02Variables } from './Slide02Variables'
import { Slide03PrintFStrings } from './Slide03PrintFStrings'

export const session2Data: LectureData = {
  id: 'session-2',
  title: 'Lab 1 — Session 2: Variables & print',
  slides: [
    { id: 1, title: 'Session 2 — Variables & print',   contentType: 'top', content: <Slide01Overview /> },
    { id: 2, title: 'Variables & Assignment',          contentType: 'top', content: <Slide02Variables /> },
    { id: 3, title: 'Showing Results — print & f-strings', contentType: 'top', content: <Slide03PrintFStrings /> },
  ],
}
