import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `name   = "BRCA1"
length = 16

# print() displays one value...
print(name)

# ...or several at once — separated by commas, joined with spaces
print("Length:", length, "bases")
`

const demoOutput = `BRCA1
Length: 16 bases`

export function Slide16Print() {
  return (
    <>
      <SlideTitle>
        <span className="font-mono">print()</span> — <GradientText>see your data</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Your window into the program
            </CardHeading>
            <CardBody>
              Hand any value to <span className="font-mono">print()</span> and Python displays it.
              Pass several values separated by commas and it prints them on one line, with spaces
              in between. This is how you check a variable holds what you expect.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it, then try printing your own values:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="220px"
              showLineNumbers
              description="Live demo — print()"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
