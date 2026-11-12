import { LectureData } from '@/data/lectures/types'
// A one-hour lecture (Nov 2026) in three parts, each ending in a three-question
// quiz: how a figure shows data (~12 min), matplotlib (~14 min), and a DepMap
// exploration, "which genes does a cancer need?" (~22 min); then 5 minutes on
// the final project. Slides cut from the earlier two-hour version are still in
// this folder, just not in the deck.

// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02TheData } from './Slide02TheData'
import { Slide04ThisSession } from './Slide04ThisSession'
// Part 1: how a figure shows data
import { SlideBasicsSection } from './SlideBasicsSection'
import { Slide03ThousandWords } from './Slide03ThousandWords'
import { SlideDataKinds } from './SlideDataKinds'
import { Slide13PlotTypeMap } from './Slide13PlotTypeMap'
import { Slide20AestheticsMap } from './Slide20AestheticsMap'
import { SlideAestheticsMatch } from './SlideAestheticsMatch'
// Part 2: matplotlib
import { SlideApiSection } from './SlideApiSection'
import { Slide06Anatomy } from './Slide06Anatomy'
import { Slide09Labels } from './Slide09Labels'
import { Slide15Scatter } from './Slide15Scatter'
import { Slide17Boxplot } from './Slide17Boxplot'
import { Slide18TwoPanels } from './Slide18TwoPanels'
import { Slide21Colour } from './Slide21Colour'
// Quizzes
import {
  SlideQuiz1Opener, SlideQuiz1Q1, SlideQuiz1Q2, SlideQuiz1Q3,
  SlideQuiz2Opener, SlideQuiz2Q1, SlideQuiz2Q2, SlideQuiz2Q3,
  SlideQuiz3Opener, SlideQuiz3Q1, SlideQuiz3Q2, SlideQuiz3Q3,
} from './SlideQuizzes'
// Part 3: which genes does a cancer need?
import { SlidePart4 } from './SlidePart4'
import { SlideBetGene } from './SlideBetGene'
import { SlideMeans } from './SlideMeans'
import { SlideNaive } from './SlideNaive'
import { SlideSameEverywhere } from './SlideSameEverywhere'
import { SlideHereVsElsewhere } from './SlideHereVsElsewhere'
import { SlideSelective } from './SlideSelective'
import { SlideFourCancers } from './SlideFourCancers'
import { SlideEveryLine } from './SlideEveryLine'
// The final project (~5 min), then close
import { SlideProject } from './SlideProject'
import { SlideCloseL7 } from './SlideCloseL7'

export const lecture7Data: LectureData = {
  id: 'lecture-7',
  title: 'Plotting — Making Data Visible',
  slides: [
    { title: 'Last week you asked the table', content: <Slide01Recap /> },
    { title: 'Today’s data — DepMap', content: <Slide02TheData /> },
    { title: 'This session', content: <Slide04ThisSession /> },

    { title: 'Part 1 — How a figure shows data', content: <SlideBasicsSection /> },
    { title: 'A figure is worth a thousand numbers', content: <Slide03ThousandWords /> },
    { title: 'Two kinds of data', content: <SlideDataKinds /> },
    { title: 'Which plot? Ask the data', content: <Slide13PlotTypeMap /> },
    { title: 'Visual aesthetics', content: <Slide20AestheticsMap /> },
    { title: 'Match the aesthetic to the data', content: <SlideAestheticsMatch /> },
    { title: 'Quiz 1', content: <SlideQuiz1Opener /> },
    { title: 'Quiz 1 — What kind of data?', content: <SlideQuiz1Q1 /> },
    { title: 'Quiz 1 — Which aesthetic?', content: <SlideQuiz1Q2 /> },
    { title: 'Quiz 1 — Which plot?', content: <SlideQuiz1Q3 /> },

    { title: 'Part 2 — matplotlib', content: <SlideApiSection /> },
    { title: 'The figure and the axes', content: <Slide06Anatomy /> },
    { title: 'Data and labels', content: <Slide09Labels /> },
    { title: 'Two columns — ax.scatter()', content: <Slide15Scatter /> },
    { title: 'A mean hides the spread', content: <Slide17Boxplot /> },
    { title: 'Two panels — plt.subplots(1, 2)', content: <Slide18TwoPanels /> },
    { title: 'Colour — a third column', content: <Slide21Colour /> },
    { title: 'Quiz 2', content: <SlideQuiz2Opener /> },
    { title: 'Quiz 2 — Who owns the title?', content: <SlideQuiz2Q1 /> },
    { title: 'Quiz 2 — Fix the legend', content: <SlideQuiz2Q2 /> },
    { title: 'Quiz 2 — Two panels', content: <SlideQuiz2Q3 /> },

    { title: 'Part 3 — Which genes does a cancer need?', content: <SlidePart4 /> },
    { title: 'Place your bet', content: <SlideBetGene /> },
    { title: 'The mean of every gene in every cancer', content: <SlideMeans /> },
    { title: 'The answer, as a bar chart', content: <SlideNaive /> },
    { title: 'Four cancers, the same answer', content: <SlideSameEverywhere /> },
    { title: 'Skin against the rest', content: <SlideHereVsElsewhere /> },
    { title: 'A number for selectivity', content: <SlideSelective /> },
    { title: 'Four cancers, four answers', content: <SlideFourCancers /> },
    { title: 'Show every cell line', content: <SlideEveryLine /> },
    { title: 'Quiz 3', content: <SlideQuiz3Opener /> },
    { title: 'Quiz 3 — Essential everywhere', content: <SlideQuiz3Q1 /> },
    { title: 'Quiz 3 — The better question', content: <SlideQuiz3Q2 /> },
    { title: 'Quiz 3 — Show every cell line', content: <SlideQuiz3Q3 /> },

    { title: 'Your final project', content: <SlideProject /> },
    { title: 'What you can do now', content: <SlideCloseL7 /> },
  ],
}
