'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

/* Labels are kept to one line each: five wrapped steps push the QR card
   off the bottom of the viewport. */
const tasks: Step[] = [
  { label: 'Run help(NeuronTrace) — read the docs', accent: 'yellow' },
  { label: 'Ask how many frames were recorded', accent: 'yellow' },
  { label: 'Ask how long that is in minutes', accent: 'yellow' },
  { label: 'Ask how many go trials the mouse got', accent: 'yellow' },
  { label: 'Ask which event it is most active during', accent: 'yellow' },
]

const initialCode = `from neurotrace import NeuronTrace   # a class whose code you cannot see

# One neuron's activity, recorded while the animal worked
# through the whisker task.
trace = NeuronTrace.load("neuron_0588_20180828_5.csv")

# help(NeuronTrace)   <- uncomment, run, READ. Then comment it out again.

frames = 0        # 1. how many timepoints were recorded?
minutes = 0       # 2. how long is that, in minutes?
go_trials = 0     # 3. how many go trials did the mouse get?
busiest = ""      # 4. which event is it most active during?  <- submit this

print(f"Frames: {frames}")
print(f"Minutes: {minutes}")
print(f"Go trials: {go_trials}")
print(f"Most active during: {busiest}")
`

const expectedOutput = `Frames: 21238
Minutes: 32.8
Go trials: 254
Most active during: lick`

const hints = [
  'Start with help(NeuronTrace). Every package documents its API this way — this is the looking-it-up you saw with random.',
  'Every call has the shape you already know: the object, a dot, the method, brackets. frames = trace.n_frames().',
  'The class knows the recording ran at 10.8 readings per second, so it can do the arithmetic for you: trace.minutes().',
  'n_trials needs to know which event — pass the name as a string: trace.n_trials("go").',
  'most_active() works it out for you, so it needs no argument at all: trace.most_active().',
]

export function Slide09TIYNeuronTrace() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Drive an Object You Didn&apos;t Write</GradientText></>}
      intro={
        <>
          You cannot read this class&apos;s code — like every package you import. Its{' '}
          <span className="text-bio-yellow font-semibold">documentation is the whole interface</span>.
        </>
      }
      steps={tasks}
      aside={
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="bg-white rounded p-2 md:p-3 shrink-0">
              <QRCodeSVG value={POLL_URL} size={80} level="M" includeMargin={false} />
            </div>
            <div className="min-w-0">
              <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                Submit the event
              </CardHeading>
              <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-snug">
                Scan and submit the{' '}
                <span className="text-bio-blue font-semibold">event name</span>.
              </p>
            </div>
          </div>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        height="478px"
        description="Explore the API — read the docs, call the methods"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
