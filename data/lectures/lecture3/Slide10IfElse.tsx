import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genome = 3182              # hepatitis B, base pairs

if genome > 10000:
    print("Large genome")
else:
    print("Small genome")
`

const demoOutput = `Small genome`

export function Slide10IfElse() {
  return (
    <ConceptSlide
      title={<>Two Ways to Go — <GradientText>if / else</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">else</span> — the other path
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            When the <span className="font-mono">if</span> condition is{' '}
            <span className="font-mono">False</span>, the <span className="font-mono">else</span>{' '}
            block runs instead. <strong>Exactly one</strong> of the two branches runs, every time.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            No more &ldquo;nothing happened&rdquo;
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            With <span className="font-mono">if</span> alone, a <span className="font-mono">False</span>{' '}
            condition just does nothing. <span className="font-mono">else</span> guarantees the
            program always says <em>something</em> — large or small.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Hepatitis B is tiny — so this time the <span className="font-mono">else</span> branch
        runs:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — if / else"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
