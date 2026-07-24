'use client'

import { QRCodeSVG } from 'qrcode.react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks = [
  'Loop over the codon start positions with range(frame, len(seq) - 2, 3)',
  'Slice each codon with seq[i:i+3] and look it up with .get(codon, "?")',
  'Add each amino acid onto protein — the accumulator',
  'Run it for frame 0, then change the frame to 1 and run again',
]

const initialCode = `# 60 real bases of phiX174 — the first genome ever sequenced.
seq = "TATGGTACGCTGGACTTTGTGGGATACCCTCGCTTTCCTGCTCCTGTTGAGTTTATTGCT"

# The full genetic code — provided for you (* = stop)
codon_table = {
    "TTT":"F","TTC":"F","TTA":"L","TTG":"L","TCT":"S","TCC":"S","TCA":"S","TCG":"S",
    "TAT":"Y","TAC":"Y","TAA":"*","TAG":"*","TGT":"C","TGC":"C","TGA":"*","TGG":"W",
    "CTT":"L","CTC":"L","CTA":"L","CTG":"L","CCT":"P","CCC":"P","CCA":"P","CCG":"P",
    "CAT":"H","CAC":"H","CAA":"Q","CAG":"Q","CGT":"R","CGC":"R","CGA":"R","CGG":"R",
    "ATT":"I","ATC":"I","ATA":"I","ATG":"M","ACT":"T","ACC":"T","ACA":"T","ACG":"T",
    "AAT":"N","AAC":"N","AAA":"K","AAG":"K","AGT":"S","AGC":"S","AGA":"R","AGG":"R",
    "GTT":"V","GTC":"V","GTA":"V","GTG":"V","GCT":"A","GCC":"A","GCA":"A","GCG":"A",
    "GAT":"D","GAC":"D","GAA":"E","GAG":"E","GGT":"G","GGC":"G","GGA":"G","GGG":"G",
}

frame = 0        # <-- the only thing you change on the second run

protein = ""
# your loop here:
#   for i in range(frame, len(seq) - 2, 3):
#       carve out the codon, look it up, add it to protein

print(f"Frame {frame}: {protein}")
`

const expectedOutput = `Frame 0: YGTLDFVGYPRFPAPVEFIA`

const hints = [
  'Start the loop from the frame, not from 0: “for i in range(frame, len(seq) - 2, 3):”.',
  'Inside the loop: “codon = seq[i:i+3]” then “protein = protein + codon_table.get(codon, "?")”.',
  'Frame 0 should give YGTLDFVGYPRFPAPVEFIA (20 amino acids).',
  'Now set frame = 1 and run again — you should get MVRWTLWDTLAFLLLLSLL. Same 60 bases, a completely different protein.',
]

export function Slide15aTIYTwoFrames() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Two Frames, Two Proteins</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — task + QR */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Now build the translator yourself
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              You&apos;ve just seen genes <strong>D</strong> and <strong>E</strong> fall out of the
              same 60 bases. This is the code that does it — everything from today, assembled:{' '}
              <strong>loop, range, slice, look up, accumulate</strong>. Make both proteins appear.
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
                  Submit both proteins
                </CardHeading>
                <p className="text-gray-300 text-[11px] md:text-sm xl:text-base leading-snug">
                  Scan with your phone — submit your{' '}
                  <span className="text-bio-blue font-semibold">two amino acid sequences</span>. Did
                  you get gene D <em>and</em> gene E out?
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
            description="Test — translate two reading frames"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
