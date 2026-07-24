import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import PracticeTerminal from '@/components/terminal/PracticeTerminal'

export function Slide01Sandbox() {
  return (
    <>
      <SlideTitle>
        Your First Terminal — <GradientText variant="green">Safe to Touch</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              A conversation, not a hacker screen
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              You type a line, the computer answers. This one is a <strong>sandbox</strong> — it isn&apos;t
              your real machine, so you <strong>cannot break anything</strong>. Poke at it.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Try these, in order
            </CardHeading>
            <CardList
              color="blue"
              numbered
              items={[
                <><span className="font-mono text-white">help</span> — see what you can do</>,
                <><span className="font-mono text-white">pwd</span> — where am I?</>,
                <><span className="font-mono text-white">ls</span> — what&apos;s here?</>,
                <><span className="font-mono text-white">cd Downloads</span> then <span className="font-mono text-white">ls</span></>,
                <><span className="font-mono text-white">cd ..</span> — go back</>,
              ]}
            />
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              Flip the <span className="text-white">🍎 macOS / ⊞ Windows</span> switch and watch the
              prompt and path change — <strong>the commands stay identical</strong>. That&apos;s the
              whole cross-platform story in one toggle.
            </CardBody>
          </SlideCard>
        </div>

        <div className="min-h-0">
          <PracticeTerminal height="520px" />
        </div>

      </div>
    </>
  )
}
