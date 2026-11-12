import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("depmap_lecture.csv")
names = ["Skin", "Bowel", "Breast", "Lung"]
four = df[df["oncotree_lineage"].isin(names)]

fig, ax = plt.subplots()
sns.boxplot(data=four, x="oncotree_lineage", y="SOX10", order=names,
            color="white", showfliers=False, ax=ax)
sns.stripplot(data=four, x="oncotree_lineage", y="SOX10", order=names,
              size=3, alpha=0.5, ax=ax)
ax.set_xlabel("")
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
          <span className="font-mono">seaborn</span> is a library built on matplotlib. Give it the
          DataFrame and the column names, and it splits the groups for you.{' '}
          <span className="font-mono">stripplot</span> draws every cell line as a dot, nudged sideways
          so they don&apos;t pile up. <span className="font-mono">ax=ax</span> puts it on your panel.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          <span className="text-bio-yellow font-semibold">🔍 Clue 3:</span> most skin lines need SOX10
          badly, but 18 of 73 hardly need it, and 8 of those are not melanoma at all. A box with dots
          on top is also exactly the plot your final project asks for.
        </p>
      }
    >
      <LazyPythonRunner initialCode={code} height="320px" description="SOX10 in four cancer types, one dot per cell line" />
    </ConceptSlide>
  )
}
