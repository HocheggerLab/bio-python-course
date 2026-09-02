import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide21Honesty() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          What we just did <GradientText variant="yellow">slightly wrong</GradientText>
        </>
      }
      lead={
        <>
          The bean result is real and it matches the published paper. The way we got there cut three
          corners — and a good scientist names them out loud.
        </>
      }
      pointsLayout="rows"
      points={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">
              Counts, not rates
            </CardHeading>
            <CardBody>
              We added up visits. The paper divides by flowers and by time — a visit to a bean patch
              with 6 flowers is not the same as one to a patch with 140.
            </CardBody>
          </SlideCard>
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">
              Unequal effort
            </CardHeading>
            <CardBody>
              269 raspberry surveys against 94 of beans. Totals reward whatever was surveyed most —
              which is why <span className="font-mono text-white">.mean()</span> was in your
              exercise.
            </CardBody>
          </SlideCard>
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">
              No error bars
            </CardHeading>
            <CardBody>
              Two honeybees versus twenty-three is a striking ratio built on small numbers. We have
              said nothing yet about how certain any of it is.
            </CardBody>
          </SlideCard>
        </div>
      }
      note={
        <>
          None of this makes the answer wrong. It makes it <strong>provisional</strong> — and
          knowing which of your own corners you cut is most of what doing this well consists of.
        </>
      }
    >
      <div />
    </ConceptSlide>
  )
}
