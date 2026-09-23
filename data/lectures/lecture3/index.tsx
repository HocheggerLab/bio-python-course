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
import { Slide08TIYIncubation } from './Slide08TIYIncubation'
// Part 2 — if / elif / else / looping dictionaries
import { Slide09Decision } from './Slide09Decision'
import { Slide10IfElse } from './Slide10IfElse'
import { Slide11Elif } from './Slide11Elif'
import { Slide12DecisionsInLoop } from './Slide12DecisionsInLoop'
import { Slide13ProgramFlow } from './Slide13ProgramFlow'
import { Slide14LoopsForDictionaries } from './Slide14LoopsForDictionaries'
import { Slide15TIYReadingFrame } from './Slide15TIYReadingFrame'
// Part 3 — strings, range, and the translation capstone
import { Slide16StringRecap } from './Slide16StringRecap'
import { Slide17Range } from './Slide17Range'
import { Slide18CarvingCodons } from './Slide18CarvingCodons'
import { Slide19BuildingProtein } from './Slide19BuildingProtein'
import { Slide20StopAndGo } from './Slide20StopAndGo'
import { Slide22TIYTwoFrames } from './Slide22TIYTwoFrames'
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
    { title: 'TIY — Total Incubation Time', content: <Slide08TIYIncubation /> },
    // ── Part 2: if / elif / else ───────────────────────────
    { title: 'Making a Decision', content: <Slide09Decision /> },
    { title: 'Two Ways to Go — if / else', content: <Slide10IfElse /> },
    { title: 'Many Branches — if / elif / else', content: <Slide11Elif /> },
    { title: 'Decisions Inside a Loop', content: <Slide12DecisionsInLoop /> },
    { title: 'The Program as a Flowchart', content: <Slide13ProgramFlow /> },
    { title: 'Looping Through a Dictionary', content: <Slide14LoopsForDictionaries /> },
    { title: 'TIY — Ready to Translate?', content: <Slide15TIYReadingFrame /> },
    // ── Part 3: strings → range → translation capstone ─────
    { title: 'A String Is a Sequence — Recap', content: <Slide16StringRecap /> },
    { title: 'Why We Need range()', content: <Slide17Range /> },
    { title: 'Carving Out Codons', content: <Slide18CarvingCodons /> },
    { title: 'Building the Protein', content: <Slide19BuildingProtein /> },
    { title: 'Stop and Go — break', content: <Slide20StopAndGo /> },
    // ── Finale: phiX174 overlapping ORFs — reveal, then build it ──
    { title: 'Two Proteins, One Sequence', content: <Slide21Finale /> },
    { title: 'TIY — Two Frames, Two Proteins', content: <Slide22TIYTwoFrames /> },
    // ── Recap & outlook ────────────────────────────────────
    { title: 'Recap — Session 3', content: <Slide23Recap /> },
    { title: "What's Next — Session 4", content: <Slide24Outlook /> },
  ],
}
