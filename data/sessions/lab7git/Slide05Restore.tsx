import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

const k = (s: string) => <span className="font-mono text-white">{s}</span>

const warnings: React.ReactNode[] = [
  <>{k('git restore')} throws away your uncommitted changes. That is the point, and there is no undo</>,
  <>It can only give you back what you <em>committed</em>. Commits are the save points</>,
  <>Nothing committed is ever really lost, even when it looks like it</>,
]

export function Slide05Restore() {
  return (
    <>
      <SlideTitle>
        The command that <GradientText>earns its keep</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Everything so far is bookkeeping. This is the payoff: the afternoon you break
        something badly and get it back in one command.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-3 md:mb-4">
            Undo today&apos;s mess
          </CardHeading>
          <CodeBox label="terminal" color="green">{`# one file, back to the last commit
git restore analysis.py

# everything, back to the last commit
git restore .

# just look at an old version first
git show 7a3f21c:analysis.py`}</CodeBox>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3">
            Try it now: break a notebook on purpose, save it, then bring it back.
          </p>
        </SlideCard>

        <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-3 md:mb-4">
            Read this before you use it
          </CardHeading>
          <CardList items={warnings} bullet="▸" color="red" />
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3">
            This is the real argument for committing often. A commit every twenty minutes
            means you can never lose more than twenty minutes.
          </p>
        </SlideCard>
      </div>
    </>
  )
}
