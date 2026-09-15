import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'

const homework = [
  'Review the Lecture 1 slides',
  'Play around with today’s code exercises',
  'Try the GC calculator on a sequence of your choice',
  'Complete the practice quiz on Canvas',
]

export function Slide36Outlook() {
  return (
    <>
      <SlideTitle>
        What&apos;s <GradientText>Next</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            Before your workshop next week
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            💪 Coding is a muscle — it grows by use. Half an hour of practice between sessions is
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
