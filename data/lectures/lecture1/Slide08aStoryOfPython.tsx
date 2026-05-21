import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard } from '@/components/slides/SlideCard'

const events = [
  {
    year: '1989',
    title: 'A Christmas hobby',
    body: 'Guido van Rossum starts Python as a hobby project during the Christmas break at CWI in Amsterdam.',
  },
  {
    year: '1991 – 2005',
    title: 'The scripting era',
    body: 'Python establishes itself as a simple, readable scripting language for automation and system administration.',
  },
  {
    year: '2006 – 2011',
    title: 'Scientific foundation',
    body: 'NumPy (2006) and SciPy lay the groundwork for scientific computing. Pandas (2008) follows — academic researchers start to adopt Python.',
  },
  {
    year: '2012 – 2015',
    title: 'The breakthrough',
    body: 'The data-science explosion. Jupyter notebooks and scikit-learn make Python the default in research labs.',
  },
  {
    year: '2016 – 2020',
    title: 'AI / ML dominance',
    body: 'TensorFlow (2015) and PyTorch (2016) cement Python as the lingua franca of deep learning.',
  },
  {
    year: '2020 – now',
    title: 'Total dominance',
    body: 'COVID-19 accelerates data-science adoption. Python usage nearly doubles — 8M+ active developers worldwide.',
  },
]

export function Slide08aStoryOfPython() {
  return (
    <>
      <SlideTitle>
        <span className="mr-3">🐍</span>The Story of <GradientText>Python</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT: timeline */}
        <ol className="md:col-span-3 flex flex-col gap-2 md:gap-3 xl:gap-4 min-h-0">
          {events.map((e) => (
            <li
              key={e.year}
              className="rounded-xl border border-white/10 bg-white/5 p-3 md:p-4 xl:p-5 2xl:p-6"
            >
              <div className="flex items-baseline gap-2 md:gap-4 flex-wrap">
                <span className="text-bio-blue font-bold text-sm md:text-base xl:text-xl 2xl:text-2xl whitespace-nowrap">
                  {e.year}
                </span>
                <span className="font-semibold text-white text-sm md:text-base xl:text-lg 2xl:text-xl">
                  {e.title}
                </span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm xl:text-base 2xl:text-lg mt-1 leading-snug">
                {e.body}
              </p>
            </li>
          ))}
        </ol>

        {/* RIGHT: Guido + easter egg + documentary link */}
        <div className="md:col-span-2 flex flex-col gap-3 md:gap-4 xl:gap-5 min-h-0">

          <SlideCard color="purple" layout="middle" padding="compact">
            <img
              src="/guido.png"
              alt="Guido van Rossum"
              className="rounded-xl w-28 md:w-36 xl:w-48 2xl:w-56 mx-auto mb-3 md:mb-4 shadow-lg ring-1 ring-white/10"
            />
            <p className="text-center font-bold text-white text-base md:text-lg xl:text-2xl 2xl:text-3xl">
              Guido van Rossum
            </p>
            <p className="text-center text-purple-400 text-xs md:text-sm xl:text-base mt-0.5 md:mt-1">
              BDFL — Benevolent Dictator for Life
            </p>
            <blockquote className="mt-3 md:mt-4 xl:mt-5 text-xs md:text-sm xl:text-base 2xl:text-lg text-gray-300 italic leading-snug border-l-2 border-purple-400/40 pl-3">
              “I was looking for a hobby programming project that would keep me occupied during the week around Christmas.”
            </blockquote>
          </SlideCard>

          <SlideCard color="yellow" layout="middle" padding="tight">
            <p className="text-center text-xs md:text-sm xl:text-base 2xl:text-lg leading-snug">
              <span className="mr-1">🎩</span>
              Named after{' '}
              <span className="font-bold text-bio-yellow">Monty Python&apos;s Flying Circus</span>{' '}
              — not the snake!
            </p>
          </SlideCard>

          <a
            href="https://www.youtube.com/watch?v=pTT7HMqDnJw"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/40 transition-colors px-3 md:px-4 py-2 md:py-3 xl:py-4 flex items-center justify-center gap-2 text-white text-xs md:text-sm xl:text-base 2xl:text-lg font-semibold"
          >
            <span className="text-red-400">▶</span> Watch the Python Documentary
          </a>
        </div>

      </div>
    </>
  )
}
