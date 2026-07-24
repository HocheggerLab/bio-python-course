import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}

# Look up a value by its key — same square brackets as a list,
# but the key is a label, not a position
print(codon_table["ATG"])
print(codon_table["TAA"])
`

const demoOutput = `Met
Stop`

export function Slide21LookupByKey() {
  return (
    <>
      <SlideTitle>
        Looking Up by <GradientText>Key</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">codon_table[&quot;ATG&quot;]</span>
            </CardHeading>
            <CardBody>
              The same <span className="font-mono">[ ]</span> you used on lists and strings — but
              instead of a position you give the <strong>key</strong>, and Python hands back its{' '}
              <strong>value</strong>. One step, instant answer.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then look up <span className="font-mono not-italic">&quot;GGT&quot;</span>:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="220px"
              showLineNumbers
              description="Live demo — lookup by key"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
