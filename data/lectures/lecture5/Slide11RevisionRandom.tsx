'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'

const tasks: Step[] = [
  { label: 'Roll one die', accent: 'yellow' },
  { label: 'Pick one random base', accent: 'yellow' },
  { label: 'Build a random 10-base sequence with a loop', accent: 'yellow' },
]

const initialCode = `import random

random.seed(7)   # fixes the dice, so everyone gets the same answer

bases = ["A", "C", "G", "T"]

die = 0      # 1. roll one die (1 to 6)
base = ""    # 2. pick one random base from bases
seq = ""     # 3. add 10 random bases to seq, one per loop

print(f"Die: {die}")
print(f"Base: {base}")
print(f"Sequence: {seq}")
`

const expectedOutput = `Die: 3
Base: C
Sequence: TAAAGACAAT`

const hints = [
  'Look up the reception first: help(random.randint) and help(random.choice) tell you what goes in and what comes out.',
  'A die: die = random.randint(1, 6). Both ends are included.',
  'One base: base = random.choice(bases). choice needs to know what to choose from.',
  'A loop that runs 10 times: for i in range(10): and inside it seq = seq + random.choice(bases).',
  'Do the three steps in order — the seed makes the dice roll the same way only if you ask in the same order.',
]

const solution = `import random

random.seed(7)

bases = ["A", "C", "G", "T"]

die = random.randint(1, 6)
base = random.choice(bases)
seq = ""
for i in range(10):
    seq = seq + random.choice(bases)

print(f"Die: {die}")
print(f"Base: {base}")
print(f"Sequence: {seq}")
`

const checks: StepCheck[] = [
  {
    label: 'die is a whole number from 1 to 6',
    test: 'isinstance(die, int) and 1 <= die <= 6',
  },
  {
    label: 'base is one of the four bases',
    test: 'base in bases',
  },
  {
    label: 'seq has 10 bases, all from A, C, G, T',
    test: 'len(seq) == 10 and set(seq) <= set("ACGT")',
  },
]

/**
 * The exercise as revision, for after the lecture. In the room the same API
 * is asked as polls (Slide10RandomQuiz).
 */
export function Slide11RevisionRandom() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">Use random&apos;s Reception</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span>{' '}
          Three calls to the same reception — and a random DNA sequence at the end.
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
        height="420px"
        description="Call random's methods — read the docs first"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
