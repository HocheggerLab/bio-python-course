import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `print(df.loc[df["Bumblebees"] > 8, ["Month", "Allotment", "Crop", "Bumblebees"]])
`

const output = `    Month    Allotment       Crop  Bumblebees
300  July  Moulsecoomb  Raspberry          10
588   May      Roedale  Raspberry          13`

export function Slide16Loc() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Rows <em>and</em> columns in one go — <GradientText>.loc</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">.loc[rows, columns]</span> — which rows before the comma, which
          columns after it. Here: the surveys with more than eight bumblebees, and only four columns.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              The numbers on the left
            </CardHeading>
            <CardBody>
              300 and 588 are the <span className="text-white">index</span> — each row&apos;s label
              from the original file. Filtering keeps them, so you can always find a row again:{' '}
              <span className="font-mono text-white">df.loc[588]</span>.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              Same as last week
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">grid[rows, columns]</span> on a numpy array has
              the same comma. <span className="font-mono text-white">.loc</span> lets you use names
              and masks instead of positions.
            </CardBody>
          </SlideCard>
        </div>
      }
      note={<>Two survey patches, both raspberries — remember that for Part 4.</>}
    >
      <LazyPythonRunner
        initialCode={code}
        height="100px"
        description="The busiest surveys, four columns"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
