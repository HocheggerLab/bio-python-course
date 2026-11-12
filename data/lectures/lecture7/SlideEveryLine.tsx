import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
names = ["Skin", "Bowel", "Breast", "Lung"]
groups = [df[df["oncotree_lineage"] == n]["SOX10"] for n in names]

fig, ax = plt.subplots()
ax.boxplot(groups, tick_labels=names, showfliers=False)
for i, values in enumerate(groups, start=1):
    x = np.random.normal(i, 0.06, len(values))   # spread the dots a little sideways
    ax.scatter(x, values, s=8, alpha=0.5)
ax.set_ylabel("SOX10 gene effect")
ax.set_title("Does every skin cancer line need SOX10?")
plt.show()
`

export function SlideEveryLine() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          A mean hides the cell lines: <GradientText>show every one</GradientText>
        </>
      }
      lead={
        <>
          A box plot with every cell line drawn on top as a dot. The dots are nudged sideways at
          random so they don&apos;t sit on top of each other.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          <span className="text-bio-yellow font-semibold">🔍 Clue 3:</span> most skin lines need SOX10
          badly, but 18 of 73 hardly need it, and 8 of those 18 are not melanoma at all (squamous cell
          and Merkel cell cancers). A mean can&apos;t show you that. Remember this figure: a box with the
          points on top is exactly the plot your final project asks for.
        </p>
      }
    >
      <LazyPythonRunner initialCode={code} height="320px" description="SOX10 in four cancer types, one dot per cell line" />
    </ConceptSlide>
  )
}
