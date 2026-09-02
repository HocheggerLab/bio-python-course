import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const steps: Step[] = [
  { label: <>Group by <span className="font-mono">Month</span> instead of crop. When is each bee busiest?</> },
  { label: <>Now group by <span className="font-mono">Allotment</span>. Which site sees the most bumblebees?</> },
  { label: <>Swap <span className="font-mono">.sum()</span> for <span className="font-mono">.mean()</span>. Does the ranking change — and which is fairer, given the survey counts?</> },
  { label: <>Bonus: <span className="font-mono">.groupby(&quot;Crop&quot;)[&quot;Flowers&quot;].mean()</span> — which crop puts out the most flowers?</> },
]

const code = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

# 1. by month


# 2. by allotment


# 3. the same, but .mean() instead of .sum()

`

export function Slide20TIYGroupBy() {
  return (
    <ExerciseSlide
      title={
        <>
          Try it Yourself — <GradientText variant="green">group by something else</GradientText>
        </>
      }
      intro={
        <>
          One line, one word changed. That is the whole point of{' '}
          <span className="font-mono">groupby</span>.
        </>
      }
      steps={steps}
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="Your turn — change what you split by"
      />
    </ExerciseSlide>
  )
}
