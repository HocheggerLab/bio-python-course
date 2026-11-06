import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* A treasure hunt instead of a tour of .describe(): two real oddities in
   the survey, each found with a different Series method. The clues stay
   folded until the room has had a go; click one open to reveal it.
   Numbers checked against pandas 3 on public/data/pollinators_lecture.csv. */

const code = `print(df["Flowers"].describe())

# then try this one:
# print(df["Allotment"].value_counts())
`

const output = `count    1620.000000
mean       90.757407
std       182.399238
min         1.000000
25%         6.000000
50%        25.000000
75%       100.000000
max      2000.000000
Name: Flowers, dtype: float64`

const clues = [
  {
    tool: '.describe() — read the max',
    found: (
      <>
        <span className="font-mono">Flowers</span> = open flowers on the watched patch. Typical
        patch: 25 (the 50% row). Max: <strong className="text-white">2,000</strong> — a fruit tree
        in blossom. And the big values are all round: 500, 800, 1,000. Nobody counted those; they
        are <strong className="text-white">guesses</strong>.
      </>
    ),
  },
  {
    tool: 'value_counts() on Allotment',
    found: (
      <>
        Weald was surveyed <strong className="text-white">495</strong> times, Camp_Site{' '}
        <strong className="text-white">twice</strong>. Any total for Camp_Site means nothing.
        Remember this one — it matters at the end.
      </>
    ),
  },
]

export function Slide07LookFirst() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Two odd things are <GradientText variant="yellow">hiding</GradientText> in here
        </>
      }
      lead={
        <>
          Now use the Series menu on the real data. Before any analysis, go looking for trouble: run
          the first line, then uncomment the second. Spot something odd? Say so — or at least think
          it loudly.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {clues.map((c, i) => (
            <details
              key={c.tool}
              className="group rounded-lg border-l-4 border-bio-yellow/50 bg-bio-yellow/[0.07] px-4 py-3 cursor-pointer"
            >
              <summary className="list-none text-bio-yellow font-semibold text-sm md:text-base xl:text-lg">
                <span className="text-white mr-2">Odd thing {i + 1}</span>
                <span className="font-mono text-xs md:text-sm xl:text-base">{c.tool}</span>
                <span className="block text-gray-400 text-xs md:text-sm font-normal group-open:hidden">
                  click to reveal
                </span>
              </summary>
              <p className="mt-2 text-gray-200 text-sm md:text-base xl:text-lg leading-snug">{c.found}</p>
            </details>
          ))}
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="142px"
        description="Go looking for trouble"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
