import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const ADD = `uv add numpy

Resolved 2 packages in 104ms
Installed 1 package in 41ms
 + numpy==2.5.2`

const TOML = `[project]
name = "neurons"
version = "0.1.0"
requires-python = ">=3.14"
dependencies = [
    "numpy>=2.5.2",     # <- uv wrote this
]`

export function Slide04AddNumpy() {
  return (
    <>
      <SlideTitle>
        <GradientText variant="green">uv add numpy</GradientText>
      </SlideTitle>

      <SlideLead>
        One command works out which version fits, installs it into{' '}
        <span className="font-mono text-white">.venv</span>, and — the part that matters — writes
        down what it did, in two different ways.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <CodeBox label="terminal" color="green">{ADD}</CodeBox>
        <CodeBox label="pyproject.toml, after" color="blue">{TOML}</CodeBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <CardBody>
            <span className="font-mono text-white">pyproject.toml</span> — &quot;numpy, 2.5.2 or
            later&quot;. A <span className="text-white">rule</span>, written for humans. This is the
            file you read and edit.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <CardBody>
            <span className="font-mono text-white">uv.lock</span> — &quot;numpy 2.5.2, this exact
            build&quot;. A <span className="text-white">receipt</span>, written for machines. Never
            edit it by hand.
          </CardBody>
        </SlideCard>
      </div>

      <SlideNote>
        The rule is what you meant. The receipt is what you got. Reproducibility needs both — and
        together they are why <span className="font-mono">uv sync</span> on another machine gives
        the same answer.
      </SlideNote>
    </>
  )
}
