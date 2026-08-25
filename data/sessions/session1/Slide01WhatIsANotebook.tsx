import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardIcon, type CardColor } from '@/components/slides/SlideCard'
import { NotebookLink } from './NotebookLink'

const cards: Array<{ icon: string; title: string; body: React.ReactNode; color: CardColor }> = [
  {
    icon: '📓',
    title: 'A notebook',
    color: 'blue',
    body: (
      <>
        A document of <span className="text-white font-semibold">cells</span> — some run Python,
        some hold text and images. Read top to bottom like a lab notebook.
      </>
    ),
  },
  {
    icon: '⚡',
    title: 'Run a cell',
    color: 'green',
    body: (
      <>
        Hit <span className="font-mono text-white">Shift + Enter</span>. The code runs and the
        output appears <span className="text-white font-semibold">right under the cell</span>.
      </>
    ),
  },
  {
    icon: '🧪',
    title: 'Why we use them',
    color: 'yellow',
    body: (
      <>
        Mix <span className="text-white font-semibold">code, results and notes</span> in one place —
        ideal for exploring data and keeping a record of what you tried.
      </>
    ),
  },
]

export function Slide01WhatIsANotebook() {
  return (
    <>
      <SlideTitle>
        What is a <GradientText>Notebook?</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        {cards.map((c) => (
          <SlideCard key={c.title} color={c.color} layout="start" padding="compact">
            <CardIcon size="sm" className="mb-2 md:mb-4">{c.icon}</CardIcon>
            <CardHeading size="sm" color={c.color} className="mb-2 md:mb-3">{c.title}</CardHeading>
            <CardBody>{c.body}</CardBody>
          </SlideCard>
        ))}
      </div>

      <p className="text-center text-gray-400 mt-4 md:mt-6 text-xs md:text-sm xl:text-base">
        Jupyter is the engine — Google Colab is one way to run it, free, in your browser.
      </p>

      <NotebookLink />
    </>
  )
}
