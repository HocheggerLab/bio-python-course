import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `import numpy as np

readings = np.array([0.15, -0.05, 0.21, 0.26, 0.02])

# attributes: what the array holds (no brackets)
print(readings.shape)
print(readings.size)

# methods: jobs it does for you (brackets)
print(readings.max())
print(readings.argmax())
print(f"{readings.mean():.3f}")
`

const demoOutput = `(5,)
5
0.26
3
0.118`

export function Slide16NumpyApi() {
  return (
    <>
      <SlideTitle>
        The Array&apos;s <GradientText variant="green">Reception</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-center">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-sm md:text-lg xl:text-xl italic">
            An array is an object, so it has a reception too:
          </p>
          <div className="overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="394px"
              description="Live demo — an array's attributes and methods"
              staticOutput={demoOutput}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              🛎️ Same reception, bigger hotel
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">.shape</span> and{' '}
              <span className="font-mono text-white">.size</span> tell you what it holds.{' '}
              <span className="font-mono text-white">.max()</span>,{' '}
              <span className="font-mono text-white">.argmax()</span> and{' '}
              <span className="font-mono text-white">.mean()</span> do the work — on every number at
              once, whether there are 5 or 21,238.
            </CardBody>
          </SlideCard>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 md:p-5">
              <p className="text-purple-300 font-semibold text-xs md:text-base mb-2">Your class</p>
              <pre className="font-mono text-[12px] md:text-base text-gray-200">
{`gene.sequence
gene.gc_content()`}
              </pre>
            </div>
            <div className="bg-bio-green/10 border border-bio-green/30 rounded-xl p-4 md:p-5">
              <p className="text-bio-green font-semibold text-xs md:text-base mb-2">A numpy array</p>
              <pre className="font-mono text-[12px] md:text-base text-gray-200">
{`readings.shape
readings.mean()`}
              </pre>
            </div>
          </div>

          <p className="text-bio-yellow text-base md:text-xl xl:text-2xl font-semibold text-center">
            Attribute: no brackets. Method: brackets. Now let&apos;s use it on the neuron. →
          </p>
        </div>

      </div>
    </>
  )
}
