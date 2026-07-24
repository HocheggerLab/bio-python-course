import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `codon_table = {"ATG": "Met", "GGT": "Gly"}

codon_table["TAA"] = "Stop"        # a new key → adds an entry
codon_table["GGT"] = "Glycine"     # an existing key → updates it
print(codon_table)

print("ATG" in codon_table)        # is this codon known?
print(len(codon_table))            # how many entries now
`

const demoOutput = `{'ATG': 'Met', 'GGT': 'Glycine', 'TAA': 'Stop'}
True
3`

export function Slide23BuildingDicts() {
  return (
    <>
      <SlideTitle>
        Building &amp; <GradientText>Checking</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Assign to a key to add — or update
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">table[&quot;TAA&quot;] = &quot;Stop&quot;</span> adds a new
              entry. Use a key that already exists and it{' '}
              <strong>overwrites</strong> the old value — no error, no duplicate.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">in</span> and <span className="font-mono">len()</span>
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">&quot;ATG&quot; in codon_table</span> answers{' '}
              <span className="font-mono">True/False</span> — your loop-free way to search for a
              key. <span className="font-mono">len()</span> counts the entries.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — watch <span className="font-mono not-italic">GGT</span> get updated, not duplicated:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="260px"
              showLineNumbers
              description="Live demo — adding, updating, checking"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
