'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks: Step[] = [
  { label: 'Tidy the input: .upper() then .strip()', accent: 'yellow' },
  { label: 'Guard it: if any base is not A/T/G/C …', accent: 'yellow' },
  { label: '… raise ValueError with a helpful message', accent: 'yellow' },
  { label: 'Otherwise return the cleaned sequence', accent: 'yellow' },
  { label: 'Submit the message your ValueError prints', accent: 'yellow' },
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
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">A Defensive Function</GradientText></>}
      intro={
        <>
          Real sequences arrive messy — lowercase, stray spaces, the odd bad character. Write one
          defensive function that <strong>tidies</strong> the input and{' '}
          <strong>refuses</strong> anything that isn&apos;t DNA — loudly, with a clear message.
        </>
      }
      steps={tasks}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        height="562px"
        description="Write a defensive clean_dna() — tidy, validate, raise"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
