import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `species = ["Terrestris", "Lapidarius", "Pascuorum", "Pratorum"]

print(df.groupby("Crop")[species].sum().loc[["Bbean", "Squash", "Raspberry"]])
`

const output = `           Terrestris  Lapidarius  Pascuorum  Pratorum
Crop
Bbean               8           0         15         0
Squash             13           1          1         0
Raspberry          52          17        180        45`

export function Slide18Species() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          &quot;Bumblebees&quot; is not <GradientText>one thing</GradientText>
        </>
      }
      lead={
        <>
          Change one list and the same line asks a sharper question. The six{' '}
          <em>Bombus</em> species were counted separately all along.
        </>
      }
      closing={
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardBody>
            Squash&apos;s fifteen bumblebees are almost all{' '}
            <span className="text-white">one species</span> — <em>B. terrestris</em>, 13 of 15.
            Raspberry&apos;s are mostly <em>B. pascuorum</em>, 180 of 311. The block labelled
            &quot;bumblebees&quot; hides a division of labour.
          </CardBody>
        </SlideCard>
      }
      note={
        <>
          <span className="font-mono not-italic">.loc[[...]]</span> picks rows{' '}
          <strong>by name</strong> — the index is crop names now, not numbers. That is the other
          thing labels buy you.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="184px"
        description="Down to species level"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
