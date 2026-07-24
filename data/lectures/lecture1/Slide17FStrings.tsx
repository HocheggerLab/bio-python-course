import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `name     = "BRCA1"
organism = "Homo sapiens"

# With f — the variables get substituted in:
print(f"{name} ({organism})")

# Without f — the braces are just literal text:
print("{name} ({organism})")
`

const demoOutput = `BRCA1 (Homo sapiens)
{name} ({organism})`

export function Slide17FStrings() {
  return (
    <>
      <SlideTitle>
        <GradientText>f-strings</GradientText> — variables inside text
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Build readable, labelled output
            </CardHeading>
            <CardBody>
              Prefix a string with <span className="font-mono text-bio-blue">f</span> and wrap any
              variable name in <span className="font-mono text-bio-blue">{'{ }'}</span>. Python
              swaps in the value when the line runs. Forget the{' '}
              <span className="font-mono text-bio-blue">f</span> and the braces stay as plain text.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Spot the difference between the two lines:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="220px"
              showLineNumbers
              description="Live demo — f-strings"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
