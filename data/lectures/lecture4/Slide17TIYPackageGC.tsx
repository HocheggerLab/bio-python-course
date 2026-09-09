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
  { label: 'Write one function: def gc_content(seq):', accent: 'yellow' },
  { label: 'Give it a docstring — what goes in, what comes out', accent: 'yellow' },
  { label: 'return the percentage (don’t print it)', accent: 'yellow' },
  { label: 'Call it three times — one per sequence', accent: 'yellow' },
  { label: 'Submit how many lines your whole program is', accent: 'yellow' },
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

export function Slide17TIYPackageGC() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Package the Spaghetti</GradientText></>}
      intro={
        <>
          The GC calculation you wrote in Session 1 is here <strong>three times over</strong> —
          the same six lines, copy-pasted. Fix it: write a proper{' '}
          <span className="font-mono">gc_content(seq)</span> function{' '}
          <strong>once</strong>, with a docstring, and call it. Same three answers, far fewer
          lines.
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
        description="Refactor — package the repeated GC calculation into one function"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
