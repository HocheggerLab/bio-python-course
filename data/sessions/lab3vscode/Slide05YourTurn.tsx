import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const notToday = [
  'the debugger & breakpoints',
  'virtual environments',
  'the git panel',
  'any extension beyond Python',
]

export function Slide05YourTurn() {
  return (
    <>
      <SlideTitle>
        Your turn — <GradientText variant="green">write it yourself</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              The task — <span className="font-mono">spike_detector.py</span>
            </CardHeading>
            <CardBody>
              In a new file: make a list of spike counts, <span className="text-white">loop</span> over it, and
              classify each bin silent / active / bursting with{' '}
              <span className="font-mono text-white">if / elif / else</span> — then{' '}
              <span className="text-white">tally</span> them into a dict. Everything from this lab&apos;s
              notebooks, now one real program on your machine.
            </CardBody>
          </SlideCard>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              Run &amp; iterate
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">uv run spike_detector.py</span>, read the output, change a
              threshold, run again. That edit-run loop is the whole point.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              Stuck?
            </CardHeading>
            <CardBody>
              A reference <span className="font-mono text-white">spike_detector.py</span> is in the Lab 3 folder —
              peek if you need to, but <span className="text-white">type your own first</span>.
            </CardBody>
          </SlideCard>
          <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="neutral" className="mb-2">
              Not today
            </CardHeading>
            <CardList items={notToday} bullet="✗" color="neutral" />
            <CardBody className="mt-2 text-gray-400 text-xs md:text-sm">
              You don&apos;t need any of these yet — we&apos;ll add them when they earn their place.
            </CardBody>
          </SlideCard>
        </div>
      </div>
    </>
  )
}
