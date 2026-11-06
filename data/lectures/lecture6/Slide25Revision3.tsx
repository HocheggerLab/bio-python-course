'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'

const tasks: Step[] = [
  { label: 'Add a Pollinators column: honeybees + bumblebees + hoverflies', accent: 'yellow' },
  { label: 'The three surveys with the most pollinators', accent: 'yellow' },
  { label: 'Which month was surveyed most often?', accent: 'yellow' },
  { label: 'Total pollinators at each allotment, biggest first', accent: 'yellow' },
]

const initialCode = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

# 1. a new column
df["Pollinators"] = 0

# 2. the top three surveys  (sort_values or nlargest)
top3 = df

# 3. surveys per month  (value_counts)
per_month = df

# 4. pollinators per allotment  (groupby, then sort_values)
per_site = df

print(top3[["Month", "Allotment", "Crop", "Pollinators"]])
print(per_month.head(1))
print(per_site.head(3))
`

const expectedOutput = `    Month    Allotment       Crop  Pollinators
276   May       Keston  Raspberry           22
300  July  Moulsecoomb  Raspberry           14
906  July        Weald  Raspberry           14
Month
August    527
Name: count, dtype: int64
Allotment
Weald      412
Roedale    274
Hoggs      201
Name: Pollinators, dtype: int64`

const hints = [
  'Add the three columns, row by row: df["Honeybees"] + df["Bumblebees"] + df["Hoverflies"].',
  'df.nlargest(3, "Pollinators") — or df.sort_values("Pollinators", ascending=False).head(3).',
  'Tally a text column: df["Month"].value_counts(). The biggest comes first.',
  'df.groupby("Allotment")["Pollinators"].sum() — then .sort_values(ascending=False) on that Series.',
]

const solution = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

df["Pollinators"] = df["Honeybees"] + df["Bumblebees"] + df["Hoverflies"]
top3 = df.nlargest(3, "Pollinators")
per_month = df["Month"].value_counts()
per_site = df.groupby("Allotment")["Pollinators"].sum().sort_values(ascending=False)

print(top3[["Month", "Allotment", "Crop", "Pollinators"]])
print(per_month.head(1))
print(per_site.head(3))
`

const checks: StepCheck[] = [
  { label: 'Pollinators adds up all three', test: 'df["Pollinators"].sum() == 1302' },
  { label: 'top3 is three rows, biggest first', test: 'len(top3) == 3 and list(top3["Pollinators"]) == [22, 14, 14]' },
  { label: 'per_month counts surveys per month', test: 'per_month["August"] == 527 and len(per_month) == 6' },
  { label: 'per_site is sorted, Weald first', test: 'per_site.index[0] == "Weald" and per_site.iloc[0] == 412' },
]

/** Part 3 as revision, for after the lecture; in the room it is Quiz 3. */
export function Slide25Revision3() {
  return (
    <ExerciseSlide
      title={
        <>
          Revision — <GradientText variant="yellow">sort, count, group</GradientText>
        </>
      }
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span> Then ask
          yourself: is Weald top because it&apos;s busy, or because it was surveyed most?
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
        description="New column, sort, value_counts, groupby"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
