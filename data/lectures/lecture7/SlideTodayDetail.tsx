import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Follow-up to SlideToday: a little more on the data, the question and the
   technique, then the data loaded so they can see the table. Replaces the
   old TheData / Mystery / ThisSession trio (files kept, not in the deck). */

const code = `import pandas as pd

df = pd.read_csv("depmap_lecture.csv")

print(df.shape)
print(df[["cell_line_name", "oncotree_lineage", "SOX10", "RAN"]].head())
`

const output = `(1165, 261)
  cell_line_name      oncotree_lineage  SOX10    RAN
0    NIH:OVCAR-3  Ovary/Fallopian Tube -0.327 -4.196
1            HEL               Myeloid -0.137 -3.954
2     HEL 92.1.7               Myeloid -0.313 -3.787
3          LS513                 Bowel -0.353 -4.425
4         C2BBe1                 Bowel -0.078 -4.497`

const li = 'text-gray-300 text-xs md:text-sm xl:text-base leading-snug'

export function SlideTodayDetail() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Today, <GradientText>in a bit more detail</GradientText>
        </>
      }
      points={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3 col-span-full">
          <SlideCard color="blue" layout="start" padding="tight" className="border-t-4">
            <p className="text-bio-blue font-semibold text-sm md:text-base xl:text-lg mb-1">The data: DepMap</p>
            <ul className={`${li} space-y-1`}>
              <li>One row per cell line, one column per gene.</li>
              <li>
                Each number: how badly the cells did without that gene.{' '}
                <span className="font-mono text-white">0</span> = didn&apos;t care,{' '}
                <span className="font-mono text-white">−1</span> = killed them. Lower is more essential.
              </li>
              <li>
                <a
                  href="https://depmap.org/portal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bio-blue hover:text-bio-green underline"
                >
                  depmap.org
                </a>
              </li>
            </ul>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-t-4">
            <p className="text-bio-yellow font-semibold text-sm md:text-base xl:text-lg mb-1">
              The question: who needs <span className="font-mono">SOX10</span>?
            </p>
            <ul className={`${li} space-y-1`}>
              <li>🔍 Part 1: a picture of SOX10 across every cell line</li>
              <li>🔍 Part 2: your first real figure, and a long tail</li>
              <li>🔍 Part 3: who sits in the tail?</li>
            </ul>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="tight" className="border-t-4">
            <p className="text-bio-green font-semibold text-sm md:text-base xl:text-lg mb-1">The technique: matplotlib</p>
            <ul className={`${li} space-y-1`}>
              <li><strong className="text-white">Part 1</strong> How a figure shows data · quiz 1</li>
              <li><strong className="text-white">Part 2</strong> Building a basic figure · quiz 2</li>
              <li><strong className="text-white">Part 3</strong> Extending a basic figure · quiz 3</li>
              <li><strong className="text-white">Then</strong> your final TCGA project</li>
            </ul>
          </SlideCard>
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="200px"
        description="Load the dependency data"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
