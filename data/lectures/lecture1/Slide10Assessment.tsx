import { GradientText } from '@/components/slides/SlideTitle'
import { ParallelSet } from '@/components/slides/layouts'
import { SlideCard, CardHeading, type CardColor } from '@/components/slides/SlideCard'
import { assessment } from '@/data/assessment'

/* Reads from data/assessment.ts, the same source as /assessment — the slide
   and the page cannot drift, and a change of weighting is one edit. */
const colour: Record<string, CardColor> = {
  test: 'yellow',
  'project-1': 'green',
  'project-2': 'blue',
}

const accentText: Record<string, string> = {
  test: 'text-bio-yellow',
  'project-1': 'text-bio-green',
  'project-2': 'text-bio-blue',
}

/** Slide-sized names: the page can afford the full titles, a projector cannot. */
const shortName: Record<string, string> = {
  test: 'Test',
  'project-1': 'Project 1',
  'project-2': 'Project 2',
}

export function Slide10Assessment() {
  return (
    <ParallelSet
      title={<>How You&apos;ll Be <GradientText>Assessed</GradientText></>}
      lead="Three pieces, each building on the one before — nothing arrives without a run-up."
      columns={3}
      note={
        <span className="flex flex-col items-center gap-1">
          <span>Full details of the projects will be covered in the <strong>Week 5 Project Practical</strong>. Projects are submitted via Canvas.</span>
        </span>
      }
    >
      {assessment.map((a) => (
        <SlideCard key={a.id} color={colour[a.id]} layout="start" padding="compact">
          <div className="flex items-baseline justify-between gap-2 mb-2 md:mb-3">
            <CardHeading size="sm" color={colour[a.id]}>{shortName[a.id]}</CardHeading>
            <span className={`${accentText[a.id]} font-bold text-2xl md:text-4xl tabular-nums`}>
              {a.weight}%
            </span>
          </div>

          <p className="text-white font-semibold text-sm md:text-base xl:text-lg mb-2 md:mb-3">
            Week {a.week} · {a.format}
          </p>

          <ul className="flex flex-col gap-1.5 text-gray-300 text-xs md:text-sm xl:text-base">
            <li><span className="text-gray-500">Covers:</span> {a.covers}</li>
            <li><span className="text-gray-500">Submission:</span> {a.submission}</li>
          </ul>

          {a.tbc && (
            <p className="mt-auto pt-3 text-gray-500 text-xs md:text-sm italic">{a.tbc}</p>
          )}
        </SlideCard>
      ))}
    </ParallelSet>
  )
}
