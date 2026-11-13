import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'

const DATACAMP = 'https://www.datacamp.com/courses/introduction-to-git'

const later: React.ReactNode[] = [
  <>A <span className="text-white">branch</span> is a second line of history, so you can try
    something risky without touching the version that works</>,
  <><span className="text-white">Merging</span> brings it back. If you both changed the same
    line, git asks you to choose — that is a <em>conflict</em>, and it is normal</>,
  <>This earns its keep when other people are in the repo, or when a change takes days</>,
]

const now: React.ReactNode[] = [
  <>Commit often, with messages you could read back in a month</>,
  <>Push at the end of every session</>,
  <><span className="font-mono text-white">git status</span> whenever you are unsure</>,
  <><span className="font-mono text-white">git restore</span> when you break something</>,
]

export function Slide08Branches() {
  return (
    <>
      <SlideTitle>
        Branches: <GradientText variant="yellow">not today</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        You will hear about branching and merging, and one day you will need them. Working
        alone on one machine, they solve a problem you do not have yet — so here is what
        they are for, and where to learn them properly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="neutral" className="mb-3 md:mb-4">
            What you are missing
          </CardHeading>
          <CardList items={later} bullet="▸" color="neutral" />
        </SlideCard>

        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">
            What actually makes the difference
          </CardHeading>
          <CardList items={now} bullet="✓" color="green" />
        </SlideCard>
      </div>

      <div className="flex justify-center mt-4 md:mt-6">
        <a
          href={DATACAMP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
        >
          DataCamp · Introduction to Git →
        </a>
      </div>
    </>
  )
}
