import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGAAACGCGGC"

# Tempting — but WRONG. This is every third base on its own:
print(seq[::3])            # -> AACG   (not codons!)

# range() makes a run of numbers: start, stop, step
print(list(range(5)))      # 0 1 2 3 4  — stop is not included
print(list(range(0, 12, 3)))   # 0 3 6 9  — jump in threes

# Those numbers are the START of each codon
for i in range(0, 12, 3):
    print(i, seq[i:i+3])
`

const demoOutput = `AACG
[0, 1, 2, 3, 4]
[0, 3, 6, 9]
0 ATG
3 AAA
6 CGC
9 GGC`

/* The [::3] gotcha, shown base by base */
const bases = ['A', 'T', 'G', 'A', 'A', 'A', 'C', 'G', 'C', 'G', 'G', 'C']
const picked = [0, 3, 6, 9]

export function Slide13bRange() {
  return (
    <ConceptSlide
      title={<>Why We Need <GradientText>range()</GradientText></>}
      points={
      <>
        <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
            One base at a time isn&apos;t enough
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">for base in seq:</span> hands you single letters — but a
            codon is <strong>three</strong>. And{' '}
            <span className="font-mono">seq[::3]</span> doesn&apos;t help: it grabs every third
            base <em>on its own</em> and throws the neighbours away.
          </CardBody>
        </SlideCard>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            <span className="font-mono">range()</span> — a run of numbers
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">range(start, stop, step)</span> counts for you:{' '}
            <span className="font-mono">range(0, 12, 3)</span> gives{' '}
            <span className="font-mono text-bio-green">0, 3, 6, 9</span>. Loop over{' '}
            <strong>positions</strong> instead of letters, and each{' '}
            <span className="font-mono">i</span> is where a codon <em>starts</em> — then{' '}
            <span className="font-mono">seq[i:i+3]</span> takes it plus its two neighbours.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — the wrong way, then the numbers, then the payoff:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        showLineNumbers
        description="Live demo — from [::3] to range()"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
