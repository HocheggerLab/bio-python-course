import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const ADD = `uv add numpy

Resolved 2 packages in 12ms
Installed 1 package in 48ms
 + numpy==2.4.6`

const TOML = `[project]
name = "neurons"
version = "0.1.0"
requires-python = ">=3.12"
dependencies = [
    "numpy>=2.4.6",     # <- this line is new
]`

export function Slide03AddNumpy() {
  return (
    <>
      <SlideTitle>
        <GradientText variant="green">uv add numpy</GradientText>
      </SlideTitle>

      <SlideLead>
        One command does three things: works out which version fits, downloads it into{' '}
        <span className="font-mono text-white">.venv/</span>, and writes down what it did.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <CodeBox label="in the terminal" color="green">{ADD}</CodeBox>
        <CodeBox label="pyproject.toml, after" color="blue">{TOML}</CodeBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <CardBody>
            <span className="font-mono text-white">pyproject.toml</span> says{' '}
            <span className="text-white">&quot;numpy, 2.4.6 or later&quot;</span> — a rule.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <CardBody>
            <span className="font-mono text-white">uv.lock</span> says{' '}
            <span className="text-white">&quot;numpy 2.4.6, this exact build&quot;</span> — a
            receipt. That is what makes it reproducible.
          </CardBody>
        </SlideCard>
      </div>

      <SlideNote>
        Give someone your folder and they run <span className="font-mono">uv sync</span> — they get
        byte-for-byte your setup, on a different machine, a year later.
      </SlideNote>
    </>
  )
}
