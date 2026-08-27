'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const POLL_URL = 'https://pollev.com/your-handle'

const tasks: Step[] = [
  { label: 'Change one line — the filename', accent: 'yellow' },
  { label: 'Run it. Read the three peaks', accent: 'yellow' },
  { label: 'Does this cell prefer go over nogo?', accent: 'yellow' },
]

const initialCode = `import numpy as np

# A different neuron, from a different mouse. Same code, one filename changed.
F = "neuron_0588_20180828_5_lecture.csv"     # <- swap for the 0406 one

dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)

def response_to(column):
    marks  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=column)
    starts = np.where(np.diff(marks) == 1)[0] + 1
    windows = [dff[i-10:i+30] for i in starts if i >= 10 and i+30 <= len(dff)]
    return np.array(windows).mean(axis=0)

for column, name in [(2, "go"), (3, "nogo"), (4, "reward")]:
    curve = response_to(column)
    print(f"{name:7s} peak {curve[10:].max():+.3f}")
`

const expectedOutput = `go      peak +1.284
nogo    peak +1.041
reward  peak +1.658`

const hints = [
  'The other file is "neuron_0406_20180620_8_lecture.csv". Nothing else changes — that is the point.',
  'Compare go against nogo. On the first neuron they were +0.29 and +0.06 — a fivefold difference.',
  'Here go and nogo are within a quarter of each other. This cell fires whatever the whiskers felt.',
  'Both neurons respond most to reward. Two cells, two personalities, same three lines of code.',
]

export function Slide21TIYSecondNeuron() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">A Second Neuron</GradientText></>}
      intro={
        <>
          Real analysis is rerunning the same thing on the next cell. Change the filename and see
          whether this one has the same taste.
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
                Submit your verdict
              </CardHeading>
              <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-snug">
                Does neuron two{' '}
                <span className="text-bio-blue font-semibold">tell go from nogo</span>?
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
        height="457px"
        description="Same analysis, different cell"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
