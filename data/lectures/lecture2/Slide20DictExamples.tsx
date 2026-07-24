import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const examples = [
  {
    icon: '🦊',
    domain: 'Ecology',
    code: `{
  "red_fox": 12,
  "rabbit": 340,
  "buzzard": 5,
}`,
    note: 'Species → count. The value is a number.',
    color: 'green' as const,
  },
  {
    icon: '🧠',
    domain: 'Neuroscience',
    code: `{
  "neuron_1": [12, 45, 78],
  "neuron_2": [9, 33],
}`,
    note: 'Neuron → spike times. The value is a list.',
    color: 'purple' as const,
  },
  {
    icon: '🩺',
    domain: 'Clinical',
    code: `{
  "p_01": {"age": 34, "bp": 128},
  "p_02": {"age": 51, "bp": 142},
}`,
    note: 'Patient → record. The value is another dict.',
    color: 'blue' as const,
  },
]

export function Slide20DictExamples() {
  return (
    <>
      <SlideTitle>
        Dictionaries Are <GradientText>Everywhere</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="neutral" layout="start" padding="compact">
          <CardBody>
            Any time data comes with <strong>labels</strong>, a dictionary fits. It&apos;s the most
            common way to store structured data in Python — config files, web data (JSON) and
            results tables are all dictionaries underneath. And the <em>value</em> can be
            anything:
          </CardBody>
        </SlideCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1 min-h-0">
          {examples.map((e) => (
            <SlideCard key={e.domain} color={e.color} layout="start" padding="compact" className="border-l-4">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <span className="text-2xl md:text-4xl xl:text-5xl">{e.icon}</span>
                <CardHeading size="sm" color={e.color}>{e.domain}</CardHeading>
              </div>
              <pre className="bg-bio-dark/60 rounded px-2 py-2 md:px-3 md:py-3 font-mono text-[10px] md:text-xs xl:text-sm text-gray-200 overflow-x-auto mb-2 md:mb-3">
{e.code}
              </pre>
              <CardBody className="text-[11px] md:text-xs xl:text-sm">{e.note}</CardBody>
            </SlideCard>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs md:text-sm xl:text-base italic">
          Numbers, strings, lists, even other dictionaries — that flexibility is why dictionaries
          turn up in every field.
        </p>

      </div>
    </>
  )
}
