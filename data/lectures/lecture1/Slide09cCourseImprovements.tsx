import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import {
  SlideCard,
  CardHeading,
  CardBody,
  CardList,
} from '@/components/slides/SlideCard'

const feedback = [
  <>Lectures are <strong>too fast-paced</strong></>,
  <>We need <strong>step-by-step workshops</strong></>,
  <>Practice tasks are <strong>too difficult</strong></>,
  <>Final project is <strong>too complex</strong></>
]

const changes = [
  <>Slower pace — <strong>8 lectures, not 5</strong></>,
  <>Workshops split into <strong>shorter, focused tasks</strong></>,
  <>Practice tasks <strong>build up step by step</strong></>,
  <>Final project <strong>streamlined</strong></>,
]

const highlights = [
  <>A rounded <strong>introduction to Python</strong> for biosciences</>,
  <>Clear progression to <strong>real data analysis</strong></>,
  <>Plenty of <strong>hands-on practice</strong> and support</>
]

const methods = [
  { icon: '📊', text: "Polls in workshops" },
  { icon: '📝', text: "End-of-term questionnaire" },
  { icon: '👨‍🏫', text: "In person / by email" },
]

export function Slide09cCourseImprovements() {
  return (
    <>
      <SlideTitle>
        Improving <GradientText>this module</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 mt-3 md:mt-4">

        {/* Three sub-cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-6">
          <SlideCard color="yellow" layout="start" padding="compact">
            <span className="text-xl md:text-3xl xl:text-4xl">💬</span>
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Last year's students said
            </CardHeading>
            <CardList items={feedback} bullet="→" color="yellow" className="gap-1.5 md:gap-2 xl:gap-3" />
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact">
            <span className="text-xl md:text-3xl xl:text-4xl">🛠</span>
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              We did
            </CardHeading>
            <CardList items={changes} bullet="✓" color="green" className="gap-1.5 md:gap-2 xl:gap-3" />
          </SlideCard>

          <SlideCard color="purple" layout="start" padding="compact">
            <span className="text-xl md:text-3xl xl:text-4xl">✨</span>
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              This year's module (we hope)
            </CardHeading>
            <CardList items={highlights} bullet="⭐" color="purple" className="gap-1.5 md:gap-2 xl:gap-3" />
          </SlideCard>
        </div>

        {/* How we collect feedback — one row, so the three cards above keep
            the height they need and the whole slide still fits a projector. */}
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-xl md:text-3xl">🗣</span>
            <CardHeading size="sm" color="blue">How to give us feedback</CardHeading>
            <p className="text-sm md:text-lg text-gray-300">
              We value <span className="text-bio-blue font-semibold">your feedback</span> and do
              our best to <span className="text-bio-blue font-semibold">act on it!</span>
            </p>
          </div>

          <div className="mt-3 md:mt-4 flex flex-wrap items-center gap-3 md:gap-6">
            {methods.map((a) => (
              <div key={a.icon} className="flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-3xl">{a.icon}</span>
                <p className="text-xs md:text-base text-gray-300 leading-snug">{a.text}</p>
              </div>
            ))}
          </div>
        </SlideCard>

      </div>
    </>
  )
}