import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const partTwo = [
  'Read and use other people’s code — libraries & documentation',
  'pandas — real data tables (the spreadsheet, in Python)',
  'matplotlib — turn a column of numbers into a figure',
  'scipy — the statistics to back up what the figure shows',
]

const practice = [
  'Re-open the Colab and rebuild the translator from a blank cell',
  'Feed it a messy sequence — check it refuses, loudly',
  'Half an hour of practice beats re-watching the lecture',
]

export function Slide26Outlook() {
  return (
    <>
      <SlideTitle>
        What&apos;s <GradientText>Next</GradientText> — From Writing Code to Using It
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Part 2 — Python &amp; Data in Biology
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            So far you&apos;ve written <strong>every line yourself</strong> — that&apos;s how you learn
            what the machine is really doing. Real data science is the opposite: you stand on{' '}
            <strong>libraries other people wrote</strong>, and your job is to read them, trust the
            right ones, and glue them together.
          </CardBody>
          <CardList items={partTwo} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Between now and then
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Everything you just learned still applies — a <span className="font-mono">DataFrame</span>{' '}
            is a container you loop over, a plot is a function you call, a bad row is data you have to
            handle. You&apos;re not starting over. You&apos;re <strong>scaling up</strong>.
          </CardBody>
          <CardList items={practice} bullet="→" color="yellow" />
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3 md:mt-4 italic">
            See you in Part 2!
          </p>
        </SlideCard>

      </div>
    </>
  )
}
