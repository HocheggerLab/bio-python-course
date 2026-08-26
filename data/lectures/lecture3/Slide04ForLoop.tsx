import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `viruses = ["phage λ", "SARS-CoV-2", "HIV-1", "hepatitis B"]

# Visit each item in turn — 'virus' holds one at a time
for virus in viruses:
    print(f"Analysing {virus}")
`

const demoOutput = `Analysing phage λ
Analysing SARS-CoV-2
Analysing HIV-1
Analysing hepatitis B`

export function Slide04ForLoop() {
  return (
    <ConceptSlide
      title={<>Your First Loop — <GradientText>do this for every item</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">for virus in viruses:</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            The loop runs once for every item in the list. Each time round, the{' '}
            <span className="text-bio-blue font-semibold">loop variable</span> (here{' '}
            <span className="font-mono">virus</span>) holds the next item. You pick its name.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            The colon and the indent
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Line ends in <span className="font-mono">:</span>, and the lines{' '}
            <strong>indented underneath</strong> are the loop&apos;s body — they run once per
            item. The indentation is how Python knows what&apos;s <em>inside</em> the loop.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — four items in, four lines out. Add a virus and run again:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        showLineNumbers
        description="Live demo — your first for loop"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
