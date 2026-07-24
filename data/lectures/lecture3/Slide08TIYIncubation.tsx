'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Convert each incubation period from days to whole minutes (× 1440, rounded)',
  'Collect the results in incubation_minutes with .append()',
  'Add every value into one running total',
  'Submit your grand total — how many minutes in all?',
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
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Total Incubation Time</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Transform, then add it all up
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              Two loops, both from today — <strong>transform</strong> each incubation period into
              minutes, then <strong>accumulate</strong> them into one total.
            </CardBody>
            <CardList items={tasks} numbered color="yellow" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="bg-white rounded-lg p-2 md:p-3 shrink-0">
                <QRCodeSVG value={POLL_URL} size={96} level="M" marginSize={0} />
              </div>
              <div className="min-w-0">
                <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                  Submit your total
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit your{' '}
                  <span className="text-bio-blue font-semibold">total minutes</span> to today&apos;s
                  poll. Did everyone get the same number?
                </p>
                <p className="font-mono text-[10px] md:text-xs xl:text-sm text-gray-500 mt-1 md:mt-2 break-all">
                  {POLL_URL}
                </p>
              </div>
            </div>
          </SlideCard>
        </div>

        {/* RIGHT — runner */}
        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="560px"
            showLineNumbers
            description="Test — total incubation time in minutes"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
