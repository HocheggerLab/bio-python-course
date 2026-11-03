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
        data analysis project. Install it once, then use it for every project you start.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <TerminalBlock
          label="Terminal (Mac) · PowerShell (Windows)"
          mac={[
            { comment: '# 1. bring uv up to date' },
            { cmd: 'uv self update' },
            { out: 'success: Upgraded uv to v0.13.x' },
            { comment: '# 2. install uv-start, once per computer' },
            { cmd: 'uv tool install uv-start' },
            { out: 'Installed 1 executable: uv-start' },
            { comment: '# 3. build the project' },
            { cmd: 'uv-start lab5-neurons --data' },
            { out: 'Data project template files copied successfully.' },
          ]}
        />

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              A tool for the whole computer
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">uv tool install</span> gives uv-start its own
              environment and puts the command where every terminal finds it. Packages like numpy are
              different: they go in each project&apos;s <span className="font-mono text-white">.venv</span>.
              <span className="block mt-2 text-sm">
                <span className="font-mono text-white">uv tool list</span> shows your tools ·{' '}
                <span className="font-mono text-white">uv tool upgrade uv-start</span> updates one.
              </span>
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
        Run step 3 from your home folder — wherever a fresh terminal opens. The project appears as a
        new folder called <span className="font-mono">lab5-neurons</span>. Only need it once?{' '}
        <span className="font-mono">uvx uv-start@latest lab5-neurons --data</span> runs it without
        installing.
      </SlideNote>
    </>
  )
}
