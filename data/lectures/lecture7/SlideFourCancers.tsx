import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
genes = df.columns[4:]
cancers = ["Skin", "Bowel", "Myeloid", "Ovary/Fallopian Tube"]

fig, axes = plt.subplots(2, 2, figsize=(9, 5))
for ax, cancer in zip(axes.flat, cancers):
    here = df[df["oncotree_lineage"] == cancer][genes].mean()
    others = df[df["oncotree_lineage"] != cancer][genes].mean()
    top = (here - others).nsmallest(5)
    ax.barh(top.index, top.values)
    ax.invert_yaxis()
    ax.set_title(cancer)
fig.tight_layout()
plt.show()
`

export function SlideFourCancers() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Four cancers, <GradientText>four different answers</GradientText>
        </>
      }
      lead={
        <>
          The grid from before, with the better question inside the loop.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          Bowel: <strong className="text-white">CTNNB1</strong> (β-catenin) and{' '}
          <strong className="text-white">KRAS</strong>, the pathways mutated in colorectal cancer.
          Myeloid leukaemia: <strong className="text-white">MYB</strong> and{' '}
          <strong className="text-white">CBFB</strong>, switches that blood stem cells use. Ovary:{' '}
          <strong className="text-white">PAX8</strong>, the identity switch of its tissue. Each cancer
          depends on what its own cell type, or its own mutation, relies on.
        </p>
      }
    >
      <LazyPythonRunner initialCode={code} height="320px" description="The five most selective genes in four cancer types" />
    </ConceptSlide>
  )
}
