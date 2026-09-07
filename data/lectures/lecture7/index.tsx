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
import { Slide12PollLegendResults } from './Slide12PollLegendResults'
import { Slide13Bookend } from './Slide13Bookend'
// Closing recall block — moves to the end of the lecture as parts 2 and 3 land
import { Slide14RecallTitle } from './Slide14RecallTitle'
import { Slide15RecallTitleResults } from './Slide15RecallTitleResults'

export const lecture7Data: LectureData = {
  id: 'lecture-7',
  title: 'Plotting — Making Data Visible',
  slides: [
    { id: 1,  title: 'Last week you asked the table',        contentType: 'center', content: <Slide01Recap /> },
    { id: 2,  title: 'DepMap — what a cancer cell needs',    contentType: 'center', content: <Slide02TheData /> },
    { id: 3,  title: 'This session — three moves',           contentType: 'center', content: <Slide03ThisSession /> },

    { id: 4,  title: 'Part 1 — One figure, two objects',     contentType: 'center', content: <Slide04Part1 /> },
    { id: 5,  title: 'A figure is worth a thousand numbers', contentType: 'center', content: <Slide05ThousandWords /> },
    { id: 6,  title: 'The figure and the axes',              contentType: 'center', content: <Slide06Anatomy /> },
    { id: 7,  title: 'Step 1 — an empty figure',             contentType: 'center', content: <Slide07EmptyFigure /> },
    { id: 8,  title: 'Step 2 — put data on it',              contentType: 'center', content: <Slide08AddData /> },
    { id: 9,  title: 'Step 3 — say what it is',              contentType: 'center', content: <Slide09Labels /> },
    { id: 10, title: 'Who owns what',                        contentType: 'center', content: <Slide10WhoOwnsWhat /> },
    { id: 11, title: 'Your turn — fix the legend',           contentType: 'center', content: <Slide11PollLegend /> },
    { id: 12, title: 'Poll results',                         contentType: 'center', content: <Slide12PollLegendResults />, teacher: true },
    { id: 13, title: 'You can now read every line',          contentType: 'center', content: <Slide13Bookend /> },

    { id: 14, title: 'Recall — who owns the title?',         contentType: 'center', content: <Slide14RecallTitle /> },
    { id: 15, title: 'Recall results',                       contentType: 'center', content: <Slide15RecallTitleResults />, teacher: true },
  ],
}
