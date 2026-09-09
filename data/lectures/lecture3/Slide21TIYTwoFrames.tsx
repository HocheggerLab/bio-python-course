'use client'

import { QRCodeSVG } from 'qrcode.react'
import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

// Lecturer's permanent Poll Everywhere room.
// Rotate the active poll inside the Poll Everywhere dashboard before class — no redeploy needed.
const POLL_URL = 'https://pollev.com/your-handle'

const tasks: Step[] = [
  { label: 'Loop over the codon start positions with range(frame, len(seq) - 2, 3)', accent: 'yellow' },
  { label: 'Slice each codon with seq[i:i+3] and look it up with .get(codon, "?")', accent: 'yellow' },
  { label: 'Add each amino acid onto protein — the accumulator', accent: 'yellow' },
  { label: 'Run it for frame 0, then change the frame to 1 and run again', accent: 'yellow' },
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

export function Slide21TIYTwoFrames() {
  return (
    <ExerciseSlide
      title={<>Try it Yourself — <GradientText variant="yellow">Two Frames, Two Proteins</GradientText></>}
      intro={
        <>
          You&apos;ve just seen genes <strong>D</strong> and <strong>E</strong> fall out of the
          same 60 bases. This is the code that does it — everything from today, assembled:{' '}
          <strong>loop, range, slice, look up, accumulate</strong>. Make both proteins appear.
        </>
      }
      steps={tasks}
    >
      <LazyPythonRunner
        initialCode={initialCode}
        expectedOutput={expectedOutput}
        hints={hints}
        height="562px"
        description="Test — translate two reading frames"
        staticOutput={expectedOutput}
      />
    </ExerciseSlide>
  )
}
