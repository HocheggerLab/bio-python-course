import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import TerminalBlock from '@/components/terminal/TerminalBlock'

export function Slide03UvStart() {
  return (
    <>
      <SlideTitle>
        One command, a whole <GradientText variant="green">project</GradientText>
      </SlideTitle>

      <SlideLead>
        <span className="font-mono text-white">uv-start</span> is a small tool that builds a ready-made
        data analysis project. <span className="font-mono text-white">uvx</span> runs it straight from
        PyPI — nothing to install first.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <TerminalBlock
          label="Terminal (Mac) · PowerShell (Windows)"
          mac={[
            { comment: '# 1. bring uv up to date' },
            { cmd: 'uv self update' },
            { out: 'success: Upgraded uv to v0.13.x' },
            { comment: '# 2. build the project' },
            { cmd: 'uvx uv-start lab5-neurons --data' },
            { out: 'Data project template files copied successfully.' },
          ]}
        />

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              uvx = borrow a tool
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">uvx</span> downloads a tool into a throwaway
              environment, runs it once, and leaves nothing behind. Ideal for something you use at
              the start of a project and then not again.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              What it does for you
            </CardHeading>
            <CardBody>
              Makes the folder, a <span className="font-mono text-white">pyproject.toml</span>, a{' '}
              <span className="font-mono text-white">.venv</span> with numpy, pandas, matplotlib and
              seaborn, and VS Code settings for notebooks. By hand that is a dozen commands.
            </CardBody>
          </SlideCard>
        </div>
      </div>

      <SlideNote>
        Run it from your home folder — wherever a fresh terminal opens. The project appears as a new
        folder called <span className="font-mono">lab5-neurons</span>.
      </SlideNote>
    </>
  )
}
