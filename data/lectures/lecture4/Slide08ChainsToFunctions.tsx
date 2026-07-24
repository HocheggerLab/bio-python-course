import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

// "What protein does the OTHER strand code for?"
// Every line here is something they already wrote — Session 2, 3, and slide 6.
const longChain = `seq = "ATGGTACGCTGGACTTTGTGG"

# reverse complement it
complement = {"A": "T", "T": "A", "G": "C", "C": "G"}
rc = ""
for base in seq[::-1]:
    rc = rc + complement[base]

# now translate it
protein = ""
for i in range(0, len(rc) - 2, 3):
    codon = rc[i:i+3]
    protein = protein + codon_table.get(codon, "?")

print(protein)          # PQSPAYH`

const namedSteps = `seq = "ATGGTACGCTGGACTTTGTGG"

rc = reverse_complement(seq)
protein = translate(rc)

print(protein)          # PQSPAYH`

export function Slide08ChainsToFunctions() {
  return (
    <>
      <SlideTitle>
        Chains Get Long — <GradientText>so package them in Functions</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — the blob */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <SlideCard color="red" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-1 md:mb-2">
              An algorithm is a chain of commands…
            </CardHeading>
            <CardBody className="text-[11px] md:text-sm">
              <em>&quot;What protein does the other strand code for?&quot;</em> — two steps you&apos;ve
              already done, chained. Every line is familiar. But to change{' '}
              <em>one thing</em>, you must read <em>all of it</em> first.
            </CardBody>
          </SlideCard>
          <pre className="flex-1 min-h-0 overflow-auto rounded-xl border border-red-500/30 bg-code-bg p-3 md:p-4 font-mono text-[10px] md:text-xs xl:text-sm text-gray-400 leading-relaxed">
            {longChain}
          </pre>
        </div>

        {/* RIGHT — the same thing, named */}
        <div className="flex flex-col gap-2 md:gap-3 min-h-0">
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1 md:mb-2">
              …the same algorithm, packaged
            </CardHeading>
            <CardBody className="text-[11px] md:text-sm">
              Same sequence in, same <span className="font-mono">PQSPAYH</span> out. Each step from
              your breakdown becomes <strong>one named thing</strong> — now the code reads like the
              plan you wrote.
            </CardBody>
          </SlideCard>
          <pre className="rounded-xl border border-bio-green/40 bg-code-bg p-3 md:p-4 font-mono text-xs md:text-base xl:text-lg text-bio-green leading-relaxed">
            {namedSteps}
          </pre>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Readable · reusable · replaceable
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Your steps are now <strong>names</strong>. Someone can read the plan without reading the
              code — and <span className="font-mono">translate()</span> works on the next sequence,
              and the next, and on all 10,000 of Claudia&apos;s. Just like{' '}
              <em>&quot;buffer P1 — see p. 42&quot;</em>.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              One problem: <span className="font-mono">reverse_complement</span> and{' '}
              <span className="font-mono">translate</span> don&apos;t exist yet.{' '}
              <span className="text-bio-yellow font-semibold">
                Next: how to make a name mean something.
              </span>
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
