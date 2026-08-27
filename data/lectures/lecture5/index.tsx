import { LectureData } from '@/data/lectures/types'
// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide01bPart2 } from './Slide01bPart2'
import { Slide02TheProblem } from './Slide02TheProblem'
import { Slide02cRecording } from './Slide02cRecording'
import { Slide03ThisSession } from './Slide03ThisSession'
// Part 1 — packages, discovered through random
import { Slide04Packages } from './Slide04Packages'
import { Slide05RandomGame } from './Slide05RandomGame'
// Part 2 — a detour into OOP (abstraction → analogy → build one → arrays)
import { Slide06RandomQuestion } from './Slide06RandomQuestion'
import { Slide06bLaundry } from './Slide06bLaundry'
import { Slide07Objects } from './Slide07Objects'
import { Slide08MethodsBridge } from './Slide08MethodsBridge'
import { Slide09TIYNeuronTrace } from './Slide09TIYNeuronTrace'

export const lecture5Data: LectureData = {
  id: 'lecture-5',
  title: 'Arrays — One Neuron, Many Trials',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { id: 1, title: 'Part 1 Done — You Have Mastered the Basics', contentType: 'center', content: <Slide01Recap /> },
    { id: 2, title: 'Part 2 — Python Meets Real Data', contentType: 'center', content: <Slide01bPart2 /> },
    { id: 3, title: "Today's Experiment — Touching a Whisker", contentType: 'center', content: <Slide02TheProblem /> },
    { id: 4, title: 'One Neuron, 21,238 Numbers',          contentType: 'center', content: <Slide02cRecording /> },
    { id: 5, title: 'This Session — Arrays',               contentType: 'center', content: <Slide03ThisSession /> },
    // ── Part 1: packages (via random) ──────────────────────
    { id: 6, title: 'Two Kinds of Package',              contentType: 'center', content: <Slide04Packages /> },
    { id: 7, title: 'A First Package — random',          contentType: 'center', content: <Slide05RandomGame /> },
    // ── Part 2: a detour into OOP ──────────────────────────
    { id: 8, title: 'How Does random Actually Work?',    contentType: 'center', content: <Slide06RandomQuestion /> },
    { id: 9, title: "Use It, Don't Build It",            contentType: 'center', content: <Slide06bLaundry /> },
    { id: 10, title: 'Build the Simplest Object',         contentType: 'center', content: <Slide07Objects /> },
    { id: 11, title: 'Methods — Why numpy Looks Familiar', contentType: 'center', content: <Slide08MethodsBridge /> },
    { id: 12, title: "Try it Yourself — Drive an Object You Didn't Write", contentType: 'center', content: <Slide09TIYNeuronTrace /> },
    // ── Part 3: numpy — 1-D trace → masking → trials → 2-D — TO BUILD ──
  ],
}
