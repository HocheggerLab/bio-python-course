import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd

df = pd.read_csv("depmap_lecture.csv")
genes = df.columns[4:]       # every column after the first four is a gene

means = df.groupby("oncotree_lineage")[genes].mean()
print(means.shape)
print(means.loc["Skin"].nsmallest(5).round(2))
`

const output = `(30, 257)
RAN     -3.86
HSPE1   -3.41
RPL17   -3.11
RPS8    -3.02
RRM1    -2.99
Name: Skin, dtype: float64`

export function SlideMeans() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          One line of pandas: the mean of <GradientText>every gene</GradientText> in every cancer
        </>
      }
      lead={
        <>
          Last week&apos;s <span className="font-mono">groupby</span>, on 257 columns at once. The
          result has one row per cancer type (30) and one column per gene (257). Then{' '}
          <span className="font-mono">.loc[&quot;Skin&quot;]</span> takes the skin row, and{' '}
          <span className="font-mono">.nsmallest(5)</span> finds the five most negative values: the
          genes skin cancer lines need most.
        </>
      }
      note={<>The file has 257 of DepMap&apos;s 18,000 genes, chosen for today. They include the top genes for every cancer type, so the answers match the full data.</>}
    >
      <LazyPythonRunner initialCode={code} height="226px" description="Mean gene effect per cancer type" staticOutput={output} />
    </ConceptSlide>
  )
}
