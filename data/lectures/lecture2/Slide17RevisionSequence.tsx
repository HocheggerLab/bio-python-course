'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import TIYPoll from '@/components/poll/TIYPoll'


const tasks: Step[] = [
  { label: 'Clean it up — make the sequence uppercase', accent: 'yellow' },
  { label: 'Measure its length with len()', accent: 'yellow' },
  { label: 'Slice out the first codon (first 3 bases)', accent: 'yellow' },
  { label: 'GC count — add the G count and the C count', accent: 'yellow' },
  { label: 'Find the EcoRI site "GAATTC" — its position', accent: 'yellow' },
]


const initialCode = `# A sequence straight from a file — messy lower-case
dna = "atgcgtacggaattcaaatag"

# 1. Clean it up — everything uppercase
clean = dna

# 2. How many bases?
length = 0

# 3. The first codon (first 3 bases)
first_codon = ""

# 4. GC count — G count + C count  (just like Session 1)
gc = 0

# 5. Position of the EcoRI site "GAATTC"
site = 0

print(f"Length:      {length} bases")
print(f"First codon: {first_codon}")
print(f"GC count:    {gc}")
print(f"EcoRI site:  {site}")
`

const expectedOutput = `Length:      21 bases
First codon: ATG
GC count:    8
EcoRI site:  9`

const hints = [
  'Clean first — clean = dna.upper(). Everything below works on clean, not the messy dna.',
  'length = len(clean); first_codon = clean[0:3].',
  'gc = clean.count("G") + clean.count("C"); site = clean.find("GAATTC").',
]

export function Slide17TIYSequenceReport() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Profile a sequence</GradientText></>}
      intro={
        <>
          One messy sequence in, a tidy summary out — using everything from this block. Clean
          it first, then answer each question in turn.
        </>
      }
      steps={tasks}
      aside={<TIYPoll questionId="l2-t2" />}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        height="562px"
        description="Test — profile a sequence"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
