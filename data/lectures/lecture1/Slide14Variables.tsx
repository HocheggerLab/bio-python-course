import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# = puts the value on the right into the name on the left
gene_name = "BRCA1"
length    = 16

print(gene_name)
print(length)
`

const demoOutput = `BRCA1
16`

export function Slide14Variables() {
  return (
    <>
      <SlideTitle>
        Variables — <GradientText>labels for your data</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — the single idea */}
        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              A variable is a name attached to a value
            </CardHeading>
            <CardBody>
              The <span className="font-mono text-bio-blue">=</span> sign means{' '}
              <span className="text-bio-blue font-semibold">assignment</span>, not equality.
              Read it as <em>&ldquo;put this value into this name&rdquo;</em>. Once stored, you
              reuse the value by its name.
            </CardBody>
          </SlideCard>
        </div>

        {/* RIGHT — see it run */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it, then change the values and re-run:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — variable assignment"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
