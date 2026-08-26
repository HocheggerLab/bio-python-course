'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

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

export function Slide18TIYSequenceReport() {
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
      aside={
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="bg-white rounded p-2 md:p-3 shrink-0">
              <QRCodeSVG value={POLL_URL} size={96} level="M" includeMargin={false} />
            </div>
            <div className="min-w-0">
              <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                Submit your result
              </CardHeading>
              <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-snug">
                Scan with your phone — submit your{' '}
                <span className="text-bio-blue font-semibold">answer</span> to today&apos;s poll.
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
        height="562px"
        description="Test — profile a sequence"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
