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
// Part 3 — arrays: 1-D trace -> masking -> onsets -> 2-D -> the answer
import { Slide10Part3 } from './Slide10Part3'
import { Slide11TheFile } from './Slide11TheFile'
import { Slide12ThePlan } from './Slide12ThePlan'
import { Slide13WhyNotList } from './Slide13WhyNotList'
import { Slide14FirstArray } from './Slide14FirstArray'
import { Slide15TIYArray } from './Slide15TIYArray'
import { Slide16Masking } from './Slide16Masking'
import { Slide17Onsets } from './Slide17Onsets'
import { Slide18Stack } from './Slide18Stack'
import { Slide19Average } from './Slide19Average'
import { Slide20Answer } from './Slide20Answer'
import { Slide21TIYSecondNeuron } from './Slide21TIYSecondNeuron'
import { Slide22ArrayVsList } from './Slide22ArrayVsList'
import { Slide23Recap } from './Slide23Recap'

export const lecture5Data: LectureData = {
  id: 'lecture-5',
  title: 'Arrays — One Neuron, Many Trials',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Part 1 Done — You Have Mastered the Basics', content: <Slide01Recap /> },
    { title: 'Part 2 — Python Meets Real Data', content: <Slide01bPart2 /> },
    { title: "Today's Experiment — Touching a Whisker", content: <Slide02TheProblem /> },
    { title: 'One Neuron, 21,238 Numbers', content: <Slide02cRecording /> },
    { title: 'This Session — Arrays', content: <Slide03ThisSession /> },
    // ── Part 1: packages (via random) ──────────────────────
    { title: 'Two Kinds of Package', content: <Slide04Packages /> },
    { title: 'Roll the Dice — random', content: <Slide05RandomGame /> },
    // ── Part 2: a detour into OOP ──────────────────────────
    { title: 'How Does random Actually Work?', content: <Slide06RandomQuestion /> },
    { title: "Use It, Don't Build It", content: <Slide06bLaundry /> },
    { title: 'Build the Simplest Object', content: <Slide07Objects /> },
    { title: 'Methods — Why numpy Looks Familiar', content: <Slide08MethodsBridge /> },
    { title: "Try it Yourself — Drive an Object You Didn't Write", content: <Slide09TIYNeuronTrace /> },
    // ── Part 3: arrays ─────────────────────────────────────
    { title: 'Part 3 — One Neuron, Many Trials', content: <Slide10Part3 /> },
    { title: 'What Is Actually In the File', content: <Slide11TheFile /> },
    { title: 'The Plan — Three Steps to an Answer', content: <Slide12ThePlan /> },
    { title: "A List Can't Do Arithmetic", content: <Slide13WhyNotList /> },
    { title: 'Your First Array', content: <Slide14FirstArray /> },
    { title: 'Try it Yourself — Interrogate the Array', content: <Slide15TIYArray /> },
    { title: 'Masking — One Question, Every Value', content: <Slide16Masking /> },
    { title: 'Where Does a Trial Start?', content: <Slide17Onsets /> },
    { title: 'Stack Them — Now It Is Two-Dimensional', content: <Slide18Stack /> },
    { title: 'axis=0 — Average Down the Columns', content: <Slide19Average /> },
    { title: 'So What Is This Neuron Actually For?', content: <Slide20Answer /> },
    { title: 'Try it Yourself — A Second Neuron', content: <Slide21TIYSecondNeuron /> },
    { title: 'List or Array?', content: <Slide22ArrayVsList /> },
    { title: 'What You Can Do Now', content: <Slide23Recap /> },
  ],
}
