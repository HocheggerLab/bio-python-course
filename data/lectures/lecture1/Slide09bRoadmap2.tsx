import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'

const sessions = [
  {
    num: 5,
    title: 'NumPy & Pandas',
    outcome: 'Wrangle large biological datasets — gene expression matrices, clinical tables',
    cardBg: 'border-bio-blue/40 bg-bio-blue/10',
    numBg: 'bg-bio-blue/20 text-bio-blue',
  },
  {
    num: 6,
    title: 'Data Visualisation',
    outcome: 'Build publication-ready plots: histograms, scatterplots, heatmaps',
    cardBg: 'border-bio-green/40 bg-bio-green/10',
    numBg: 'bg-bio-green/20 text-bio-green',
  },
  {
    num: 7,
    title: 'Image Analysis',
    outcome: 'Segment cells from microscopy images and extract quantitative features',
    cardBg: 'border-purple-400/40 bg-purple-400/10',
    numBg: 'bg-purple-400/20 text-purple-400',
  },
  {
    num: 8,
    title: 'Statistics & ML',
    outcome: 'Test hypotheses and build predictive models from your data',
    cardBg: 'border-bio-yellow/40 bg-bio-yellow/10',
    numBg: 'bg-bio-yellow/20 text-bio-yellow',
  },
]

export function Slide09bRoadmap2() {
  return (
    <>
      <SlideTitle>
        Roadmap — <GradientText>Python for Data Science</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT: Claudia, now Python-proficient */}
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4 xl:gap-6 min-h-0">
          <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[20rem] md:max-w-[22rem] xl:max-w-[30rem] 2xl:max-w-[36rem]">
            <img
              src="/1_10_python_proficient.png"
              alt="A Python-proficient Claudia analysing complex biological data"
              className="w-full h-auto object-contain"
            />
          </figure>
          <p className="text-center text-gray-300 italic text-sm md:text-base xl:text-xl 2xl:text-2xl leading-snug max-w-md">
            From Python <span className="text-bio-blue font-semibold not-italic">basics</span>{' '}
            to a working{' '}
            <span className="text-bio-yellow font-semibold not-italic">data-science toolkit</span>.
          </p>
        </div>

        {/* RIGHT: 4 advanced sessions */}
        <div className="flex flex-col justify-center gap-3 md:gap-4 xl:gap-5 min-h-0">
          {sessions.map((s) => (
            <div
              key={s.num}
              className={`rounded-xl border p-3 md:p-5 xl:p-6 2xl:p-8 flex items-center gap-3 md:gap-5 ${s.cardBg}`}
            >
              <span
                className={`shrink-0 inline-flex items-center justify-center rounded-full font-bold
                            w-9 h-9 text-base
                            md:w-12 md:h-12 md:text-xl
                            xl:w-14 xl:h-14 xl:text-2xl
                            2xl:w-16 2xl:h-16 2xl:text-3xl
                            ${s.numBg}`}
              >
                {s.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-snug">
                  {s.title}
                </div>
                <div className="text-gray-400 text-xs md:text-sm xl:text-base 2xl:text-lg mt-0.5 md:mt-1 leading-snug">
                  → {s.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
