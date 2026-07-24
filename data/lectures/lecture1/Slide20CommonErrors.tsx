import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const errors = [
  {
    color: 'red' as const,
    name: 'SyntaxError',
    means: 'The code is written wrongly — a missing quote, bracket or colon.',
    example: 'print("hi"',
    fix: 'Count your brackets and quotes.',
  },
  {
    color: 'yellow' as const,
    name: 'NameError',
    means: 'You used a name Python has never seen — usually a typo or a missing assignment.',
    example: 'print(squence)',
    fix: 'Check the spelling matches where you defined it.',
  },
  {
    color: 'purple' as const,
    name: 'TypeError',
    means: 'You asked for something the value can’t do — like adding text to a number.',
    example: '"ATG" + 5',
    fix: 'Convert first: "ATG" + str(5).',
  },
]

export function Slide20CommonErrors() {
  return (
    <>
      <SlideTitle>
        Three Errors You&apos;ll <GradientText>Meet Constantly</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">
        {errors.map((e) => (
          <SlideCard key={e.name} color={e.color} layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color={e.color} className="mb-2 md:mb-3 font-mono">
              {e.name}
            </CardHeading>
            <CardBody className="mb-3 md:mb-4 text-xs md:text-sm xl:text-base">
              {e.means}
            </CardBody>
            <div className="bg-bio-dark/60 rounded px-2 py-1 md:px-3 md:py-2 font-mono text-xs md:text-base xl:text-lg text-gray-200 mb-2 md:mb-3">
              {e.example}
            </div>
            <p className="text-gray-400 text-[11px] md:text-xs xl:text-sm italic">
              {e.fix}
            </p>
          </SlideCard>
        ))}
      </div>
    </>
  )
}
