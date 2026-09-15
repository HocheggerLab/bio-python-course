import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
skin = df[df["oncotree_lineage"] == "Skin"]
rest = df[df["oncotree_lineage"] != "Skin"]

fig, axes = plt.subplots(1, 2, sharex=True)
fig.set_size_inches(9, 3)

axes[0].hist(skin["SOX10"], bins=20, color="#00d4ff")
axes[0].set_title("Skin (melanoma)")

axes[1].hist(rest["SOX10"], bins=20, color="#9ca3af")
axes[1].set_title("Everything else")
plt.show()
`

export function Slide14TwoPanels() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Two panels — <GradientText variant="green">plt.subplots(1, 2)</GradientText>
        </>
      }
      lead={
        <>
          Ask for two and you get an <strong>array</strong> of axes back:{' '}
          <span className="font-mono">axes[0]</span> is the left panel,{' '}
          <span className="font-mono">axes[1]</span> the right. Everything you do to them
          is what you already know.
        </>
      }
      note={
        <>
          Skin averages <span className="font-mono not-italic">−1.26</span> against{' '}
          <span className="font-mono not-italic">−0.20</span> for everything else. That long
          tail on the first histogram was melanoma all along.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="The same histogram twice, on two different slices"
      />
    </ConceptSlide>
  )
}
