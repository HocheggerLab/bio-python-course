import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import TerminalBlock from '@/components/terminal/TerminalBlock'

export function Slide02InstallUv() {
  return (
    <>
      <SlideTitle>
        Step 1 — <GradientText>Install uv &amp; get Python</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 flex-1 min-h-0">

        {/* install uv */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base">
            Paste this once. It installs <span className="font-mono text-white">uv</span> — the tool that manages Python for you.
            {' '}Copied straight from{' '}
            <a
              href="https://docs.astral.sh/uv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bio-blue underline underline-offset-2 hover:text-bio-yellow transition-colors"
            >
              docs.astral.sh/uv
            </a>.
          </p>
          <TerminalBlock
            label="Terminal"
            mac={[
              { cmd: 'curl -LsSf https://astral.sh/uv/install.sh | sh' },
              { out: 'installing uv…  ✔ uv is installed' },
            ]}
            windows={[
              { cmd: 'irm https://astral.sh/uv/install.ps1 | iex' },
              { out: 'installing uv…  ✔ uv is installed' },
            ]}
          />
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ⚠️ <span className="text-white">Close and reopen your terminal</span> afterwards — that&apos;s
              how it finds the new <span className="font-mono text-white">uv</span> command.
            </CardBody>
          </SlideCard>
        </div>

        {/* get python */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base">
            Now let uv fetch Python itself — and check it worked.
          </p>
          <TerminalBlock
            label="Terminal"
            showToggle={false}
            mac={[
              { cmd: 'uv python install 3.14' },
              { out: 'Installed Python 3.14' },
              { cmd: 'uv run python --version' },
              { out: 'Python 3.14.0' },
            ]}
          />
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ✅ If you see <span className="font-mono text-white">Python 3.14.x</span>, Python is on your
              machine — you never touched python.org.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
