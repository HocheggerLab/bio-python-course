import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'

const rules = [
  'Start with a letter or underscore — not a digit',
  'Letters, digits, underscores only — no spaces, no dashes',
  'Case-sensitive: gene ≠ Gene ≠ GENE',
  'Avoid Python words: list, str, print, sum…',
]

const conventions = [
  'snake_case: gc_content, sequence_length',
  'Be descriptive: sequence_length beats sl',
  'Lowercase by convention — UPPERCASE is for constants',
]

export function Slide15NamingVariables() {
  return (
    <>
      <SlideTitle>
        Naming <GradientText>Variables</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="green" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">
            Rules — Python enforces these
          </CardHeading>
          <CardList items={rules} bullet="✓" color="green" />
        </SlideCard>

        <SlideCard color="yellow" layout="middle" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            Conventions — we follow these by choice
          </CardHeading>
          <CardList items={conventions} bullet="→" color="yellow" />
        </SlideCard>

      </div>
    </>
  )
}
