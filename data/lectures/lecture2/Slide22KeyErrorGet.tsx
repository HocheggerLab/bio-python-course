import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `codon_table = {"ATG": "Met", "GGT": "Gly", "TAA": "Stop"}

# Asking for a key that isn't there CRASHES with a KeyError:
# print(codon_table["TTT"])      # uncomment to see the error

# .get() asks safely — give it a fallback for "not found":
print(codon_table.get("TTT", "?"))   # not in the table
print(codon_table.get("ATG", "?"))   # found
`

const demoOutput = `?
Met`

export function Slide22KeyErrorGet() {
  return (
    <ConceptSlide
      title={<>When the Key Isn&apos;t There — <GradientText><span className="font-mono">.get()</span></GradientText></>}
      points={
      <>
        <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
            <span className="font-mono">[ ]</span> on a missing key → KeyError
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono text-red-400">codon_table[&quot;TTT&quot;]</span> stops your
            program if <span className="font-mono">TTT</span> was never added. Real data is full
            of surprises — you need a safer way to ask.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            <span className="font-mono">.get(key, fallback)</span> never crashes
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            If the key exists you get its value; if not, you get the fallback you chose —{' '}
            <span className="font-mono">&quot;?&quot;</span> here. Perfect for an unknown or
            malformed codon.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — then uncomment the <span className="font-mono not-italic">[&quot;TTT&quot;]</span> line to meet the KeyError:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        showLineNumbers
        description="Live demo — KeyError and .get()"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
