import Link from 'next/link'
import { SlideTitle } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

/* One tool per slide: the commands on the left, what to remember on the right,
   and a pill back to the session that taught it. */

export type SessionLink = { href: string; label: string }

export function SessionPills({ links }: { links: SessionLink[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4 md:mt-6">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="inline-flex items-center gap-2 rounded-full bg-bio-blue/15 hover:bg-bio-blue/25 border border-bio-blue/40 text-bio-blue font-semibold px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
        >
          {l.label} →
        </Link>
      ))}
    </div>
  )
}

export function ReviewSlide({
  title,
  intro,
  codeLabel = 'terminal',
  code,
  remember,
  links,
}: {
  title: React.ReactNode
  intro: React.ReactNode
  codeLabel?: string
  code: string
  remember: React.ReactNode[]
  links: SessionLink[]
}) {
  return (
    <>
      <SlideTitle>{title}</SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        {intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            The commands
          </CardHeading>
          <CodeBox label={codeLabel} color="blue">{code}</CodeBox>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            Remember
          </CardHeading>
          <CardList items={remember} bullet="▸" color="yellow" />
        </SlideCard>
      </div>

      <SessionPills links={links} />
    </>
  )
}
