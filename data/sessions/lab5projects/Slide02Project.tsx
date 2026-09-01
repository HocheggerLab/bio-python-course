import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const INIT = `uv init neurons
cd neurons
ls -a

.venv/          <- the packages live here
pyproject.toml  <- what you asked for
uv.lock         <- exactly what you got
main.py         <- a starter file`

export function Slide02Project() {
  return (
    <>
      <SlideTitle>
        A <GradientText>project</GradientText>, not a loose script
      </SlideTitle>

      <SlideLead>
        In Lab 2 you ran a single file. From now on your work lives in a{' '}
        <span className="text-white">folder that knows what it needs</span> — and one command
        builds it.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <CodeBox label="one command" color="green">{INIT}</CodeBox>

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              <span className="font-mono">pyproject.toml</span> — your intent
            </CardHeading>
            <CardBody>
              A short, readable file naming your project and the packages it needs. This is the one
              you edit and the one you would email a colleague.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              <span className="font-mono">.venv/</span> — the actual code
            </CardHeading>
            <CardBody>
              A private copy of Python and every package, belonging to{' '}
              <span className="text-white">this folder only</span>. Delete it and{' '}
              <span className="font-mono text-white">uv sync</span> rebuilds it. Never edit it,
              never commit it.
            </CardBody>
          </SlideCard>
        </div>
      </div>
    </>
  )
}
