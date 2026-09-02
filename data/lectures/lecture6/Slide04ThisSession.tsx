import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody, CardEyebrow } from '@/components/slides/SlideCard'

export function Slide04ThisSession() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          This session — <GradientText>three steps into pandas</GradientText>
        </>
      }
      lead={<>We'll start with basic operations and then work ourselves towards finding the most important pollinator</>}
      note={<>Pandas is huge, we'll continue with missing values, broken column names, joining tables in the lab.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <SlideCard color="blue" layout="start" padding="compact" className="border-t-4">
          <CardEyebrow color="blue">Part 1</CardEyebrow>
          <CardHeading size="sm" color="blue" className="mb-2 mt-1">
            The Pandas dataframe: You'll never touch Ecel again...
          </CardHeading>
          <CardBody>
            Load the file, look at it, and discover that every numpy trick you learned last week
            still works. pandas is built on numpy.
          </CardBody>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-t-4">
          <CardEyebrow color="yellow">Part 2</CardEyebrow>
          <CardHeading size="sm" color="yellow" className="mb-2 mt-1">
            Asking a table questions
          </CardHeading>
          <CardBody>
            Pick columns, keep the rows you want, and count things. But watch out, there will be a trap 🪤 before we get to the answer!
          </CardBody>
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-t-4">
          <CardEyebrow color="green">Part 3</CardEyebrow>
          <CardHeading size="sm" color="green" className="mb-2 mt-1">
            One line, one answer
          </CardHeading>
          <CardBody>
            <span className="font-mono text-white">groupby</span> — split the table by crop, add up
            each piece, and read the answer straight off.
          </CardBody>
        </SlideCard>
      </div>
    </ConceptSlide>
  )
}
