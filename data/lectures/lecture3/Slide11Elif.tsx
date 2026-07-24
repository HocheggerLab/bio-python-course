import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Many Branches — <GradientText>if / elif / else</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">elif</span> = &ldquo;else, if…&rdquo;
            </CardHeading>
            <CardBody>
              Python checks the conditions <strong>top to bottom</strong>. The first one that&apos;s{' '}
              <span className="font-mono">True</span> wins — the rest are skipped — and{' '}
              <span className="font-mono">else</span> catches everything left over.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              The 30&nbsp;kb line is real
            </CardHeading>
            <CardBody>
              Remember: RNA viruses cap out around <strong>30&nbsp;kb</strong>. So a genome past that
              line almost has to be a <strong>DNA</strong> virus like phage&nbsp;λ. The branches
              mirror the biology.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            SARS-CoV-2 sits just under the ceiling. Change the number, rerun, watch the category
            change:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="300px"
              showLineNumbers
              description="Live demo — if / elif / else"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
