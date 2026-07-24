'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Tidy the input: .upper() then .strip()',
  'Guard it: if any base is not A/T/G/C …',
  '… raise ValueError with a helpful message',
  'Otherwise return the cleaned sequence',
  'Submit the message your ValueError prints',
]

const initialCode = `def clean_dna(seq):
    """Tidy a DNA string, or raise ValueError if it isn't DNA."""
    # 1. tidy: uppercase and strip whitespace
    # 2. if not every base is in "ATGC": raise ValueError(...)
    # 3. return the cleaned sequence
    pass

# tests — do NOT change these:
print(clean_dna("  atgcgt  "))     # tidy input -> ATGCGT
for bad in ["ATGXGT", "atgcn"]:
    try:
        clean_dna(bad)
    except ValueError as e:
        print(e)                   # your message appears here
`

const expectedOutput = `ATGCGT
Not DNA: ATGXGT
Not DNA: ATGCN`

const hints = [
  'Tidy first: seq = seq.upper().strip() — so " atgcgt " becomes "ATGCGT".',
  'Validate with all(): if not all(base in "ATGC" for base in seq): …',
  'Inside that if, fail loudly: raise ValueError(f"Not DNA: {seq}").',
  'If it passes the check, hand it back: return seq.',
  'Match the expected message exactly — "Not DNA: " + the cleaned (uppercased) sequence, so "atgcn" reports as ATGCN.',
]

export function Slide22TIYCleanDna() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">A Defensive Function</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Write <span className="font-mono">clean_dna(seq)</span>
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              Real sequences arrive messy — lowercase, stray spaces, the odd bad character. Write one
              defensive function that <strong>tidies</strong> the input and{' '}
              <strong>refuses</strong> anything that isn&apos;t DNA — loudly, with a clear message.
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
                  Submit your error message
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit the{' '}
                  <span className="text-bio-blue font-semibold">ValueError message</span> your
                  function prints for a bad sequence.
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
            description="Write a defensive clean_dna() — tidy, validate, raise"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
