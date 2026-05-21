import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import {
  SlideCard,
  CardIcon,
  CardEyebrow,
  CardHeading,
  CardBody,
  CardPill,
} from '@/components/slides/SlideCard'

const websiteFeatures = [
  { icon: '📖', label: 'Lectures', desc: 'Learn to code for handling biological data' },
  { icon: '▶️', label: 'YouTube Videos', desc: 'Recap what you learned at your own pace' },
  { icon: '🧪', label: 'Labs', desc: 'Hands-on supervised practice each week' },
  { icon: '📚', label: 'Resources', desc: 'Cheat sheets, tips, blogs, and useful links' },
  { icon: '🧬', label: 'Project Description', desc: 'Practice your new skills and get evaluated' },
]

export function Slide04Resources() {
  return (
    <>
      <SlideTitle>
        Your Main <GradientText>Resources</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* Website card */}
        <SlideCard color="blue" layout="between" href="/" className="text-left">
          <div className="flex items-center gap-3 md:gap-5 xl:gap-6 mb-4 md:mb-8 xl:mb-10">
            <CardIcon size="sm">🚀</CardIcon>
            <div>
              <CardEyebrow color="blue">Course Website</CardEyebrow>
              <CardHeading>Python for Biologists</CardHeading>
            </div>
          </div>

          <ul className="flex flex-col gap-2 md:gap-5 xl:gap-6 flex-1 justify-center">
            {websiteFeatures.map((f) => (
              <li key={f.label} className="flex items-start gap-3 md:gap-5">
                <span className="text-lg md:text-3xl xl:text-4xl mt-0.5 shrink-0">{f.icon}</span>
                <div className="text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
                  <span className="font-semibold text-white">{f.label}</span>
                  <span className="text-gray-400"> — {f.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <CardPill color="blue" className="mt-4 md:mt-8 self-start">
            python-for-biologists.com →
          </CardPill>
        </SlideCard>

        {/* Canvas card */}
        <SlideCard
          color="green"
          layout="center"
          href="https://canvas.sussex.ac.uk/courses/34489"
          external
        >
          <CardIcon size="lg" className="mb-3 md:mb-6 xl:mb-8">🎓</CardIcon>
          <CardEyebrow color="green">Submission &amp; Grades</CardEyebrow>
          <CardHeading size="lg" color="green" className="mt-2 md:mt-3 mb-2 md:mb-5">
            Canvas
          </CardHeading>
          <CardBody>Content coming soon.</CardBody>
          <CardPill color="green" className="mt-4 md:mt-10 xl:mt-12">
            canvas.sussex.ac.uk →
          </CardPill>
        </SlideCard>

      </div>
    </>
  )
}
