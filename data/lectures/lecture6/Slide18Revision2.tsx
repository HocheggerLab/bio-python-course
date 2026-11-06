'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'

const tasks: Step[] = [
  { label: 'A table of the Squash surveys only', accent: 'yellow' },
  { label: 'Its honeybees and bumblebees — compare with the beans (2 and 23)', accent: 'yellow' },
  { label: 'June surveys with at least one bumblebee — two conditions', accent: 'yellow' },
  { label: 'Crop and Bumblebees only, for surveys with more than five bumblebees', accent: 'yellow' },
]

const initialCode = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

# 1. the squash surveys
squash = df

# 2. their honeybees and bumblebees
honeybees = 0
bumblebees = 0

# 3. June AND at least one bumblebee  (brackets round each condition!)
june_bees = df

# 4. .loc[rows, columns]
crowded = df

print(f"Squash surveys: {len(squash)}")
print(f"Honeybees {honeybees}   Bumblebees {bumblebees}")
print(f"June surveys with bumblebees: {len(june_bees)}")
print(crowded)
`

const expectedOutput = `Squash surveys: 220
Honeybees 104   Bumblebees 15
June surveys with bumblebees: 70
           Crop  Bumblebees
276   Raspberry           7
299   Raspberry           6
300   Raspberry          10
302   Raspberry           6
313  Blackberry           6
588   Raspberry          13
658   Raspberry           7
950   Raspberry           6`

const hints = [
  'A mask inside the brackets keeps the rows where it is True: df[df["Crop"] == "Squash"].',
  'Filter first, then take a column of the smaller table: squash["Honeybees"].sum().',
  'df[(df["Month"] == "June") & (df["Bumblebees"] > 0)] — & between, brackets round each.',
  'Rows before the comma, a list of columns after: df.loc[df["Bumblebees"] > 5, ["Crop", "Bumblebees"]].',
]

const solution = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

squash = df[df["Crop"] == "Squash"]
honeybees = squash["Honeybees"].sum()
bumblebees = squash["Bumblebees"].sum()
june_bees = df[(df["Month"] == "June") & (df["Bumblebees"] > 0)]
crowded = df.loc[df["Bumblebees"] > 5, ["Crop", "Bumblebees"]]

print(f"Squash surveys: {len(squash)}")
print(f"Honeybees {honeybees}   Bumblebees {bumblebees}")
print(f"June surveys with bumblebees: {len(june_bees)}")
print(crowded)
`

const checks: StepCheck[] = [
  { label: 'squash holds only the 220 Squash rows', test: 'len(squash) == 220 and set(squash["Crop"]) == {"Squash"}' },
  { label: 'the totals come from the squash table', test: 'honeybees == 104 and bumblebees == 15' },
  { label: 'june_bees keeps both conditions', test: 'len(june_bees) == 70' },
  { label: 'crowded has 8 rows and just two columns', test: 'crowded.shape == (8, 2) and list(crowded.columns) == ["Crop", "Bumblebees"]' },
]

/** Part 2 as revision, for after the lecture; in the room it is Quiz 2. */
export function Slide18Revision2() {
  return (
    <ExerciseSlide
      title={
        <>
          Revision — <GradientText variant="yellow">pick and filter</GradientText>
        </>
      }
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span> Squash
          is a big open flower — predict whether it gets more bumblebees than the beans first.
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
        description="Filter, combine conditions, .loc"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
