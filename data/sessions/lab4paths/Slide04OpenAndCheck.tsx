import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import TerminalBlock from '@/components/terminal/TerminalBlock'

const inVsCode: React.ReactNode[] = [
  <>
    Open <span className="text-white">VS Code</span> → <span className="text-white">File → Open Folder</span> →{' '}
    <span className="text-white">New Folder</span> <span className="font-mono text-white">lab4</span> → Open.
  </>,
  <>
    Open the terminal <span className="text-white">inside</span> VS Code:{' '}
    <span className="font-mono text-white">Terminal → New Terminal</span>{' '}
    <span className="text-gray-400">(or ⌃` )</span>.
  </>,
  <>Type the command on the right and press Enter.</>,
]

export function Slide04OpenAndCheck() {
  return (
    <>
      <SlideTitle>
        Step 1 — Does <GradientText>Python</GradientText> run?
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Before any code: one folder, one terminal, one check.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3">
            In VS Code
          </CardHeading>
          <CardList items={inVsCode} numbered color="blue" />
        </SlideCard>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <TerminalBlock
            label="VS Code terminal"
            showToggle={false}
            mac={[{ cmd: 'uv run python --version' }, { out: 'Python 3.14.x' }]}
          />
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ✅ <span className="text-white">3.14?</span> You&apos;re ready. Put your green sticky up.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ⚠️ Anything else? Red sticky up — we fix this <span className="text-white">now</span>, before
              there is any code to confuse things. <span className="font-mono">uv python install 3.14</span> is
              usually the answer.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        Today we run everything from this terminal with <span className="font-mono text-white">uv run</span>.
        Ignore the ▶ button — one way to run code, the same for everyone.
      </SlideNote>
    </>
  )
}
