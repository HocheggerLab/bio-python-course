import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const types = [
  { icon: '🔤', name: 'str',   label: 'String — text',                example: '"ATGCGT"',  note: 'Sequences, names, IDs',           color: 'blue' as const },
  { icon: '🔢', name: 'int',   label: 'Integer — whole numbers',      example: '16',        note: 'Counts: bases, codons, samples',  color: 'green' as const },
  { icon: '📊', name: 'float', label: 'Floating-point — decimals',    example: '0.5625',    note: 'Fractions, concentrations, p-values', color: 'yellow' as const },
  { icon: '✅', name: 'bool',  label: 'Boolean — True / False',       example: 'True',      note: 'Yes/no answers: is_coding, passes_qc', color: 'purple' as const },
]

const demoCode = `# Hand any value to type() — Python tells you what it is
print(type("ATGCGT"))
print(type(16))
print(type(0.5625))
print(type(True))

# Try changing the values — or add your own:
gc_fraction = 9 / 16
print(type(gc_fraction))
`

const demoOutput = `<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
<class 'float'>`

export function Slide19DataTypes() {
  return (
    <>
      <SlideTitle>
        The Four <GradientText>Core Data Types</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — the four types at a glance */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 min-h-0">
          {types.map((t) => (
            <SlideCard key={t.name} color={t.color} layout="start" padding="tight" className="border-l-4">
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <span className="text-2xl md:text-4xl xl:text-5xl">{t.icon}</span>
                <div>
                  <div className="font-mono text-base md:text-2xl xl:text-3xl text-white font-bold leading-none">{t.name}</div>
                  <div className="text-[10px] md:text-xs xl:text-sm text-gray-400 mt-0.5">{t.label}</div>
                </div>
              </div>
              <div className="bg-bio-dark/60 rounded px-2 py-1 md:px-3 md:py-2 font-mono text-xs md:text-base xl:text-lg text-bio-blue mb-1 md:mb-2">
                {t.example}
              </div>
              <CardBody className="text-[11px] md:text-xs xl:text-sm">{t.note}</CardBody>
            </SlideCard>
          ))}
        </div>

        {/* RIGHT — live exploration */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">type(x)</span> — ask Python what something is
            </CardHeading>
            <CardBody>
              Pass any value to <span className="font-mono">type()</span> and Python tells you
              its type. Mess with the values — try{' '}
              <span className="font-mono">&quot;16&quot;</span> vs{' '}
              <span className="font-mono">16</span>, or <span className="font-mono">9 / 16</span>{' '}
              vs <span className="font-mono">9 // 16</span>.
            </CardBody>
          </SlideCard>

          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="260px"
              showLineNumbers
              description="Live demo — exploring types"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
