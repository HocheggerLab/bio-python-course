import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const HANDOVER = `# still in the terminal, inside neurons/
code .

# from here on, VS Code's own terminal:
uv run analyse_neurons.py`

const CONTRAST = `python3 analyse_neurons.py
ModuleNotFoundError: No module named 'numpy'

uv run analyse_neurons.py
5 neurons, ranked by their response...`

const order: React.ReactNode[] = [
  <>Terminal: <span className="font-mono text-white">uv init</span> · <span className="font-mono text-white">uv sync</span> · <span className="font-mono text-white">uv add numpy</span></>,
  <>Then <span className="font-mono text-white">code .</span> to open <em>that folder</em></>,
  <>Everything after that in VS Code</>,
]

export function Slide06Handover() {
  return (
    <>
      <SlideTitle>
        Terminal first, then <GradientText>VS Code</GradientText>
      </SlideTitle>

      <SlideLead>
        Build the project in the terminal, <span className="text-white">then</span> open it. Do it
        the other way round and VS Code&apos;s terminal starts in some other folder — and your
        project lands where you cannot find it.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <CodeBox label="the handover" color="green">{HANDOVER}</CodeBox>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              The order that works
            </CardHeading>
            <CardList items={order} numbered color="green" />
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <CodeBox label="what uv run is actually for" color="yellow">{CONTRAST}</CodeBox>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              Open the <em>folder</em>, not the file
            </CardHeading>
            <CardBody>
              <span className="text-white">File → Open Folder</span> on{' '}
              <span className="font-mono text-white">neurons/</span>. VS Code then finds{' '}
              <span className="font-mono text-white">.venv</span> by itself, and its terminal opens
              in the right place. Open a lone <span className="font-mono text-white">.py</span> and
              neither happens.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        No activating, no deactivating, no wondering which environment you are in —{' '}
        <span className="font-mono">uv run</span> works that out from the folder you are standing in.
      </SlideNote>
    </>
  )
}
