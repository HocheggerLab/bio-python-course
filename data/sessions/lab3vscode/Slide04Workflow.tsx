import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const setup: React.ReactNode[] = [
  <>
    Open <span className="text-white">VS Code</span> — from Applications / the Start menu.
  </>,
  <>
    Install the <span className="text-white">Python extension</span> — Extensions sidebar → search
    &quot;Python&quot;.
  </>,
  <>
    Open your folder — <span className="text-white">File → Open Folder</span>.
  </>,
  <>
    Command Palette → <span className="text-white">&quot;Install &lsquo;code&rsquo; command in PATH&quot;</span>{' '}
    — so <span className="font-mono text-white">code .</span> works next time.
  </>,
]

const loop: React.ReactNode[] = [
  <>
    New file → <span className="font-mono text-white">spike_detector.py</span>.
  </>,
  <>
    Write your code — autocomplete helps as you type.
  </>,
  <>
    Run it: <span className="font-mono text-white">uv run spike_detector.py</span>.
  </>,
  <>
    Read the output → tweak → run again. <span className="text-white">That&apos;s the loop.</span>
  </>,
]

export function Slide04Workflow() {
  return (
    <>
      <SlideTitle>
        The <GradientText variant="green">workflow</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Watch the demo, then follow along. You set up <span className="text-white">once</span> — then it&apos;s
        just edit &amp; run.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <SlideCard color="blue" layout="start" padding="compact">
          <CardHeading size="sm" color="blue" className="mb-3">
            Set up once
          </CardHeading>
          <CardList items={setup} numbered color="blue" />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact">
          <CardHeading size="sm" color="green" className="mb-3">
            The loop — every time
          </CardHeading>
          <CardList items={loop} numbered color="green" />
        </SlideCard>
      </div>

      <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4 mt-3 md:mt-4">
        <CardBody>
          💡 <span className="font-mono text-white">⌘⇧P</span> /{' '}
          <span className="font-mono text-white">Ctrl+Shift+P</span> opens the{' '}
          <span className="text-white">Command Palette</span> — every command. (Plain{' '}
          <span className="font-mono text-white">⌘P</span> jumps to files; type{' '}
          <span className="font-mono text-white">&gt;</span> to turn it into the palette.)
        </CardBody>
      </SlideCard>
    </>
  )
}
