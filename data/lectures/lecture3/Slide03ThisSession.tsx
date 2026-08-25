import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const parts = [
  {
    icon: '🔁',
    name: 'Loops',
    example: 'for codon in codons:',
    note: 'Do the same step to every item — no copy-paste, no matter how long the sequence.',
    color: 'blue' as const,
  },
  {
    icon: '🔀',
    name: 'Decisions',
    example: 'if codon in stops:',
    note: 'Let the program choose what to do — and decide for itself when to stop.',
    color: 'yellow' as const,
  },
  {
    icon: '🧬',
    name: 'Translation',
    example: 'peptide.append(aa)',
    note: 'Put them together: walk a viral genome and build its proteins, automatically.',
    color: 'green' as const,
  },
]

export function Slide03ThisSession() {
  return (
    <>
      <SlideTitle>
        This Session — <GradientText>Control Flow</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="neutral" layout="start" padding="compact">
          <CardBody>
            So far your programs ran straight down the page, once.{' '}
            <span className="text-bio-blue font-semibold">Control flow</span> lets a program{' '}
            <strong>repeat</strong> work and <strong>make decisions</strong> — the two ingredients
            of a program that runs itself. We&apos;ll meet them one at a time, then combine them to
            translate a gene.
          </CardBody>
        </SlideCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {parts.map((p) => (
            <SlideCard key={p.name} color={p.color} layout="start" padding="compact" className="border-l-4">
              <div className="text-3xl md:text-5xl xl:text-6xl mb-2 md:mb-3">{p.icon}</div>
              <CardHeading size="sm" color={p.color} className="mb-2 md:mb-3">
                {p.name}
              </CardHeading>
              <div className="bg-bio-dark/60 rounded px-2 py-1 md:px-3 md:py-2 font-mono text-[11px] md:text-sm xl:text-base text-bio-blue mb-2 md:mb-3 overflow-x-auto">
                {p.example}
              </div>
              <CardBody className="text-xs md:text-sm xl:text-base">{p.note}</CardBody>
            </SlideCard>
          ))}
        </div>

      </div>
    </>
  )
}
