import { LectureData } from '@/data/lectures/types'
import { Slide01Overview } from './Slide01Overview'
import { Slide02Variables } from './Slide02Variables'
import { Slide03DataTypes } from './Slide03DataTypes'
import { Slide04Operators } from './Slide04Operators'
import { Slide05BooleansAndPrint } from './Slide05BooleansAndPrint'

export const session2Data: LectureData = {
  id: 'session-2',
  title: 'Lab 1 — Session 2: Variables, Data Types & Operators',
  slides: [
    { id: 1, title: 'Session 2 — Recap',                    contentType: 'top', content: <Slide01Overview /> },
    { id: 2, title: 'Variables & Assignment',               contentType: 'top', content: <Slide02Variables /> },
    { id: 3, title: 'Four Core Data Types',                 contentType: 'top', content: <Slide03DataTypes /> },
    { id: 4, title: 'Arithmetic & String Operators',        contentType: 'top', content: <Slide04Operators /> },
    { id: 5, title: 'Comparisons, Booleans & f-strings',    contentType: 'top', content: <Slide05BooleansAndPrint /> },
  ],
}
