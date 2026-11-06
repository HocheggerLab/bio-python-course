import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `print(df.groupby("Month")["Bumblebees"].sum())
`

const output = `Month
April         25
August       190
July          89
June         142
May           76
September     26
Name: Bumblebees, dtype: int64`

export function Slide23GroupBy() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          One answer per group — <GradientText variant="green">groupby</GradientText>
        </>
      }
      lead={
        <>
          &quot;Bumblebees in each month&quot; would take six filters. <span className="font-mono">groupby</span>{' '}
          does all six: <span className="text-white">split</span> the rows by month,{' '}
          <span className="text-white">add up</span> each pile,{' '}
          <span className="text-white">combine</span> the answers into one Series.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              Read it in three parts
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">.groupby(&quot;Month&quot;)</span> — split by
              this · <span className="font-mono text-white">[&quot;Bumblebees&quot;]</span> — look at
              this · <span className="font-mono text-white">.sum()</span> — do this to each pile. Swap
              in <span className="font-mono text-white">.mean()</span>,{' '}
              <span className="font-mono text-white">.max()</span>,{' '}
              <span className="font-mono text-white">.count()</span>.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              April, August, July…?
            </CardHeading>
            <CardBody>
              The groups come out in <span className="text-white">alphabetical</span> order —
              pandas doesn&apos;t know months have a calendar. And August had the most surveys (527),
              so its total is bound to be big.
            </CardBody>
          </SlideCard>
        </div>
      }
      note={<>Grouping by crop — the real question — is what you&apos;ll do in the lab.</>}
    >
      <LazyPythonRunner
        initialCode={code}
        height="100px"
        description="Total bumblebees in each month"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
