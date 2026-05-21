import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const ingredients = [
  <span key="vars"><span className="font-mono text-bio-blue">Variables</span> — store the gene name and sequence</span>,
  <span key="len"><span className="font-mono text-bio-blue">len()</span> — count the bases</span>,
  <span key="count"><span className="font-mono text-bio-blue">.count()</span> — count G&apos;s and C&apos;s</span>,
  <span key="arith"><span className="font-mono text-bio-blue">+ / *</span> — combine and convert to a percentage</span>,
  <span key="round"><span className="font-mono text-bio-blue">round()</span> — tidy the decimal</span>,
  <span key="f"><span className="font-mono text-bio-blue">f&quot;…&quot;</span> — labelled report lines</span>,
]

const demoCode = `# Claudia's first analysis script
name     = "BRCA1_exon3"
sequence = "ATGCGTACGTAGGCTA"

# Length of the sequence
length   = len(sequence)

# Count G and C combined
gc_count = sequence.count("G") + sequence.count("C")

# GC as a fraction (0–1), then as a percentage
gc_frac  = gc_count / length
gc_pct   = round(gc_frac * 100, 1)

# Build the report
print(f"Gene:       {name}")
print(f"Length:     {length} bases")
print(f"GC content: {gc_pct}%")
`

const expectedOutput = `Gene:       BRCA1_exon3
Length:     16 bases
GC content: 56.2%`

export function Slide27FinalDemo() {
  return (
    <>
      <SlideTitle>
        Putting It All Together — <GradientText>Claudia&apos;s First Report</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT: what's in the recipe */}
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Everything we&apos;ve learned, in one script
            </CardHeading>
            <p className="text-gray-300 text-sm md:text-base xl:text-lg leading-snug">
              No new concepts — every line uses something we&apos;ve seen today.
              Run it, then change the sequence and watch the report update.
            </p>
          </SlideCard>

          <SlideCard color="neutral" layout="middle" padding="compact">
            <CardHeading size="sm" className="mb-3 md:mb-4">
              The ingredients
            </CardHeading>
            <CardList items={ingredients} bullet="•" color="blue" />
          </SlideCard>

          <SlideCard color="green" layout="middle" padding="tight">
            <p className="text-center text-sm md:text-base xl:text-lg leading-snug">
              <span className="text-bio-green font-semibold">Try it:</span>{' '}
              swap in a new sequence (e.g.{' '}
              <span className="font-mono text-white">&quot;GGGGAAAATTTTCCCC&quot;</span>) and re-run.
            </p>
          </SlideCard>
        </div>

        {/* RIGHT: complete, runnable demo */}
        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={demoCode}
            height="440px"
            showLineNumbers
            description="Demo — full GC report"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
