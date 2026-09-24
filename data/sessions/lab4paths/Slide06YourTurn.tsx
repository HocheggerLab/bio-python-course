import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

/** TODO: replace with the real Zenodo DOI once the record is published. */
const ZENODO_URL = '#'

const steps: React.ReactNode[] = [
  <>
    <span className="text-white">Download</span> <span className="font-mono">bee_coi_sequences.zip</span>{' '}
    and unzip it. Remember where it went.
  </>,
  <>
    Open <span className="font-mono text-white">drift.py</span> in VS Code.
  </>,
  <>
    Fill in the <span className="text-white">five TODOs</span> — every one of them is about finding,
    reading or writing files.
  </>,
  <>
    <span className="font-mono text-white">uv run drift.py</span> — then read the error, fix, run
    again.
  </>,
  <>
    Open <span className="font-mono text-white">results/drift.csv</span>. That file did not exist
    when you started.
  </>,
]

const OUTPUT = `Read 99 sequences from sequences/
Wrote 98 rows to .../results/drift.csv

species                        DNA  protein  silent
Bombus_cryptarum                36        1      35
Bombus_lucorum                  43        2      41
Bombus_ignitus                  48        5      43
Nomioides_minutissimus         152       61      91
Ceylalictus_variegatus         156       58      98
Andrena_agilissima             173       53     120`

export function Slide06YourTurn() {
  return (
    <>
      <SlideTitle>
        Your turn — <GradientText variant="green">99 bees</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-3 md:mt-5 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-3">
              The job
            </CardHeading>
            <CardList items={steps} numbered color="green" />
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              The biology is <span className="text-white">already written</span> — the codon table,{' '}
              <span className="font-mono text-white">translate()</span>, the comparison. You are not
              here to do genetics today. You are here to point a program at a folder.
            </CardBody>
          </SlideCard>

          <div className="flex justify-center">
            <a
              href={ZENODO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30
                         border border-bio-green/40 text-bio-green font-semibold
                         px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
            >
              ⬇ Download the sequences →
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <CodeBox label="what a finished run looks like" color="yellow">{OUTPUT}</CodeBox>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              Read that first row again
            </CardHeading>
            <CardBody>
              Thirty-six differences in the DNA. <span className="text-white">One</span> in the
              protein. The gene drifts; the enzyme it builds barely moves — because natural
              selection can only see the protein.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        Everyone&apos;s first run fails, and everyone&apos;s fails differently — that is TODO 1
        doing its job.
      </SlideNote>
    </>
  )
}
