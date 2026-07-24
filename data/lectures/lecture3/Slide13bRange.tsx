import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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
    <>
      <SlideTitle>
        Why We Need <GradientText>range()</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
              One base at a time isn&apos;t enough
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">for base in seq:</span> hands you single letters — but a
              codon is <strong>three</strong>. And{' '}
              <span className="font-mono">seq[::3]</span> doesn&apos;t help: it grabs every third
              base <em>on its own</em> and throws the neighbours away.
            </CardBody>
          </SlideCard>

          {/* Visual: what [::3] actually picks */}
          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-4">
            <p className="text-[10px] md:text-xs text-gray-400 mb-2 font-semibold uppercase tracking-widest">
              <span className="font-mono normal-case">seq[::3]</span> keeps only the red bases
            </p>
            <div className="flex gap-0.5 md:gap-1 font-mono text-sm md:text-lg justify-center">
              {bases.map((b, i) => (
                <span
                  key={i}
                  className={`w-5 md:w-7 py-1 text-center rounded ${
                    picked.includes(i)
                      ? 'bg-red-500/20 text-red-400 font-bold'
                      : 'text-gray-600 line-through'
                  }`}
                >
                  {b}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-400 text-[10px] md:text-xs mt-2">
              → <span className="font-mono text-red-400">&quot;AACG&quot;</span> — four lonely
              bases, not codons
            </p>
          </div>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">range()</span> — a run of numbers
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">range(start, stop, step)</span> counts for you:{' '}
              <span className="font-mono">range(0, 12, 3)</span> gives{' '}
              <span className="font-mono text-bio-green">0, 3, 6, 9</span>. Loop over{' '}
              <strong>positions</strong> instead of letters, and each{' '}
              <span className="font-mono">i</span> is where a codon <em>starts</em> — then{' '}
              <span className="font-mono">seq[i:i+3]</span> takes it plus its two neighbours.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — the wrong way, then the numbers, then the payoff:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="400px"
              showLineNumbers
              description="Live demo — from [::3] to range()"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
