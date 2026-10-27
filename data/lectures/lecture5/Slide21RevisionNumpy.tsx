'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'

const tasks: Step[] = [
  { label: 'Keep only the readings above 0.4', accent: 'yellow' },
  { label: 'Find their positions', accent: 'yellow' },
  { label: 'Find the position of the largest', accent: 'yellow' },
]

const initialCode = `import numpy as np

readings = np.array([0.1, 0.5, -0.2, 0.8, 0.3, 0.9, -0.4, 0.6])

# 1. Keep only the readings above 0.4  (boolean filtering)
high = 0

# 2. At which positions are they?  (np.where — remember the [0])
positions = 0

# 3. At which position is the largest reading?
peak_at = 0

print(f"High readings: {high}")
print(f"At positions:  {positions}")
print(f"Largest at:    {peak_at}")
`

const expectedOutput = `High readings: [0.5 0.8 0.9 0.6]
At positions:  [1 3 5 7]
Largest at:    5`

const hints = [
  'Make the mask, then put it in square brackets: high = readings[readings > 0.4].',
  'np.where(readings > 0.4) gives a tuple with one array inside. Take it out: positions = np.where(readings > 0.4)[0].',
  'max() gives the value; argmax() gives the position: peak_at = readings.argmax().',
]

const solution = `import numpy as np

readings = np.array([0.1, 0.5, -0.2, 0.8, 0.3, 0.9, -0.4, 0.6])

high = readings[readings > 0.4]
positions = np.where(readings > 0.4)[0]
peak_at = readings.argmax()

print(f"High readings: {high}")
print(f"At positions:  {positions}")
print(f"Largest at:    {peak_at}")
`

const checks: StepCheck[] = [
  {
    label: 'high keeps the four values above 0.4',
    test: 'list(high) == [0.5, 0.8, 0.9, 0.6]',
  },
  {
    label: 'positions is a plain array, not a tuple',
    test: 'not isinstance(positions, tuple) and list(positions) == [1, 3, 5, 7]',
  },
  {
    label: 'peak_at is a position, not a value',
    test: 'peak_at == 5',
  },
]

/**
 * The exercise as revision, for after the lecture. In the room the same
 * tools are asked as polls (Slide20NumpyQuiz).
 */
export function Slide21RevisionNumpy() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">The numpy Toolbox</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span>{' '}
          Filter, find where, find the biggest — the three tools the lab is built on.
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
        description="Filter, where, argmax"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
