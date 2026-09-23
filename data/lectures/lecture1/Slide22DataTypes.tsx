import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'

const types = [
  { icon: '🔤', name: 'str',   label: 'String — text',              example: '"ATGCGT"', note: 'Sequences, names, IDs',                color: 'blue' as const },
  { icon: '🔢', name: 'int',   label: 'Integer — whole numbers',    example: '16',       note: 'Counts: bases, codons, samples',       color: 'green' as const },
  { icon: '📊', name: 'float', label: 'Floating-point — decimals',  example: '0.5625',   note: 'Fractions, concentrations, p-values',  color: 'yellow' as const },
  { icon: '✅', name: 'bool',  label: 'Boolean — True / False',     example: 'True',     note: 'Yes/no answers: is_coding, passes_qc', color: 'purple' as const },
]

export function Slide22DataTypes() {
  return (
    <>
      <SlideTitle>
        The Four <GradientText>Core Data Types</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 xl:gap-6 mt-4 md:mt-6 xl:mt-8">
        {types.map((t) => (
          <SlideCard key={t.name} color={t.color} layout="start" padding="compact" className="border-l-4">
            <div className="text-3xl md:text-5xl xl:text-6xl mb-2 md:mb-3">{t.icon}</div>
            <div className="font-mono text-lg md:text-3xl xl:text-4xl text-white font-bold leading-none">{t.name}</div>
            <div className="text-[10px] md:text-xs xl:text-sm text-gray-400 mt-1 mb-2 md:mb-3">{t.label}</div>
            <div className="bg-bio-dark/60 rounded px-2 py-1 md:px-3 md:py-2 font-mono text-xs md:text-base xl:text-lg text-bio-blue mb-2 md:mb-3">
              {t.example}
            </div>
            <CardBody className="text-[11px] md:text-xs xl:text-sm">{t.note}</CardBody>
          </SlideCard>
        ))}
      </div>
    </>
  )
}
