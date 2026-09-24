import { LectureData } from '@/data/lectures/types'
// Intro
import { Slide01Recap } from './Slide01Recap'
import { Slide02Part2 } from './Slide02Part2'
import { Slide03TheProblem } from './Slide03TheProblem'
import { Slide04Recording } from './Slide04Recording'
import { Slide05ThisSession } from './Slide05ThisSession'
// Part 1 — packages, discovered through random
import { Slide06Packages } from './Slide06Packages'
import { Slide07RandomGame } from './Slide07RandomGame'
// Part 2 — a detour into OOP (abstraction → analogy → build one → arrays)
import { Slide08RandomQuestion } from './Slide08RandomQuestion'
import { Slide09Laundry } from './Slide09Laundry'
import { Slide10Objects } from './Slide10Objects'
import { Slide11MethodsBridge } from './Slide11MethodsBridge'
import { Slide12TIYNeuronTrace } from './Slide12TIYNeuronTrace'
// Part 3 — arrays: 1-D trace -> masking -> onsets -> 2-D -> the answer
import { Slide13Part3 } from './Slide13Part3'
import { Slide14TheFile } from './Slide14TheFile'
import { Slide15ThePlan } from './Slide15ThePlan'
import { Slide16WhyNotList } from './Slide16WhyNotList'
import { Slide17FirstArray } from './Slide17FirstArray'
import { Slide18TIYArray } from './Slide18TIYArray'
import { Slide19Masking } from './Slide19Masking'
import { Slide20Onsets } from './Slide20Onsets'
import { Slide21Stack } from './Slide21Stack'
import { Slide22Average } from './Slide22Average'
import { Slide23Answer } from './Slide23Answer'
import { Slide24TIYSecondNeuron } from './Slide24TIYSecondNeuron'
import { Slide25ArrayVsList } from './Slide25ArrayVsList'
import { Slide26Recap } from './Slide26Recap'

export const lecture5Data: LectureData = {
  id: 'lecture-5',
  title: 'Arrays — One Neuron, Many Trials',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Part 1 Done — You Have Mastered the Basics', content: <Slide01Recap /> },
    { title: 'Part 2 — Python Meets Real Data', content: <Slide02Part2 /> },
    { title: "Today's Experiment — Touching a Whisker", content: <Slide03TheProblem /> },
    { title: 'One Neuron, 21,238 Numbers', content: <Slide04Recording /> },
    { title: 'This Session — Arrays', content: <Slide05ThisSession /> },
    // ── Part 1: packages (via random) ──────────────────────
    { title: 'Two Kinds of Package', content: <Slide06Packages /> },
    { title: 'Roll the Dice — random', content: <Slide07RandomGame /> },
    // ── Part 2: a detour into OOP ──────────────────────────
    { title: 'How Does random Actually Work?', content: <Slide08RandomQuestion /> },
    { title: "Use It, Don't Build It", content: <Slide09Laundry /> },
    { title: 'Build the Simplest Object', content: <Slide10Objects /> },
    { title: 'Methods — Why numpy Looks Familiar', content: <Slide11MethodsBridge /> },
    { title: "Try it Yourself — Drive an Object You Didn't Write", content: <Slide12TIYNeuronTrace /> },
    // ── Part 3: arrays ─────────────────────────────────────
    { title: 'Part 3 — One Neuron, Many Trials', content: <Slide13Part3 /> },
    { title: 'What Is Actually In the File', content: <Slide14TheFile /> },
    { title: 'The Plan — Three Steps to an Answer', content: <Slide15ThePlan /> },
    { title: "A List Can't Do Arithmetic", content: <Slide16WhyNotList /> },
    { title: 'Your First Array', content: <Slide17FirstArray /> },
    { title: 'Try it Yourself — Interrogate the Array', content: <Slide18TIYArray /> },
    { title: 'Masking — One Question, Every Value', content: <Slide19Masking /> },
    { title: 'Where Does a Trial Start?', content: <Slide20Onsets /> },
    { title: 'Stack Them — Now It Is Two-Dimensional', content: <Slide21Stack /> },
    { title: 'axis=0 — Average Down the Columns', content: <Slide22Average /> },
    { title: 'So What Is This Neuron Actually For?', content: <Slide23Answer /> },
    { title: 'Try it Yourself — A Second Neuron', content: <Slide24TIYSecondNeuron /> },
    { title: 'List or Array?', content: <Slide25ArrayVsList /> },
    { title: 'What You Can Do Now', content: <Slide26Recap /> },
  ],
}
