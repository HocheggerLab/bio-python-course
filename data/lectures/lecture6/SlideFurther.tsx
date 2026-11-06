import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'

/* Where to keep going with pandas. Links checked 2026-11-06 (DataCamp blocks
   scripted requests, so that one was checked by hand). */

type Color = 'green' | 'blue' | 'purple'

const groups: { heading: string; color: Color; items: { name: string; href: string; what: string }[] }[] = [
  {
    heading: '🏋️ Practise',
    color: 'green',
    items: [
      {
        name: 'Pandas Workout',
        href: 'https://www.manning.com/books/pandas-workout',
        what: 'Reuven Lerner (Manning). 200 exercises on real data sets — the lab, times ten.',
      },
      {
        name: 'Data Manipulation with pandas',
        href: 'https://app.datacamp.com/learn/courses/data-manipulation-with-pandas',
        what: 'DataCamp. Filtering, groupby and more, in short browser exercises — our parallel course.',
      },
      {
        name: 'Kaggle Learn: Pandas',
        href: 'https://www.kaggle.com/learn/pandas',
        what: 'Free, short, in the browser. A good evening’s revision.',
      },
    ],
  },
  {
    heading: '📖 Read',
    color: 'blue',
    items: [
      {
        name: 'Python for Data Analysis, 3rd ed.',
        href: 'https://wesmckinney.com/book/',
        what: 'Wes McKinney, who wrote pandas. Free to read online.',
      },
      {
        name: 'Getting started tutorials',
        href: 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html',
        what: 'The official docs, one question per page: “How do I select a subset of a table?”',
      },
    ],
  },
  {
    heading: '🗂️ Look up',
    color: 'purple',
    items: [
      {
        name: '10 minutes to pandas',
        href: 'https://pandas.pydata.org/docs/user_guide/10min.html',
        what: 'The whole library on one page, with examples.',
      },
      {
        name: 'The official cheat sheet',
        href: 'https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf',
        what: 'Two pages, worth printing.',
      },
    ],
  },
]

export function SlideFurther() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Keep going with <GradientText variant="green">pandas</GradientText>
        </>
      }
      lead={<>You learn pandas by using it. Pick one thing from the left column and do a little each week.</>}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {groups.map((g) => (
          <SlideCard key={g.heading} color={g.color} layout="start" padding="compact" className="border-t-4">
            <CardHeading size="sm" color={g.color} className="mb-3">
              {g.heading}
            </CardHeading>
            <ul className="flex flex-col gap-3">
              {g.items.map((it) => (
                <li key={it.href}>
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-bio-green underline decoration-white/30 underline-offset-4 text-sm md:text-base xl:text-lg"
                  >
                    {it.name} ↗
                  </a>
                  <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-snug mt-0.5">{it.what}</p>
                </li>
              ))}
            </ul>
          </SlideCard>
        ))}
      </div>
    </ConceptSlide>
  )
}
