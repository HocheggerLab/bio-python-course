import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import TerminalBlock from '@/components/terminal/TerminalBlock'
import { CodeBox } from './CodeBox'

const steps: React.ReactNode[] = [
  <>&quot;Do you trust the authors?&quot; → <span className="text-white">Yes</span></>,
  <>
    &quot;Install recommended extensions?&quot; → <span className="text-white">Install</span> (Python,
    Jupyter, Ruff). Missed the pop-up? Extensions (
    <span className="text-white">⇧⌘X / Ctrl+Shift+X</span>) → search{' '}
    <span className="text-white">Jupyter</span> → <span className="text-white">Install</span>
  </>,
  <>Open <span className="font-mono text-white">sample.ipynb</span></>,
  <>
    <span className="text-white">Select Kernel</span> (top right) →{' '}
    <span className="text-white">Python Environments</span> →{' '}
    <span className="font-mono text-white">.venv</span>
  </>,
  <><span className="text-white">Run All</span></>,
]

const CHECK = `Mac:      …/lab5-neurons/.venv/bin/python
Windows:  …\\lab5-neurons\\.venv\\Scripts\\python.exe`

export function Slide06OpenInVsCode() {
  return (
    <>
      <SlideTitle>
        Open it in <GradientText>VS Code</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-3 md:mt-5 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <TerminalBlock
            label="same terminal"
            showToggle={false}
            mac={[{ cmd: 'cd lab5-neurons' }, { cmd: 'code .' }]}
          />
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              Then, in VS Code
            </CardHeading>
            <CardList items={steps} numbered color="green" />
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              The kernel is the whole trick
            </CardHeading>
            <CardBody>
              A notebook&apos;s <span className="text-white">kernel</span> is the Python that runs its
              cells. Pick <span className="font-mono text-white">.venv</span> and you get this
              project&apos;s packages. Pick anything else and{' '}
              <span className="font-mono text-white">import numpy</span> fails.
            </CardBody>
          </SlideCard>
          <CodeBox label="checkpoint — the first cell prints" color="green">{CHECK}</CodeBox>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ✅ Ends in <span className="font-mono">.venv</span>? Green sticky up. Anything else? Red
              sticky — see the last slide.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        Open the <em>folder</em>, not a single file — that is how VS Code finds{' '}
        <span className="font-mono">.venv</span> by itself.
      </SlideNote>
    </>
  )
}
