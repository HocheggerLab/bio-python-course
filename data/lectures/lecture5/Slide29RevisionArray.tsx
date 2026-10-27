'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'

const tasks: Step[] = [
  { label: 'Import numpy as np', accent: 'yellow' },
  { label: 'How many nogo trials were there?', accent: 'yellow' },
  { label: 'Find the highest activity', accent: 'yellow' },
]

const initialCode = `# 1. Import numpy so that np works


F = "neuron_0588_20180828_5_lecture.csv"
dff    = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
nogo   = np.loadtxt(F, delimiter=",", skiprows=1, usecols=3)

# 2. How many nogo trials?  (each nogo signal is 1 for 9 frames)
nogo_trials = 0

# 3. What is the neuron's highest activity?  -> .max()
peak = 0

# (dff.argmax() would tell you WHERE the highest value is: its frame)

print(f"nogo trials: {nogo_trials}")
print(f"Highest activity: {peak:.3f}")
`

const expectedOutput = `nogo trials: 264
Highest activity: 4.308`

const hints = [
  'The whole package under its short alias: import numpy as np.',
  'A column of 0s and 1s adds up to the number of 1s: nogo.sum() gives 2376. But those are frames, not trials.',
  'Every nogo signal lasts 9 frames, so divide: int(nogo.sum() / 9). (In the lab, the same 9-frame trick finds where each trial starts.)',
  'The array has a method for its largest value: peak = dff.max().',
  'The neuron’s single loudest moment is 4.308 — but that is one spike in one trial. Is it meaningful?',
]

const solution = `import numpy as np

F = "neuron_0588_20180828_5_lecture.csv"
dff    = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
nogo   = np.loadtxt(F, delimiter=",", skiprows=1, usecols=3)

nogo_trials = int(nogo.sum() / 9)
peak = dff.max()

print(f"nogo trials: {nogo_trials}")
print(f"Highest activity: {peak:.3f}")
`

const checks: StepCheck[] = [
  {
    label: 'nogo_trials counts trials, not frames',
    test: 'nogo_trials == 264',
  },
  {
    label: 'peak is the highest value',
    test: 'round(float(peak), 3) == 4.308',
  },
]

/**
 * The exercise as revision, for after the lecture. In the room the same steps
 * are asked as polls (Slide28ArrayQuiz).
 */
export function Slide29RevisionArray() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">Interrogate the Array</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span>{' '}
          Import, count, find the peak. No loops — let the array do the work.
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
        height="436px"
        description="Load, count, find — with methods, not loops"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
