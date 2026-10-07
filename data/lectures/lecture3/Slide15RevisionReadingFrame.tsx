'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'


const tasks: Step[] = [
  { label: 'Loop through sequences.items(): test each sequence with len(seq) % 3 == 0', accent: 'yellow' },
  { label: 'If it passes, .append() the virus name to ready', accent: 'yellow' },
]


const initialCode = `# Real viral sequence fragments — we fetched these for you.
# To TRANSLATE a sequence it must be a whole number of codons
# (length divisible by 3 — a complete reading frame). Keep only those.
sequences = {
    "SARS-CoV-2":   "ATTAAAGGTTTATACCTTCCCAGGTAACAA",
    "HIV-1":        "GGTCTCTCTGGTTAGACCAGATCT",
    "hepatitis B":  "AATTCCACAACCTTCCACCA",
    "measles":      "ACCAAACAAAGTTGGGTA",
    "phage λ":      "GGGCGGCGACCTCGCG",
    "phiX174":      "GAGTTTTATCGCTTCCATGAC"
}

# Build a list of just the sequences ready to translate
ready = []
# your loop here:
#   for each sequence, test len(seq) % 3 == 0
#   if it passes, .append() it to 'ready'

print(ready)
print(f"{len(ready)} sequences are ready to translate")
`

const expectedOutput = `['SARS-CoV-2', 'HIV-1', 'measles', 'phiX174']
4 sequences are ready to translate`

/* The old hint said `for seq in sequences:`, which loops over the *names*:
   every length test then fails and the answer is 0, not 4. */
const hints = [
  'Start the loop with .items() so you get both: “for name, seq in sequences.items():”, then indent the lines below it.',
  'The test: “if len(seq) % 3 == 0:”. % gives the remainder after dividing; a remainder of 0 means the length splits evenly into codons.',
  'If a sequence passes, keep its name: “ready.append(name)” (indented inside the if).',
  'After the loop, len(ready) is your answer. Expected: 4.',
]

const solution = `# Real viral sequence fragments — we fetched these for you.
# To TRANSLATE a sequence it must be a whole number of codons
# (length divisible by 3 — a complete reading frame). Keep only those.
sequences = {
    "SARS-CoV-2":   "ATTAAAGGTTTATACCTTCCCAGGTAACAA",
    "HIV-1":        "GGTCTCTCTGGTTAGACCAGATCT",
    "hepatitis B":  "AATTCCACAACCTTCCACCA",
    "measles":      "ACCAAACAAAGTTGGGTA",
    "phage λ":      "GGGCGGCGACCTCGCG",
    "phiX174":      "GAGTTTTATCGCTTCCATGAC"
}

# Build a list of the names of the viruses ready to translate
ready = []
for name, seq in sequences.items():
    if len(seq) % 3 == 0:
        ready.append(name)

print(ready)
print(f"{len(ready)} sequences are ready to translate")
`

const checks: StepCheck[] = [
  {
    label: 'ready only has viruses whose length divides by 3',
    test: 'len(ready) > 0 and all(len(sequences[n]) % 3 == 0 for n in ready)',
  },
  {
    label: 'ready has the names of all four',
    test: 'ready == [n for n, s in sequences.items() if len(s) % 3 == 0]',
  },
]

/**
 * The reading-frame exercise as revision, for after the lecture. In the
 * room the same steps are asked as polls (Slide15ReadingFrameQuiz).
 */
export function Slide15RevisionReadingFrame() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">Ready to Translate?</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span>{' '}
          You&apos;ve been handed real viral fragments. Before translating them, identify which
          ones have a whole number of codons — <strong>loop through the dictionary, test each length, and collect the
          names of the viruses</strong> in a new list. (A real pipeline would translate the sequences next.)
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
        description="Revision — keep the sequences ready to translate"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
