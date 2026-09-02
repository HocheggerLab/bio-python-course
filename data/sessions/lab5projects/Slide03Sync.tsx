import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const SYNC = `uv sync

Using CPython 3.14.7
Creating virtual environment at: .venv
Resolved 1 package in 26ms

ls -a
.  ..  .venv  pyproject.toml  uv.lock`

const REBUILD = `# throw the whole environment away
rm -rf .venv

uv sync
Creating virtual environment at: .venv
Installed 1 package in 15ms

# ...and it is back`

export function Slide03Sync() {
  return (
    <>
      <SlideTitle>
        <GradientText variant="green">uv sync</GradientText> — make it real
      </SlideTitle>

      <SlideLead>
        <span className="font-mono text-white">uv sync</span> reads{' '}
        <span className="font-mono text-white">pyproject.toml</span> and makes the folder match it.
        This is the command that creates <span className="font-mono text-white">.venv</span>.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <CodeBox label="terminal" color="green">{SYNC}</CodeBox>
        <CodeBox label="the demo worth watching" color="yellow">{REBUILD}</CodeBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2">
            <span className="font-mono">.venv/</span> is disposable
          </CardHeading>
          <CardBody>
            A private copy of Python and its packages, belonging to{' '}
            <span className="text-white">this folder only</span>. Never edit it, never email it,
            never commit it — you can always rebuild it from the two files beside it.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2">
            This is how you run someone else&apos;s work
          </CardHeading>
          <CardBody>
            Given a project folder from a colleague — or from a paper —{' '}
            <span className="font-mono text-white">uv sync</span> is the one command that turns it
            into something you can actually run.
          </CardBody>
        </SlideCard>
      </div>

      <SlideNote>
        <span className="font-mono">uv.lock</span> appeared too. Ignore it for one more slide.
      </SlideNote>
    </>
  )
}
