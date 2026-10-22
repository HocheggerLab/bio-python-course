import { LectureData } from '@/data/lectures/types'
// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02ClaudiaHook } from './Slide02ClaudiaHook'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — algorithms & breaking a problem down
import { Slide04AlgorithmReveal } from './Slide04AlgorithmReveal'
import { Slide05Protocol } from './Slide05Protocol'
import { Slide06ReverseComplement } from './Slide06ReverseComplement'
import {
  Slide07DecomposeQuizOpener,
  Slide07DecomposeQ1,
  Slide07DecomposeQ2,
  Slide07DecomposeQ3,
  Slide07DecomposeQ4,
  Slide07DecomposeQ5,
} from './Slide07DecomposeQuiz'
import { Slide07RevisionDecompose } from './Slide07RevisionDecompose'
import { Slide08ChainsToFunctions } from './Slide08ChainsToFunctions'
// Part 2 — functions: the target, then built up from nothing
import { Slide09Def } from './Slide09Def'
import { Slide10Simplest } from './Slide10Simplest'
import { Slide11Parameter } from './Slide11Parameter'
import { Slide12Naming } from './Slide12Naming'
import { Slide13Return } from './Slide13Return'
import { Slide14Defaults } from './Slide14Defaults'
import { Slide15WhyFunctions } from './Slide15WhyFunctions'
import { Slide16Docstrings } from './Slide16Docstrings'
import {
  Slide17PackageGCQuizOpener,
  Slide17PackageGCQ1,
  Slide17PackageGCQ2,
  Slide17PackageGCQ3,
  Slide17PackageGCQ4,
  Slide17PackageGCQ5,
} from './Slide17PackageGCQuiz'
import { Slide17RevisionPackageGC } from './Slide17RevisionPackageGC'
// Part 3 — defensive programming (error TYPES + reading tracebacks were done in Session 1).
import { Slide18DefensiveCrash } from './Slide18DefensiveCrash'
import { Slide19GuardFix } from './Slide19GuardFix'
import { Slide20Raise } from './Slide20Raise'
import { Slide21TryExcept } from './Slide21TryExcept'
import { Slide22WhenWhich } from './Slide22WhenWhich'
import {
  Slide23CleanDnaQuizOpener,
  Slide23CleanDnaQ1,
  Slide23CleanDnaQ2,
  Slide23CleanDnaQ3,
  Slide23CleanDnaQ4,
  Slide23CleanDnaQ5,
} from './Slide23CleanDnaQuiz'
import { Slide23RevisionCleanDna } from './Slide23RevisionCleanDna'
// Wrap-up — capstone, course recap, outlook to Part 2
import { Slide24Capstone } from './Slide24Capstone'
import { Slide25RecapCourse } from './Slide25RecapCourse'
import { Slide26ApplySkills } from './Slide26ApplySkills'
import { Slide27Outlook } from './Slide27Outlook'

export const lecture4Data: LectureData = {
  id: 'lecture-4',
  title: 'Algorithms, Functions & Defensive Programming',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Recap — Session 3', content: <Slide01Recap /> },
    { title: "Claudia's Next Problem", content: <Slide02ClaudiaHook /> },
    { title: 'This Session — Algorithms, Functions & Errors', content: <Slide03ThisSession /> },
    // ── Part 1: algorithms & decomposition ─────────────────
    { title: 'You Already Wrote an Algorithm', content: <Slide04AlgorithmReveal /> },
    { title: 'You Already Do This at the Bench', content: <Slide05Protocol /> },
    { title: 'Break Down — the Other Strand', content: <Slide06ReverseComplement /> },
    { title: 'Quiz — Break it down, step by step', content: <Slide07DecomposeQuizOpener /> },
    { title: 'Quiz 1 — One step', content: <Slide07DecomposeQ1 /> },
    { title: 'Quiz 2 — The order', content: <Slide07DecomposeQ2 /> },
    { title: 'Quiz 3 — Starts with ATG', content: <Slide07DecomposeQ3 /> },
    { title: 'Quiz 4 — GC of each one', content: <Slide07DecomposeQ4 /> },
    { title: 'Quiz 5 — Report the mean', content: <Slide07DecomposeQ5 /> },
    { title: 'Revision — From Plan to Code', content: <Slide07RevisionDecompose /> },
    { title: 'Chains Get Long', content: <Slide08ChainsToFunctions /> },
    // ── Part 2: functions — where we're heading… ───────────
    { title: 'Packaging It Up — def', content: <Slide09Def /> },
    // …now build it from nothing, one idea per slide
    { title: 'The Simplest Function', content: <Slide10Simplest /> },
    { title: 'Give It Something to Work On', content: <Slide11Parameter /> },
    { title: 'Naming Functions', content: <Slide12Naming /> },
    { title: 'Hand the Answer Back — return', content: <Slide13Return /> },
    { title: 'Two Parameters — and a Default', content: <Slide14Defaults /> },
    // …and back to the full picture
    { title: 'Why Bother? Readable · Reusable', content: <Slide15WhyFunctions /> },
    { title: 'Say What It Does — docstrings', content: <Slide16Docstrings /> },
    { title: 'Quiz — Package the spaghetti, step by step', content: <Slide17PackageGCQuizOpener /> },
    { title: 'Quiz 1 — Start the function', content: <Slide17PackageGCQ1 /> },
    { title: 'Quiz 2 — The body', content: <Slide17PackageGCQ2 /> },
    { title: 'Quiz 3 — Hand it back', content: <Slide17PackageGCQ3 /> },
    { title: 'Quiz 4 — The docstring', content: <Slide17PackageGCQ4 /> },
    { title: 'Quiz 5 — print or return?', content: <Slide17PackageGCQ5 /> },
    { title: 'Revision — Package the Spaghetti', content: <Slide17RevisionPackageGC /> },
    // ── Part 3: defensive programming ──────────────────────
    { title: 'Real Data Is Messy', content: <Slide18DefensiveCrash /> },
    { title: 'Check First — the if guard', content: <Slide19GuardFix /> },
    { title: 'Fail Loudly — raise', content: <Slide20Raise /> },
    { title: 'The Advanced Pattern — try / except', content: <Slide21TryExcept /> },
    { title: 'Which One? if vs try / except', content: <Slide22WhenWhich /> },
    { title: 'Quiz — A defensive function, step by step', content: <Slide23CleanDnaQuizOpener /> },
    { title: 'Quiz 1 — Tidy it', content: <Slide23CleanDnaQ1 /> },
    { title: 'Quiz 2 — Spot bad DNA', content: <Slide23CleanDnaQ2 /> },
    { title: 'Quiz 3 — Fail loudly', content: <Slide23CleanDnaQ3 /> },
    { title: 'Quiz 4 — Messy and bad', content: <Slide23CleanDnaQ4 /> },
    { title: 'Quiz 5 — Catch it', content: <Slide23CleanDnaQ5 /> },
    { title: 'Revision — A Defensive Function', content: <Slide23RevisionCleanDna /> },
    // ── Wrap-up: capstone · course recap · outlook ─────────
    { title: "Claudia's Whole Job — One Program", content: <Slide24Capstone /> },
    { title: 'Recap — Sessions 1–4', content: <Slide25RecapCourse /> },
    { title: 'It Was Never About DNA', content: <Slide26ApplySkills /> },
    { title: "What's Next — Part 2", content: <Slide27Outlook /> },
  ],
}
