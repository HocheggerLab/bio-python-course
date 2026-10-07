'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'


const tasks: Step[] = [
  { label: 'The 2nd reading was a pipetting error — remove it', accent: 'yellow' },
  { label: 'A late replicate came in — add the value 19 to the end', accent: 'yellow' },
  { label: 'Total the readings with sum()', accent: 'yellow' },
  { label: 'Count the number of readings with len()', accent: 'yellow' },
  { label: 'Mean = total ÷ count, rounded to 1 decimal place', accent: 'yellow' },
]


const initialCode = `# 20 raw measurements from Claudia's assay
readings = [42, 17, 88, 63, 29, 55, 71, 34, 90, 12,
            47, 68, 23, 81, 59, 36, 74, 50, 28, 65]

# 1. Remove the 2nd reading (a pipetting error)


# 2. Add the late replicate — the value 19 — to the end


# 3. Total all the readings
total = 0

# 4. Count how many readings there are now
n = 0

# 5. Mean = total / count, rounded to 1 dp
mean = 0

print(f"Readings: {n}")
print(f"Mean: {mean}")
`

const expectedOutput = `Readings: 20
Mean: 51.7`

/* Each check looks at what the student built, not what they printed, and
   steps 3–5 are checked against their own list — so a slip in step 1 is
   reported once, at step 1, rather than failing everything after it. */
const checks: StepCheck[] = [
  { label: 'the pipetting error (17) is gone', test: 'readings[:3] == [42, 88, 63]' },
  { label: '19 is at the end, 20 readings again', test: 'readings[-1] == 19 and len(readings) == 20' },
  { label: 'total is the sum of the readings', test: 'total == sum(readings)' },
  { label: 'n is the number of readings', test: 'n == len(readings)' },
  { label: 'mean is rounded to 1 decimal place', test: 'mean == round(sum(readings) / len(readings), 1)' },
]

const solution = `# 20 raw measurements from Claudia's assay
readings = [42, 17, 88, 63, 29, 55, 71, 34, 90, 12,
            47, 68, 23, 81, 59, 36, 74, 50, 28, 65]

# 1. Remove the 2nd reading (a pipetting error)
del readings[1]

# 2. Add the late replicate — the value 19 — to the end
readings.append(19)

# 3. Total all the readings
total = sum(readings)

# 4. Count how many readings there are now
n = len(readings)

# 5. Mean = total / count, rounded to 1 dp
mean = round(total / n, 1)

print(f"Readings: {n}")
print(f"Mean: {mean}")
`

const hints = [
  'Remove by position — the 2nd item is index 1: del readings[1].',
  'Add to the end with readings.append(19).',
  'total = sum(readings), then n = len(readings), then mean = round(total / n, 1).',
]

/**
 * The list exercise as revision, for after the lecture. In the room the
 * same five steps are asked as polls (Slide10ListQuiz); here students write
 * the code themselves, and each step is checked when they press Run.
 */
export function Slide10RevisionMean() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">Clean the data, report the mean</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span> Write
          the five steps you just voted on as code. Press Run and each step is checked for you.
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
        height="470px"
        description="Revision — clean the data and compute the mean"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
