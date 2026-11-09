import { SlideTitle } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink } from '@/data/sessions/lab5arrays1d/NotebookLink'
import { colabUrl } from '@/data/notebooks'

export interface LaunchCard {
  heading: string
  items: string[]
  color: 'blue' | 'yellow' | 'green' | 'purple'
  notebook: { path: string; label: string }
}

/** One launch slide: an intro line, then a card per notebook with its link. */
export function NotebookLaunch({
  title,
  intro,
  cards,
  footer,
}: {
  title: React.ReactNode
  intro: React.ReactNode
  cards: LaunchCard[]
  footer?: React.ReactNode
}) {
  return (
    <>
      <SlideTitle>{title}</SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        {intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        {cards.map((c) => (
          <SlideCard key={c.heading} color={c.color} layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color={c.color} className="mb-3 md:mb-4">
              {c.heading}
            </CardHeading>
            <CardList items={c.items} bullet="▸" color={c.color} />
            <div className="mt-auto">
              <NotebookLink url={colabUrl(c.notebook.path)} label={c.notebook.label} />
            </div>
          </SlideCard>
        ))}
      </div>

      {footer && (
        <p className="text-center text-gray-500 text-xs md:text-sm mt-4 md:mt-6">{footer}</p>
      )}
    </>
  )
}
