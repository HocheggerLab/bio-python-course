import { SlideTitle } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { NotebookLink } from '@/data/sessions/lab5arrays1d/NotebookLink'
import { colabUrl } from '@/data/notebooks'

export interface Tool {
  code: string
  means: string
}

/**
 * One notebook per slide: the lecture's tools on the left (each line of code
 * with what it means in plain words), what the notebook asks you to do on the
 * right, then the Colab link.
 */
export function RecapSlide({
  title,
  intro,
  tools,
  toolsHeading = 'From the lecture',
  steps,
  stepsHeading = 'In the notebook',
  notebook,
  footer,
}: {
  title: React.ReactNode
  intro: React.ReactNode
  tools: Tool[]
  toolsHeading?: string
  steps: React.ReactNode[]
  stepsHeading?: string
  notebook: { path: string; label: string }
  footer?: React.ReactNode
}) {
  return (
    <>
      <SlideTitle>{title}</SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        {intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4 md:col-span-3">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            {toolsHeading}
          </CardHeading>
          <dl className="flex flex-col gap-2 md:gap-3">
            {tools.map((t) => (
              <div key={t.code} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-x-4 gap-y-0.5">
                <dt className="font-mono [font-variant-ligatures:none] text-white text-xs md:text-sm xl:text-base break-words">{t.code}</dt>
                <dd className="text-gray-400 text-xs md:text-sm xl:text-base">{t.means}</dd>
              </div>
            ))}
          </dl>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4 md:col-span-2">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            {stepsHeading}
          </CardHeading>
          <CardList items={steps} bullet="▸" color="yellow" />
        </SlideCard>
      </div>

      <NotebookLink url={colabUrl(notebook.path)} label={notebook.label} />

      {footer && (
        <p className="text-center text-gray-500 text-xs md:text-sm mt-3 md:mt-4">{footer}</p>
      )}
    </>
  )
}
