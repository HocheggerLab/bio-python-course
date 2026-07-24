'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Slice out the three codons (bases 0:3, 3:6, 6:9)',
  'Translate each with .get(codon, "?")',
  'One codon is missing from the table — let .get handle it',
  'Print the peptide joined with dashes',
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
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Translate by lookup</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Slice, then look up
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              This fuses both halves of today — <strong>slice</strong> a codon out of the sequence,
              then <strong>look it up</strong> in the table. One codon is deliberately missing.
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
                  Submit your peptide
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit your{' '}
                  <span className="text-bio-blue font-semibold">peptide</span> to today&apos;s poll.
                  Why does it contain a <span className="font-mono">?</span>
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
            description="Test — translate three codons by lookup"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
