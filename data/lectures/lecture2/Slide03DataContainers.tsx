import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const containers = [
  {
    icon: '📋',
    name: 'Lists',
    example: '["ATG…", "GGC…", "TTA…"]',
    note: 'An ordered collection — hold many sequences at once.',
    color: 'blue' as const,
  },
  {
    icon: '🔤',
    name: 'Strings, revisited',
    example: 'seq[0:3]  →  "ATG"',
    note: 'A string is a sequence of characters — reach in to pull out codons.',
    color: 'green' as const,
  },
  {
    icon: '🗺️',
    name: 'Dictionaries',
    example: '{"ATG": "Met"}',
    note: 'A lookup table — map each codon to its amino acid.',
    color: 'yellow' as const,
  },
]

export function Slide03DataContainers() {
  return (
    <>
      <SlideTitle>
        This Session — <GradientText>Data Containers</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="neutral" layout="start" padding="compact">
          <CardBody>
            So far each variable held <strong>one</strong> value. Real data comes in{' '}
            <strong>collections</strong> — folders of sequences, tables of results. A{' '}
            <span className="text-bio-blue font-semibold">container</span> is a value that holds
            many other values. Today&apos;s three all share one idea: you reach inside with{' '}
            <span className="font-mono text-bio-blue">[ ]</span>.
          </CardBody>
        </SlideCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {containers.map((c) => (
            <SlideCard key={c.name} color={c.color} layout="start" padding="compact" className="border-l-4">
              <div className="text-3xl md:text-5xl xl:text-6xl mb-2 md:mb-3">{c.icon}</div>
              <CardHeading size="sm" color={c.color} className="mb-2 md:mb-3">
                {c.name}
              </CardHeading>
              <div className="bg-bio-dark/60 rounded px-2 py-1 md:px-3 md:py-2 font-mono text-[11px] md:text-sm xl:text-base text-bio-blue mb-2 md:mb-3 overflow-x-auto">
                {c.example}
              </div>
              <CardBody className="text-xs md:text-sm xl:text-base">{c.note}</CardBody>
            </SlideCard>
          ))}
        </div>

      </div>
    </>
  )
}
