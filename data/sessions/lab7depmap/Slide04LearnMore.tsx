import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'

const DATACAMP_MPL = 'https://www.datacamp.com/courses/introduction-to-data-visualization-with-matplotlib'

const covered: React.ReactNode[] = [
  <>One panel, two panels, a grid — and who owns the title</>,
  <>Adding a second group to a panel you already drew</>,
  <>Histograms, scatters, box plots with the points on top</>,
  <>Saving a figure at a resolution a journal will accept</>,
]

const next: React.ReactNode[] = [
  <>Styling: colour maps, markers, and the house style of a journal</>,
  <>Time series, error bars, and twin axes</>,
  <>Writing a plotting function you reuse across a whole project</>,
  <>Then <span className="text-white">seaborn</span>, next lecture, which does much of this in one line</>,
]

export function Slide04LearnMore() {
  return (
    <>
      <SlideTitle>
        Learn more, <GradientText>free</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Three notebooks is enough matplotlib to make every figure in your project. If you
        want it to become second nature, this is the course to do next.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            What you can already do
          </CardHeading>
          <CardList items={covered} bullet="✓" color="blue" />
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            What the course adds
          </CardHeading>
          <CardList items={next} bullet="▸" color="yellow" />
        </SlideCard>
      </div>

      <div className="flex justify-center mt-4 md:mt-6">
        <a
          href={DATACAMP_MPL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
        >
          DataCamp · Introduction to Data Visualization with Matplotlib →
        </a>
      </div>
    </>
  )
}
