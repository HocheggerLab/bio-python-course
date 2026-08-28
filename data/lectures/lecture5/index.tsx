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
    { id: 1, title: 'Part 1 Done — You Have Mastered the Basics', contentType: 'center', content: <Slide01Recap /> },
    { id: 2, title: 'Part 2 — Python Meets Real Data', contentType: 'center', content: <Slide01bPart2 /> },
    { id: 3, title: "Today's Experiment — Touching a Whisker", contentType: 'center', content: <Slide02TheProblem /> },
    { id: 4, title: 'One Neuron, 21,238 Numbers',          contentType: 'center', content: <Slide02cRecording /> },
    { id: 5, title: 'This Session — Arrays',               contentType: 'center', content: <Slide03ThisSession /> },
    // ── Part 1: packages (via random) ──────────────────────
    { id: 6, title: 'Two Kinds of Package',              contentType: 'center', content: <Slide04Packages /> },
    { id: 7, title: 'Roll the Dice — random',          contentType: 'center', content: <Slide05RandomGame /> },
    // ── Part 2: a detour into OOP ──────────────────────────
    { id: 8, title: 'How Does random Actually Work?',    contentType: 'center', content: <Slide06RandomQuestion /> },
    { id: 9, title: "Use It, Don't Build It",            contentType: 'center', content: <Slide06bLaundry /> },
    { id: 10, title: 'Build the Simplest Object',         contentType: 'center', content: <Slide07Objects /> },
    { id: 11, title: 'Methods — Why numpy Looks Familiar', contentType: 'center', content: <Slide08MethodsBridge /> },
    { id: 12, title: "Try it Yourself — Drive an Object You Didn't Write", contentType: 'center', content: <Slide09TIYNeuronTrace /> },
    // ── Part 3: arrays ─────────────────────────────────────
    { id: 13, title: 'Part 3 — One Neuron, Many Trials',   contentType: 'center', content: <Slide10Part3 /> },
    { id: 14, title: 'What Is Actually In the File',       contentType: 'center', content: <Slide11TheFile /> },
    { id: 15, title: 'The Plan — Three Steps to an Answer', contentType: 'center', content: <Slide12ThePlan /> },
    { id: 16, title: "A List Can't Do Arithmetic",         contentType: 'center', content: <Slide13WhyNotList /> },
    { id: 17, title: 'Your First Array',                   contentType: 'center', content: <Slide14FirstArray /> },
    { id: 18, title: 'Try it Yourself — Interrogate the Array', contentType: 'center', content: <Slide15TIYArray /> },
    { id: 19, title: 'Masking — One Question, Every Value', contentType: 'center', content: <Slide16Masking /> },
    { id: 20, title: 'Where Does a Trial Start?',          contentType: 'center', content: <Slide17Onsets /> },
    { id: 21, title: 'Stack Them — Now It Is Two-Dimensional', contentType: 'center', content: <Slide18Stack /> },
    { id: 22, title: 'axis=0 — Average Down the Columns',  contentType: 'center', content: <Slide19Average /> },
    { id: 23, title: 'So What Is This Neuron Actually For?', contentType: 'center', content: <Slide20Answer /> },
    { id: 24, title: 'Try it Yourself — A Second Neuron',  contentType: 'center', content: <Slide21TIYSecondNeuron /> },
    { id: 25, title: 'List or Array?',                     contentType: 'center', content: <Slide22ArrayVsList /> },
    { id: 26, title: 'What You Can Do Now',                contentType: 'center', content: <Slide23Recap /> },
  ],
}
