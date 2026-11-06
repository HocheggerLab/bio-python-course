import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `beans = df[df["Crop"] == "Bbean"]

print(beans.shape)
print(f'honeybees {beans["Honeybees"].sum()}   bumblebees {beans["Bumblebees"].sum()}')
`

const output = `(94, 13)
honeybees 2   bumblebees 23`

export function Slide13Filter() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Back to the bet: <GradientText>the broad beans</GradientText>
        </>
      }
      lead={
        <>
          Filter first, then ask the smaller table a question. Who actually visits the broad
          beans?
        </>
      }
      closing={
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardBody>
            Ninety-four surveys of broad beans. Across all of them:{' '}
            <span className="text-white">two</span> honeybee visits and{' '}
            <span className="text-white">twenty-three</span> bumblebee visits. Hold onto that ratio.
          </CardBody>
        </SlideCard>
      }
      note={<>Swap in another crop and run it again. Which bees would it lose?</>}
    >
      <LazyPythonRunner
        initialCode={code}
        height="205px"
        description="Broad beans only"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
