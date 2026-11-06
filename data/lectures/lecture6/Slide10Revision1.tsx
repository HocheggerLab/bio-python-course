'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'

const tasks: Step[] = [
  { label: 'How many flowers were counted in total?', accent: 'yellow' },
  { label: 'Honeybees or hoverflies — which is commoner overall?', accent: 'yellow' },
  { label: 'How many surveys saw more than five honeybees at once?', accent: 'yellow' },
  { label: 'The most honeybees in a single survey', accent: 'yellow' },
]

const initialCode = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

# 1. total flowers counted
flowers = 0

# 2. total honeybees and total hoverflies
honeybees = 0
hoverflies = 0

# 3. surveys with more than five honeybees  (a mask, then .sum())
busy = 0

# 4. the most honeybees in one survey
most = 0

print(f"Flowers:    {flowers}")
print(f"Honeybees:  {honeybees}   Hoverflies: {hoverflies}")
print(f"Busy surveys: {busy}")
print(f"Most at once: {most}")
`

const expectedOutput = `Flowers:    147027
Honeybees:  662   Hoverflies: 92
Busy surveys: 23
Most at once: 15`

const hints = [
  'One column, then a method: flowers = df["Flowers"].sum().',
  'The same for each pollinator column: df["Honeybees"].sum() and df["Hoverflies"].sum().',
  'df["Honeybees"] > 5 is a mask of True/False. Summing it counts the Trues.',
  'The largest value in a column: df["Honeybees"].max().',
]

const solution = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

flowers = df["Flowers"].sum()
honeybees = df["Honeybees"].sum()
hoverflies = df["Hoverflies"].sum()
busy = (df["Honeybees"] > 5).sum()
most = df["Honeybees"].max()

print(f"Flowers:    {flowers}")
print(f"Honeybees:  {honeybees}   Hoverflies: {hoverflies}")
print(f"Busy surveys: {busy}")
print(f"Most at once: {most}")
`

const checks: StepCheck[] = [
  { label: 'flowers is the total of the Flowers column', test: 'flowers == 147027' },
  { label: 'honeybees and hoverflies are column totals', test: 'honeybees == 662 and hoverflies == 92' },
  { label: 'busy counts surveys, not bees', test: 'busy == 23' },
  { label: 'most is the largest single count', test: 'most == 15' },
]

/** Part 1 as revision, for after the lecture; in the room it is Quiz 1. */
export function Slide10Revision1() {
  return (
    <ExerciseSlide
      title={
        <>
          Revision — <GradientText variant="yellow">interrogate the table</GradientText>
        </>
      }
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span> One
          column at a time — every method is one you used on arrays last week.
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
        description="Sum, mask, max on DataFrame columns"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
