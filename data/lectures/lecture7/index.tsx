import { LectureData } from '@/data/lectures/types'
// A one-hour lecture (Nov 2026): a 15-minute tour of matplotlib, a 30-minute
// DepMap exploration ("which genes does a cancer need?"), then 5 minutes on the
// final project. Slides cut from the earlier two-hour version (step-by-step
// build, histogram, grouped bars, aesthetics, recall polls) are still in this
// folder, just not in the deck.

// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02TheData } from './Slide02TheData'
import { Slide04ThisSession } from './Slide04ThisSession'
// Part 1: a quick tour of matplotlib (~15 min)
import { SlideQuickTour } from './SlideQuickTour'
import { Slide06Anatomy } from './Slide06Anatomy'
import { Slide09Labels } from './Slide09Labels'
import { Slide13PlotTypeMap } from './Slide13PlotTypeMap'
import { Slide15Scatter } from './Slide15Scatter'
import { Slide17Boxplot } from './Slide17Boxplot'
import { Slide18TwoPanels } from './Slide18TwoPanels'
// Part 2: which genes does a cancer need? (~30 min)
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

    { title: 'Part 1 — A quick tour of matplotlib', content: <SlideQuickTour /> },
    { title: 'The figure and the axes', content: <Slide06Anatomy /> },
    { title: 'Data and labels', content: <Slide09Labels /> },
    { title: 'Essential plot types', content: <Slide13PlotTypeMap /> },
    { title: 'Two columns — ax.scatter()', content: <Slide15Scatter /> },
    { title: 'A mean hides the spread', content: <Slide17Boxplot /> },
    { title: 'Two panels — plt.subplots(1, 2)', content: <Slide18TwoPanels /> },

    { title: 'Part 2 — Which genes does a cancer need?', content: <SlidePart4 /> },
    { title: 'Place your bet', content: <SlideBetGene /> },
    { title: 'The mean of every gene in every cancer', content: <SlideMeans /> },
    { title: 'The answer, as a bar chart', content: <SlideNaive /> },
    { title: 'Four cancers, the same answer', content: <SlideSameEverywhere /> },
    { title: 'Skin against the rest', content: <SlideHereVsElsewhere /> },
    { title: 'A number for selectivity', content: <SlideSelective /> },
    { title: 'Four cancers, four answers', content: <SlideFourCancers /> },
    { title: 'Show every cell line', content: <SlideEveryLine /> },

    { title: 'Your final project', content: <SlideProject /> },
    { title: 'What you can do now', content: <SlideCloseL7 /> },
  ],
}
