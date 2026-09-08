import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import {
  SlideCard,
  CardHeading,
  CardBody,
  CardList,
} from '@/components/slides/SlideCard'

const feedback = [
  <>Lectures are <strong>too fast-paced</strong></>,
  <>We need <strong>step-by-step guided workshops</strong></>,
  <>Practice tasks are <strong>too difficult</strong></>,
  <>Final project is <strong>too complex</strong></>
]

const changes = [
  <>Slower pace: <strong>added 3 more lectures</strong> (5 → 8)</>,
  <>Workshops split into <strong>shorter, focused tasks</strong></>,
  <>Practice tasks <strong>build gradually, step-by-step</strong></>,
  <>Final project <strong>streamlined</strong></>,
]

const highlights = [
  <>A well-rounded <strong>introduction to Python for biosciences</strong></>,
  <>Clear progression from <strong>fundamentals</strong> to <strong>data analysis</strong></>,
  <>Plenty of opportunities for <strong>hands-on practice</strong> & <strong>support</strong></>
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

      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        {/* Three sub-cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          <SlideCard color="yellow" layout="start" padding="compact">
            <span className="text-2xl md:text-4xl xl:text-5xl">💬</span>
            <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4 xl:mb-6">
              Last year's students said
            </CardHeading>
            <CardList items={feedback} bullet="→" color="yellow" />
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact">
            <span className="text-2xl md:text-4xl xl:text-5xl">🛠</span>
            <CardHeading size="sm" color="green" className="mb-3 md:mb-4 xl:mb-6">
              We did
            </CardHeading>
            <CardList items={changes} bullet="✓" color="green" />
          </SlideCard>

          <SlideCard color="purple" layout="start" padding="compact">
            <span className="text-2xl md:text-4xl xl:text-5xl">✨</span>
            <CardHeading size="sm" color="purple" className="mb-3 md:mb-4 xl:mb-6">
              This year's module (we hope)
            </CardHeading>
            <CardList items={highlights} bullet="⭐" color="purple" />
          </SlideCard>
        </div>

        {/* Golden Rule hero card */}
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-5">
            <span className="text-2xl md:text-4xl xl:text-5xl">🗣</span>
            <CardHeading size="sm" color="blue">How to give us feedback</CardHeading>
          </div>
        
          <p className="text-center font-bold text-base md:text-2xl xl:text-3xl 2xl:text-4xl text-white mb-4 md:mb-6 xl:mb-8">
            We value <span className="text-bio-blue">your feedback</span>{' '}
            and do our best to <span className="text-bio-blue">act on it!</span>{' '}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 sm:divide-x sm:divide-white/10">
            {methods.map((a) => (
              <div
                key={a.icon}
                className="flex flex-col items-center text-center gap-2 md:gap-3 px-2 md:px-5"
              >
                <span className="text-3xl md:text-5xl xl:text-6xl">{a.icon}</span>
                <p className="text-xs md:text-base xl:text-lg 2xl:text-xl text-gray-300 leading-snug">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </SlideCard>

      </div>
    </>
  )
}