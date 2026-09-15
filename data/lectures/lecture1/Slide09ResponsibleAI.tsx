import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { ParallelSet } from '@/components/slides/layouts'
import {
  SlideCard,
  CardHeading,
  CardList
} from '@/components/slides/SlideCard'

const goodUses = [
  "Explain concepts you didn't follow",
  'Debug code you wrote yourself',
  'Generate test data',
]

const badUses = [
  'Generate code → copy → submit',
  'Skip understanding the logic',
  'Never read an error message',
  "Can't write anything without it",
]

const workflow = ['Write', 'Test', 'Debug', 'Ask AI', 'Understand', 'Improve']

export function Slide09ResponsibleAI() {
  return (
    <>
      <ParallelSet
            title={<>Using <GradientText>AI Responsibly</GradientText></>}
            lead="Generative AI tools must only be used in an assistive role in this module."
            columns={3}
            note={
              <span className="flex flex-col items-center gap-1">
                <span>See Canvas for full details of permitted use of AI for assessments.</span>
              </span>
            }
      >

        <SlideCard color="green" layout="start" padding="compact">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 xl:mb-6">
            <span className="text-2xl md:text-3xl xl:text-4xl">✅</span>
            <CardHeading size="sm" color="green">AI as a tool</CardHeading>
          </div>
          <CardList items={goodUses} bullet="✓" color="green" />
        </SlideCard>

        <SlideCard color="red" layout="start" padding="compact">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 xl:mb-6">
            <span className="text-2xl md:text-3xl xl:text-4xl">⚠️</span>
            <CardHeading size="sm" color="red">AI as a crutch</CardHeading>
          </div>
          <CardList items={badUses} bullet="✗" color="red" />
        </SlideCard>

        <SlideCard color="blue" layout="start" padding="compact">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 xl:mb-6">
            <span className="text-2xl md:text-3xl xl:text-4xl">🎯</span>
            <CardHeading size="sm" color="blue">The right workflow</CardHeading>
          </div>
          <CardList items={workflow} numbered color="blue" />
        </SlideCard>

      </ParallelSet>
    </>
  )
}
