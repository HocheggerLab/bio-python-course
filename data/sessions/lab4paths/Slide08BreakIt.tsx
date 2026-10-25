import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import TerminalBlock from '@/components/terminal/TerminalBlock'

export function Slide08BreakIt() {
  return (
    <>
      <SlideTitle>
        Step 6 — Break it <GradientText variant="yellow">on purpose</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Step one folder up and run both scripts again. Nothing in the code changes — only where you are standing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <TerminalBlock
          label="VS Code terminal"
          showToggle={false}
          mac={[
            { cmd: 'cd ..' },
            { cmd: 'uv run lab4/peek.py' },
            { out: 'Exists?      False' },
            { out: 'FileNotFoundError: ... sequences/Bombus_terrestris.fasta' },
            { cmd: 'uv run lab4/fasta_loop.py' },
            { out: '...' },
            { out: 'Read 99 sequences from sequences/' },
            { comment: '# and back again:' },
            { cmd: 'cd lab4' },
          ]}
        />

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="red" layout="start" padding="compact">
            <CardHeading size="sm" color="red">
              peek.py: <span className="font-mono">Path(&quot;sequences&quot;)</span>
            </CardHeading>
            <CardBody>
              A <span className="text-white">relative</span> path — relative to the folder your{' '}
              <span className="text-white">terminal</span> is in (<span className="font-mono">Path.cwd()</span>). Move
              the terminal, and it points somewhere else.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact">
            <CardHeading size="sm" color="green">
              fasta_loop.py: <span className="font-mono">Path(__file__).parent</span>
            </CardHeading>
            <CardBody>
              The folder the <span className="text-white">script</span> is saved in. Same answer from anywhere —
              this is the one you usually want.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        Read the error from the bottom up: the last line says <em>what</em> went wrong, the lines above say{' '}
        <em>where</em>.
      </SlideNote>
    </>
  )
}
