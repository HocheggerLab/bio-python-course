import Link from 'next/link'
import FeedbackQRCard from '@/components/feedback/FeedbackQRCard'

interface Session {
  num: number
  title: string
  topics: string[]
  status: 'available' | 'coming-soon'
  href: string
}

const sessions: Session[] = [
  {
    num: 1,
    title: 'Projects & Environments',
    topics: ['packages, PyPI & virtual environments', 'uv tool install uv-start — a project in one command', 'notebooks (.ipynb) vs scripts (.py)', 'this week’s notebooks in VS Code, run locally'],
    status: 'available',
    href: '/labs/5/1',
  },
  {
    num: 2,
    title: 'A Simple Neuron',
    topics: ['01 · numpy on small data — everyone starts here', 'a 50-frame toy neuron you can check by eye', 'masks, np.where, slicing out trial windows', 'stack, average with axis=0, compare go vs no-go'],
    status: 'available',
    href: '/labs/5/2',
  },
  {
    num: 3,
    title: 'The Full Neuron — Basic or Advanced',
    topics: ['02 · the real recording: 254 go and 264 no-go trials', 'basic — the same eight steps, guided', 'advanced — checkpoints with hints, then stretch goals', 'is the response real? a shuffle test'],
    status: 'available',
    href: '/labs/5/3',
  },
]

export default function Lab5Page() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <Link
          href="/labs"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to Labs
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <p className="text-bio-blue/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
            Lab 5
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Arrays, numpy &amp; Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One neuron, twenty-one thousand numbers. Learn the container built
            for data like that — then leave Colab behind and set up a real Python
            project of your own.
          </p>
        </div>

        <Link
          href="/labs/5/setup"
          className="block max-w-5xl mx-auto mb-8 md:mb-10 rounded-2xl border-2 border-bio-green/40 bg-bio-green/10 hover:bg-bio-green/15 transition-colors p-5 md:p-6"
        >
          <p className="text-lg md:text-xl xl:text-2xl font-bold text-white">
            🛠️ Start here: get it running, step by step
          </p>
          <p className="text-gray-300 text-sm md:text-base mt-1">
            Seven steps from an empty terminal to a notebook running on your laptop, each with a
            check and a fix. Keep it open while you work →
          </p>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 xl:gap-8 max-w-5xl mx-auto">
          {sessions.map((s) => {
            const disabled = s.status === 'coming-soon'
            return (
              <Link
                key={s.num}
                href={disabled ? '#' : s.href}
                aria-disabled={disabled}
                className={`block rounded-2xl border-2 p-6 md:p-8 transition-all duration-300
                  ${disabled
                    ? 'border-white/10 bg-white/[0.02] opacity-60 cursor-not-allowed'
                    : 'border-bio-blue/30 bg-bio-blue/10 hover:bg-bio-blue/15 hover:-translate-y-1 hover:shadow-xl'}
                `}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <span
                    className={`inline-flex items-center justify-center rounded-full font-bold
                                w-10 h-10 text-base md:w-12 md:h-12 md:text-lg xl:w-14 xl:h-14 xl:text-xl
                                ${disabled
                                  ? 'bg-white/10 text-white/40'
                                  : 'bg-bio-blue/20 text-bio-blue'}`}
                  >
                    {s.num}
                  </span>
                  <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-white leading-snug">
                    {s.title}
                  </h2>
                </div>

                <ul className="flex flex-col gap-1.5 md:gap-2 text-sm md:text-base text-gray-300 mb-4 md:mb-5">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className={disabled ? 'text-white/30' : 'text-bio-blue'}>→</span>
                      {t}
                    </li>
                  ))}
                </ul>

                <span
                  className={`inline-block text-xs md:text-sm font-semibold
                    ${disabled ? 'text-white/40' : 'text-bio-blue'}`}
                >
                  {disabled ? 'Coming soon' : 'Open session →'}
                </span>
              </Link>
            )
          })}
        </div>

        <FeedbackQRCard />

      </div>
    </div>
  )
}
