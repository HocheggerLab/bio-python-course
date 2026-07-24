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
    { id: 1, title: 'Recap — Session 3',              contentType: 'top', content: <Slide01Recap /> },
    { id: 2, title: "Claudia's Next Problem",         contentType: 'top', content: <Slide02ClaudiaHook /> },
    { id: 3, title: 'This Session — Algorithms, Functions & Errors', contentType: 'top', content: <Slide03ThisSession /> },
    // ── Part 1: algorithms & decomposition ─────────────────
    { id: 4, title: 'You Already Wrote an Algorithm', contentType: 'top', content: <Slide04AlgorithmReveal /> },
    { id: 5, title: 'You Already Do This at the Bench', contentType: 'top', content: <Slide05Protocol /> },
    { id: 6, title: 'Break Down — the Other Strand',  contentType: 'top', content: <Slide06ReverseComplement /> },
    { id: 7, title: 'TIY — Break It Down',            contentType: 'top', content: <Slide07TIYDecompose /> },
    { id: 8, title: 'Chains Get Long',                contentType: 'top', content: <Slide08ChainsToFunctions /> },
    // ── Part 2: functions — where we're heading… ───────────
    { id: 9,  title: 'Packaging It Up — def',         contentType: 'top', content: <Slide09Def /> },
    // …now build it from nothing, one idea per slide
    { id: 10, title: 'The Simplest Function',         contentType: 'top', content: <Slide09aSimplest /> },
    { id: 11, title: 'Give It Something to Work On',  contentType: 'top', content: <Slide09bParameter /> },
    { id: 12, title: 'Naming Functions',              contentType: 'top', content: <Slide09cNaming /> },
    { id: 13, title: 'Hand the Answer Back — return', contentType: 'top', content: <Slide09dReturn /> },
    { id: 14, title: 'Two Parameters — and a Default', contentType: 'top', content: <Slide09eDefaults /> },
    // …and back to the full picture
    { id: 15, title: 'Why Bother? Readable · Reusable', contentType: 'top', content: <Slide10WhyFunctions /> },
    { id: 16, title: 'Say What It Does — docstrings', contentType: 'top', content: <Slide11Docstrings /> },
    { id: 17, title: 'TIY — Package the Spaghetti',   contentType: 'top', content: <Slide12TIYPackageGC /> },
    // ── Part 3: defensive programming ──────────────────────
    { id: 18, title: 'Real Data Is Messy',            contentType: 'top', content: <Slide17DefensiveCrash /> },
    { id: 19, title: 'Check First — the if guard',    contentType: 'top', content: <Slide18GuardFix /> },
    { id: 20, title: 'Fail Loudly — raise',           contentType: 'top', content: <Slide19Raise /> },
    { id: 21, title: 'The Advanced Pattern — try / except', contentType: 'top', content: <Slide20TryExcept /> },
    { id: 22, title: 'Which One? if vs try / except', contentType: 'top', content: <Slide21WhenWhich /> },
    { id: 23, title: 'TIY — A Defensive Function',    contentType: 'top', content: <Slide22TIYCleanDna /> },
    // ── Wrap-up: capstone · course recap · outlook ─────────
    { id: 24, title: "Claudia's Whole Job — One Program", contentType: 'top', content: <Slide23Capstone /> },
    { id: 25, title: 'Recap — Sessions 1–4',          contentType: 'top', content: <Slide24RecapCourse /> },
    { id: 26, title: 'It Was Never About DNA',        contentType: 'top', content: <Slide25ApplySkills /> },
    { id: 27, title: "What's Next — Part 2",          contentType: 'top', content: <Slide26Outlook /> },
  ],
}
