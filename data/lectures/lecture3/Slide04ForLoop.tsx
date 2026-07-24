import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Your First Loop — <GradientText>do this for every item</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">for virus in viruses:</span>
            </CardHeading>
            <CardBody>
              The loop runs once for every item in the list. Each time round, the{' '}
              <span className="text-bio-blue font-semibold">loop variable</span> (here{' '}
              <span className="font-mono">virus</span>) holds the next item. You pick its name.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              The colon and the indent
            </CardHeading>
            <CardBody>
              Line ends in <span className="font-mono">:</span>, and the lines{' '}
              <strong>indented underneath</strong> are the loop&apos;s body — they run once per
              item. The indentation is how Python knows what&apos;s <em>inside</em> the loop.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — four items in, four lines out. Add a virus and run again:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — your first for loop"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
