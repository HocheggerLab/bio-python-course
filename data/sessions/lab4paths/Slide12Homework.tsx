import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const levels: React.ReactNode[] = [
  <>
    <span className="text-white">Level 1 — GC content.</span> Write{' '}
    <span className="font-mono">gc_content(dna)</span> and print it next to every bee.
  </>,
  <>
    <span className="text-white">Level 2 — write a file.</span> Save every row to{' '}
    <span className="font-mono">results/bee_summary.csv</span> with{' '}
    <span className="font-mono">open(..., &quot;w&quot;)</span>.
  </>,
  <>
    <span className="text-white">Level 3 — stretch.</span> Translate every gene and count how far each bee has
    drifted from the buff-tailed bumblebee.
  </>,
]

const DRIFT = `species,dna_diffs,protein_diffs
...
Andrena_agilissima,173,53
...
Bombus_cryptarum,36,1
...
Bombus_terrestris,0,0
...`

export function Slide12Homework() {
  return (
    <>
      <SlideTitle>
        Homework — make it <GradientText variant="yellow">produce something</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact">
            <CardHeading size="sm" color="yellow" className="mb-3">
              Build on fasta_loop.py
            </CardHeading>
            <CardList items={levels} numbered color="yellow" />
          </SlideCard>
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              📜 Every step has a hint <span className="text-white">at the bottom of the file</span>. Do one step, run
              it, then the next. The <span className="text-white">self-checks</span> on the last lines tell you where you
              are: ⏳ not started · ❌ what to fix · ✅ done.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <CodeBox label="level 3 — results/drift.csv" color="green">{DRIFT}</CodeBox>
          <SlideCard color="green" layout="start" padding="compact">
            <CardHeading size="sm" color="green">
              Look at Bombus_cryptarum
            </CardHeading>
            <CardBody>
              Thirty-six differences in the DNA. <span className="text-white">One</span> in the protein. Why would a
              gene change so much more than the protein it builds?
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        The Lab 4 notes cover reading and writing files in full — keep them open while you work.
      </SlideNote>
    </>
  )
}
