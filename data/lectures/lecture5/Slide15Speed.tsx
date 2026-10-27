import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SplitSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import time
import numpy as np

arr = np.random.random(10_000_000)   # 10 million random numbers
values = arr.tolist()                # the same numbers, as a list

start = time.time()                  # 1. a for loop: one at a time
total = 0
for v in values:
    total = total + v
loop_time = time.time() - start

start = time.time()                  # 2. numpy: all at once
mean = arr.mean()
numpy_time = time.time() - start

print(f"for loop: {loop_time:.2f} s   numpy: {numpy_time:.3f} s")
print(f"numpy was {loop_time / numpy_time:.0f}x faster")
`

/* Timings measured in CPython; in the browser both are slower and the
   ratio moves around, but numpy always wins by a wide margin. */
const output = `for loop: 0.36 s   numpy: 0.004 s
numpy was 94x faster`

export function Slide15Speed() {
  return (
    <SplitSlide
      ratio="wide-right"
      title={
        <>
          A Loop vs <GradientText variant="green">One numpy Call</GradientText>
        </>
      }
      lead={
        <>
          The mean of 10 million numbers, done twice. Run it and watch the clock.
        </>
      }
      left={
        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="red" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-1">
              🐢 The for loop
            </CardHeading>
            <CardBody>
              Python visits every value, one by one, 10 million times — checking what kind of thing
              each one is before it can add it.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              🚀 numpy
            </CardHeading>
            <CardBody>
              An array holds only numbers, packed side by side. <span className="font-mono">arr.mean()</span>{' '}
              hands the whole block to fast compiled code in one go.
            </CardBody>
          </SlideCard>
          <p className="text-bio-yellow text-base md:text-xl xl:text-2xl font-semibold">
            Same answer. Around a hundred times faster.
          </p>
        </div>
      }
      right={
        <LazyPythonRunner
          initialCode={code}
          height="394px"
          description="Time it — 10 million numbers"
          staticOutput={output}
        />
      }
    />
  )
}
