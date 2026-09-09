import { LectureData } from '@/data/lectures/types'
// Intro — the callback, the data, the question
import { Slide01Recap } from './Slide01Recap'
import { Slide02TheData } from './Slide02TheData'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — a column is an array with a name
import { Slide04Part1 } from './Slide04Part1'
import { Slide05ReadCsv } from './Slide05ReadCsv'
import { Slide06WhatsInIt } from './Slide06WhatsInIt'
import { Slide07Series } from './Slide07Series'
import { Slide08TIYTable } from './Slide08TIYTable'
// Part 2 — asking a table questions
import { Slide09Part2 } from './Slide09Part2'
import { Slide10SelectColumns } from './Slide10SelectColumns'
import { Slide11Filter } from './Slide11Filter'
import { Slide12ValueCounts } from './Slide12ValueCounts'
import { Slide13TIYFilter } from './Slide13TIYFilter'
// Part 3 — groupby, and the answer
import { Slide14Part3 } from './Slide14Part3'
import { Slide15GroupBy } from './Slide15GroupBy'
import { Slide16TheAnswer } from './Slide16TheAnswer'
import { Slide17WhyBeans } from './Slide17WhyBeans'
import { Slide18Species } from './Slide18Species'
import { Slide19TIYGroupBy } from './Slide19TIYGroupBy'
import { Slide20Honesty } from './Slide20Honesty'
import { Slide21Recap } from './Slide21Recap'

export const lecture6Data: LectureData = {
  id: 'lecture-6',
  title: 'DataFrames — Who Pollinates Your Dinner?',
  slides: [
    { title: 'Last week you timed it yourself', content: <Slide01Recap /> },
    { title: 'Nine allotments in Brighton', content: <Slide02TheData /> },
    { title: 'This session — three moves', content: <Slide03ThisSession /> },

    { title: 'Part 1 — A column with a name', content: <Slide04Part1 /> },
    { title: 'One line to open the file', content: <Slide05ReadCsv /> },
    { title: 'What is actually in there', content: <Slide06WhatsInIt /> },
    { title: 'A single column is a Series', content: <Slide07Series /> },
    { title: 'Try it Yourself — the table', content: <Slide08TIYTable /> },

    { title: 'Part 2 — Asking questions', content: <Slide09Part2 /> },
    { title: 'Take only the columns you want', content: <Slide10SelectColumns /> },
    { title: 'Keep only the rows you care about', content: <Slide11Filter /> },
    { title: 'How much effort went where?', content: <Slide12ValueCounts /> },
    { title: 'Try it Yourself — filter & count', content: <Slide13TIYFilter /> },

    { title: 'Part 3 — One line, one answer', content: <Slide14Part3 /> },
    { title: 'groupby — split, add up, combine', content: <Slide15GroupBy /> },
    { title: 'Read the last two rows', content: <Slide16TheAnswer /> },
    { title: 'Why a bean is harder work', content: <Slide17WhyBeans /> },
    { title: '"Bumblebees" is not one thing', content: <Slide18Species /> },
    { title: 'Try it Yourself — group by', content: <Slide19TIYGroupBy /> },
    { title: 'What we did slightly wrong', content: <Slide20Honesty /> },
    { title: 'What you can do now', content: <Slide21Recap /> },
  ],
}
