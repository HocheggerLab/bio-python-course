import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `readings = [0.15, -0.05, 0.21, 0.26]      # a plain Python list

# Subtract the baseline from every value:
# readings - 0.1   ->  TypeError, a list can't do arithmetic

import numpy as np
arr = np.array(readings)                   # the same numbers, as an array

print(arr - 0.1)
print(arr * 2)
print(f"{arr.mean():.3f}")
`

const output = `[ 0.05 -0.15  0.11  0.16]
[ 0.3  -0.1   0.42  0.52]
0.143`

export function Slide16WhyNotList() {
  return (
    <ConceptSlide
      title={
        <>
          A List Can&apos;t Do <GradientText variant="green">Arithmetic</GradientText>
        </>
      }
      lead={
        <>
          You have 21,238 readings and you want every one of them shifted, scaled or averaged. A
          list makes you write a loop. An array just does it.
        </>
      }
      closing={
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2">
            This is called vectorisation
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            You say <em>what</em> should happen to all the numbers, not <em>how</em> to visit
            them one at a time. One line instead of a loop — and far faster, as we&apos;ll see.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="One operation, every value at once"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
