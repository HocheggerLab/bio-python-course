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
import { Slide10Simplest } from './Slide10Simplest'
import { Slide11Parameter } from './Slide11Parameter'
import { Slide12Naming } from './Slide12Naming'
import { Slide13Return } from './Slide13Return'
import { Slide14Defaults } from './Slide14Defaults'
import { Slide15WhyFunctions } from './Slide15WhyFunctions'
import { Slide16Docstrings } from './Slide16Docstrings'
import { Slide17TIYPackageGC } from './Slide17TIYPackageGC'
// Part 3 — defensive programming (error TYPES + reading tracebacks were done in Session 1).
import { Slide18DefensiveCrash } from './Slide18DefensiveCrash'
import { Slide19GuardFix } from './Slide19GuardFix'
import { Slide20Raise } from './Slide20Raise'
import { Slide21TryExcept } from './Slide21TryExcept'
import { Slide22WhenWhich } from './Slide22WhenWhich'
import { Slide23TIYCleanDna } from './Slide23TIYCleanDna'
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
    { title: 'TIY — Break It Down', content: <Slide07TIYDecompose /> },
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
    { title: 'TIY — Package the Spaghetti', content: <Slide17TIYPackageGC /> },
    // ── Part 3: defensive programming ──────────────────────
    { title: 'Real Data Is Messy', content: <Slide18DefensiveCrash /> },
    { title: 'Check First — the if guard', content: <Slide19GuardFix /> },
    { title: 'Fail Loudly — raise', content: <Slide20Raise /> },
    { title: 'The Advanced Pattern — try / except', content: <Slide21TryExcept /> },
    { title: 'Which One? if vs try / except', content: <Slide22WhenWhich /> },
    { title: 'TIY — A Defensive Function', content: <Slide23TIYCleanDna /> },
    // ── Wrap-up: capstone · course recap · outlook ─────────
    { title: "Claudia's Whole Job — One Program", content: <Slide24Capstone /> },
    { title: 'Recap — Sessions 1–4', content: <Slide25RecapCourse /> },
    { title: 'It Was Never About DNA', content: <Slide26ApplySkills /> },
    { title: "What's Next — Part 2", content: <Slide27Outlook /> },
  ],
}
