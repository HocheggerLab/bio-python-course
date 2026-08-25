import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import {
  SlideCard,
  CardHeading,
  CardBody,
} from '@/components/slides/SlideCard'

interface Row {
  language: string
  emoji?: string
  bestFor: string
  learning: string
  stars: number
  highlight?: boolean
}

const rows: Row[] = [
  { language: 'Python', emoji: '🐍', bestFor: 'ML, AI, Data Science — and almost everything else', learning: 'Easy',        stars: 2, highlight: true },
  { language: 'R',                bestFor: 'Statistics, niche data analysis',                  learning: 'Moderate',     stars: 3 },
  { language: 'JavaScript',       bestFor: 'Web development',                                  learning: 'Moderate',     stars: 3 },
  { language: 'Java',             bestFor: 'Enterprise apps, Android',                         learning: 'Challenging',  stars: 4 },
  { language: 'C / C++',          bestFor: 'Systems, games, raw performance',                  learning: 'Difficult',    stars: 5 },
]

function Stars({ n }: { n: number }) {
  return (
    <span className="text-bio-yellow tracking-tight">
      {'★'.repeat(n)}
      <span className="text-white/15">{'★'.repeat(5 - n)}</span>
    </span>
  )
}

export function Slide08WhyPython() {
  return (
    <>
      <SlideTitle>
        Why <GradientText>Python?</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        {/* Hero strap */}
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <p className="text-center font-bold text-base md:text-2xl xl:text-3xl 2xl:text-4xl text-white leading-snug">
            Python is the <span className="text-bio-blue">2<sup>nd</sup> best language for everything</span>{' '}
            — and <span className="text-bio-green">#1 for science.</span>
          </p>
          <p className="text-center text-gray-300 text-xs md:text-base xl:text-lg 2xl:text-xl mt-2 md:mt-3 italic">
            Slower than C, but vastly easier to learn. A bigger ecosystem and more applications than R.
          </p>
        </SlideCard>

        {/* Comparison table — renders as a real table on md+, stacks as cards on mobile */}
        <SlideCard color="neutral" layout="start" padding="compact" className="overflow-x-auto">
          {/* Desktop / tablet table */}
          <table className="hidden md:table w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-xs xl:text-sm 2xl:text-base uppercase tracking-widest text-gray-400">
                <th className="px-3 py-1 font-semibold">Language</th>
                <th className="px-3 py-1 font-semibold">Best for</th>
                <th className="px-3 py-1 font-semibold">Learning curve</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base xl:text-lg 2xl:text-xl">
              {rows.map((r) => (
                <tr
                  key={r.language}
                  className={r.highlight ? 'bg-bio-blue/10' : 'bg-white/5'}
                >
                  <td className="px-3 py-2 md:py-3 rounded-l-lg font-semibold whitespace-nowrap">
                    {r.emoji && <span className="mr-2">{r.emoji}</span>}
                    <span className={r.highlight ? 'text-bio-blue' : 'text-white'}>{r.language}</span>
                  </td>
                  <td className="px-3 py-2 md:py-3 text-gray-300">{r.bestFor}</td>
                  <td className="px-3 py-2 md:py-3 rounded-r-lg whitespace-nowrap">
                    <Stars n={r.stars} />
                    <span className="ml-2 text-gray-400 text-xs xl:text-sm">{r.learning}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile stacked cards */}
          <ul className="md:hidden flex flex-col gap-2">
            {rows.map((r) => (
              <li
                key={r.language}
                className={`rounded-lg p-3 ${r.highlight ? 'bg-bio-blue/10 border border-bio-blue/30' : 'bg-white/5 border border-white/5'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-semibold ${r.highlight ? 'text-bio-blue' : 'text-white'}`}>
                    {r.emoji && <span className="mr-1.5">{r.emoji}</span>}
                    {r.language}
                  </span>
                  <span className="text-xs"><Stars n={r.stars} /></span>
                </div>
                <p className="text-xs text-gray-300 leading-snug">{r.bestFor}</p>
              </li>
            ))}
          </ul>
        </SlideCard>

        {/* Bottom row: home turf + beyond */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-6">
          <SlideCard color="purple" layout="start" padding="compact">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <span className="text-2xl md:text-3xl xl:text-4xl">🥇</span>
              <CardHeading size="sm" color="purple">Home turf</CardHeading>
            </div>
            <CardBody>
              <span className="font-semibold text-white">ML, AI, Data Science.</span>{' '}
              Deep learning, NLP, computer vision, bioinformatics — Python is the lingua franca.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <span className="text-2xl md:text-3xl xl:text-4xl">🌍</span>
              <CardHeading size="sm" color="green">Beyond data</CardHeading>
            </div>
            <CardBody>
              <span className="font-semibold text-white">Web, systems, biology, automation.</span>{' '}
              From Instagram&apos;s backend to NASA mission scripts — Python turns up everywhere.
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
