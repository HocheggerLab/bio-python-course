import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd

df = pd.read_csv("depmap_lecture.csv")

print(df.shape)
print(df[["cell_line_name", "oncotree_lineage", "SOX10", "RAN"]].head())
`

const output = `(1165, 22)
  cell_line_name      oncotree_lineage  SOX10    RAN
0    NIH:OVCAR-3  Ovary/Fallopian Tube -0.327 -4.196
1            HEL               Myeloid -0.137 -3.954
2     HEL 92.1.7               Myeloid -0.313 -3.787
3          LS513                 Bowel -0.353 -4.425
4         C2BBe1                 Bowel -0.078 -4.497`

export function Slide02TheData() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          <GradientText>DepMap</GradientText> — what does a cancer cell need?
        </>
      }
      lead={
        <>
          Researchers took <strong>1,165 cancer cell lines</strong> and used CRISPR to switch
          off <em>every gene, one at a time</em>. Each number is how badly the cells did
          without that gene.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">0</span> means the cells did not care.{' '}
          <span className="font-mono not-italic">−1</span> means losing that gene killed
          them. Lower is more essential.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="226px"
        description="Load the dependency data"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
