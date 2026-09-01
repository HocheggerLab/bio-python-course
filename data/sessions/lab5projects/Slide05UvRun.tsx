import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const RUN = `# from inside the project folder
uv run analyse_neurons.py

# it quietly does all of this first:
#   is .venv there?      -> build it if not
#   does it match?       -> install anything missing
#   then run your script -> using THIS project's numpy`

export function Slide05UvRun() {
  return (
    <>
      <SlideTitle>
        <GradientText variant="green">uv run</GradientText> — the command you already know
      </SlideTitle>

      <SlideLead>
        You have been typing this since Lab 2. Nothing about it changes — but now it has a project
        to work with, so your <span className="font-mono text-white">import numpy</span> resolves.
      </SlideLead>

      <div className="mt-4 md:mt-6 max-w-4xl mx-auto w-full">
        <CodeBox label="terminal" color="green">{RUN}</CodeBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2">
            Where you stand matters
          </CardHeading>
          <CardBody>
            <span className="font-mono text-white">uv run</span> looks for the project in the folder
            you are <span className="text-white">in</span>. Run it from somewhere else and it will
            not find your numpy — the same &quot;where am I&quot; problem as Lab 4, one level up.
          </CardBody>
        </SlideCard>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2">
            In VS Code
          </CardHeading>
          <CardBody>
            <span className="text-white">File → Open Folder</span> on the project — not on a single
            file. The integrated terminal then opens in the right place, and the Python extension
            finds <span className="font-mono text-white">.venv</span> on its own.
          </CardBody>
        </SlideCard>
      </div>

      <SlideNote>
        No activating, no deactivating, no remembering which environment you are in. That is the
        part <span className="font-mono">uv</span> takes off your hands.
      </SlideNote>
    </>
  )
}
