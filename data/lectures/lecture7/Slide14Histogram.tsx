import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")

fig, ax = plt.subplots()
ax.hist(df["SOX10"], bins=40)
ax.set_xlabel("SOX10 dependency score")
ax.set_ylabel("number of cell lines")
plt.show()
`

/**
 * `ax.hist` finally gets explained. It was on screen in the opening slide as
 * a motivation; here it becomes something the students can write.
 */
export function Slide14Histogram() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          One column — <GradientText>ax.hist()</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">ax.plot()</span> drew a line because a growth curve{' '}
          <em>is</em> a line. A single column of 1,165 scores is not — it is a{' '}
          <strong>distribution</strong>, and that is a different method on the same{' '}
          <span className="font-mono">ax</span>.
        </>
      }
      note={
        <>
          <span className="font-mono not-italic">bins=40</span> is the one argument worth
          playing with: it sets how many buckets the range is cut into. Try{' '}
          <span className="font-mono not-italic">5</span>, then{' '}
          <span className="font-mono not-italic">200</span>.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="247px"
        description="The plot from the start of the session — now you can write it"
      />
    </ConceptSlide>
  )
}
