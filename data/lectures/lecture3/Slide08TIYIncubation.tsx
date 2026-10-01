'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import TIYPoll from '@/components/poll/TIYPoll'


const tasks: Step[] = [
  { label: 'Convert each incubation period from days to minutes (× 1440, rounded to a whole number)', accent: 'yellow' },
  { label: 'Collect the results in incubation_minutes with .append()', accent: 'yellow' },
  { label: 'Add every value into one running total', accent: 'yellow' },
  { label: 'Submit your grand total — how many minutes in all?', accent: 'yellow' },
]


const initialCode = `# Approximate mean incubation period (infection → symptoms), in days.
# A panel of coronaviruses: 229E, SARS, SARS-CoV-2, MERS, Omicron
incubation_days = [3.0, 4.7, 4.9, 5.8, 3.4]

# 1. Build a new list of the incubation periods in whole minutes.
#    1 day = 1440 minutes — and round() each one to a whole number.
incubation_minutes = []
# your for loop here

# 2. Add every value in incubation_minutes into one running total.
total = 0
# your for loop here

print(f"Total incubation time: {total} minutes")
`

const expectedOutput = `Total incubation time: 31392 minutes`

const hints = [
  'Step 1 — start the first loop: write “for days in incubation_days:”, then indent the lines below it so they run once per virus.',
  'Step 1 — inside that loop, convert then collect: “minutes = round(days * 1440)” (1 day = 1440 min), then “incubation_minutes.append(minutes)”.',
  'Step 2 — start a second loop over your new list: “for m in incubation_minutes:”.',
  'Step 2 — inside it, grow the accumulator one item at a time: “total = total + m”. The print line after the loop then shows the grand total.',
  'Same two shapes from the slides: build a new list with .append(), then sum it with an accumulator. Expected total: 31392.',
]

export function Slide08TIYIncubation() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Total Incubation Time</GradientText></>}
      intro={
        <>
          Two loops, both from today — <strong>transform</strong> each incubation period into
          minutes, then <strong>accumulate</strong> them into one total.
        </>
      }
      steps={tasks}
      aside={<TIYPoll questionId="l3-t1" />}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        height="562px"
        description="Test — total incubation time in minutes"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
