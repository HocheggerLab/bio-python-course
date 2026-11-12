import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
genes = df.columns[4:]
skin = df[df["oncotree_lineage"] == "Skin"][genes].mean()
rest = df[df["oncotree_lineage"] != "Skin"][genes].mean()

selective = (skin - rest).nsmallest(10)     # most negative = needed most in skin
fig, ax = plt.subplots()
ax.barh(selective.index, selective.values)
ax.invert_yaxis()
ax.set_xlabel("gene effect: skin minus all other cancers")
ax.set_title("Genes skin cancer needs more than other cancers")
plt.show()
`

export function SlideSelective() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Turn the distance from the line into a <GradientText>number</GradientText>
        </>
      }
      lead={
        <>
          Subtract one Series from the other, gene by gene, just like the share column in Lab 6.
          A big negative difference means skin needs the gene much more than the rest.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          <strong className="text-white">SOX10</strong> is the switch that makes a pigment cell a
          pigment cell. <strong className="text-white">BRAF</strong> is mutated in about half of all
          melanomas, and the cancer becomes hooked on it. That is the biology of melanoma, found
          with two means and a subtraction. How was your bet?
        </p>
      }
    >
      <LazyPythonRunner initialCode={code} height="300px" description="The ten most skin-selective genes" />
    </ConceptSlide>
  )
}
