import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardPill, type CardColor } from '@/components/slides/SlideCard'

const ides: Array<{
  name: string
  tag: string
  color: CardColor
  chosen?: boolean
  body: React.ReactNode
}> = [
  {
    name: 'VS Code',
    tag: '★ we use this',
    color: 'blue',
    chosen: true,
    body: <>Free, everywhere, and the most-used editor in research and industry. A huge library of add-ons.</>,
  },
  {
    name: 'Zed',
    tag: 'fast & new',
    color: 'purple',
    body: <>Newer and blazing fast (built in Rust). Minimal and elegant once you know your way around.</>,
  },
  {
    name: 'PyCharm',
    tag: 'Python specialist',
    color: 'green',
    body: <>A powerful Python-only IDE from JetBrains. Heavier, more to learn — the Community edition is free.</>,
  },
  {
    name: 'Cursor',
    tag: 'VS Code + AI',
    color: 'neutral',
    body: <>VS Code with AI built in — literally a fork of it. Everything you learn here transfers straight over.</>,
  },
]

export function Slide02MeetIdes() {
  return (
    <>
      <SlideTitle>
        Meet the <GradientText variant="green">IDEs</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        We&apos;ll use <span className="text-white">VS Code</span> — but it&apos;s not the only one. Worth
        knowing the landscape.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5 xl:gap-6 mt-4 md:mt-6 xl:mt-8">
        {ides.map((ide) => (
          <SlideCard
            key={ide.name}
            color={ide.color}
            layout="start"
            padding="compact"
            className={ide.chosen ? 'ring-2 ring-bio-blue/60' : ''}
          >
            <div className="flex items-center justify-between gap-2 mb-2 md:mb-3">
              <CardHeading size="sm" color={ide.color}>
                {ide.name}
              </CardHeading>
            </div>
            <CardPill color={ide.color} className="mb-3 self-start">
              {ide.tag}
            </CardPill>
            <CardBody>{ide.body}</CardBody>
          </SlideCard>
        ))}
      </div>

      <p className="text-center text-gray-400 text-xs md:text-sm xl:text-base mt-3 md:mt-4">
        Pick one and get fluent — a <span className="text-white">folder</span>, an{' '}
        <span className="text-white">editor</span> and a <span className="text-white">terminal</span> work the
        same way in all of them.
      </p>
    </>
  )
}
