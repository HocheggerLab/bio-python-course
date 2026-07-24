'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Write one function: def gc_content(seq):',
  'Give it a docstring — what goes in, what comes out',
  'return the percentage (don’t print it)',
  'Call it three times — one per sequence',
  'Submit how many lines your whole program is',
]

const initialCode = `# The GC calculation from Session 1 — copy-pasted THREE times.
# Same six lines, over and over. This is "spaghetti code".
# Refactor it: write gc_content(seq) ONCE, then call it three times.

seq1 = "ATGCGTACGTAGGCTA"
gc1 = (seq1.count("G") + seq1.count("C")) / len(seq1) * 100
gc1 = round(gc1, 1)
print(f"seq1 GC: {gc1}%")

seq2 = "GGGCGCGCGCAATATA"
gc2 = (seq2.count("G") + seq2.count("C")) / len(seq2) * 100
gc2 = round(gc2, 1)
print(f"seq2 GC: {gc2}%")

seq3 = "ATATCGATATTTAAAA"
gc3 = (seq3.count("G") + seq3.count("C")) / len(seq3) * 100
gc3 = round(gc3, 1)
print(f"seq3 GC: {gc3}%")
`

const expectedOutput = `seq1 GC: 50.0%
seq2 GC: 62.5%
seq3 GC: 12.5%`

const hints = [
  'Start the package: “def gc_content(seq):”, then indent everything the function does underneath it.',
  'The body is the calculation with “seq” in place of seq1/seq2/seq3: gc = seq.count("G") + seq.count("C").',
  'Hand the number back instead of printing it: “return round(gc / len(seq) * 100, 1)”.',
  'Right under the def line, add a docstring in triple quotes: """Return the GC content of a DNA sequence as a percentage.""".',
  'Now the calls are one line each: print(f"seq1 GC: {gc_content(\'ATGCGTACGTAGGCTA\')}%") — repeat for the other two. Same output, far fewer lines.',
]

export function Slide12TIYPackageGC() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Package the Spaghetti</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              One function, called three times
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              The GC calculation you wrote in Session 1 is here <strong>three times over</strong> —
              the same six lines, copy-pasted. Fix it: write a proper{' '}
              <span className="font-mono">gc_content(seq)</span> function{' '}
              <strong>once</strong>, with a docstring, and call it. Same three answers, far fewer
              lines.
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
                  Submit your line count
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit{' '}
                  <span className="text-bio-blue font-semibold">how many lines</span> your whole
                  program is now. The spaghetti is <strong>12</strong> — can you get under{' '}
                  <strong>10</strong>?
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
            description="Refactor — package the repeated GC calculation into one function"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
