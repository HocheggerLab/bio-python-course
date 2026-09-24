import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const INIT = `uv init --bare --vcs none neurons
cd neurons
ls -a

.  ..  pyproject.toml`

const TOML = `[project]
name = "neurons"
version = "0.1.0"
requires-python = ">=3.14"
dependencies = []`

export function Slide02Init() {
  return (
    <>
      <SlideTitle>
        <GradientText variant="green">uv init</GradientText> — a project is one file
      </SlideTitle>

      <SlideLead>
        A project is not a folder full of machinery. To begin with it is a{' '}
        <span className="text-white">single five-line file</span> saying what this piece of work is
        and what it needs.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <CodeBox label="terminal" color="green">{INIT}</CodeBox>
        <CodeBox label="pyproject.toml — all of it" color="blue">{TOML}</CodeBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2">
            Note what is <em>not</em> here
          </CardHeading>
          <CardBody>
            No <span className="font-mono text-white">.venv</span> yet.{' '}
            <span className="font-mono text-white">uv init</span> writes down your{' '}
            <span className="text-white">intention</span>; nothing has been installed. That is the
            next command.
          </CardBody>
        </SlideCard>
        <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="neutral" className="mb-2">
            Why the two flags
          </CardHeading>
          <CardBody>
            Plain <span className="font-mono text-white">uv init</span> also builds a{' '}
            <span className="font-mono text-white">src/</span> package and starts a git repository —
            both useful when you publish code, both noise today.{' '}
            <span className="font-mono text-white">--bare --vcs none</span> asks for neither.
          </CardBody>
        </SlideCard>
      </div>

      <SlideNote>
        <span className="font-mono">dependencies = []</span> is the interesting line. It is empty,
        and by the end of this session it will not be.
      </SlideNote>
    </>
  )
}
