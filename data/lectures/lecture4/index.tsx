import { LectureData } from '@/data/lectures/types'
// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02ClaudiaHook } from './Slide02ClaudiaHook'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — algorithms & breaking a problem down
import { Slide04AlgorithmReveal } from './Slide04AlgorithmReveal'
import { Slide05Protocol } from './Slide05Protocol'
import { Slide06ReverseComplement } from './Slide06ReverseComplement'
import { Slide07TIYDecompose } from './Slide07TIYDecompose'
import { Slide08ChainsToFunctions } from './Slide08ChainsToFunctions'
// Part 2 — functions: the target, then built up from nothing
import { Slide09Def } from './Slide09Def'
import { Slide09aSimplest } from './Slide09aSimplest'
import { Slide09bParameter } from './Slide09bParameter'
import { Slide09cNaming } from './Slide09cNaming'
import { Slide09dReturn } from './Slide09dReturn'
import { Slide09eDefaults } from './Slide09eDefaults'
import { Slide10WhyFunctions } from './Slide10WhyFunctions'
import { Slide11Docstrings } from './Slide11Docstrings'
import { Slide12TIYPackageGC } from './Slide12TIYPackageGC'
// Part 3 — defensive programming (error TYPES + reading tracebacks were done in Session 1).
import { Slide17DefensiveCrash } from './Slide17DefensiveCrash'
import { Slide18GuardFix } from './Slide18GuardFix'
import { Slide19Raise } from './Slide19Raise'
import { Slide20TryExcept } from './Slide20TryExcept'
import { Slide21WhenWhich } from './Slide21WhenWhich'
import { Slide22TIYCleanDna } from './Slide22TIYCleanDna'
// Wrap-up — capstone, course recap, outlook to Part 2
import { Slide23Capstone } from './Slide23Capstone'
import { Slide24RecapCourse } from './Slide24RecapCourse'
import { Slide25ApplySkills } from './Slide25ApplySkills'
import { Slide26Outlook } from './Slide26Outlook'

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
    { title: 'TIY — Break It Down', content: <Slide07TIYDecompose /> },
    { title: 'Chains Get Long', content: <Slide08ChainsToFunctions /> },
    // ── Part 2: functions — where we're heading… ───────────
    { title: 'Packaging It Up — def', content: <Slide09Def /> },
    // …now build it from nothing, one idea per slide
    { title: 'The Simplest Function', content: <Slide09aSimplest /> },
    { title: 'Give It Something to Work On', content: <Slide09bParameter /> },
    { title: 'Naming Functions', content: <Slide09cNaming /> },
    { title: 'Hand the Answer Back — return', content: <Slide09dReturn /> },
    { title: 'Two Parameters — and a Default', content: <Slide09eDefaults /> },
    // …and back to the full picture
    { title: 'Why Bother? Readable · Reusable', content: <Slide10WhyFunctions /> },
    { title: 'Say What It Does — docstrings', content: <Slide11Docstrings /> },
    { title: 'TIY — Package the Spaghetti', content: <Slide12TIYPackageGC /> },
    // ── Part 3: defensive programming ──────────────────────
    { title: 'Real Data Is Messy', content: <Slide17DefensiveCrash /> },
    { title: 'Check First — the if guard', content: <Slide18GuardFix /> },
    { title: 'Fail Loudly — raise', content: <Slide19Raise /> },
    { title: 'The Advanced Pattern — try / except', content: <Slide20TryExcept /> },
    { title: 'Which One? if vs try / except', content: <Slide21WhenWhich /> },
    { title: 'TIY — A Defensive Function', content: <Slide22TIYCleanDna /> },
    // ── Wrap-up: capstone · course recap · outlook ─────────
    { title: "Claudia's Whole Job — One Program", content: <Slide23Capstone /> },
    { title: 'Recap — Sessions 1–4', content: <Slide24RecapCourse /> },
    { title: 'It Was Never About DNA', content: <Slide25ApplySkills /> },
    { title: "What's Next — Part 2", content: <Slide26Outlook /> },
  ],
}
