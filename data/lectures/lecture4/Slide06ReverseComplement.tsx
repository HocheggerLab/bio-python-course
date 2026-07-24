import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `seq = "ATGGTACGC"

# Step 1 — reverse it (Session 2 showed you this)
reversed_seq = seq[::-1]
print(reversed_seq)

# Step 2 — swap each base for its partner
complement = {"A": "T", "T": "A", "G": "C", "C": "G"}

# Step 3 — assemble the new strand
rc = ""
for base in reversed_seq:
    rc = rc + complement[base]
print(rc)
`

const demoOutput = `CGCATGGTA
GCGTACCAT`

const steps = [
  { n: 1, text: 'Reverse the sequence', color: 'text-bio-blue' },
  { n: 2, text: 'Swap each base for its complement', color: 'text-bio-yellow' },
  { n: 3, text: 'Assemble it into a new strand', color: 'text-bio-green' },
]

export function Slide06ReverseComplement() {
  return (
    <>
      <SlideTitle>
        Break Down: the <GradientText>Other Strand</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody className="text-xs md:text-sm xl:text-base">
              &quot;Give me the <strong>reverse complement</strong> of this sequence.&quot; DNA is
              double-stranded — genes are read off both strands. Sounds like a real piece of
              software. Break it down first:
            </CardBody>
          </SlideCard>

          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-5">
            <ul className="flex flex-col gap-3 md:gap-4">
              {steps.map((s) => (
                <li key={s.n} className="flex items-center gap-3 md:gap-4">
                  <span
                    className={`shrink-0 inline-flex items-center justify-center rounded-full
                                w-6 h-6 text-[11px] md:w-9 md:h-9 md:text-sm font-bold
                                bg-white/10 ${s.color}`}
                  >
                    {s.n}
                  </span>
                  <span className={`text-sm md:text-lg xl:text-xl ${s.color}`}>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Three steps — and you can already do all three
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">[::-1]</span> from Session 2 · a{' '}
              <strong>dictionary</strong> lookup · the <strong>accumulator</strong> from Session 3.
              Nothing new. Breaking down turned &quot;write a reverse complement&quot; into three
              things you&apos;ve already done.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Session 2 promised you&apos;d build this one day. It took three steps:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="400px"
              showLineNumbers
              description="Live demo — reverse complement, one step at a time"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
