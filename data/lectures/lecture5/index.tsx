import { LectureData } from '@/data/lectures/types'
// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02TheProblem } from './Slide02TheProblem'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — packages, discovered through random
import { Slide04Packages } from './Slide04Packages'
import { Slide05RandomGame } from './Slide05RandomGame'
// Part 2 — a detour into OOP (abstraction → analogy → build one → pandas)
import { Slide06RandomQuestion } from './Slide06RandomQuestion'
import { Slide06bLaundry } from './Slide06bLaundry'
import { Slide07Objects } from './Slide07Objects'
import { Slide08MethodsBridge } from './Slide08MethodsBridge'

export const lecture5Data: LectureData = {
  id: 'lecture-5',
  title: 'Meet the DataFrame',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { id: 1, title: 'Part 1 Done — You Have Mastered the Basics', contentType: 'center', content: <Slide01Recap /> },
    { id: 2, title: "Today's Question — Can a City Feed Its Bees?", contentType: 'top', content: <Slide02TheProblem /> },
    { id: 3, title: 'This Session — Meet the DataFrame',  contentType: 'center', content: <Slide03ThisSession /> },
    // ── Part 1: packages (via random) ──────────────────────
    { id: 4, title: 'Two Kinds of Package',              contentType: 'center', content: <Slide04Packages /> },
    { id: 5, title: 'A First Package — random',          contentType: 'top', content: <Slide05RandomGame /> },
    // ── Part 2: a detour into OOP ──────────────────────────
    { id: 6, title: 'How Does random Actually Work?',    contentType: 'top', content: <Slide06RandomQuestion /> },
    { id: 7, title: "Use It, Don't Build It",            contentType: 'center', content: <Slide06bLaundry /> },
    { id: 8, title: 'Build the Simplest Object',         contentType: 'top', content: <Slide07Objects /> },
    { id: 9, title: 'Methods — Why Pandas Looks Familiar', contentType: 'top', content: <Slide08MethodsBridge /> },
    // ── Part 3: the DataFrame (Colab) — TO BUILD ───────────
  ],
}
