import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

/** TODO: replace with the real Zenodo DOI once the record is published. */
const ZENODO_URL = '#'

const steps: React.ReactNode[] = [
  <>
    <span className="font-mono text-white">uv init --bare --vcs none neurons</span> &nbsp;·&nbsp;{' '}
    <span className="font-mono text-white">cd neurons</span>
  </>,
  <>
    <span className="font-mono text-white">uv sync</span> — watch{' '}
    <span className="font-mono text-white">.venv</span> appear &nbsp;·&nbsp;{' '}
    <span className="font-mono text-white">uv add numpy</span>
  </>,
  <>
    <span className="text-white">Download</span> the five recordings and unzip them into the
    project, then drop <span className="font-mono text-white">analyse_neurons.py</span> in.
  </>,
  <>
    <span className="font-mono text-white">code .</span> — open the{' '}
    <span className="text-white">folder</span>, and fill in the four TODOs.
  </>,
  <>
    <span className="font-mono text-white">uv run analyse_neurons.py</span>
  </>,
]

const OUTPUT = `5 neurons, ranked by their response to the go cue

neuron                       trials    peak     at
neuron_0406_20180620_8          121   1.064   0.6s
neuron_0406_20180620_11         121   0.548   0.9s
neuron_0588_20180928_14         238   0.336   0.6s
neuron_0588_20180828_5          254   0.262   2.1s
neuron_1140_20190614_72         162   0.071   2.6s`

export function Slide07YourTurn() {
  return (
    <>
      <SlideTitle>
        Your turn — <GradientText variant="green">five neurons</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-3 md:mt-5 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-3">
              The job
            </CardHeading>
            <CardList items={steps} numbered color="green" />
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
              ⬇ Download the five recordings →
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <CodeBox label="what a finished run looks like" color="yellow">{OUTPUT}</CodeBox>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              Then the stretch — and it matters
            </CardHeading>
            <CardBody>
              Re-rank by <span className="text-white">go minus nogo</span>. The neuron at the top
              responds hardest to everything you show it, so it tells the mouse nothing. On
              selectivity it drops to second — and the lecture&apos;s neuron takes first place.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        The analysis is the one you wrote in the notebooks. What is new is that it runs on your
        machine, on data you fetched, in an environment you built.
      </SlideNote>
    </>
  )
}
