import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const steps: Step[] = [
  { label: <>Make a table of the <span className="font-mono">Squash</span> rows only. How many surveys?</> },
  { label: <>Add up its <span className="font-mono">Honeybees</span> and <span className="font-mono">Bumblebees</span>. Compare with the beans.</> },
  { label: <>How many different <span className="font-mono">Allotment</span> sites are there? Try <span className="font-mono">.value_counts()</span>.</> },
  { label: <>Bonus: rows where <span className="font-mono">Bumblebees &gt; 5</span> — which crop are they mostly on?</> },
]

const code = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

# 1. squash only
squash = df[df["Crop"] == "Squash"]


# 2. its honeybees and bumblebees


# 3. surveys per allotment

`

export function Slide13TIYFilter() {
  return (
    <ExerciseSlide
      title={
        <>
          Try it Yourself — <GradientText variant="green">filter and count</GradientText>
        </>
      }
      intro={
        <>
          Beans got 2 honeybees and 23 bumblebees. Squash is a big open flower — predict the answer
          before you run it.
        </>
      }
      steps={steps}
    >
      <LazyPythonRunner
        initialCode={code}
        height="352px"
        description="Your turn — one crop at a time"
      />
    </ExerciseSlide>
  )
}
