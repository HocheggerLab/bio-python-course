import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `sequence = "ATGCGT"

# Spot the typo — Python can't find a name it was never given
print(squence)
`

const demoOutput = `Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
NameError: name 'squence' is not defined`

export function Slide19Errors() {
  return (
    <>
      <SlideTitle>
        Errors Are <GradientText>Normal</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              An error is information, not failure
            </CardHeading>
            <CardBody>
              When Python hits something it can&apos;t do, it stops and prints a{' '}
              <strong>traceback</strong>. Don&apos;t panic — <strong>read the last line</strong>.
              It names the error type and tells you exactly what went wrong. Every programmer
              reads these all day long.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — read the last line before anything else:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="200px"
              showLineNumbers
              description="Live demo — reading a traceback"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
