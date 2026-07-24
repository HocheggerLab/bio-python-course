'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Clean it up — make the sequence uppercase',
  'Measure its length with len()',
  'Slice out the first codon (first 3 bases)',
  'GC count — add the G count and the C count',
  'Find the EcoRI site "GAATTC" — its position',
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
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Profile a sequence</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Build a four-line report
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              One messy sequence in, a tidy summary out — using everything from this block. Clean
              it first, then answer each question in turn.
            </CardBody>
            <CardList items={tasks} numbered color="yellow" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="bg-white rounded-lg p-2 md:p-3 shrink-0">
                <QRCodeSVG value={POLL_URL} size={96} level="M" includeMargin={false} />
              </div>
              <div className="min-w-0">
                <CardHeading size="sm" color="blue" className="mb-1 md:mb-2">
                  Submit your GC count
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit your{' '}
                  <span className="text-bio-blue font-semibold">GC count</span> to today&apos;s poll.
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
            description="Test — profile a sequence"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
