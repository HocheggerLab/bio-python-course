import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# Hand any value to type() — Python tells you what it is
print(type("ATGCGT"))
print(type(16))
print(type(0.5625))
print(type(True))

# A gotcha: quotes make it text, even if it looks like a number
print(type("16"))
`

const demoOutput = `<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
<class 'str'>`

export function Slide23TypeFunction() {
  return (
    <>
      <SlideTitle>
        <span className="font-mono">type()</span> — <GradientText>ask Python what it is</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              When in doubt, check the type
            </CardHeading>
            <CardBody>
              Pass any value to <span className="font-mono">type()</span> and Python reports its
              type. The classic trap:{' '}
              <span className="font-mono text-bio-blue">&quot;16&quot;</span> (a string) is not{' '}
              <span className="font-mono text-bio-blue">16</span> (an integer) — and you can&apos;t
              do maths on text.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then try <span className="font-mono not-italic">9 / 16</span> vs{' '}
            <span className="font-mono not-italic">16 &gt; 0</span>:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — exploring types"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
