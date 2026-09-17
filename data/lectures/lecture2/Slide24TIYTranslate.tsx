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
  { label: 'Slice out the three codons (bases 0:3, 3:6, 6:9)', accent: 'yellow' },
  { label: 'Translate each with .get(codon, "?")', accent: 'yellow' },
  { label: 'One codon is missing from the table — let .get handle it', accent: 'yellow' },
  { label: 'Print the peptide joined with dashes', accent: 'yellow' },
]


const initialCode = `seq = "ATGCGTTAA"
codon_table = {"ATG": "Met", "TAA": "Stop", "GGT": "Gly"}   # note: no CGT!

# 1. Slice out the three codons
codon1 = ""
codon2 = ""
codon3 = ""

# 2. Translate each — use .get so a missing codon gives "?" not a crash
aa1 = ""
aa2 = ""
aa3 = ""

print(f"Peptide: {aa1}-{aa2}-{aa3}")
`

const expectedOutput = `Peptide: Met-?-Stop`

const hints = [
  'Slice as in the last block: codon1 = seq[0:3], codon2 = seq[3:6], codon3 = seq[6:9].',
  'Translate with .get: aa1 = codon_table.get(codon1, "?").',
  'CGT is not in the table — that’s why .get returns "?" instead of raising a KeyError. That is the whole point of .get.',
]

export function Slide24TIYTranslate() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Translate by lookup</GradientText></>}
      intro={
        <>
          This task fuses both halves of today — <strong>slice</strong> a codon out of the sequence,
          then <strong>look it up</strong> in the table. One codon is deliberately missing.
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
        description="Test — translate three codons by lookup"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
