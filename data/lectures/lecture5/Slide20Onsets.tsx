import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

go = np.loadtxt("neuron_0588_20180828_5_lecture.csv",
                delimiter=",", skiprows=1, usecols=2)

toy = np.array([0, 0, 1, 1, 1, 0, 0, 1, 1, 0])   # two trials, not five
print(np.diff(toy))                 # +1 where it switches on, -1 where off
print(np.where(np.diff(toy) == 1)[0] + 1)   # +1: diff is one shorter

starts = np.where(np.diff(go) == 1)[0] + 1
print(f"go trials: {len(starts)}")
print(starts[:5])
`

const output = `[ 0  1  0  0 -1  0  1  0 -1]
[2 7]
go trials: 254
[ 43 125 166 248 371]`

export function Slide20Onsets() {
  return (
    <ConceptSlide
      title={
        <>
          Where Does a Trial <GradientText variant="green">Start?</GradientText>
        </>
      }
      lead={
        <>
          The go signal is on for about nine frames, so masking found 2,286 frames — not 254
          trials. We don&apos;t want every frame; we want the moment it{' '}
          <span className="text-bio-green font-semibold">switches on</span>.
        </>
      }
      closing={
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2">
            np.diff compares each value to the one before it
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            So it is <span className="font-mono">+1</span> exactly where the signal switched on.
            Ten numbers prove the idea; the same line then finds all{' '}
            <strong className="text-white">254</strong> real trials.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="Find the edges, not the plateau"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
