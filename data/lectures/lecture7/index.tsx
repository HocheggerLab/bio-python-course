import { LectureData } from '@/data/lectures/types'
// A one-hour lecture (Nov 2026), told as a case: "who needs SOX10?", with a
// clue in each part. Part 1, how a figure shows data; Part 2, building a basic
// figure; Part 3, extending it. Each part ends in a three-question quiz. Then
// case closed, the final project, and the close. Slides cut from earlier
// versions (the genome-wide DepMap analysis, the two-hour build) are still in
// this folder, just not in the deck.

// Intro
import { Slide01Recap } from './Slide01Recap'
import { SlideToday } from './SlideToday'
import { SlideDepMapExplained } from './SlideDepMapExplained'
// Part 1: how a figure shows data
import { SlideBasicsSection } from './SlideBasicsSection'
import { Slide03ThousandWords } from './Slide03ThousandWords'
import { SlideDataKinds } from './SlideDataKinds'
import { Slide13PlotTypeMap } from './Slide13PlotTypeMap'
import { Slide20AestheticsMap } from './Slide20AestheticsMap'
import { SlideAestheticsMatch } from './SlideAestheticsMatch'
// Part 2: building a basic figure
import { SlideApiSection } from './SlideApiSection'
import { Slide06Anatomy } from './Slide06Anatomy'
import { Slide09Labels } from './Slide09Labels'
import { SlideHistogramStep } from './SlideHistogramStep'
import { SlideFigureParts } from './SlideFigureParts'
import { SlideAxMethods } from './SlideAxMethods'
// Part 3: extending a basic figure
import { SlideExtendSection } from './SlideExtendSection'
import { Slide15Scatter } from './Slide15Scatter'
import { Slide21Colour } from './Slide21Colour'
import { Slide17Boxplot } from './Slide17Boxplot'
import { SlideEveryLine } from './SlideEveryLine'
import { Slide18TwoPanels } from './Slide18TwoPanels'
import { SlideFinishing } from './SlideFinishing'
// Quizzes
import {
  SlideQuiz1Opener, SlideQuiz1Q1, SlideQuiz1Q2Problem, SlideQuiz1Q2, SlideQuiz1Q3Problem, SlideQuiz1Q3,
  SlideQuiz2Opener, SlideQuiz2Q1, SlideQuiz2Q2, SlideQuiz2Q3,
  SlideQuiz3Opener, SlideQuiz3Q1, SlideQuiz3Q2, SlideQuiz3Q3,
} from './SlideQuizzes'
// Ending
import { SlideCaseClosed } from './SlideCaseClosed'
import { SlideProject } from './SlideProject'
import { SlideCloseL7 } from './SlideCloseL7'

export const lecture7Data: LectureData = {
  id: 'lecture-7',
  title: 'Plotting — Making Data Visible',
  slides: [
    { title: 'Last week you asked the table', content: <Slide01Recap /> },
    { title: 'Today: plotting figures', content: <SlideToday /> },
    { title: 'DepMap: which genes does a cancer need?', content: <SlideDepMapExplained /> },

    { title: 'Part 1 — How a figure shows data', content: <SlideBasicsSection /> },
    { title: 'A figure is worth a thousand numbers', content: <Slide03ThousandWords /> },
    { title: 'Two kinds of data', content: <SlideDataKinds /> },
    { title: 'Which plot? Ask the data', content: <Slide13PlotTypeMap /> },
    { title: 'Visual aesthetics', content: <Slide20AestheticsMap /> },
    { title: 'Match the aesthetic to the data', content: <SlideAestheticsMatch /> },
    { title: 'Quiz 1', content: <SlideQuiz1Opener /> },
    { title: 'Quiz 1 — What kind of data?', content: <SlideQuiz1Q1 /> },
    { title: 'Quiz 1 — The hidden message', content: <SlideQuiz1Q2Problem /> },
    { title: 'Quiz 1 — Fix it: which is clearest?', content: <SlideQuiz1Q2 /> },
    { title: 'Quiz 1 — The wrong kind of plot', content: <SlideQuiz1Q3Problem /> },
    { title: 'Quiz 1 — Fix it: which is clearest?', content: <SlideQuiz1Q3 /> },

    { title: 'Part 2 — Building a basic figure', content: <SlideApiSection /> },
    { title: 'matplotlib has three receptions', content: <Slide06Anatomy /> },
    { title: 'Build your first plot', content: <Slide09Labels /> },
    { title: 'Your first real figure: the SOX10 histogram', content: <SlideHistogramStep /> },
    { title: 'Every part of a figure has a method', content: <SlideFigureParts /> },
    { title: 'The ax plot methods you will use most', content: <SlideAxMethods /> },
    { title: 'Quiz 2', content: <SlideQuiz2Opener /> },
    { title: 'Quiz 2 — fig and ax', content: <SlideQuiz2Q1 /> },
    { title: 'Quiz 2 — Who owns the title?', content: <SlideQuiz2Q2 /> },
    { title: 'Quiz 2 — More detail', content: <SlideQuiz2Q3 /> },

    { title: 'Part 3 — Extending a basic figure', content: <SlideExtendSection /> },
    { title: 'Mark a group — a second ax.scatter()', content: <Slide15Scatter /> },
    { title: 'Colour and a legend', content: <Slide21Colour /> },
    { title: 'Split by group — ax.boxplot()', content: <Slide17Boxplot /> },
    { title: 'Show every cell line', content: <SlideEveryLine /> },
    { title: 'Two panels — plt.subplots(1, 2)', content: <Slide18TwoPanels /> },
    { title: 'Finishing touches', content: <SlideFinishing /> },
    { title: 'Quiz 3', content: <SlideQuiz3Opener /> },
    { title: 'Quiz 3 — Add to the same panel', content: <SlideQuiz3Q1 /> },
    { title: 'Quiz 3 — A grid of panels', content: <SlideQuiz3Q2 /> },
    { title: 'Quiz 3 — Why only skin?', content: <SlideQuiz3Q3 /> },

    { title: 'Case closed', content: <SlideCaseClosed /> },
    { title: 'Your final project', content: <SlideProject /> },
    { title: 'What you can do now', content: <SlideCloseL7 /> },
  ],
}
