import { LectureData } from '@/data/lectures/types'
// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02Hook } from './Slide02Hook'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — for loops & the accumulator pattern
import { Slide04ForLoop } from './Slide04ForLoop'
import { Slide05GenomeReveal } from './Slide05GenomeReveal'
import { Slide06RunningTotal } from './Slide06RunningTotal'
import { Slide07BuildList } from './Slide07BuildList'
import { Slide08TIYIncubation } from './Slide08TIYIncubation'
// Part 2 — if / elif / else
import { Slide09Decision } from './Slide09Decision'
import { Slide10IfElse } from './Slide10IfElse'
import { Slide11Elif } from './Slide11Elif'
import { Slide12DecisionsInLoop } from './Slide12DecisionsInLoop'
import { Slide12bProgramFlow } from './Slide12bProgramFlow'
import { Slide13TIYReadingFrame } from './Slide13TIYReadingFrame'
// Part 3 — strings, range, and the translation capstone
import { Slide13aStringRecap } from './Slide13aStringRecap'
import { Slide13bRange } from './Slide13bRange'
import { Slide14CarvingCodons } from './Slide14CarvingCodons'
import { Slide14aBuildingProtein } from './Slide14aBuildingProtein'
import { Slide15StopAndGo } from './Slide15StopAndGo'
import { Slide15aTIYTwoFrames } from './Slide15aTIYTwoFrames'
// Finale
import { Slide16Finale } from './Slide16Finale'
// Recap & outlook
import { Slide17Recap } from './Slide17Recap'
import { Slide18Outlook } from './Slide18Outlook'

export const lecture3Data: LectureData = {
  id: 'lecture-3',
  title: 'Control Flow: Teaching a Program to Run Itself',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { id: 1, title: 'Recap — Session 2',          contentType: 'top', content: <Slide01Recap /> },
    { id: 2, title: 'From Three Codons to a Gene', contentType: 'top', content: <Slide02Hook /> },
    { id: 3, title: 'This Session — Control Flow', contentType: 'top', content: <Slide03ThisSession /> },
    // ── Part 1: for loops & the accumulator ────────────────
    { id: 4, title: 'Your First Loop',            contentType: 'top', content: <Slide04ForLoop /> },
    { id: 5, title: 'A Running Total',            contentType: 'top', content: <Slide06RunningTotal /> },
    { id: 6, title: 'Which Genome Is Bigger?',    contentType: 'top', content: <Slide05GenomeReveal /> },
    { id: 7, title: 'Building a New List',        contentType: 'top', content: <Slide07BuildList /> },
    { id: 8, title: 'TIY — Total Incubation Time', contentType: 'top', content: <Slide08TIYIncubation /> },
    // ── Part 2: if / elif / else ───────────────────────────
    { id: 9,  title: 'Making a Decision',          contentType: 'top', content: <Slide09Decision /> },
    { id: 10, title: 'Two Ways to Go — if / else', contentType: 'top', content: <Slide10IfElse /> },
    { id: 11, title: 'Many Branches — if / elif / else', contentType: 'top', content: <Slide11Elif /> },
    { id: 12, title: 'Decisions Inside a Loop',    contentType: 'top', content: <Slide12DecisionsInLoop /> },
    { id: 13, title: 'The Program as a Flowchart', contentType: 'top', content: <Slide12bProgramFlow /> },
    { id: 14, title: 'TIY — Ready to Translate?',  contentType: 'top', content: <Slide13TIYReadingFrame /> },
    // ── Part 3: strings → range → translation capstone ─────
    { id: 15, title: 'A String Is a Sequence — Recap', contentType: 'top', content: <Slide13aStringRecap /> },
    { id: 16, title: 'Why We Need range()',        contentType: 'top', content: <Slide13bRange /> },
    { id: 17, title: 'Carving Out Codons',         contentType: 'top', content: <Slide14CarvingCodons /> },
    { id: 18, title: 'Building the Protein',       contentType: 'top', content: <Slide14aBuildingProtein /> },
    { id: 19, title: 'Stop and Go — break',        contentType: 'top', content: <Slide15StopAndGo /> },
    // ── Finale: phiX174 overlapping ORFs — reveal, then build it ──
    { id: 20, title: 'Two Proteins, One Sequence', contentType: 'top', content: <Slide16Finale /> },
    { id: 21, title: 'TIY — Two Frames, Two Proteins', contentType: 'top', content: <Slide15aTIYTwoFrames /> },
    // ── Recap & outlook ────────────────────────────────────
    { id: 22, title: 'Recap — Session 3',          contentType: 'top', content: <Slide17Recap /> },
    { id: 23, title: "What's Next — Session 4",    contentType: 'top', content: <Slide18Outlook /> },
  ],
}
