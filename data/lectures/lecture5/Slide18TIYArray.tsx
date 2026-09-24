'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const POLL_URL = 'https://pollev.com/your-handle'

const tasks: Step[] = [
  { label: 'Load the lick column too', accent: 'yellow' },
  { label: 'How many frames had a lick?', accent: 'yellow' },
  { label: 'Find the loudest moment', accent: 'yellow' },
  { label: 'Turn its frame into seconds', accent: 'yellow' },
]

const initialCode = `import numpy as np

F = "neuron_0588_20180828_5_lecture.csv"
dff  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
lick = np.loadtxt(F, delimiter=",", skiprows=1, usecols=5)

# 1. How many frames have a lick?  (a lick frame is a 1)
lick_frames = 0

# 2. Which frame is the neuron's loudest?  -> .argmax()
peak_frame = 0

# 3. The recording runs at 10.8 frames per second.
peak_second = 0

print(f"Lick frames: {lick_frames}")
print(f"Peak at frame {peak_frame}")
print(f"That is {peak_second} seconds in")
`

const expectedOutput = `Lick frames: 4555
Peak at frame 11713
That is 1084.5 seconds in`

const hints = [
  'A column of 0s and 1s adds up to the number of 1s: lick.sum(). Careful — it comes back as 4555.0, a float. Wrap it in int().',
  'argmax gives the position of the largest value, not the value itself: peak_frame = int(dff.argmax()).',
  'Frames to seconds is a division: round(peak_frame / 10.8, 1).',
  'The neuron’s single loudest moment is 4.308 — but that is one spike in one trial. Is it meaningful?',
]

export function Slide18TIYArray() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Interrogate the Array</GradientText></>}
      intro={
        <>
          Three questions, three method calls. No loops — let the array do the counting.
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
                Submit the second
              </CardHeading>
              <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-snug">
                Scan and submit{' '}
                <span className="text-bio-blue font-semibold">when the peak happened</span>.
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
        description="Load, count, find — with methods, not loops"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
