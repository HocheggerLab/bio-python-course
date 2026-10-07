import { LectureData } from '@/data/lectures/types'
// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02Hook } from './Slide02Hook'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — for loops & the accumulator pattern
import { Slide04ForLoop } from './Slide04ForLoop'
import { Slide06GenomeReveal } from './Slide06GenomeReveal'
import { Slide05RunningTotal } from './Slide05RunningTotal'
import { Slide07BuildList } from './Slide07BuildList'
import {
  Slide08IncubationQuizOpener,
  Slide08IncubationQ1,
  Slide08IncubationQ2,
  Slide08IncubationQ3,
  Slide08IncubationQ4,
  Slide08IncubationQ5,
} from './Slide08IncubationQuiz'
import { Slide08RevisionIncubation } from './Slide08RevisionIncubation'
// Part 2 — if / elif / else / looping dictionaries
import { Slide09Decision } from './Slide09Decision'
import { Slide10IfElse } from './Slide10IfElse'
import { Slide11Elif } from './Slide11Elif'
import { Slide12DecisionsInLoop } from './Slide12DecisionsInLoop'
import { Slide13ProgramFlow } from './Slide13ProgramFlow'
import { Slide14LoopsForDictionaries } from './Slide14LoopsForDictionaries'
import {
  Slide15ReadingFrameQuizOpener,
  Slide15ReadingFrameQ1,
  Slide15ReadingFrameQ2,
  Slide15ReadingFrameQ3,
  Slide15ReadingFrameQ4,
  Slide15ReadingFrameQ5,
} from './Slide15ReadingFrameQuiz'
import { Slide15RevisionReadingFrame } from './Slide15RevisionReadingFrame'
// Part 3 — strings, range, and the translation capstone
import { Slide16StringRecap } from './Slide16StringRecap'
import { Slide17Range } from './Slide17Range'
import { Slide18CarvingCodons } from './Slide18CarvingCodons'
import { Slide19BuildingProtein } from './Slide19BuildingProtein'
import { Slide20StopAndGo } from './Slide20StopAndGo'
import {
  Slide22TwoFramesQuizOpener,
  Slide22TwoFramesQ1,
  Slide22TwoFramesQ2,
  Slide22TwoFramesQ3,
  Slide22TwoFramesQ4,
  Slide22TwoFramesQ5,
} from './Slide22TwoFramesQuiz'
import { Slide22RevisionTwoFrames } from './Slide22RevisionTwoFrames'
// Finale
import { Slide21Finale } from './Slide21Finale'
// Recap & outlook
import { Slide23Recap } from './Slide23Recap'
import { Slide24Outlook } from './Slide24Outlook'

export const lecture3Data: LectureData = {
  id: 'lecture-3',
  title: 'Control Flow: Teaching a Program to Run Itself',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Recap — Session 2', content: <Slide01Recap /> },
    { title: 'From Three Codons to a Gene', content: <Slide02Hook /> },
    { title: 'This Session — Control Flow', content: <Slide03ThisSession /> },
    // ── Part 1: for loops & the accumulator ────────────────
    { title: 'Your First Loop', content: <Slide04ForLoop /> },
    { title: 'A Running Total', content: <Slide05RunningTotal /> },
    { title: 'Which Genome Is Bigger?', content: <Slide06GenomeReveal /> },
    { title: 'Building a New List', content: <Slide07BuildList /> },
    { title: 'Quiz — Total incubation time, step by step', content: <Slide08IncubationQuizOpener /> },
    { title: 'Quiz 1 — Start the loop', content: <Slide08IncubationQ1 /> },
    { title: 'Quiz 2 — Days to minutes', content: <Slide08IncubationQ2 /> },
    { title: 'Quiz 3 — Collect the results', content: <Slide08IncubationQ3 /> },
    { title: 'Quiz 4 — The running total', content: <Slide08IncubationQ4 /> },
    { title: 'Quiz 5 — The grand total', content: <Slide08IncubationQ5 /> },
    { title: 'Revision — Total Incubation Time', content: <Slide08RevisionIncubation /> },
    // ── Part 2: if / elif / else ───────────────────────────
    { title: 'Making a Decision', content: <Slide09Decision /> },
    { title: 'Two Ways to Go — if / else', content: <Slide10IfElse /> },
    { title: 'Many Branches — if / elif / else', content: <Slide11Elif /> },
    { title: 'Decisions Inside a Loop', content: <Slide12DecisionsInLoop /> },
    { title: 'The Program as a Flowchart', content: <Slide13ProgramFlow /> },
    { title: 'Looping Through a Dictionary', content: <Slide14LoopsForDictionaries /> },
    { title: 'Quiz — Ready to translate?, step by step', content: <Slide15ReadingFrameQuizOpener /> },
    { title: 'Quiz 1 — The remainder', content: <Slide15ReadingFrameQ1 /> },
    { title: 'Quiz 2 — Loop through the dictionary', content: <Slide15ReadingFrameQ2 /> },
    { title: 'Quiz 3 — Test the length', content: <Slide15ReadingFrameQ3 /> },
    { title: 'Quiz 4 — Collect the names', content: <Slide15ReadingFrameQ4 /> },
    { title: 'Quiz 5 — How many are ready?', content: <Slide15ReadingFrameQ5 /> },
    { title: 'Revision — Ready to Translate?', content: <Slide15RevisionReadingFrame /> },
    // ── Part 3: strings → range → translation capstone ─────
    { title: 'A String Is a Sequence — Recap', content: <Slide16StringRecap /> },
    { title: 'Why We Need range()', content: <Slide17Range /> },
    { title: 'Carving Out Codons', content: <Slide18CarvingCodons /> },
    { title: 'Building the Protein', content: <Slide19BuildingProtein /> },
    { title: 'Stop and Go — break', content: <Slide20StopAndGo /> },
    // ── Finale: phiX174 overlapping ORFs — reveal, then build it ──
    { title: 'Two Proteins, One Sequence', content: <Slide21Finale /> },
    { title: 'Quiz — Two frames, step by step', content: <Slide22TwoFramesQuizOpener /> },
    { title: 'Quiz 1 — Codon positions', content: <Slide22TwoFramesQ1 /> },
    { title: 'Quiz 2 — Carve out the codon', content: <Slide22TwoFramesQ2 /> },
    { title: 'Quiz 3 — Look it up', content: <Slide22TwoFramesQ3 /> },
    { title: 'Quiz 4 — Build the protein', content: <Slide22TwoFramesQ4 /> },
    { title: 'Quiz 5 — Shift the frame', content: <Slide22TwoFramesQ5 /> },
    { title: 'Revision — Two Frames, Two Proteins', content: <Slide22RevisionTwoFrames /> },
    // ── Recap & outlook ────────────────────────────────────
    { title: 'Recap — Session 3', content: <Slide23Recap /> },
    { title: "What's Next — Session 4", content: <Slide24Outlook /> },
  ],
}
