import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
genes = df.columns[4:]
means = df.groupby("oncotree_lineage")[genes].mean()

fig, axes = plt.subplots(2, 2, figsize=(9, 5))
# zip pairs each panel with one cancer type
for ax, cancer in zip(axes.flat, ["Skin", "Bowel", "Myeloid", "Breast"]):
    top = means.loc[cancer].nsmallest(5)
    ax.barh(top.index, top.values)
    ax.invert_yaxis()
    ax.set_title(cancer)
fig.tight_layout()
plt.show()
`

export function SlideSameEverywhere() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Four cancers, <GradientText>the same answer</GradientText>
        </>
      }
      lead={
        <>
          Same code, four panels: <span className="font-mono">plt.subplots(2, 2)</span> makes a grid,
          and a <span className="font-mono">for</span> loop fills one panel per cancer type.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          RAN and HSPE1 top every list, and the rest are ribosome and housekeeping genes. They are{' '}
          <strong className="text-white">essential everywhere</strong>: DepMap has about 1,000 genes
          that almost every cell line needs. Switching them off would kill healthy cells too. We
          asked the wrong question.
        </p>
      }
    >
      <LazyPythonRunner initialCode={code} height="320px" description="The top five for four cancer types" />
    </ConceptSlide>
  )
}
