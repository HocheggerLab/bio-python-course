import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, type CardColor } from '@/components/slides/SlideCard'
import { NotebookLink, NOTEBOOK_DATATYPES } from '../NotebookLink'

const types: Array<{
  name: string
  icon: string
  desc: React.ReactNode
  example: string
  color: CardColor
}> = [
  {
    name: 'int',
    icon: '🔢',
    color: 'blue',
    desc: <>Whole numbers — counts, indices, lengths.</>,
    example: 'gene_count = 20_000',
  },
  {
    name: 'float',
    icon: '🌡️',
    color: 'green',
    desc: <>Numbers with a decimal point — measurements, ratios.</>,
    example: 'gc_fraction = 0.48',
  },
  {
    name: 'str',
    icon: '🧬',
    color: 'yellow',
    desc: <>Text in quotes — sequences, names, labels.</>,
    example: 'sequence = "ATGCGTAC"',
  },
  {
    name: 'bool',
    icon: '🚦',
    color: 'purple',
    desc: <>Two values: <span className="font-mono text-white">True</span> or <span className="font-mono text-white">False</span>.</>,
    example: 'is_coding = True',
  },
]

export function Slide02DataTypes() {
  return (
    <>
      <SlideTitle>
        Four Core <GradientText>Data Types</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5 xl:gap-6 mt-4 md:mt-6 xl:mt-8">
        {types.map((t) => (
          <SlideCard key={t.name} color={t.color} layout="start" padding="compact">
            <div className="text-3xl md:text-5xl xl:text-6xl mb-2 md:mb-3">{t.icon}</div>
            <CardHeading size="sm" color={t.color} className="mb-1 md:mb-2 font-mono">{t.name}</CardHeading>
            <CardBody className="mb-3 md:mb-4">{t.desc}</CardBody>
            <pre className="mt-auto rounded-xl bg-bio-darkest border border-code-border p-2 md:p-3 text-xs md:text-sm font-mono text-gray-200 overflow-x-auto">
{t.example}
            </pre>
          </SlideCard>
        ))}
      </div>

      <p className="text-center text-gray-400 mt-3 md:mt-4 text-xs md:text-sm xl:text-base">
        Check a value&apos;s type with <span className="font-mono text-white">type(value)</span>.
      </p>

      <NotebookLink url={NOTEBOOK_DATATYPES} label="03 · Data types" />
    </>
  )
}
