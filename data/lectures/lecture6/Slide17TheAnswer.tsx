import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `visits = df.groupby("Crop")[["Honeybees", "Bumblebees"]].sum()

print(visits.sort_values("Bumblebees", ascending=False).head(6))
`

const output = `            Honeybees  Bumblebees
Crop
Raspberry         245         311
Blackberry        128          71
Rbean              81          46
Apple              48          23
Bbean               2          23
Squash            104          15`

export function Slide17TheAnswer() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Read the <GradientText variant="yellow">last two rows</GradientText>
        </>
      }
      lead={
        <>Sort by bumblebees and the answer to today&apos;s question is sitting in the table.</>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              Broad bean — 2 vs 23
            </CardHeading>
            <CardBody>
              Eleven times more bumblebee visits than honeybee visits. Take the bumblebees away and
              almost nothing is left visiting this crop.
            </CardBody>
          </SlideCard>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              Squash — 104 vs 15
            </CardHeading>
            <CardBody>
              The ratio flips, seven to one the other way. Squash would barely notice.
            </CardBody>
          </SlideCard>
        </div>
      }
      note={
        <>
          Same table, same line of code, opposite answers. That is a real result — so the next
          question is <strong>why</strong>.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="163px"
        description="Sorted by bumblebee visits"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
