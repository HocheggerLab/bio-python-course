import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `df["Pollinators"] = df["Honeybees"] + df["Bumblebees"] + df["Hoverflies"]

print(df[["Crop", "Honeybees", "Bumblebees", "Hoverflies", "Pollinators"]].head())
print("all pollinators:", df["Pollinators"].sum())
`

const output = `        Crop  Honeybees  Bumblebees  Hoverflies  Pollinators
0  Raspberry          0           0           0            0
1      Rbean          0           0           0            0
2      Rbean          0           1           0            1
3      Rbean          0           1           0            1
4      Rbean          1           0           0            1
all pollinators: 1302`

export function Slide22NewColumn() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Make a <GradientText variant="green">new column</GradientText>
        </>
      }
      lead={
        <>
          Assign to a name that doesn&apos;t exist yet, and pandas adds the column. The arithmetic is
          numpy&apos;s: row by row, all 1,620 at once — no loop.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              A fairer number
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">
                df[&quot;PerFlower&quot;] = df[&quot;Pollinators&quot;] / df[&quot;Flowers&quot;]
              </span>{' '}
              — visits per flower, so a patch of 2,000 and a patch of 6 can be compared.
            </CardBody>
          </SlideCard>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              Changing a column
            </CardHeading>
            <CardBody>
              The same line on an <em>existing</em> name overwrites it:{' '}
              <span className="font-mono text-white">df[&quot;Flowers&quot;] = df[&quot;Flowers&quot;] / 1000</span>.
              That changes <span className="font-mono text-white">df</span> for every cell after —
              the file on disk stays as it was.
            </CardBody>
          </SlideCard>
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="163px"
        description="Add up the three pollinator columns"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
