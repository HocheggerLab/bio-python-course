import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const TREE = `lab5-neurons/
├── pyproject.toml   the list of packages
├── uv.lock          their exact versions
├── .venv/           the packages themselves
├── data/            raw data — read it, never overwrite it
├── results/         figures and tables you make
├── sample.ipynb     a notebook to test the setup
├── README.md        how all of this works
└── .vscode/         settings + recommended extensions`

const ADD = `uv add scipy        # need another package?
                    # → pyproject.toml, uv.lock and .venv
                    #   all updated in one go`

export function Slide04WhatYouGot() {
  return (
    <>
      <SlideTitle>
        What you <GradientText>got</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-3 md:mt-5 items-start">
        <CodeBox label="lab5-neurons" color="green">{TREE}</CodeBox>

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              data/ in, results/ out
            </CardHeading>
            <CardBody>
              Raw data stays untouched in <span className="font-mono text-white">data/</span>; anything
              your code makes goes to <span className="font-mono text-white">results/</span>. Delete
              results/ and you can always make it again. Lose data/ and you cannot.
            </CardBody>
          </SlideCard>
          <CodeBox label="later" color="blue">{ADD}</CodeBox>
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              Never pip install here
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">uv add</span> writes the package into{' '}
              <span className="font-mono text-white">pyproject.toml</span>, so the next person&apos;s{' '}
              <span className="font-mono text-white">uv sync</span> gets it too.{' '}
              <span className="font-mono text-white">pip install</span> does not.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        The same layout works for your final project — and for every analysis after it.
      </SlideNote>
    </>
  )
}
