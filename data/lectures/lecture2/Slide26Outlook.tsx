import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const controlFlow = [
  'Loops — repeat the lookup for every codon, not just three',
  'Conditionals — if / else to make decisions ("is this a stop codon?")',
  'Combine them — walk a whole gene and stop when you hit a Stop',
  'The program decides what to do — it runs itself',
]

const practice = [
  'Re-open today’s Colab notebook and re-do the codon translator',
  'Try it on a longer sequence — notice how tedious three-by-three gets',
  'Half an hour of practice beats re-watching the lecture',
]

export function Slide26Outlook() {
  return (
    <>
      <SlideTitle>
        What&apos;s <GradientText>Next</GradientText> — Programs That Run Themselves
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Session 3 — control flow
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Today you translated <strong>three</strong> codons by hand. But a real gene has{' '}
            <strong>hundreds</strong> — you can&apos;t write a line for each. Next time we hand the
            repetition to the computer, so it can run through a whole sequence on its own.
          </CardBody>
          <CardList items={controlFlow} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Between now and then
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            You now have every piece a translator needs — a sequence, a way to slice it, and a table
            to look codons up in. Control flow is what turns those pieces into one autonomous program.
          </CardBody>
          <CardList items={practice} bullet="→" color="yellow" />
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3 md:mt-4 italic">
            See you next week!
          </p>
        </SlideCard>

      </div>
    </>
  )
}
