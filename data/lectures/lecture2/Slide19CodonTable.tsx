import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# A dictionary maps a KEY to a VALUE
codon_table = {
    "ATG": "Met",
    "GGT": "Gly",
    "TAA": "Stop",
}

print(codon_table)
print(len(codon_table))   # how many entries
`

const demoOutput = `{'ATG': 'Met', 'GGT': 'Gly', 'TAA': 'Stop'}
3`

export function Slide19CodonTable() {
  return (
    <>
      <SlideTitle>
        Dictionaries — <GradientText>a lookup table</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Key → value pairs
            </CardHeading>
            <CardBody>
              A list finds things by <strong>position</strong> (0, 1, 2). A dictionary finds them
              by a <strong>meaningful key</strong> — here, a codon. Write the pairs in{' '}
              <span className="font-mono text-bio-blue">{'{ }'}</span> as{' '}
              <span className="font-mono text-bio-blue">key: value</span>.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              The codon table, made real
            </CardHeading>
            <CardBody>
              The genetic code <em>is</em> a lookup table: each three-base codon maps to one amino
              acid. That&apos;s a dictionary, exactly.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then add a fourth codon of your own:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="260px"
              showLineNumbers
              description="Live demo — building a dictionary"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
