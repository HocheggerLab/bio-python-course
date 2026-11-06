import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `ranked = df.sort_values("Bumblebees", ascending=False)

print(ranked[["Month", "Allotment", "Crop", "Bumblebees"]].head())
`

const output = `         Month    Allotment       Crop  Bumblebees
588        May      Roedale  Raspberry          13
300       July  Moulsecoomb  Raspberry          10
276        May       Keston  Raspberry           7
658  September      Roedale  Raspberry           7
302       July  Moulsecoomb  Raspberry           6`

export function Slide20Sort() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Put it in order — <GradientText>sort_values</GradientText>
        </>
      }
      lead={
        <>
          Sort the whole table by one column. Smallest first is the default;{' '}
          <span className="font-mono">ascending=False</span> puts the biggest on top.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              Sort by two columns
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">
                df.sort_values([&quot;Crop&quot;, &quot;Flowers&quot;], ascending=[True, False])
              </span>{' '}
              — crops A to Z, and within each crop the biggest patch first.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              Just the top few
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">df.nlargest(3, &quot;Honeybees&quot;)</span> —
              sort and <span className="font-mono text-white">.head(3)</span> in one step. Its
              partner is <span className="font-mono text-white">.nsmallest()</span>.
            </CardBody>
          </SlideCard>
        </div>
      }
      note={
        <>
          Sorting gives you a <em>new</em> table — <span className="font-mono not-italic">df</span>{' '}
          itself is unchanged. The index travels with each row: 588 is still survey 588.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="142px"
        description="The five surveys with the most bumblebees"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
