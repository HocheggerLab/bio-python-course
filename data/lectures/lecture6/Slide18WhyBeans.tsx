import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide18WhyBeans() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Why a bean is <GradientText variant="yellow">harder work</GradientText>
        </>
      }
      lead={
        <>
          The numbers came from the data. The reason comes from the flowers — and once you see it,
          the table stops being a table and starts being biology.
        </>
      }
      pointsLayout="rows"
      points={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              Broad bean — a locked door
            </CardHeading>
            <CardBody>
              The petals form a closed keel. Getting in means{' '}
              <span className="text-white">forcing it open</span>, which takes weight and strength.
              A bumblebee can. A honeybee mostly cannot — it bites through the side instead and
              takes the nectar without ever touching the anthers.
              <br />
              <br />
              A visit that pollinates nothing is not a pollination service.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              Squash — an open bowl
            </CardHeading>
            <CardBody>
              A wide, shallow, generous flower that anything can land in. No strength required, so
              the commonest and most numerous visitor wins — and in a city with managed hives, that
              is the honeybee.
              <br />
              <br />
              Easy flowers get generalists. Difficult flowers get specialists.
            </CardBody>
          </SlideCard>
        </div>
      }
      note={
        <>
          So &quot;save the bees&quot; is the wrong slogan. Honeybees are livestock and there are
          plenty. It is the <strong>wild</strong> bees that some crops cannot do without.
        </>
      }
    >
      <div />
    </ConceptSlide>
  )
}
