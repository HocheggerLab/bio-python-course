import { LectureData } from '@/data/lectures/types'
// Intro — the callback, the data, the plan
import { Slide01Recap } from './Slide01Recap'
import { Slide02TheData } from './Slide02TheData'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — fig and ax
import { Slide04Part1 } from './Slide04Part1'
import { Slide05ThousandWords } from './Slide05ThousandWords'
import { Slide06Anatomy } from './Slide06Anatomy'
import { Slide07EmptyFigure } from './Slide07EmptyFigure'
import { Slide08AddData } from './Slide08AddData'
import { Slide09Labels } from './Slide09Labels'
import { Slide10WhoOwnsWhat } from './Slide10WhoOwnsWhat'
import { Slide11PollLegend } from './Slide11PollLegend'
import { Slide13Bookend } from './Slide13Bookend'
// Closing recall block — moves to the end of the lecture as parts 2 and 3 land
import { Slide14RecallTitle } from './Slide14RecallTitle'

export const lecture7Data: LectureData = {
  id: 'lecture-7',
  title: 'Plotting — Making Data Visible',
  slides: [
    { title: 'Last week you asked the table', content: <Slide01Recap /> },
    { title: 'DepMap — what a cancer cell needs', content: <Slide02TheData /> },
    { title: 'This session — three moves', content: <Slide03ThisSession /> },

    { title: 'Part 1 — One figure, two objects', content: <Slide04Part1 /> },
    { title: 'A figure is worth a thousand numbers', content: <Slide05ThousandWords /> },
    { title: 'The figure and the axes', content: <Slide06Anatomy /> },
    { title: 'Step 1 — an empty figure', content: <Slide07EmptyFigure /> },
    { title: 'Step 2 — put data on it', content: <Slide08AddData /> },
    { title: 'Step 3 — say what it is', content: <Slide09Labels /> },
    { title: 'Who owns what', content: <Slide10WhoOwnsWhat /> },
    { title: 'Your turn — fix the legend', content: <Slide11PollLegend /> },
    { title: 'You can now read every line', content: <Slide13Bookend /> },

    { title: 'Recall — who owns the title?', content: <Slide14RecallTitle /> },
  ],
}
