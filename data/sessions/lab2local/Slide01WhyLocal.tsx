import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const cards: Array<{ icon: string; title: string; body: React.ReactNode; color: 'blue' | 'green' | 'yellow' }> = [
  {
    icon: '⏱️',
    title: 'No timeouts',
    color: 'blue',
    body: <>Colab disconnects and forgets. On your machine a program runs as long as it needs — and it&apos;s still there tomorrow.</>,
  },
  {
    icon: '📄',
    title: 'Real programs',
    color: 'green',
    body: <>Your code becomes a <span className="font-mono text-white">.py</span> file you can save, re-run, and share — not cells that vanish.</>,
  },
  {
    icon: '🐍',
    title: 'One tool: uv',
    color: 'yellow',
    body: <>A single command installs Python and runs your code. No hunting on python.org, no PATH headaches.</>,
  },
]

export function Slide01WhyLocal() {
  return (
    <>
      <SlideTitle>
        Python on <GradientText variant="green">your own machine</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        You&apos;ve navigated the terminal — now let&apos;s run Python there. Watch the demo, then
        follow along on your laptop. Pick your OS once: <span className="text-white">🍎 macOS</span> or
        <span className="text-white"> ⊞ Windows</span> — every command below adjusts to match.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        {cards.map((c) => (
          <SlideCard key={c.title} color={c.color} layout="center" padding="compact">
            <div className="text-4xl md:text-6xl xl:text-7xl mb-2 md:mb-4">{c.icon}</div>
            <CardHeading size="sm" color={c.color} className="mb-2 md:mb-3">{c.title}</CardHeading>
            <CardBody>{c.body}</CardBody>
          </SlideCard>
        ))}
      </div>
    </>
  )
}
