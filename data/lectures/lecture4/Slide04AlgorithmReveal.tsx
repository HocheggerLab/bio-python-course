import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

/* The four steps, colour-matched to the code on the right */
const steps = [
  { n: 1, text: 'I have a sequence', color: 'text-gray-300', bar: 'border-white/40' },
  { n: 2, text: 'I need to isolate the codons', color: 'text-bio-blue', bar: 'border-bio-blue' },
  {
    n: 3,
    text: 'I need to match each codon to an amino acid',
    color: 'text-bio-yellow',
    bar: 'border-bio-yellow',
  },
  {
    n: 4,
    text: 'I need to assemble them into a protein',
    color: 'text-bio-green',
    bar: 'border-bio-green',
  },
]

const codeLines = [
  { text: 'seq = "ATGAAACGCGGC"', bar: 'border-white/40' },
  { text: 'protein = ""', bar: 'border-bio-green' },
  { text: 'for i in range(0, len(seq) - 2, 3):', bar: 'border-bio-blue' },
  { text: '    codon = seq[i:i+3]', bar: 'border-bio-blue' },
  { text: '    amino = codon_table.get(codon, "?")', bar: 'border-bio-yellow' },
  { text: '    protein = protein + amino', bar: 'border-bio-green' },
  { text: 'print(protein)', bar: 'border-white/40' },
]

export function Slide04AlgorithmReveal() {
  return (
    <>
      <SlideTitle>
        You Already Wrote an <GradientText>Algorithm</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        {/* LEFT — the plan, in plain English */}
        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Last week, before you wrote a line of code
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              You worked out <strong>what had to happen</strong>, in order. Four steps, in plain
              English — no Python anywhere:
            </CardBody>
          </SlideCard>

          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-5">
            <ul className="flex flex-col gap-2 md:gap-4">
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
            <CardBody className="text-xs md:text-sm xl:text-base">
              That plan <em>is</em> an <strong>algorithm</strong> — a sequence of steps that turns
              what you have into what you want. The code came second.
            </CardBody>
          </SlideCard>
        </div>

        {/* RIGHT — the code, colour-matched */}
        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            …and then each step became code. Same colours:
          </p>
          <div className="rounded-xl border border-code-border bg-code-bg p-3 md:p-4 font-mono text-xs md:text-base xl:text-lg">
            {codeLines.map((line) => (
              <div
                key={line.text}
                className={`border-l-4 ${line.bar} pl-3 py-1 whitespace-pre text-gray-200`}
              >
                {line.text}
              </div>
            ))}
          </div>
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardBody className="text-xs md:text-sm xl:text-base">
              The hard part was never the syntax. It was{' '}
              <strong>knowing which four things to do</strong>. That skill has a name, and it&apos;s
              what today is about.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
