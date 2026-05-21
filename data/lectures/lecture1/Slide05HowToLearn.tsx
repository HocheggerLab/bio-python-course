import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import {
  SlideCard,
  CardHeading,
  CardBody,
  CardList,
} from '@/components/slides/SlideCard'

const provided = [
  'Lecture slides & recordings',
  'Colab lab notebooks',
  'Real biological problems',
  'Instructor & demonstrator support',
]

const required = [
  'Type code yourself — no copy-paste',
  'Embrace error messages',
  'Ask questions early',
  'Practise between sessions',
]

const analogies = [
  { icon: '💪', text: "You don't get fit by watching fitness videos" },
  { icon: '🎸', text: "You don't learn guitar by watching YouTube" },
  { icon: '💻', text: "You don't learn coding by following a lecture" },
]

export function Slide05HowToLearn() {
  return (
    <>
      <SlideTitle>
        How to Learn <GradientText>Programming</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* Golden Rule hero card */}
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-5">
            <span className="text-2xl md:text-4xl xl:text-5xl">🔑</span>
            <CardHeading size="sm" color="blue">The Golden Rule</CardHeading>
          </div>

          <p className="text-center font-bold text-base md:text-2xl xl:text-3xl 2xl:text-4xl text-white mb-4 md:mb-6 xl:mb-8">
            Practice writing code <span className="text-bio-blue">YOURSELF</span>{' '}
            and work on <span className="text-bio-blue">YOUR OWN PROJECTS!</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 xl:gap-5">
            {analogies.map((a) => (
              <div
                key={a.icon}
                className="bg-black/30 border border-white/5 rounded-lg p-3 md:p-5 xl:p-6 flex flex-col items-center text-center gap-2 md:gap-3"
              >
                <span className="text-3xl md:text-5xl xl:text-6xl">{a.icon}</span>
                <p className="text-xs md:text-base xl:text-lg 2xl:text-xl text-gray-300 leading-snug">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </SlideCard>

        {/* Three sub-cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 flex-1 min-h-0">
          <SlideCard color="green" layout="middle" padding="compact">
            <CardHeading size="sm" color="green" className="mb-3 md:mb-4 xl:mb-6">
              What we provide
            </CardHeading>
            <CardList items={provided} bullet="✓" color="green" />
          </SlideCard>

          <SlideCard color="yellow" layout="middle" padding="compact">
            <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4 xl:mb-6">
              What you must do
            </CardHeading>
            <CardList items={required} bullet="→" color="yellow" />
          </SlideCard>

          <SlideCard color="purple" layout="middle" padding="compact">
            <CardHeading size="sm" color="purple" className="mb-3 md:mb-4 xl:mb-6 text-center">
              Your Potential Outcomes
            </CardHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 xl:gap-5">
              <div className="text-center">
                <div className="text-red-400 font-bold text-sm md:text-base xl:text-lg 2xl:text-xl mb-1 md:mb-2">
                  Worst Case
                </div>
                <p className="text-gray-300 text-xs md:text-sm xl:text-base 2xl:text-lg leading-snug">
                  Overview of Python applications for biology — still valuable knowledge!
                </p>
              </div>
              <div className="text-center">
                <div className="text-bio-green font-bold text-sm md:text-base xl:text-lg 2xl:text-xl mb-1 md:mb-2">
                  Best Case
                </div>
                <p className="text-gray-300 text-xs md:text-sm xl:text-base 2xl:text-lg leading-snug">
                  Start your coding journey, solve real problems, build useful projects!
                </p>
              </div>
            </div>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
