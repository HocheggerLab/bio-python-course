'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks: Step[] = [
  { label: 'Loop through every sequence in the list', accent: 'yellow' },
  { label: 'Test each: is its length a whole number of codons? (len(seq) % 3 == 0)', accent: 'yellow' },
  { label: 'If it passes, add it to the ready list with .append()', accent: 'yellow' },
  { label: 'Submit how many are ready — the length of the new list', accent: 'yellow' },
]


const initialCode = `# Real viral sequence fragments — we fetched these for you.
# To TRANSLATE a sequence it must be a whole number of codons
# (length divisible by 3 — a complete reading frame). Keep only those.
sequences = [
    "ATTAAAGGTTTATACCTTCCCAGGTAACAA",  # SARS-CoV-2  (30 nt)
    "GGTCTCTCTGGTTAGACCAGATCT",        # HIV-1  (24 nt)
    "AATTCCACAACCTTCCACCA",            # hepatitis B  (20 nt)
    "ACCAAACAAAGTTGGGTA",              # measles  (18 nt)
    "GGGCGGCGACCTCGCG",                # phage λ  (16 nt)
    "GAGTTTTATCGCTTCCATGAC",           # phiX174  (21 nt)
]

# Build a list of just the sequences ready to translate
ready = []
# your loop here:
#   for each sequence, test len(seq) % 3 == 0
#   if it passes, .append() it to 'ready'

print(f"{len(ready)} sequences are ready to translate")
`

const expectedOutput = `4 sequences are ready to translate`

const hints = [
  'Start the loop: “for seq in sequences:”, then indent the lines below it so they run once per sequence.',
  'The test: “if len(seq) % 3 == 0:” — the % operator gives the remainder after dividing; a remainder of 0 means the length splits evenly into codons.',
  'If a sequence passes the test, keep it: “ready.append(seq)” (indented inside the if).',
  'After the loop, len(ready) is your answer — the print line already shows it. Expected: 4.',
]

export function Slide13TIYReadingFrame() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Ready to Translate?</GradientText></>}
      intro={
        <>
          You&apos;ve been handed real viral fragments. Before any can be translated, keep only
          those that are a whole number of codons — <strong>loop, test each length, collect the
          keepers</strong> in a new list. (A real pipeline would translate them next.)
        </>
      }
      steps={tasks}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        height="562px"
        description="Test — keep the sequences ready to translate"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
