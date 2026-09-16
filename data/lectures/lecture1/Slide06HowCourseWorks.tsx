import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, type CardColor, CardPill } from '@/components/slides/SlideCard'
import { ParallelSet } from '@/components/slides/layouts'

const components: Array<{
  time: string
  label: string
  desc: string
  icon: string
  color: CardColor
}> = [
  { time: '1 hour per week (Weeks 1–8)', label: 'Lectures',         desc: 'Core concepts, introduced with live coding and biological examples', icon: '📚', color: 'blue'   },
  { time: '2 hours per week (Weeks 1–11)', label: 'Workshops',     desc: 'You write the code; demonstrators circulate to help',               icon: '💻', color: 'green'  },
  { time: '2 hours (Week 5)', label: 'Project Practical', desc: 'Learn about the assessed projects and get started with hands-on support',               icon: '🛠️', color: 'purple' },  
  { time: '3 assessments', label: 'Assessments', desc: 'An in-class Python fundamentals test and two projects using real data.',               icon: '🧬', color: 'pink' },  
  { time: '4–6 hours per week', label: 'Self-Study',          desc: 'Slides, Colab notebooks, DataCamp, practice quizzes, cheat sheets',                       icon: '✍', color: 'yellow' },
  { time: 'Unlimited', label: 'Support',          desc: 'In-class, discussion board, and bookable meetings with us',                       icon: '🤝', color: 'red' },
]

export function Slide06HowCourseWorks() {
  return (
    <ParallelSet
      title={<>How You'll <GradientText>Learn</GradientText></>}
      columns={3}
      note="Every component builds towards your final project — from your first variable to building a working analysis pipeline."
    >
      {components.map((c) => (
        <SlideCard key={c.label} color={c.color} layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color={c.color} className="mb-1.5 md:mb-2">
            {c.icon}{c.label}
          </CardHeading>
          <CardPill color="neutral" className="mb-3 md:mb-4 self-start">
            <span>{c.time}</span>
          </CardPill>
          <CardBody className="text-sm md:text-base xl:text-lg">{c.desc}</CardBody>
        </SlideCard>
      ))}
    </ParallelSet>
  )
}
