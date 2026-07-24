import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const parts = [
  {
    icon: '📋',
    name: 'Algorithmic thinking',
    book: 'Algorithmic Thinking — A Practical Approach',
    example: 'Plan: read → split → translate → collect',
    note: 'Break a problem too big to hold in your head into steps that each fit. Plan first, code second.',
    color: 'blue' as const,
  },
  {
    icon: 'λ',
    name: 'Functions',
    book: 'Functional Programming',
    example: 'def translate(seq):',
    note: 'Package each step and give it a name. Written once — works on every sequence in the folder.',
    color: 'green' as const,
  },
  {
    icon: '⚠️',
    name: 'Error handling',
    book: 'Error Handling in Python',
    example: 'raise ValueError("not DNA")',
    note: 'A program that quietly returns nonsense is worse than one that stops. Make it say so.',
    color: 'red' as const,
  },
]

export function Slide03ThisSession() {
  return (
    <>
      <SlideTitle>
        This Session — <GradientText>the Books on Her Desk</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="neutral" layout="start" padding="compact">
          <CardBody>
            Claudia wants to translate <strong>many</strong> sequences in one go, and one of them is
            full of <span className="font-mono text-red-400">N</span>s. Three things get her there —
            and they&apos;re stacked on her desk. We&apos;ll take them in order.
          </CardBody>
        </SlideCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1 min-h-0">
          {parts.map((p) => (
            <SlideCard key={p.name} color={p.color} layout="start" padding="compact" className="border-l-4">
              <div className="text-3xl md:text-5xl xl:text-6xl mb-2 md:mb-3">{p.icon}</div>
              <CardHeading size="sm" color={p.color} className="mb-1 md:mb-2">
                {p.name}
              </CardHeading>
              <p className="text-gray-500 text-[10px] md:text-xs xl:text-sm italic mb-2 md:mb-3 leading-snug">
                “{p.book}”
              </p>
              <div className="bg-bio-dark/60 rounded px-2 py-1 md:px-3 md:py-2 font-mono text-[10px] md:text-xs xl:text-sm text-bio-blue mb-2 md:mb-3 overflow-x-auto whitespace-nowrap">
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
