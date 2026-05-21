import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const sessionTwo = [
  'Strings as sequences — len(), indexing, slicing',
  'More string methods — .upper(), .replace(), splitting',
  'Lists — holding many sequences at once',
  'for-loops — run the GC calculator on each one',
]

const homework = [
  'Open the Session 1 Colab notebook',
  'Re-do today’s exercises in your own words',
  'Try the calculator on a sequence you choose',
]

export function Slide30Outlook() {
  return (
    <>
      <SlideTitle>
        What&apos;s <GradientText>Next</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Session 2 — scaling up the calculator
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Today you analysed <strong>one</strong> sequence. But Claudia has{' '}
            <strong>10,000</strong>. What if we started with <strong>200</strong>?
          </CardBody>
          <CardList items={sessionTwo} bullet="▸" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Between now and then
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Coding is a muscle — it grows by use. Half an hour of practice between sessions is
            worth more than re-watching the lecture.
          </CardBody>
          <CardList items={homework} bullet="→" color="yellow" />
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3 md:mt-4 italic">
            See you next week!
          </p>
        </SlideCard>

      </div>
    </>
  )
}
