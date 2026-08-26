import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `class DNASequence:
    def __init__(self, sequence, name):
        self.sequence = sequence.upper()
        self.name = name

    def gc_content(self):                 # a method = a function on the object
        gc = self.sequence.count("G") + self.sequence.count("C")
        return gc / len(self.sequence) * 100

gene = DNASequence("atcgatcgatcg", "BRCA1_fragment")

# the object knows how to work on its own data:
print(f"{gene.name}: {gene.gc_content():.1f}% GC")
`

const demoOutput = `BRCA1_fragment: 50.0% GC`

export function Slide08MethodsBridge() {
  return (
    <>
      <SlideTitle>
        Methods — and Why <GradientText variant="green">Pandas</GradientText> Looks Familiar
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-center">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-sm md:text-lg xl:text-xl italic">
            A <strong>method</strong> is a function that lives on the object — call it with a dot:
          </p>
          <div className="overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="394px"
              showLineNumbers
              description="Live demo — gene.gc_content()"
              staticOutput={demoOutput}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              🎯 This is exactly how pandas works
            </CardHeading>
            <CardBody>
              A <span className="font-mono text-bio-green">DataFrame</span> is just an object — a
              big, clever one. It holds your table as its data, and comes with methods that know how
              to work on it.
            </CardBody>
          </SlideCard>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 md:p-5">
              <p className="text-purple-300 font-semibold text-xs md:text-base mb-2">Your class</p>
              <pre className="font-mono text-[12px] md:text-base text-gray-200">
{`gene.gc_content()
gene.name`}
              </pre>
            </div>
            <div className="bg-bio-green/10 border border-bio-green/30 rounded-xl p-4 md:p-5">
              <p className="text-bio-green font-semibold text-xs md:text-base mb-2">A DataFrame</p>
              <pre className="font-mono text-[12px] md:text-base text-gray-200">
{`df.head()
df.describe()`}
              </pre>
            </div>
          </div>

          <p className="text-bio-yellow text-base md:text-xl xl:text-2xl font-semibold text-center">
            Same shape: <span className="font-mono">object.method()</span>. Now let&apos;s meet the
            DataFrame for real. →
          </p>
        </div>

      </div>
    </>
  )
}
