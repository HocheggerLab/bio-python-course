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
    { id: 1,  title: 'Last week you timed it yourself',   contentType: 'center', content: <Slide01Recap /> },
    { id: 2,  title: 'Nine allotments in Brighton',       contentType: 'center', content: <Slide02TheData /> },
    { id: 3,  title: 'This session — three moves',        contentType: 'center', content: <Slide04ThisSession /> },

    { id: 4,  title: 'Part 1 — A column with a name',     contentType: 'center', content: <Slide05Part1 /> },
    { id: 5,  title: 'One line to open the file',         contentType: 'center', content: <Slide06ReadCsv /> },
    { id: 6,  title: 'What is actually in there',         contentType: 'center', content: <Slide07WhatsInIt /> },
    { id: 7,  title: 'A single column is a Series',       contentType: 'center', content: <Slide08Series /> },
    { id: 8,  title: 'Try it Yourself — the table',       contentType: 'center', content: <Slide09TIYTable /> },

    { id: 9, title: 'Part 2 — Asking questions',         contentType: 'center', content: <Slide10Part2 /> },
    { id: 10, title: 'Take only the columns you want',    contentType: 'center', content: <Slide11SelectColumns /> },
    { id: 11, title: 'Keep only the rows you care about', contentType: 'center', content: <Slide12Filter /> },
    { id: 12, title: 'How much effort went where?',       contentType: 'center', content: <Slide13ValueCounts /> },
    { id: 13, title: 'Try it Yourself — filter & count',  contentType: 'center', content: <Slide14TIYFilter /> },

    { id: 14, title: 'Part 3 — One line, one answer',     contentType: 'center', content: <Slide15Part3 /> },
    { id: 15, title: 'groupby — split, add up, combine',  contentType: 'center', content: <Slide16GroupBy /> },
    { id: 16, title: 'Read the last two rows',            contentType: 'center', content: <Slide17TheAnswer /> },
    { id: 17, title: 'Why a bean is harder work',         contentType: 'center', content: <Slide18WhyBeans /> },
    { id: 18, title: '"Bumblebees" is not one thing',     contentType: 'center', content: <Slide19Species /> },
    { id: 19, title: 'Try it Yourself — group by',        contentType: 'center', content: <Slide20TIYGroupBy /> },
    { id: 20, title: 'What we did slightly wrong',        contentType: 'center', content: <Slide21Honesty /> },
    { id: 21, title: 'What you can do now',               contentType: 'center', content: <Slide22Recap /> },
  ],
}
