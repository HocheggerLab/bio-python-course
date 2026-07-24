import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import PracticeTerminal, { type MissionStep } from '@/components/terminal/PracticeTerminal'

const mission: MissionStep[] = [
  {
    instruction: 'See where you are — type  pwd',
    expect: 'pwd',
    matchPrefix: true,
    hint: 'Type pwd and press Enter.',
    success: 'That’s your home folder’s full path.',
  },
  {
    instruction: 'Look around — type  ls',
    expect: 'ls',
    matchPrefix: true,
    hint: 'Type ls and press Enter.',
    success: 'Those are the folders in your home.',
  },
  {
    instruction: 'Make your course folder — type  mkdir bio-python',
    expect: 'mkdir bio-python',
    hint: 'Type exactly:  mkdir bio-python',
    success: 'Folder created. Run ls if you want to see it.',
  },
  {
    instruction: 'Go into it — type  cd bio-python',
    expect: 'cd bio-python',
    hint: 'Type:  cd bio-python',
    success: 'You’re inside bio-python now — see the prompt change.',
  },
  {
    instruction: 'Confirm where you landed — type  pwd',
    expect: 'pwd',
    matchPrefix: true,
    hint: 'Type pwd once more.',
    success: '🎉 That’s your new folder’s full path. Mission complete!',
  },
]

export function Slide02Mission() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Make Your Course Folder</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Five steps, following the prompts
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              The terminal will walk you through it. By the end you&apos;ll have made a folder called{' '}
              <span className="font-mono text-white">bio-python</span> and stepped inside it — the
              exact move you&apos;ll do for real, on your own machine, next.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              What you just did
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              You navigated a computer&apos;s file system <strong>from the keyboard</strong> — found
              where you were, looked around, created something, and moved into it. That&apos;s the
              whole job. Everything else is more of the same.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              Stuck? Hit <span className="text-white">show hint</span>. And remember —{' '}
              <span className="font-mono text-white">↺ reset</span> starts you over any time.
            </CardBody>
          </SlideCard>
        </div>

        <div className="min-h-0">
          <PracticeTerminal mission={mission} height="520px" />
        </div>

      </div>
    </>
  )
}
