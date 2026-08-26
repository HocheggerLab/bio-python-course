import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide, DefTable } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const ingredients = [
  { term: 'Variables', def: 'store the gene name and sequence' },
  { term: 'len()', def: 'count the bases' },
  { term: '.count()', def: "count G's and C's" },
  { term: '+  /  *', def: 'combine and convert to a percentage' },
  { term: 'round()', def: 'tidy the decimal' },
  { term: 'f"…"', def: 'labelled report lines' },
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
    <SplitSlide
      title={<>Putting It All Together — <GradientText>Claudia&apos;s First Report</GradientText></>}
      lead="No new concepts — every line uses something we've seen today."
      ratio="wide-right"
      left={<DefTable rows={ingredients} headers={['Ingredient', 'What it contributes']} />}
      right={
        <LazyPythonRunner
          initialCode={demoCode}
          height="436px"
          description="Demo — full GC report"
          staticOutput={expectedOutput}
        />
      }
      note={
        <>
          Try it: swap in a new sequence (e.g.{' '}
          <span className="font-mono text-white">&quot;GGGGAAAATTTTCCCC&quot;</span>) and re-run.
        </>
      }
    />
  )
}
