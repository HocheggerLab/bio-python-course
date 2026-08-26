import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genome = 29903              # SARS-CoV-2, base pairs

print(genome > 10000)       # a comparison is just True or False

if genome > 10000:
    print("Large genome")
`

const demoOutput = `True
Large genome`

export function Slide09Decision() {
  return (
    <ConceptSlide
      title={<>Making a <GradientText>Decision</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            A comparison is <span className="font-mono">True</span> or <span className="font-mono">False</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Earlier we asked: how many genomes are bigger than 10&nbsp;kb? To decide about each one
            we compare:{' '}
            <span className="font-mono text-bio-blue">&gt;&nbsp;&lt;&nbsp;==&nbsp;&gt;=</span> take two
            values and answer with a <span className="font-mono">bool</span> — exactly the type
            from Session&nbsp;1.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            <span className="font-mono">if</span> runs a block only when <span className="font-mono">True</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Put a condition after <span className="font-mono">if</span>, end the line with{' '}
            <span className="font-mono">:</span>, and indent the body — just like a loop. Those
            lines run <strong>only</strong> when the condition holds; otherwise Python skips them.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then drop <span className="font-mono">genome</span> below 10000 and watch the
        message vanish:</>}
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
