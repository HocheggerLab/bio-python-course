import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const printDemo = `name = "BRCA1"

print(name)
print("Hello")
print(16)
`

const printOutput = `BRCA1
Hello
16`

const fstringDemo = `name     = "BRCA1"
organism = "Homo sapiens"

# With f — variables get substituted in:
print(f"{name} ({organism})")

# Without f — the braces are just literal text:
print("{name} ({organism})")
`

const fstringOutput = `BRCA1 (Homo sapiens)
{name} ({organism})`

export function Slide15PrintFStrings() {
  return (
    <>
      <SlideTitle>
        <span className="font-mono">print()</span> and{' '}
        <GradientText>f-strings</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — print() */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">print()</span> — see what your code is doing
            </CardHeading>
            <CardBody>
              Pass any value to <span className="font-mono">print()</span> and Python displays
              it. This is how you check that your variables hold what you expect.
            </CardBody>
          </SlideCard>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={printDemo}
              height="180px"
              showLineNumbers
              description="Live demo — print()"
              staticOutput={printOutput}
            />
          </div>
        </div>

        {/* RIGHT — f-strings */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              f-strings — drop variables into text
            </CardHeading>
            <CardBody>
              Prefix the string with <span className="font-mono text-bio-blue">f</span> and wrap
              variable names in <span className="font-mono text-bio-blue">{'{ }'}</span>.
              Python substitutes the values when the line runs.
            </CardBody>
          </SlideCard>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={fstringDemo}
              height="220px"
              showLineNumbers
              description="Live demo — f-strings"
              staticOutput={fstringOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
