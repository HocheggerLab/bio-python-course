'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'


const tasks: Step[] = [
  { label: 'Tidy the input: seq = seq.upper().strip()', accent: 'yellow' },
  { label: 'Guard it: if not every base is A/T/G/C …', accent: 'yellow' },
  { label: '… raise ValueError(f"Not DNA: {seq}")', accent: 'yellow' },
  { label: 'Otherwise return the cleaned sequence', accent: 'yellow' },
]


const initialCode = `def clean_dna(seq):
    """Tidy a DNA string, or raise ValueError if it isn't DNA."""
    # 1. tidy: uppercase and strip whitespace
    # 2. if not every base is in "ATGC": raise ValueError(...)
    # 3. return the cleaned sequence
    pass

# tests — do NOT change these:
print(clean_dna("  atgcgt  "))     # tidy input -> ATGCGT
errors = []
for bad in ["ATGXGT", "atgcn"]:
    try:
        clean_dna(bad)
    except ValueError as e:
        errors.append(str(e))
        print(e)                   # your message appears here
`

const expectedOutput = `ATGCGT
Not DNA: ATGXGT
Not DNA: ATGCN`

const solution = `def clean_dna(seq):
    """Tidy a DNA string, or raise ValueError if it isn't DNA."""
    seq = seq.upper().strip()
    if not all(base in "ATGC" for base in seq):
        raise ValueError(f"Not DNA: {seq}")
    return seq

# tests — do NOT change these:
print(clean_dna("  atgcgt  "))     # tidy input -> ATGCGT
errors = []
for bad in ["ATGXGT", "atgcn"]:
    try:
        clean_dna(bad)
    except ValueError as e:
        errors.append(str(e))
        print(e)                   # your message appears here
`

const checks: StepCheck[] = [
  {
    label: 'messy input comes back tidy',
    test: 'clean_dna("  atgcgt  ") == "ATGCGT"',
  },
  {
    label: 'both bad sequences raise ValueError',
    test: 'len(errors) == 2',
  },
  {
    label: 'with the message "Not DNA: …" (the tidied sequence)',
    test: 'errors == ["Not DNA: ATGXGT", "Not DNA: ATGCN"]',
  },
]

const hints = [
  'Tidy first: seq = seq.upper().strip() — so "  atgcgt  " becomes "ATGCGT". Delete the pass line.',
  'Validate with all(): if not all(base in "ATGC" for base in seq): …',
  'Inside that if, fail loudly: raise ValueError(f"Not DNA: {seq}").',
  'If it passes the check, hand it back: return seq.',
  'Match the expected message exactly — "Not DNA: " + the cleaned (uppercased) sequence, so "atgcn" reports as ATGCN.',
]

/**
 * The defensive-function exercise as revision, for after the lecture. In the
 * room the same steps are asked as polls (Slide23CleanDnaQuiz).
 */
export function Slide23RevisionCleanDna() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">A Defensive Function</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span>{' '}
          One function that <strong>tidies</strong> the input and <strong>refuses</strong> anything
          that isn&apos;t DNA — loudly, with a clear message.
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
        height="562px"
        description="Revision — write a defensive clean_dna(): tidy, validate, raise"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
