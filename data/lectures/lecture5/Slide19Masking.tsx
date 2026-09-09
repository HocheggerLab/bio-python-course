import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import numpy as np

F = "neuron_0588_20180828_5_lecture.csv"
dff = np.loadtxt(F, delimiter=",", skiprows=1, usecols=1)
go  = np.loadtxt(F, delimiter=",", skiprows=1, usecols=2)

print(go[42:46])           # a go trial, as 0s and 1s
print(go == 1)             # ask every value the same question
print(f"frames with go on: {(go == 1).sum()}")
print(f"mean activity while go is on: {dff[go == 1].mean():.3f}")
print(f"mean activity overall:        {dff.mean():.3f}")
`

const output = `[0. 1. 1. 1.]
[False False False ... False False False]
frames with go on: 2286
mean activity while go is on: -0.005
mean activity overall:        0.058`

export function Slide19Masking() {
  return (
    <ConceptSlide
      title={
        <>
          Masking — One Question, <GradientText>Every Value</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">go == 1</span> doesn&apos;t give one answer, it gives 21,238
          of them. Feed that back in as{' '}
          <span className="font-mono">dff[go == 1]</span> and you keep only the frames where a go
          trial was running.
        </>
      }
      closing={
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2">
            But look at the answer. That can&apos;t be right.
          </CardHeading>
          <CardBody className="text-base md:text-xl xl:text-2xl">
            While the go signal plays, the neuron sits{' '}
            <strong className="text-white">below</strong> its own average. Either it hates the
            signal — or we are looking in the wrong place.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="331px"
        description="Boolean masking — filter an array with a question"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
