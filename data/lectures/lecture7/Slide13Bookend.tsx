import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")

fig, ax = plt.subplots()
ax.hist(df["SOX10"], bins=40, color="#00d4ff")
ax.set_xlabel("SOX10 dependency score")
ax.set_ylabel("number of cell lines")
ax.set_title("SOX10 across 1,165 cancer cell lines")
plt.show()
`

export function Slide13Bookend() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          You can now read <GradientText>every line of this</GradientText>
        </>
      }
      lead={
        <>
          The plot from the start of the session. Nothing in it is new: make a{' '}
          <span className="font-mono">fig</span> and an{' '}
          <span className="font-mono">ax</span>, draw on it, label it, show it.
        </>
      }
      note={
        <>
          The long tail is nearly all melanoma — but one histogram cannot show you that.{' '}
          <strong>Part 2</strong>: two panels, side by side.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="The opening figure, built from the pieces you now know"
      />
    </ConceptSlide>
  )
}
