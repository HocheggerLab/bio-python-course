import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide01Recap() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Last week you <GradientText>asked the table</GradientText>
        </>
      }
      lead={
        <>
          You loaded a CSV, filtered it, grouped it, and got an answer out —
          all of it as numbers in a terminal.
        </>
      }
      points={
        <>
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              You can already do this
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">read_csv</span>,{' '}
              <span className="font-mono text-white">.groupby()</span>,{' '}
              <span className="font-mono text-white">.mean()</span> — enough to answer a real question.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              But you had to read it
            </CardHeading>
            <CardBody>
              Eighteen rows of numbers. You found the answer by scanning down a column
              with your finger.
            </CardBody>
          </SlideCard>
        </>
      }
    >
      <div className="mt-5 md:mt-8 text-center">
        <p className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight">
          Today the computer does the looking.
        </p>
        <p className="mt-3 md:mt-4 text-gray-100 text-base md:text-lg xl:text-xl max-w-3xl mx-auto leading-relaxed">
          Some patterns are invisible in a table and obvious in a picture — the
          difference between finding a result and walking past it.
        </p>
      </div>
    </ConceptSlide>
  )
}
