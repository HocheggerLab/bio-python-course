import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import TerminalBlock from '@/components/terminal/TerminalBlock'

export function Slide03Repl() {
  return (
    <>
      <SlideTitle>
        Step 2 — <GradientText variant="yellow">A quick hello</GradientText> (then a catch)
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 flex-1 min-h-0 items-start">

        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base">
            <span className="font-mono text-white">uv run python</span> opens Python&apos;s live prompt
            (<span className="font-mono text-white">&gt;&gt;&gt;</span>). Type, and it answers instantly.
          </p>
          <TerminalBlock
            label="Python"
            showToggle={false}
            mac={[
              { cmd: 'uv run python' },
              { out: 'Python 3.14.0 — type exit() to leave' },
              { comment: '>>> species = ["oak", "birch", "hazel"]' },
              { comment: '>>> len(species)' },
              { out: '3' },
              { comment: '>>> exit()' },
            ]}
          />
        </div>

        <div className="flex flex-col justify-center gap-3 md:gap-4 min-h-0">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">…but where did it go?</CardHeading>
            <CardBody>
              The moment you typed <span className="font-mono text-white">exit()</span>, every variable
              vanished. <span className="text-white">Nothing was saved.</span>
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">That&apos;s the whole point of a file</CardHeading>
            <CardBody>
              The live prompt is great for a quick check. But real work lives in a{' '}
              <span className="font-mono text-white">.py</span> file you can save and re-run — which is
              exactly what&apos;s next.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
