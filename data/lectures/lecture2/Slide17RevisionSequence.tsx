'use client'

import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import type { StepCheck } from '@/components/python/PythonCodeRunner'


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

/* Checked against the *cleaned* sequence, not the student's own `clean`:
   the whole exercise turns on cleaning first, and on the messy lower-case
   string the untouched starter's gc = 0 would otherwise pass step 4. */
const checks: StepCheck[] = [
  { label: 'clean is the upper-case sequence', test: 'clean == dna.upper()' },
  { label: 'length is the number of bases', test: 'length == len(dna)' },
  { label: 'first_codon is the first 3 bases', test: 'first_codon == dna.upper()[0:3]' },
  { label: 'gc counts the G and C bases', test: 'gc == dna.upper().count("G") + dna.upper().count("C")' },
  { label: 'site is where GAATTC starts', test: 'site == dna.upper().find("GAATTC")' },
]

const solution = `# A sequence straight from a file — messy lower-case
dna = "atgcgtacggaattcaaatag"

# 1. Clean it up — everything uppercase
clean = dna.upper()

# 2. How many bases?
length = len(clean)

# 3. The first codon (first 3 bases)
first_codon = clean[0:3]

# 4. GC count — G count + C count  (just like Session 1)
gc = clean.count("G") + clean.count("C")

# 5. Position of the EcoRI site "GAATTC"
site = clean.find("GAATTC")

print(f"Length:      {length} bases")
print(f"First codon: {first_codon}")
print(f"GC count:    {gc}")
print(f"EcoRI site:  {site}")
`

const hints = [
  'Clean first — clean = dna.upper(). Everything below works on clean, not the messy dna.',
  'length = len(clean); first_codon = clean[0:3].',
  'gc = clean.count("G") + clean.count("C"); site = clean.find("GAATTC").',
]

/**
 * The strings exercise as revision, for after the lecture. In the room the
 * same five steps are asked as polls (Slide17StringQuiz).
 */
export function Slide17RevisionSequence() {
  return (
    <ExerciseSlide
      title={<>Revision — <GradientText variant="yellow">Profile a sequence</GradientText></>}
      intro={
        <>
          <span className="text-bio-yellow font-semibold">Try this after the lecture.</span> Write
          the five steps you just voted on as code. Press Run and each step is checked for you.
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
        height="490px"
        description="Revision — profile a sequence"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
