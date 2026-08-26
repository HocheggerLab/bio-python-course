import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genome = 29903             # SARS-CoV-2, base pairs

if genome < 5000:
    category = "tiny — genes overlap"
elif genome < 30000:
    category = "compact RNA virus"
else:
    category = "large — DNA virus / phage"

print(category)
`

const demoOutput = `compact RNA virus`

export function Slide11Elif() {
  return (
    <ConceptSlide
      title={<>Many Branches — <GradientText>if / elif / else</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">elif</span> = &ldquo;else, if…&rdquo;
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Python checks the conditions <strong>top to bottom</strong>. The first one that&apos;s{' '}
            <span className="font-mono">True</span> wins — the rest are skipped — and{' '}
            <span className="font-mono">else</span> catches everything left over.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            The 30&nbsp;kb line is real
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Remember: RNA viruses cap out around <strong>30&nbsp;kb</strong>. So a genome past that
            line almost has to be a <strong>DNA</strong> virus like phage&nbsp;λ. The branches
            mirror the biology.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>SARS-CoV-2 sits just under the ceiling. Change the number, rerun, watch the category
        change:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — if / elif / else"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
