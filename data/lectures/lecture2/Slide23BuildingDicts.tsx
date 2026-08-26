import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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
    <ConceptSlide
      title={<>Building &amp; <GradientText>Checking</GradientText></>}
      points={
      <>
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            Assign to a key to add — or update
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">table[&quot;TAA&quot;] = &quot;Stop&quot;</span> adds a new
            entry. Use a key that already exists and it{' '}
            <strong>overwrites</strong> the old value — no error, no duplicate.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            <span className="font-mono">in</span> and <span className="font-mono">len()</span>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">&quot;ATG&quot; in codon_table</span> answers{' '}
            <span className="font-mono">True/False</span> — your loop-free way to search for a
            key. <span className="font-mono">len()</span> counts the entries.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — watch <span className="font-mono not-italic">GGT</span> get updated, not duplicated:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        showLineNumbers
        description="Live demo — adding, updating, checking"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
