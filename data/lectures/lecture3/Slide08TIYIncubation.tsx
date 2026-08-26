'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks: Step[] = [
  { label: 'Convert each incubation period from days to whole minutes (× 1440, rounded)', accent: 'yellow' },
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
# your loop here

# 2. Add every value in incubation_minutes into one running total.
total = 0
# your loop here

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
      aside={
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="bg-white rounded p-2 md:p-3 shrink-0">
              <QRCodeSVG value={POLL_URL} size={96} level="M" includeMargin={false} />
            </div>
            <div className="min-w-0">
              <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                Submit your total
              </CardHeading>
              <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-snug">
                Scan with your phone — submit your{' '}
                <span className="text-bio-blue font-semibold">total</span> to today&apos;s poll.
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
        height="562px"
        description="Test — total incubation time in minutes"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
