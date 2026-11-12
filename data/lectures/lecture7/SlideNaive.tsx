import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("depmap_lecture.csv")
genes = df.columns[4:]
means = df.groupby("oncotree_lineage")[genes].mean()

top = means.loc["Skin"].nsmallest(10)
fig, ax = plt.subplots()
ax.barh(top.index, top.values)
ax.invert_yaxis()                     # the most needed gene at the top
ax.set_xlabel("mean gene effect in skin cancer lines")
ax.set_title("The 10 genes skin cancer needs most?")
plt.show()
`

export function SlideNaive() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          The answer, as a <GradientText>bar chart</GradientText>
        </>
      }
      lead={
        <>
          A Series from pandas goes straight into <span className="font-mono">ax.barh()</span>: the
          gene names (the index) become the bars&apos; labels, the values their lengths.
        </>
      }
      closing={
        <p className="text-center text-gray-300">
          Do you recognise any of these? <span className="text-white">RAN</span> moves proteins in
          and out of the nucleus, <span className="text-white">RPL17</span> and{' '}
          <span className="text-white">RPS8</span> are parts of the ribosome,{' '}
          <span className="text-white">RRM1</span> makes the building blocks of DNA. Nothing to do
          with skin.
        </p>
      }
    >
      <LazyPythonRunner initialCode={code} height="300px" description="The ten lowest means in skin cancer" />
    </ConceptSlide>
  )
}
