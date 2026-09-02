import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `print(df["Crop"].value_counts().head(6))
`

const output = `Crop
Raspberry     269
Rbean         236
Squash        220
Courgette     155
Strawberry    124
Apple         124
Name: count, dtype: int64`

export function Slide13ValueCounts() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          How much <GradientText variant="yellow">effort</GradientText> went where?
        </>
      }
      lead={
        <>
          <span className="font-mono">.value_counts()</span> counts how often each value appears. On
          a text column that is a tally of categories — and here it tells you something important
          before you compute anything.
        </>
      }
      closing={
        <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-2">
            The trap waiting for you
          </CardHeading>
          <CardBody>
            Raspberry was surveyed <span className="text-white">269</span> times, broad bean only{' '}
            <span className="text-white">94</span>. So &quot;which crop had the most bumblebee
            visits?&quot; partly measures{' '}
            <span className="text-white">where the ecologists spent their summer</span> — not just
            where the bees went.
          </CardBody>
        </SlideCard>
      }
      note={<>Always ask how much effort went into each group before you compare totals between them.</>}
    >
      <LazyPythonRunner
        initialCode={code}
        height="121px"
        description="Surveys per crop"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
