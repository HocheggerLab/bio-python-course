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

export function Slide12Filter() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Keep only the <GradientText>rows you care about</GradientText>
        </>
      }
      lead={
        <>
          A mask on a Series picks values. The same mask on a{' '}
          <span className="font-mono">DataFrame</span> picks whole <strong>rows</strong> — all
          thirteen columns come along.
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
      note={
        <>
          <span className="font-mono not-italic">df[df[&quot;Crop&quot;] == &quot;Bbean&quot;]</span>{' '}
          reads oddly the first time. Inside is a mask of 1,620 True/False; outside, the table keeps
          the rows where it is True. Exactly{' '}
          <span className="font-mono not-italic">dff[go == 1]</span> from last week.
        </>
      }
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
