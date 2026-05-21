import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'

const sessions = [
  {
    num: 1,
    title: 'Data Types, Variables & Operations',
    outcome: 'Calculate the GC content and length of one DNA sequence',
    cardBg: 'border-bio-blue/40 bg-bio-blue/10',
    numBg: 'bg-bio-blue/20 text-bio-blue',
    active: true,
  },
  {
    num: 2,
    title: 'Strings & Lists',
    outcome: 'Store and manipulate many sequences; find restriction sites',
    cardBg: 'border-bio-green/40 bg-bio-green/10',
    numBg: 'bg-bio-green/20 text-bio-green',
    active: false,
  },
  {
    num: 3,
    title: 'Loops, Dictionaries & Control Flow',
    outcome: 'Process all 10,000 sequences; translate codons automatically',
    cardBg: 'border-purple-400/40 bg-purple-400/10',
    numBg: 'bg-purple-400/20 text-purple-400',
    active: false,
  },
  {
    num: 4,
    title: 'Functions, Files & Error Handling',
    outcome: "Package the pipeline into a reusable program — Claudia's tool",
    cardBg: 'border-bio-yellow/40 bg-bio-yellow/10',
    numBg: 'bg-bio-yellow/20 text-bio-yellow',
    active: false,
  },
]

export function Slide09Roadmap() {
  return (
    <>
      <SlideTitle>
        Our <GradientText>Roadmap</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT: Claudia cartoon */}
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4 xl:gap-6 min-h-0">
          <figure className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-white/10 w-full max-w-[20rem] md:max-w-[22rem] xl:max-w-[30rem] 2xl:max-w-[36rem]">
            <img
              src="/1_9_learning_python.png"
              alt="Claudia learning Python — variables, lists, loops, functions, I've got this!"
              className="w-full h-auto object-contain"
            />
          </figure>
          <p className="text-center text-gray-300 italic text-sm md:text-base xl:text-xl 2xl:text-2xl leading-snug max-w-md">
            Claudia&apos;s journey — from{' '}
            <span className="text-bio-blue font-semibold not-italic">variables</span>{' '}
            to a working{' '}
            <span className="text-bio-yellow font-semibold not-italic">analysis pipeline</span>.
          </p>
        </div>

        {/* RIGHT: 4 session cards */}
        <div className="flex flex-col justify-center gap-3 md:gap-4 xl:gap-5 min-h-0">
          {sessions.map((s) => (
            <div
              key={s.num}
              className={`rounded-xl border p-3 md:p-5 xl:p-6 2xl:p-8 flex items-center gap-3 md:gap-5 ${s.cardBg} ${s.active ? 'ring-2 ring-bio-blue/50 shadow-lg shadow-bio-blue/10' : ''}`}
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
              {s.active && (
                <span className="shrink-0 text-[10px] md:text-xs xl:text-sm font-semibold text-bio-blue bg-bio-blue/15 border border-bio-blue/40 rounded-full px-2 md:px-3 xl:px-4 py-0.5 md:py-1 xl:py-1.5">
                  Today
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
