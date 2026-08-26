import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `class DNASequence:
    def __init__(self, sequence, name):
        self.sequence = sequence.upper()  # store the data...
        self.name = name                  # ...on the object itself

# build one object
brca = DNASequence("atcgatcgatcg", "BRCA1_fragment")

# reach into it with a dot
print(brca.name)
print(brca.sequence)
print(len(brca.sequence))
`

const demoOutput = `BRCA1_fragment
ATCGATCGATCG
12`

export function Slide07Objects() {
  return (
    <>
      <SlideTitle>
        Build the Simplest <GradientText variant="purple">Object</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-center">

        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody>
              You never <em>have</em> to look inside <span className="font-mono">random</span> or{' '}
              <span className="font-mono">pandas</span>. But let&apos;s peek once — build the simplest
              object ourselves, so a DataFrame is never magic. Remember{' '}
              <span className="font-mono">gc_content(seq)</span> from Lab 4? A{' '}
              <span className="font-mono">class</span> bundles that data and its functions into one.
            </CardBody>
          </SlideCard>

          <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              <span className="font-mono">__init__</span> — the setup
            </CardHeading>
            <CardBody>
              Runs automatically when you build an object. It stores the starting data so the object
              carries it around.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">self</span> — &ldquo;this one&rdquo;
            </CardHeading>
            <CardBody>
              <span className="font-mono">self.sequence</span> means &ldquo;<em>this</em> object&apos;s
              sequence&rdquo;. Two objects can hold different data without clashing.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-sm md:text-lg xl:text-xl italic">
            Run it — then build a second sequence with different data and print it:
          </p>
          <div className="overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="394px"
              description="Live demo — an object stores its own data"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
