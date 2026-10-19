import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import TerminalBlock from '@/components/terminal/TerminalBlock'

const inVsCode: React.ReactNode[] = [
  <>
    Open <span className="text-white">VS Code</span> → <span className="text-white">File → Open Folder</span> →{' '}
    <span className="text-white">New Folder</span> <span className="font-mono text-white">lab3</span> → Open.
  </>,
  <>
    &quot;Do you trust the authors?&quot; → <span className="text-white">Yes</span> — it&apos;s your own folder.
  </>,
  <>
    Extensions sidebar → search <span className="text-white">&quot;Python&quot;</span> → Install.
  </>,
]

export function Slide04Setup() {
  return (
    <>
      <SlideTitle>
        Set up — <GradientText>once</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Watch the demo, then follow along. Python first, <span className="text-white">then</span> VS Code — so
        VS Code finds it when it starts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        {/* step 1: python, before VS Code */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <CardHeading size="sm" color="blue">
            1 · Check you have Python 3.14
          </CardHeading>
          <p className="text-gray-300 text-xs md:text-sm xl:text-base">
            In your terminal, before opening VS Code. You did this in Lab 2 — the first line is harmless if
            it&apos;s already there.
          </p>
          <TerminalBlock
            label="Terminal"
            showToggle={false}
            mac={[
              { cmd: 'uv python install 3.14' },
              { cmd: 'uv run python --version' },
              { out: 'Python 3.14.x' },
            ]}
          />
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ⚠️ <span className="font-mono text-white">uv: command not found</span>? Go back to Lab 2, step 1
              — install uv, then come back.
            </CardBody>
          </SlideCard>
        </div>

        {/* steps 2–4: in VS Code */}
        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3">
            Then, in VS Code
          </CardHeading>
          <CardList items={inVsCode} numbered start={2} color="green" />
          <CardBody className="mt-3 text-gray-400 text-xs md:text-sm">
            Check the extension is by <span className="text-white">Microsoft</span> — there are lookalikes.
          </CardBody>
        </SlideCard>
      </div>
    </>
  )
}
