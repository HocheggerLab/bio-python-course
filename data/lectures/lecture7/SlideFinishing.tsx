import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
skin = df[df["oncotree_lineage"] == "Skin"]["SOX10"]
rest = df[df["oncotree_lineage"] != "Skin"]["SOX10"]

fig, axes = plt.subplots(1, 2)
axes[0].hist(df["SOX10"], bins=40)
axes[0].set_xlabel("SOX10 gene effect")
axes[1].boxplot([skin, rest], tick_labels=["skin", "all others"])
axes[1].set_ylabel("SOX10 gene effect")

fig.set_size_inches(10, 4)                       # fig: how big
fig.suptitle("Skin cancer lines need SOX10")     # fig: one title over both panels
fig.tight_layout()                               # fig: no overlapping labels
plt.savefig("sox10.png", dpi=300)                # plt: a sharp file for your report
plt.show()
`

export function SlideFinishing() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Finishing touches: <GradientText>the whole figure</GradientText>
        </>
      }
      lead={
        <>
          The panels are done; now the <span className="font-mono">fig</span> reception. A title that
          states the finding, a size that fits the page, spacing that stops labels overlapping, and a
          file you can put in a report.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">dpi=300</span> is dots per inch: high enough for print.
          A title that says the result (&quot;Skin cancer lines need SOX10&quot;) beats one that names
          the variables (&quot;SOX10 by lineage&quot;).
        </>
      }
    >
      <LazyPythonRunner initialCode={code} height="260px" description="Two panels, finished and saved" />
    </ConceptSlide>
  )
}
