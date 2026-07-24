'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'The 2nd reading was a pipetting error — remove it',
  'A late replicate came in — add the value 19 to the end',
  'Total the readings with sum()',
  'Count them with len()',
  'Mean = total ÷ count, rounded to 1 decimal place',
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

const hints = [
  'Remove by position — the 2nd item is index 1: del readings[1].',
  'Add to the end with readings.append(19).',
  'total = sum(readings), then n = len(readings), then mean = round(total / n, 1).',
]

export function Slide10TIYMean() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Clean the data, report the mean</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — step-by-step task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Five steps — work down the list
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              You start with 20 readings. After removing one and adding one you&apos;re back to{' '}
              <span className="text-bio-yellow font-semibold">20</span> — a good check before you
              average.
            </CardBody>
            <CardList items={tasks} numbered color="yellow" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="bg-white rounded-lg p-2 md:p-3 shrink-0">
                <QRCodeSVG value={POLL_URL} size={96} level="M" includeMargin={false} />
              </div>
              <div className="min-w-0">
                <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                  Submit your mean
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit your{' '}
                  <span className="text-bio-blue font-semibold">mean value</span> to today&apos;s poll.
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
            height="540px"
            showLineNumbers
            description="Test — clean the data and compute the mean"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
