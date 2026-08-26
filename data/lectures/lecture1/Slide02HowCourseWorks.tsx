import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, type CardColor } from '@/components/slides/SlideCard'
import { ParallelSet } from '@/components/slides/layouts'

const components: Array<{
  num: string
  label: string
  desc: string
  icon: string
  color: CardColor
}> = [
  { num: '8', label: 'Lectures',         desc: 'Core concepts, introduced with live coding and biological examples', icon: '📚', color: 'blue'   },
  { num: '8', label: 'Lab Sessions',     desc: 'You write the code; demonstrators circulate to help',               icon: '💻', color: 'green'  },
  { num: '1', label: 'Assessed Project', desc: 'Everything applied to a real dataset of your choice',               icon: '🧬', color: 'yellow' },
  { num: '∞', label: 'Support',          desc: 'Website, notebooks, Colab, and office hours',                       icon: '🤝', color: 'purple' },
]

export function Slide02HowCourseWorks() {
  return (
    <ParallelSet
      title={<>How This Course <GradientText>Works</GradientText></>}
      columns={4}
      note="One project thread runs through all eight sessions — from your first variable to a working analysis pipeline."
    >
      {components.map((c) => (
        <SlideCard key={c.label} color={c.color} layout="start" padding="compact" className="border-l-4">
          <div className="flex items-baseline gap-3 mb-2 md:mb-3">
            <span className="text-2xl md:text-4xl">{c.icon}</span>
            <span className="font-bold text-2xl md:text-4xl xl:text-5xl text-white">{c.num}</span>
          </div>
          <CardHeading size="sm" color={c.color} className="mb-1.5 md:mb-2">
            {c.label}
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">{c.desc}</CardBody>
        </SlideCard>
      ))}
    </ParallelSet>
  )
}
