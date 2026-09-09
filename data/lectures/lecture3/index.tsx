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
    { title: 'Recap — Session 2', content: <Slide01Recap /> },
    { title: 'From Three Codons to a Gene', content: <Slide02Hook /> },
    { title: 'This Session — Control Flow', content: <Slide03ThisSession /> },
    // ── Part 1: for loops & the accumulator ────────────────
    { title: 'Your First Loop', content: <Slide04ForLoop /> },
    { title: 'A Running Total', content: <Slide06RunningTotal /> },
    { title: 'Which Genome Is Bigger?', content: <Slide05GenomeReveal /> },
    { title: 'Building a New List', content: <Slide07BuildList /> },
    { title: 'TIY — Total Incubation Time', content: <Slide08TIYIncubation /> },
    // ── Part 2: if / elif / else ───────────────────────────
    { title: 'Making a Decision', content: <Slide09Decision /> },
    { title: 'Two Ways to Go — if / else', content: <Slide10IfElse /> },
    { title: 'Many Branches — if / elif / else', content: <Slide11Elif /> },
    { title: 'Decisions Inside a Loop', content: <Slide12DecisionsInLoop /> },
    { title: 'The Program as a Flowchart', content: <Slide12bProgramFlow /> },
    { title: 'TIY — Ready to Translate?', content: <Slide13TIYReadingFrame /> },
    // ── Part 3: strings → range → translation capstone ─────
    { title: 'A String Is a Sequence — Recap', content: <Slide13aStringRecap /> },
    { title: 'Why We Need range()', content: <Slide13bRange /> },
    { title: 'Carving Out Codons', content: <Slide14CarvingCodons /> },
    { title: 'Building the Protein', content: <Slide14aBuildingProtein /> },
    { title: 'Stop and Go — break', content: <Slide15StopAndGo /> },
    // ── Finale: phiX174 overlapping ORFs — reveal, then build it ──
    { title: 'Two Proteins, One Sequence', content: <Slide16Finale /> },
    { title: 'TIY — Two Frames, Two Proteins', content: <Slide15aTIYTwoFrames /> },
    // ── Recap & outlook ────────────────────────────────────
    { title: 'Recap — Session 3', content: <Slide17Recap /> },
    { title: "What's Next — Session 4", content: <Slide18Outlook /> },
  ],
}
