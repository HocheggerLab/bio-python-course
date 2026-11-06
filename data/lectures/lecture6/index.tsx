import { LectureData } from '@/data/lectures/types'
// Intro — the callback, the data, the question
import { Slide01Recap } from './Slide01Recap'
import { Slide02TheData } from './Slide02TheData'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — the DataFrame
import { Slide04Part1 } from './Slide04Part1'
import { Slide05ReadCsv } from './Slide05ReadCsv'
import { SlideFrameReception, SlideFrameMenu, SlideSeriesReception, SlideSeriesMenu } from './SlideReceptions'
import { Slide07LookFirst } from './Slide07LookFirst'
import { Slide09Quiz1Opener, Slide09Quiz1Q1, Slide09Quiz1Q2, Slide09Quiz1Q3 } from './Slide09Quiz1'
import { Slide10Revision1 } from './Slide10Revision1'
// Close — the lab, the cheat sheet, the recap
import { Slide29InTheLab } from './Slide29InTheLab'
import { Slide30CheatSheet } from './Slide30CheatSheet'
import { Slide31Recap } from './Slide31Recap'
import { SlideFurther } from './SlideFurther'
// The storyline: a bet at the start, five steps to the answer (Part 2), the bet settled at the end
import { SlideTwoBees } from './SlideTwoBees'
import { SlideRoadPart, SlideRoadMap, SlideStep1, SlideGroupByPicture, SlideStep2, SlideStep3, SlideStep4, SlideStep5, SlideFix } from './SlideRoad'
import { SlideBet, SlideBetResult } from './SlideBet'

export const lecture6Data: LectureData = {
  id: 'lecture-6',
  title: 'DataFrames — Who Pollinates Your Dinner?',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Last week you timed it yourself', content: <Slide01Recap /> },
    { title: 'Nine allotments in Brighton', content: <Slide02TheData /> },
    { title: 'Two kinds of bee, one flower', content: <SlideTwoBees /> },
    { title: 'Place your bet', content: <SlideBet /> },
    { title: 'This session — one question, five steps', content: <Slide03ThisSession /> },
    // ── 1 · The DataFrame ──────────────────────────────────
    { title: 'Part 1 — The DataFrame and its columns', content: <Slide04Part1 /> },
    { title: 'One line to open the file', content: <Slide05ReadCsv /> },
    { title: "The DataFrame's reception", content: <SlideFrameReception /> },
    { title: 'What a DataFrame can do', content: <SlideFrameMenu /> },
    { title: 'Each column has its own reception: a Series', content: <SlideSeriesReception /> },
    { title: 'What a Series can do', content: <SlideSeriesMenu /> },
    { title: 'Two odd things are hiding in here', content: <Slide07LookFirst /> },
    { title: 'Quiz — The DataFrame', content: <Slide09Quiz1Opener /> },
    { title: 'Quiz 1 — Its shape', content: <Slide09Quiz1Q1 /> },
    { title: 'Quiz 2 — One column', content: <Slide09Quiz1Q2 /> },
    { title: 'Quiz 3 — Count with a mask', content: <Slide09Quiz1Q3 /> },
    { title: 'Revision — Interrogate the table', content: <Slide10Revision1 /> },
    // ── 2 · Pick and filter ────────────────────────────────
    // Part 2 — the road to the answer
    { title: 'Part 2 — The road to the answer', content: <SlideRoadPart /> },
    { title: 'The map: five steps to the answer', content: <SlideRoadMap /> },
    { title: 'Step 1 — who visits one crop?', content: <SlideStep1 /> },
    { title: 'Fix step 1', content: <SlideFix n={1} /> },
    { title: 'How groupby works', content: <SlideGroupByPicture /> },
    { title: 'Step 2 — every crop at once', content: <SlideStep2 /> },
    { title: 'Fix step 2', content: <SlideFix n={2} /> },
    { title: 'Step 3 — what fraction are bumblebees?', content: <SlideStep3 /> },
    { title: 'Fix step 3', content: <SlideFix n={3} /> },
    { title: 'Step 4 — which crop is top?', content: <SlideStep4 /> },
    { title: 'Fix step 4', content: <SlideFix n={4} /> },
    { title: 'Step 5 — can we trust it?', content: <SlideStep5 /> },
    { title: 'Fix step 5', content: <SlideFix n={5} /> },
    { title: 'How did your bet do?', content: <SlideBetResult /> },
    { title: 'In the Lab — What would you lose?', content: <Slide29InTheLab /> },
    { title: 'The pandas cheat sheet', content: <Slide30CheatSheet /> },
    { title: 'What you can do now', content: <Slide31Recap /> },
    { title: 'Keep going with pandas', content: <SlideFurther /> },
  ],
}
