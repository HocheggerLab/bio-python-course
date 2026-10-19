import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import TerminalBlock from '@/components/terminal/TerminalBlock'

const steps: React.ReactNode[] = [
  <>
    New file → <span className="font-mono text-white">hello.py</span> → type the two lines below.
  </>,
  <>
    <span className="font-mono text-white">⌘⇧P</span> / <span className="font-mono text-white">Ctrl+Shift+P</span>{' '}
    → <span className="text-white">&quot;Python: Select Interpreter&quot;</span> → the{' '}
    <span className="text-white">3.14</span> with <span className="font-mono text-white">uv</span> in its path.
  </>,
  <>
    Press <span className="text-white">▶</span> (top right). Then open the terminal —{' '}
    <span className="font-mono text-white">Ctrl+`</span> — and run it the Lab 2 way.
  </>,
]

export function Slide05FirstRun() {
  return (
    <>
      <SlideTitle>
        Your <GradientText variant="green">first run</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact">
            <CardList items={steps} numbered start={5} color="blue" />
          </SlideCard>

          {/* hello.py */}
          <div className="rounded-xl overflow-hidden border border-white/15 bg-[#1e1e2e] text-xs md:text-sm xl:text-base">
            <div className="px-3 py-1.5 bg-black/30 border-b border-white/10 text-gray-400 font-mono">hello.py</div>
            <pre className="px-3 py-2 font-mono text-gray-300 leading-relaxed overflow-x-auto">
              <span className="text-purple-300">import</span> platform{'\n'}
              <span className="text-sky-300">print</span>(<span className="text-green-300">&quot;Hello from Python&quot;</span>,
              platform.python_version())
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <TerminalBlock
            label="Terminal"
            mac={[
              { comment: '# after ▶ — VS Code ran it for you' },
              { out: 'Hello from Python 3.14.x' },
              { cmd: 'uv run hello.py' },
              { out: 'Hello from Python 3.14.x' },
            ]}
          />
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ✅ <span className="text-white">Same version both times?</span> Then ▶ and{' '}
              <span className="font-mono text-white">uv run</span> use the same Python. The{' '}
              <span className="text-white">status bar</span> (bottom right) should say 3.14 too.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              3.14 not in the list?
            </CardHeading>
            <CardBody>
              Choose <span className="text-white">&quot;Enter interpreter path…&quot;</span> and type{' '}
              <span className="font-mono text-white">~/.local/bin/python3.14</span> (Mac) or{' '}
              <span className="font-mono text-white">%USERPROFILE%\.local\bin\python3.14.exe</span> (Windows).
            </CardBody>
          </SlideCard>
        </div>
      </div>
    </>
  )
}
