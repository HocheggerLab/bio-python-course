import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `print(df.groupby("Crop")[["Honeybees", "Bumblebees"]].sum().head(6))
`

const output = `            Honeybees  Bumblebees
Crop
Apple              48          23
Bbean               2          23
Blackberry        128          71
Blueberry           0           1
Cherry             11           4
Courgette          24           8`

export function Slide16GroupBy() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          <GradientText variant="green">groupby</GradientText> — split, add up, stack back together
        </>
      }
      lead={
        <>
          Three words in one line: <strong>split</strong> the 1,620 rows into one pile per crop,{' '}
          <strong>add up</strong> each pile, and <strong>combine</strong> the answers into a new
          table.
        </>
      }
      points={
        <>
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              <span className="font-mono">.groupby(&quot;Crop&quot;)</span>
            </CardHeading>
            <CardBody>Eighteen piles, one per crop. Nothing computed yet.</CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              <span className="font-mono">[[...]]</span>
            </CardHeading>
            <CardBody>Which columns to work on. You cannot add up a month name.</CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              <span className="font-mono">.sum()</span>
            </CardHeading>
            <CardBody>Collapse each pile to one row. Crop becomes the index.</CardBody>
          </SlideCard>
        </>
      }
      note={
        <>
          This is <span className="font-mono not-italic">.mean(axis=0)</span> from last week, except
          the groups are named rather than numbered — and pandas works out the groups for you.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="121px"
        description="Every crop at once"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
