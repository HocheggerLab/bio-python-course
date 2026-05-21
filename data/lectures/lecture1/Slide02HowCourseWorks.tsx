import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { StatCard, type CardColor } from '@/components/slides/SlideCard'

const components: Array<{
  num: string
  label: string
  desc: string
  icon: string
  color: CardColor
}> = [
  { num: '8', label: 'Lectures',         desc: 'Core concepts introduced with live coding and biological examples', icon: '📚', color: 'blue'   },
  { num: '8', label: 'Lab Sessions',     desc: 'Hands-on seminars — you write code, demonstrators circulate',       icon: '💻', color: 'green'  },
  { num: '1', label: 'Assessed Project', desc: 'Apply everything to a real biological dataset of your choice',      icon: '🧬', color: 'yellow' },
  { num: '∞', label: 'Support',          desc: 'Course website, notebooks, Colab, and instructor office hours',     icon: '🤝', color: 'purple' },
]

export function Slide02HowCourseWorks() {
  return (
    <>
      <SlideTitle>
        How This Course <GradientText>Works</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 md:gap-5 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">
        {components.map((c) => (
          <StatCard
            key={c.label}
            icon={c.icon}
            stat={c.num}
            label={c.label}
            description={c.desc}
            color={c.color}
          />
        ))}
      </div>

      <p className="text-center text-gray-400 mt-3 md:mt-4 text-xs md:text-sm xl:text-base pb-1 md:pb-2">
        One coherent project thread runs through all 8 sessions — from your first variable to a working analysis pipeline.
      </p>
    </>
  )
}
