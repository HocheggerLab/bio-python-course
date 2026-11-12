import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")

fig, ax = plt.subplots()
ax.scatter(df["BRAF"], df["SOX10"], s=6, alpha=0.4)
ax.set_xlabel("BRAF dependency")
ax.set_ylabel("SOX10 dependency")

# Mark skin cancer: remove the # below, run again
# skin = df[df["oncotree_lineage"] == "Skin"]
# ax.scatter(skin["BRAF"], skin["SOX10"], s=30, label="skin cancer")
# ax.legend()

plt.show()
`

export function Slide15Scatter() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Two columns — <GradientText>ax.scatter()</GradientText>
        </>
      }
      lead={
        <>
          One column is a distribution. <strong>Two</strong> columns ask a different
          question: do they move together? One dot per cell line, x against y.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">s=6</span> shrinks the dots and{' '}
          <span className="font-mono not-italic">alpha=0.4</span> makes them
          see-through — with 1,165 points an opaque blob tells you nothing. Then remove the{' '}
          <span className="font-mono not-italic">#</span>s: a second{' '}
          <span className="font-mono not-italic">ax.scatter</span> on the same panel draws the skin
          lines on top, with bigger dots (<span className="font-mono not-italic">s=30</span>) in the
          next colour. <span className="text-bio-yellow not-italic font-semibold">🔍 Clue 2:</span> the
          cloud in the bottom left is skin cancer, lines that need SOX10 <em>and</em> BRAF.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="247px"
        description="One dot per cell line — 1,165 of them"
      />
    </ConceptSlide>
  )
}
