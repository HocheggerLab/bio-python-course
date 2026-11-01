import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const FLOW = `pypi.org                    600,000 packages, free to download
   │
   │   uv downloads numpy, pandas, matplotlib …
   ▼
my-project/.venv/           a private copy of Python
                            + exactly those packages`

const FILES = `pyproject.toml   the list:  "numpy, pandas, matplotlib"
uv.lock          the exact versions:  numpy 2.5.4 …
.venv/           the packages themselves`

export function Slide02Environments() {
  return (
    <>
      <SlideTitle>
        Where packages <GradientText>come from</GradientText> — and where they go
      </SlideTitle>

      <SlideLead>
        numpy lives on <span className="text-white">PyPI</span>, the Python Package Index. Getting
        it means downloading it — and the only real question is <em>where to put it</em>.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <CodeBox label="download → install" color="blue">{FLOW}</CodeBox>
          <CodeBox label="three things every project has" color="green">{FILES}</CodeBox>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">
              One shared pile
            </CardHeading>
            <CardBody>
              Your dissertation needs numpy 1.26, a new tool needs 2.5. Install both for the whole
              machine and one of them breaks — usually the one you are not looking at.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              One pile per project
            </CardHeading>
            <CardBody>
              Each project folder gets its own <span className="font-mono text-white">.venv</span> — a{' '}
              <span className="text-white">virtual environment</span>. They cannot see each other,
              so they cannot break each other.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        <span className="font-mono">pyproject.toml</span> + <span className="font-mono">uv.lock</span> let a
        collaborator — or you-in-two-years — rebuild exactly your environment with one command.
      </SlideNote>
    </>
  )
}
