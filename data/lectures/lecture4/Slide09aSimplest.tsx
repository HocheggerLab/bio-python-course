import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `def start_codon_report():
    print("Looking for ATG...")

print("nothing has happened yet")

start_codon_report()
start_codon_report()
`

const demoOutput = `nothing has happened yet
Looking for ATG...
Looking for ATG...`

export function Slide09aSimplest() {
  return (
    <ConceptSlide
      title={<>The Simplest <GradientText>Function</GradientText></>}
      lead={
        <>
          That last slide was where we&apos;re heading. Let&apos;s build it from{' '}
          <strong>nothing</strong>. Here is the smallest function that exists — it takes nothing,
          gives nothing back, and just prints.
        </>
      }
      pointsLayout="rows"
      points={
      <>
        <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-1">
            <span className="font-mono">def name():</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            The word <span className="font-mono">def</span>, a name you choose, empty brackets, a
            colon — then the body <strong>indented underneath</strong>. You already know this
            shape: it&apos;s a loop, it&apos;s an <span className="font-mono">if</span>. Colon,
            indent, body.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-1">
            Defining is not running
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            This is the bit that catches everyone.{' '}
            <span className="font-mono">def</span> only <strong>teaches Python the recipe</strong> —
            it doesn&apos;t cook it. Look at the output: &quot;nothing has happened yet&quot; comes{' '}
            <em>first</em>, even though the function was written above it.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-1">
            The brackets are the &quot;go&quot; button
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">start_codon_report()</span> — the{' '}
            <strong>brackets call it</strong>. Written once, called twice. Written once, callable
            ten thousand times.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then delete the two calls at the bottom and run again. Nothing happens:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="163px"
        showLineNumbers
        description="Live demo — defining vs calling"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
