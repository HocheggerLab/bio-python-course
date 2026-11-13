import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* What DepMap is before any plotting: how the experiment works (a pooled
   CRISPR knockout screen), what the gene effect number means, and what the
   table looks like. Numbers checked against public/data/depmap_lecture.csv:
   RAN median -3.91 (every line needs it), SOX10 median -0.20. */

const steps: { n: string; title: string; body: React.ReactNode }[] = [
  { n: '1', title: 'Grow the cells', body: <>1,165 cancer cell lines from 30 tissues: skin, lung, bowel, blood…</> },
  { n: '2', title: 'Break one gene per cell', body: <>CRISPR: every cell gets a guide that knocks out one gene. Together the guides cover every gene.</> },
  { n: '3', title: 'Let them grow', body: <>About three weeks. Cells that lost a gene they need die or grow slowly.</> },
  { n: '4', title: 'Count the survivors', body: <>Sequence the guides. Guides for essential genes have gone missing.</> },
]

const code = `import pandas as pd
df = pd.read_csv("depmap_lecture.csv")
print(df.shape)
print(df[["cell_line_name", "oncotree_lineage", "SOX10", "RAN"]].head(3))
`

const output = `(1165, 261)
  cell_line_name      oncotree_lineage  SOX10    RAN
0    NIH:OVCAR-3  Ovary/Fallopian Tube -0.327 -4.196
1            HEL               Myeloid -0.137 -3.954
2     HEL 92.1.7               Myeloid -0.313 -3.787`

export function SlideDepMapExplained() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          <GradientText>DepMap</GradientText>: which genes does a cancer need?
        </>
      }
      points={
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 col-span-full">
          {steps.map((s) => (
            <SlideCard key={s.n} color="blue" layout="start" padding="tight" className="border-t-4">
              <p className="text-bio-blue font-semibold text-sm md:text-base xl:text-lg mb-0.5">
                {s.n} · {s.title}
              </p>
              <p className="text-gray-300 text-xs md:text-sm xl:text-base leading-snug">{s.body}</p>
            </SlideCard>
          ))}
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-3 md:gap-4 items-start">
        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <p className="text-bio-yellow font-semibold text-sm md:text-base xl:text-lg mb-2">
            The number: gene effect
          </p>
          <div
            className="h-3 rounded-full mb-1"
            style={{ background: 'linear-gradient(to right, #ef4444, #f59e0b 45%, #6b7280 80%, #9ca3af)' }}
          />
          <div className="flex justify-between font-mono text-white text-xs md:text-sm mb-2">
            <span>−2</span>
            <span>−1</span>
            <span>0</span>
            <span>+</span>
          </div>
          <ul className="text-gray-300 text-xs md:text-sm xl:text-base leading-snug space-y-1">
            <li><span className="font-mono text-white">0</span> the cells did not care</li>
            <li><span className="font-mono text-white">−1</span> as bad as losing a typical essential gene</li>
            <li><span className="font-mono text-white">below −1</span> even worse</li>
            <li><span className="font-mono text-white">positive</span> better off without it</li>
          </ul>
          <p className="text-white font-semibold text-xs md:text-sm xl:text-base mt-2">
            Lower = more needed.{' '}
            <a
              href="https://depmap.org/portal/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-bio-blue hover:text-bio-green underline"
            >
              depmap.org
            </a>
          </p>
        </SlideCard>
        <LazyPythonRunner
          initialCode={code}
          height="110px"
          description="One row per cell line, one column per gene. RAN: every line needs it."
          staticOutput={output}
        />
      </div>
    </ConceptSlide>
  )
}
