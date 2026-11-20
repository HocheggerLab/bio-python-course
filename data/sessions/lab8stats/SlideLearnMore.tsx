import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'

const SEABORN = 'https://www.datacamp.com/courses/introduction-to-data-visualization-with-seaborn'
const STATS = 'https://www.datacamp.com/tracks/statistics-fundamentals-with-python'

const pill =
  'inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors'

export function SlideLearnMore() {
  return (
    <>
      <SlideTitle>
        Learn more, <GradientText>free</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Two notebooks are enough seaborn and statistics for your project. If you want more, these
        are the next steps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            seaborn: one course
          </CardHeading>
          <CardList
            bullet="▸"
            color="blue"
            items={[
              <>Scatter, line, count and bar plots</>,
              <>Colour and style by a third column</>,
              <>Many panels from one call</>,
            ]}
          />
          <div className="mt-4">
            <a href={SEABORN} target="_blank" rel="noopener noreferrer" className={pill}>
              DataCamp · Introduction to Data Visualization with Seaborn →
            </a>
          </div>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            Statistics: a track
          </CardHeading>
          <CardList
            bullet="▸"
            color="yellow"
            items={[
              <>Distributions, and when a t-test is fine</>,
              <>Hypothesis testing, step by step</>,
              <>Many tests at once: why false alarms add up</>,
            ]}
          />
          <div className="mt-4">
            <a href={STATS} target="_blank" rel="noopener noreferrer" className={pill}>
              DataCamp · Statistics Fundamentals in Python →
            </a>
          </div>
        </SlideCard>
      </div>
    </>
  )
}
