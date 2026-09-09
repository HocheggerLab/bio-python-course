import { LectureData } from '@/data/lectures/types'
// Intro — the callback, the data, the question
import { Slide01Recap } from './Slide01Recap'
import { Slide02TheData } from './Slide02TheData'
import { Slide04ThisSession } from './Slide04ThisSession'
// Part 1 — a column is an array with a name
import { Slide05Part1 } from './Slide05Part1'
import { Slide06ReadCsv } from './Slide06ReadCsv'
import { Slide07WhatsInIt } from './Slide07WhatsInIt'
import { Slide08Series } from './Slide08Series'
import { Slide09TIYTable } from './Slide09TIYTable'
// Part 2 — asking a table questions
import { Slide10Part2 } from './Slide10Part2'
import { Slide11SelectColumns } from './Slide11SelectColumns'
import { Slide12Filter } from './Slide12Filter'
import { Slide13ValueCounts } from './Slide13ValueCounts'
import { Slide14TIYFilter } from './Slide14TIYFilter'
// Part 3 — groupby, and the answer
import { Slide15Part3 } from './Slide15Part3'
import { Slide16GroupBy } from './Slide16GroupBy'
import { Slide17TheAnswer } from './Slide17TheAnswer'
import { Slide18WhyBeans } from './Slide18WhyBeans'
import { Slide19Species } from './Slide19Species'
import { Slide20TIYGroupBy } from './Slide20TIYGroupBy'
import { Slide21Honesty } from './Slide21Honesty'
import { Slide22Recap } from './Slide22Recap'

export const lecture6Data: LectureData = {
  id: 'lecture-6',
  title: 'DataFrames — Who Pollinates Your Dinner?',
  slides: [
    { title: 'Last week you timed it yourself', content: <Slide01Recap /> },
    { title: 'Nine allotments in Brighton', content: <Slide02TheData /> },
    { title: 'This session — three moves', content: <Slide04ThisSession /> },

    { title: 'Part 1 — A column with a name', content: <Slide05Part1 /> },
    { title: 'One line to open the file', content: <Slide06ReadCsv /> },
    { title: 'What is actually in there', content: <Slide07WhatsInIt /> },
    { title: 'A single column is a Series', content: <Slide08Series /> },
    { title: 'Try it Yourself — the table', content: <Slide09TIYTable /> },

    { title: 'Part 2 — Asking questions', content: <Slide10Part2 /> },
    { title: 'Take only the columns you want', content: <Slide11SelectColumns /> },
    { title: 'Keep only the rows you care about', content: <Slide12Filter /> },
    { title: 'How much effort went where?', content: <Slide13ValueCounts /> },
    { title: 'Try it Yourself — filter & count', content: <Slide14TIYFilter /> },

    { title: 'Part 3 — One line, one answer', content: <Slide15Part3 /> },
    { title: 'groupby — split, add up, combine', content: <Slide16GroupBy /> },
    { title: 'Read the last two rows', content: <Slide17TheAnswer /> },
    { title: 'Why a bean is harder work', content: <Slide18WhyBeans /> },
    { title: '"Bumblebees" is not one thing', content: <Slide19Species /> },
    { title: 'Try it Yourself — group by', content: <Slide20TIYGroupBy /> },
    { title: 'What we did slightly wrong', content: <Slide21Honesty /> },
    { title: 'What you can do now', content: <Slide22Recap /> },
  ],
}
