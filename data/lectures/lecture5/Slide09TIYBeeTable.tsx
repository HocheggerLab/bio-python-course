'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

/* Labels are kept to one line each: five wrapped steps push the QR card
   off the bottom of the viewport. */
const tasks: Step[] = [
  { label: 'Run help(BeeTable) — read the docs', accent: 'yellow' },
  { label: 'Ask how many surveys it holds', accent: 'yellow' },
  { label: 'Ask for its first 3 rows', accent: 'yellow' },
  { label: 'Ask for the mean honeybee visits', accent: 'yellow' },
  { label: 'Ask which pollinator was busiest', accent: 'yellow' },
]

/* Ten verbatim surveys from the Nicholls Lab table, chosen because each one
   caught at least two kinds of pollinator — a table of zeroes teaches nothing.
   Ten rows also means every mean lands on a clean single decimal, so a student
   checking by hand and the class poll cannot disagree. */
const initialCode = `from beetable import BeeTable   # a class whose code you cannot see

# 10 real surveys from Brighton allotments.
table = BeeTable(
    Honeybees =[1, 2, 2, 5, 0, 1, 0, 2, 1, 1],
    Bumblebees=[2, 2, 1, 1, 2, 2, 0, 0, 1, 2],
    Beetles   =[0, 0, 0, 0, 1, 0, 2, 0, 0, 0],
    Hoverflies=[0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
)

# help(BeeTable)   <- uncomment, run, READ. Then comment it out again.

surveys = 0          # 1. how many surveys does the table hold?
first_rows = ""      # 2. its first 3 rows, as text
mean_honeybees = 0   # 3. mean honeybee visits per survey
busiest = ""         # 4. busiest pollinator overall  <- submit this one

print(f"Surveys: {surveys}")
print(first_rows)
print(f"Mean honeybees: {mean_honeybees}")
print(f"Busiest: {busiest}")
`

const expectedOutput = `Surveys: 10
Honeybees  Bumblebees  Beetles  Hoverflies
        1           2        0           0
        2           2        0           0
        2           1        0           0
Mean honeybees: 1.5
Busiest: Honeybees`

const hints = [
  'Start with help(BeeTable). Every package documents its API this way — this is the looking-it-up you saw with random.',
  'Every call has the shape you already know: the object, a dot, the method, brackets. surveys = table.n_rows().',
  'head takes an argument for how many rows you want: first_rows = table.head(3).',
  'mean needs to know which column — pass the name as a string: table.mean("Honeybees").',
  'busiest() works it out for you, so it needs no argument at all: table.busiest().',
]

export function Slide09TIYBeeTable() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Drive an Object You Didn&apos;t Write</GradientText></>}
      intro={
        <>
          You cannot read this class&apos;s code — like every package you import. Its{' '}
          <span className="text-bio-yellow font-semibold">documentation is the whole interface</span>.
        </>
      }
      steps={tasks}
      aside={
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="bg-white rounded p-2 md:p-3 shrink-0">
              <QRCodeSVG value={POLL_URL} size={80} level="M" includeMargin={false} />
            </div>
            <div className="min-w-0">
              <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                Submit the busiest
              </CardHeading>
              <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-snug">
                Scan and submit the{' '}
                <span className="text-bio-blue font-semibold">pollinator name</span>.
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
        height="520px"
        showLineNumbers
        description="Explore the API — read the docs, call the methods"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
