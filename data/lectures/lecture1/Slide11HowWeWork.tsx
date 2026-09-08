import { GradientText } from '@/components/slides/SlideTitle'
import { ParallelSet } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody, type CardColor } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const helloWorld = `# Try editing me — then hit Run ▶
print("Hello, World!")
print("2 + 2 =", 2 + 2)
`

// Card section helpers ────────────────────────────────────────────────
// Fixed min-heights ensure titles + descriptions sit at the same vertical
// positions across all three cards regardless of body content length.

function CardSectionHeader({
  icon,
  title,
  color,
  description,
}: {
  icon: string
  title: string
  color: CardColor
  description: React.ReactNode
}) {
  return (
    <div className="mb-3 md:mb-5 xl:mb-6">
      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 min-h-[2.5rem] md:min-h-[3rem] xl:min-h-[3.5rem]">
        <span className="text-2xl md:text-3xl xl:text-4xl">{icon}</span>
        <CardHeading size="sm" color={color}>{title}</CardHeading>
      </div>
      <CardBody className="min-h-[3.5rem] md:min-h-[5rem] xl:min-h-[6rem] 2xl:min-h-[7rem]">
        {description}
      </CardBody>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────

export function Slide11HowWeWork() {
  return (
    <ParallelSet
      title={<>How We&apos;ll Work With <GradientText>Python</GradientText></>}
      lead="Three places you'll run Python on this course — each suited to a different moment."
      columns={3}
    >

        {/* 1 — In the browser (Pyodide) */}
        <SlideCard color="blue" layout="start" padding="compact">
          <CardSectionHeader
            icon="🌐"
            title="In the browser"
            color="blue"
            description={
              <>
                <span className="text-white font-semibold">Pyodide</span> — Python
                running right on the slide. Zero install. Great for quick experiments
                in lectures.
              </>
            }
          />
          <div className="overflow-hidden rounded-xl mt-auto">
            <LazyPythonRunner initialCode={helloWorld} height="205px" />
          </div>
        </SlideCard>

        {/* 2 — Google Colab */}
        <SlideCard color="green" layout="start" padding="compact">
          <CardSectionHeader
            icon="📓"
            title="Google Colab"
            color="green"
            description={
              <>
                Free cloud notebooks with the biology stack{' '}
                <span className="text-white font-semibold">pre-installed</span>.
                Run anywhere, share a link, collaborate.
              </>
            }
          />
          <ul className="flex flex-col gap-1.5 md:gap-2 text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-300 mb-3 md:mb-4">
            <li className="flex items-start gap-2"><span className="text-bio-green shrink-0">✓</span>NumPy, Pandas, Matplotlib ready to go</li>
            <li className="flex items-start gap-2"><span className="text-bio-green shrink-0">✓</span>Free GPU/TPU for ML work</li>
            <li className="flex items-start gap-2"><span className="text-bio-green shrink-0">✓</span>Works on any laptop / iPad</li>
          </ul>
          <a
            href="/labs/1"
            className="self-start mt-auto rounded bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
          >
            See Lab 1 →
          </a>
        </SlideCard>

        {/* 3 — Local development */}
        <SlideCard color="yellow" layout="start" padding="compact">
          <CardSectionHeader
            icon="💻"
            title="On your laptop"
            color="yellow"
            description={
              <>
                <span className="text-white font-semibold">VS Code + UV</span> — the
                real-world workflow. For when you want to write actual research code.
              </>
            }
          />
          <ul className="flex flex-col gap-1.5 md:gap-2 text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-300 mb-3 md:mb-4">
            <li className="flex items-start gap-2"><span className="text-bio-yellow shrink-0">→</span><span><span className="font-mono text-white">VS Code</span> — industry-standard editor</span></li>
            <li className="flex items-start gap-2"><span className="text-bio-yellow shrink-0">→</span><span><span className="font-mono text-white">uv</span> — blazing-fast package manager</span></li>
            <li className="flex items-start gap-2"><span className="text-bio-yellow shrink-0">→</span>Git, virtual environments, real projects</li>
          </ul>
          <a
            href="/labs/4"
            className="self-start mt-auto rounded bg-bio-yellow/20 hover:bg-bio-yellow/30 border border-bio-yellow/40 text-bio-yellow font-semibold px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
          >
            See Lab 4 →
          </a>
        </SlideCard>

    </ParallelSet>
  )
}
