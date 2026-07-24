'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Loop through every sequence in the list',
  'Test each: is its length a whole number of codons? (len(seq) % 3 == 0)',
  'If it passes, add it to the ready list with .append()',
  'Submit how many are ready — the length of the new list',
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
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Ready to Translate?</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Filter for full reading frames
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              You&apos;ve been handed real viral fragments. Before any can be translated, keep only
              those that are a whole number of codons — <strong>loop, test each length, collect the
              keepers</strong> in a new list. (A real pipeline would translate them next.)
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
                  Submit your count
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit{' '}
                  <span className="text-bio-blue font-semibold">how many sequences are ready</span>{' '}
                  (the length of your new list).
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
            description="Test — keep the sequences ready to translate"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
