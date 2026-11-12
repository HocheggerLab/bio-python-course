import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
genes = df.columns[4:]
skin = df[df["oncotree_lineage"] == "Skin"][genes].mean()
rest = df[df["oncotree_lineage"] != "Skin"][genes].mean()

fig, ax = plt.subplots()
ax.scatter(rest, skin, s=10, alpha=0.5)
ax.plot([-4, 0.5], [-4, 0.5], color="grey", linestyle="--")   # equal in both
for gene in ["SOX10", "BRAF", "RAN"]:
    ax.annotate(gene, (rest[gene], skin[gene]))
ax.set_xlabel("mean effect in all other cancers")
ax.set_ylabel("mean effect in skin cancer")
plt.show()
`

export function SlideHereVsElsewhere() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          The better question: what does skin need <GradientText>more than the rest?</GradientText>
        </>
      }
      lead={
        <>
          One dot per gene. Across: how much all the other cancers need it. Up: how much skin
          cancer needs it. Two filters from Lab 6 and two means give the two Series.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          Genes on the dashed line matter equally everywhere: RAN is far down in the corner, needed
          by every cell. Genes <strong className="text-white">below the line</strong> matter more in
          skin. SOX10 and BRAF stand out: the others barely need them at all.
        </p>
      }
    >
      <LazyPythonRunner initialCode={code} height="320px" description="Skin cancer against all other cancers, one dot per gene" />
    </ConceptSlide>
  )
}
