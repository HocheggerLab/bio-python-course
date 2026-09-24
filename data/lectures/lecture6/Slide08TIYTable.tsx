import { GradientText } from '@/components/slides/SlideTitle'
import { ExerciseSlide, type Step } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const steps: Step[] = [
  { label: <>How many <strong>flowers</strong> were counted in total? Use the <span className="font-mono">Flowers</span> column.</> },
  { label: <>Which pollinator is commoner overall — <span className="font-mono">Honeybees</span> or <span className="font-mono">Hoverflies</span>?</> },
  { label: <>How many surveys saw <strong>more than five</strong> honeybees at once?</> },
  { label: <>Bonus: what is the <em>largest</em> number of honeybees in a single survey?</> },
]

const code = `import pandas as pd
df = pd.read_csv("pollinators_lecture.csv")

# 1. total flowers counted


# 2. honeybees vs hoverflies


# 3. surveys with more than five honeybees

`

export function Slide08TIYTable() {
  return (
    <ExerciseSlide
      title={
        <>
          Try it Yourself — <GradientText variant="green">interrogate the table</GradientText>
        </>
      }
      intro={
        <>
          <span className="font-mono">df</span> is already loaded. Every method you need you used
          last week on arrays.
        </>
      }
      steps={steps}
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="Your turn — one column at a time"
      />
    </ExerciseSlide>
  )
}
