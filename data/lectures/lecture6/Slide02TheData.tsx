import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

const DATA = '/data/pollinators_lecture.csv'

const HEAD = ['Month', 'Allotment', 'Crop', 'Flowers', 'Honeybees', 'Bumblebees']

const ROWS: string[][] = [
  ['August', 'Hoggs', 'Bbean', '350', '0', '1'],
  ['June', 'Hoggs', 'Bbean', '100', '0', '1'],
  ['August', 'Hoggs', 'Squash', '6', '5', '0'],
  ['August', 'Hoggs', 'Squash', '8', '5', '1'],
  ['August', 'Hoggs', 'Raspberry', '60', '1', '2'],
]

export function Slide02TheData() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Nine allotments in <GradientText variant="yellow">Brighton</GradientText>
        </>
      }
      lead={
        <>
          Two summers, 1,620 surveys, 18 crops, six <em>Bombus</em> species — counted flower by
          flower. <span className="text-white">One row = one survey.</span>
        </>
      }
      closing={
        <div className="rounded-md border border-bio-blue/30 bg-bio-blue/[0.07] px-4 md:px-7 py-3 md:py-5">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-7">
            <div className="min-w-0 flex-1">
              <div className="text-bio-blue font-bold uppercase tracking-[0.15em]
                              text-xs md:text-sm xl:text-base mb-1">
                Today&apos;s question
              </div>
              <p className="font-bold tracking-tight text-xl md:text-3xl xl:text-4xl leading-tight">
                <span className="text-white">If the bumblebees vanished, </span>
                <GradientText>what would you lose?</GradientText>
              </p>
            </div>
            <a
              href={DATA}
              download
              className="shrink-0 self-start md:self-auto inline-flex items-center gap-2 rounded-full
                         bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40
                         text-bio-green font-semibold px-4 md:px-5 py-1.5 md:py-2
                         text-xs md:text-sm xl:text-base transition-colors"
            >
              ⬇ Download the data
            </a>
          </div>
        </div>
      }
      note={
        <>
          Nicholls, Griffiths-Lee, Basu, Chatterjee &amp; Goulson (2022), Plants People Planet —
          collected about two miles from this room.
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-5 md:gap-7 items-start">
        {/* The data itself */}
        <div className="flex flex-col gap-2 min-w-0">
          <div className="rounded-md border border-white/10 bg-bio-dark/60 overflow-hidden">
            <div className="px-3 md:px-4 py-1.5 border-b border-white/10 bg-bio-dark/60
                            text-[10px] md:text-xs xl:text-sm font-semibold uppercase
                            tracking-widest text-bio-blue/80">
              pollinators.csv — five of 1,620 rows
            </div>
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-[11px] md:text-sm xl:text-base">
                <thead>
                  <tr className="text-bio-blue/70">
                    {HEAD.map((h) => (
                      <th key={h} className="px-2 md:px-3 py-2 text-left font-semibold whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r, i) => (
                    <tr key={i} className="border-t border-white/10">
                      {r.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-2 md:px-3 py-1.5 whitespace-nowrap ${
                            j < 3 ? 'text-gray-200' : 'text-bio-green'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base leading-relaxed px-1">
            Words on the left, numbers on the right — the shape numpy could not hold.
          </p>
        </div>

        {/* The animal in question */}
        <figure className="min-w-0">
          <div className="rounded-md overflow-hidden ring-1 ring-white/10">
            <img
              src="/L6-bumblebee.jpg"
              alt="A buff-tailed bumblebee queen, Bombus terrestris, feeding on lime flowers"
              className="w-full h-auto object-cover"
            />
          </div>
          <figcaption className="mt-1.5 text-center text-gray-400 text-[10px] md:text-xs xl:text-sm leading-relaxed">
            <em>Bombus terrestris</em> — the commonest of the six species here.{' '}
            <span className="text-gray-500">Ivar Leidus, Wikimedia Commons, CC BY-SA 4.0</span>
          </figcaption>
        </figure>
      </div>
    </ConceptSlide>
  )
}
