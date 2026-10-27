'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'

const tasks: Step[] = [
  { label: 'Change one line — the filename', accent: 'yellow' },
  { label: 'Run it. Read the two peaks', accent: 'yellow' },
  { label: 'Does this cell prefer go over nogo?', accent: 'yellow' },
]

const initialCode = `import numpy as np

# A different neuron, from a different mouse. Same code, one filename changed.
F = "neuron_0588_20180828_5_lecture.csv"     # <- swap for the 0406 one

dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)

def response_to(column):
    marks  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=column)
    starts = np.where(marks == 1)[0][::9]
    trials = []
    for i in starts:
        if i >= 10:
            trials.append(dff[i-10 : i+30])
    return np.array(trials).mean(axis=0)

for column, name in [(2, "go"), (3, "nogo")]:
    curve = response_to(column)
    print(f"{name:7s} peak {curve[10:].max():+.3f}")
`

const expectedOutput = `go      peak +1.284
nogo    peak +1.041`

const hints = [
  'The other file is "neuron_0406_20180620_8_lecture.csv". Nothing else changes — that is the point.',
  'Compare go against nogo. On the first neuron they were +0.29 and +0.06 — a fivefold difference.',
  'Here go and nogo are within a quarter of each other. This cell fires whatever the whiskers felt.',
  'Two cells, two personalities — and the same lines of code found both.',
]

const solution = `import numpy as np

# A different neuron, from a different mouse. Same code, one filename changed.
F = "neuron_0406_20180620_8_lecture.csv"     # the second neuron

dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)

def response_to(column):
    marks  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=column)
    starts = np.where(marks == 1)[0][::9]
    trials = []
    for i in starts:
        if i >= 10:
            trials.append(dff[i-10 : i+30])
    return np.array(trials).mean(axis=0)

for column, name in [(2, "go"), (3, "nogo")]:
    curve = response_to(column)
    print(f"{name:7s} peak {curve[10:].max():+.3f}")
`

const checks: StepCheck[] = [
  {
    label: 'F points at the 0406 neuron',
    test: 'F == "neuron_0406_20180620_8_lecture.csv"',
  },
]

/**
 * The exercise as revision, for after the lecture. In the room the same steps
 * are asked as polls (LabSecondNeuronQuiz).
 */
export function LabRevisionSecondNeuron() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">A Second Neuron</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span>{' '}
          Real analysis is rerunning the same thing on the next cell. Change the filename and see
          whether this one has the same taste.
        </>
      }
      steps={tasks}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        checks={checks}
        solution={solution}
        height="457px"
        description="Same analysis, different cell"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
