import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import {
  SlideCard,
  CardHeading,
  CardList,
} from '@/components/slides/SlideCard'

const goodUses = [
  "Explain concepts you didn't follow",
  'Debug code you wrote yourself',
  'Suggest alternative approaches',
  'Generate test data',
]

const badUses = [
  'Generate code → copy → submit',
  'Skip understanding the logic',
  'Never read an error message',
  "Can't write anything without it",
]

const workflow = ['Write', 'Test', 'Debug', 'Ask AI', 'Understand', 'Improve']

export function Slide06ResponsibleAI() {
  return (
    <>
      <SlideTitle>
        Using AI <GradientText>Responsibly</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="green" layout="middle" padding="compact">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 xl:mb-6">
            <span className="text-2xl md:text-3xl xl:text-4xl">✅</span>
            <CardHeading size="sm" color="green">AI as a tool</CardHeading>
          </div>
          <CardList items={goodUses} bullet="✓" color="green" />
        </SlideCard>

        <SlideCard color="red" layout="middle" padding="compact">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 xl:mb-6">
            <span className="text-2xl md:text-3xl xl:text-4xl">⚠️</span>
            <CardHeading size="sm" color="red">AI as a crutch</CardHeading>
          </div>
          <CardList items={badUses} bullet="✗" color="red" />
        </SlideCard>

        <SlideCard color="blue" layout="middle" padding="compact">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 xl:mb-6">
            <span className="text-2xl md:text-3xl xl:text-4xl">🎯</span>
            <CardHeading size="sm" color="blue">The right workflow</CardHeading>
          </div>
          <CardList items={workflow} numbered color="blue" />
        </SlideCard>

      </div>

      <p className="text-center text-gray-400 mt-3 md:mt-4 xl:mt-6 text-xs md:text-sm xl:text-base">
        AI will not be available in assessed work — you need to be able to code independently.
      </p>
    </>
  )
}
