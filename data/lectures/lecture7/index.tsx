import { LectureData } from '@/data/lectures/types'
// Intro — the callback, the data, the plan
import { Slide01Recap } from './Slide01Recap'
import { Slide02TheData } from './Slide02TheData'
import { Slide03ThousandWords } from './Slide03ThousandWords'
import { Slide04ThisSession } from './Slide04ThisSession'
// Part 1 — fig and ax
import { Slide05Part1 } from './Slide05Part1'
import { Slide06Anatomy } from './Slide06Anatomy'
import { Slide07EmptyFigure } from './Slide07EmptyFigure'
import { Slide08AddData } from './Slide08AddData'
import { Slide09Labels } from './Slide09Labels'
import { Slide10WhoOwnsWhat } from './Slide10WhoOwnsWhat'
import { Slide11TIYGrowthCurve } from './Slide11TIYGrowthCurve'
// Part 2 — more than one panel, and a method per question
import { Slide12Part2 } from './Slide12Part2'
import { Slide13PlotTypeMap } from './Slide13PlotTypeMap'
import { Slide14Histogram } from './Slide14Histogram'
import { Slide15Scatter } from './Slide15Scatter'
import { Slide16GroupedBars } from './Slide16GroupedBars'
import { Slide17Boxplot } from './Slide17Boxplot'
import { Slide18TwoPanels } from './Slide18TwoPanels'
// Part 3 — encoding more than two columns
import { Slide19Part3 } from './Slide19Part3'
import { Slide20AestheticsMap } from './Slide20AestheticsMap'
import { Slide21Colour } from './Slide21Colour'
// Closing question block — sits after the teaching, so an overrun eats a poll
// rather than a step of the build-up.
import { Slide22PollLegend } from './Slide22PollLegend'
import { Slide23RecallTitle } from './Slide23RecallTitle'
import { Slide24RecallDataTypes } from './Slide24RecallDataTypes'
import { Slide25RecallPlotChoice } from './Slide25RecallPlotChoice'

export const lecture7Data: LectureData = {
  id: 'lecture-7',
  title: 'Plotting — Making Data Visible',
  slides: [
    { title: 'Last week you asked the table', content: <Slide01Recap /> },
    { title: 'Today’s data — DepMap', content: <Slide02TheData /> },
    { title: 'A figure is worth a thousand numbers', content: <Slide03ThousandWords /> },
    { title: 'This session — three moves', content: <Slide04ThisSession /> },

    { title: 'Part 1 — One figure, two objects', content: <Slide05Part1 /> },
    { title: 'The figure and the axes', content: <Slide06Anatomy /> },
    { title: 'Step 1 — an empty figure', content: <Slide07EmptyFigure /> },
    { title: 'Step 2 — put data on it', content: <Slide08AddData /> },
    { title: 'Step 3 — add labels', content: <Slide09Labels /> },
    { title: 'Who owns what', content: <Slide10WhoOwnsWhat /> },
    { title: 'Your turn — the label that never appears', content: <Slide11TIYGrowthCurve /> },

    { title: 'Part 2 — Which plot? Ask the data', content: <Slide12Part2 /> },
    { title: 'Essential plot types', content: <Slide13PlotTypeMap /> },
    { title: 'One column — ax.hist()', content: <Slide14Histogram /> },
    { title: 'Two columns — ax.scatter()', content: <Slide15Scatter /> },
    { title: 'One per group — groupby + ax.barh()', content: <Slide16GroupedBars /> },
    { title: 'A mean hides the spread', content: <Slide17Boxplot /> },
    { title: 'Two panels — plt.subplots(1, 2)', content: <Slide18TwoPanels /> },


    { title: 'Part 3 — Aesthetics, one more dimension', content: <Slide19Part3 /> },
    { title: 'Visual aesthetics', content: <Slide20AestheticsMap /> },
    { title: 'Colour — a third column', content: <Slide21Colour /> },

    { title: 'Question 1 — fix the legend', content: <Slide22PollLegend /> },
    { title: 'Question 2 — who owns the title?', content: <Slide23RecallTitle /> },
    { title: 'Question 3 — what kind of data?', content: <Slide24RecallDataTypes /> },
    { title: 'Question 4 — which plot?', content: <Slide25RecallPlotChoice /> },
  ],
}
