import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `seen = df[df["Bumblebees"] > 0]

print(seen["Crop"].nunique(), "of", df["Crop"].nunique(), "crops had a bumblebee")
print(seen["Crop"].value_counts().head(6))
`

const output = `17 of 18 crops had a bumblebee
Crop
Raspberry     148
Rbean          37
Blackberry     31
Apple          19
Bbean          17
Squash         14
Name: count, dtype: int64`

export function Slide28WhoVisits() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Which crops do bumblebees <GradientText variant="green">visit at all?</GradientText>
        </>
      }
      lead={
        <>
          Keep only the surveys that saw a bumblebee, then count the crops. Filter from Part 2, count
          from Part 3 — two lines.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              A first answer
            </CardHeading>
            <CardBody>
              Bumblebees turned up on all but one crop (peppers). Raspberry tops the list — but it was
              also surveyed most, 269 times.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              What this doesn&apos;t say
            </CardHeading>
            <CardBody>
              These are <em>surveys with a bumblebee</em>, not bees. And it says nothing about who
              else visits: a crop the honeybees also love wouldn&apos;t miss the bumblebees much.
            </CardBody>
          </SlideCard>
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="121px"
        description="Crops with at least one bumblebee survey"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
