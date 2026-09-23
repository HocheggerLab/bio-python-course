import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genome = 29_903              # SARS-CoV-2, base pairs

print(genome < 30_000)       # a comparison is just True or False

if genome < 30_000:
    print("Compact RNA virus")
`

const demoOutput = `True
Compact RNA virus`

export function Slide09Decision() {
  return (
    <ConceptSlide
      title={<>Making a <GradientText>Decision</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Comparing values
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            As we saw, RNA virus genomes are typically smaller than 30&nbsp;kb, while DNA viruses can be bigger. {' '}
            Using <span className="font-mono text-bio-blue">if</span> and comparison operators (<span className="font-mono text-bio-blue">&gt;&nbsp;&lt;&nbsp;==&nbsp;&gt;=</span>), {' '}
            we can compare our viral genome size to 30,000 bp to see if it's likely to be from an RNA virus.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            <span className="font-mono">if</span> runs a block only when <span className="font-mono">True</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Put a condition after <span className="font-mono">if</span>, end the line with{' '}
            <span className="font-mono">:</span>, and indent the body — just like a loop. Those
            lines run <strong>only</strong> when the condition evaluates to <span className="font-mono text-bio-blue">True</span>; if it's <span className="font-mono text-bio-blue">False</span>, Python skips them.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then increase the value of <span className="font-mono not-italic">genome</span> above 30,000 and watch the
        message vanish.</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — your first if"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
