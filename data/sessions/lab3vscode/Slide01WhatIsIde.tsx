import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, type CardColor } from '@/components/slides/SlideCard'

const cards: Array<{ icon: string; title: string; body: React.ReactNode; color: CardColor }> = [
  {
    icon: '✍️',
    title: 'Write',
    color: 'blue',
    body: (
      <>
        A real code editor: <span className="text-white">syntax colours</span>, autocomplete, and typos
        underlined <span className="text-white">as you type</span> — before you ever run.
      </>
    ),
  },
  {
    icon: '▶️',
    title: 'Run',
    color: 'green',
    body: (
      <>
        A terminal built right in — the same <span className="font-mono text-white">uv run</span> from last
        lab, with no window-switching.
      </>
    ),
  },
  {
    icon: '🗂️',
    title: 'Organise',
    color: 'yellow',
    body: (
      <>
        Your whole project <span className="text-white">folder</span> in a sidebar — jump between files in a
        click.
      </>
    ),
  },
]

export function Slide01WhatIsIde() {
  return (
    <>
      <SlideTitle>
        What&apos;s an <GradientText>IDE</GradientText>?
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        You&apos;ve written Python in Colab cells and run scripts in the terminal. An{' '}
        <span className="text-white">IDE</span> — an <span className="text-white">Integrated Development
        Environment</span> — brings the writing and the running into <span className="text-white">one
        window</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">
        {cards.map((c) => (
          <SlideCard key={c.title} color={c.color} layout="center" padding="compact">
            <div className="text-4xl md:text-6xl xl:text-7xl mb-2 md:mb-4">{c.icon}</div>
            <CardHeading size="sm" color={c.color} className="mb-2 md:mb-3">
              {c.title}
            </CardHeading>
            <CardBody>{c.body}</CardBody>
          </SlideCard>
        ))}
      </div>
    </>
  )
}
