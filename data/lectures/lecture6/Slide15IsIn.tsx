import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `berries = df[df["Crop"].isin(["Raspberry", "Blackberry", "Strawberry"])]

print(berries.shape)
print(berries["Crop"].value_counts())
`

const output = `(450, 13)
Crop
Raspberry     269
Strawberry    124
Blackberry     57
Name: count, dtype: int64`

export function Slide15IsIn() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          One of several — <GradientText>.isin()</GradientText>
        </>
      }
      lead={
        <>
          All the berry surveys? Three <span className="font-mono">==</span> joined with{' '}
          <span className="font-mono">|</span> works, but <span className="font-mono">.isin()</span>{' '}
          takes a list and asks &quot;is this value one of these?&quot; for every row.
        </>
      }
      closing={
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardBody>
            Want everything <em>except</em> the berries? Put{' '}
            <span className="font-mono text-white">~</span> in front of the mask — it flips every
            True and False:{' '}
            <span className="font-mono text-white">df[~df[&quot;Crop&quot;].isin(berry_list)]</span>
          </CardBody>
        </SlideCard>
      }
      note={
        <>
          Spelling counts: <span className="font-mono not-italic">&quot;raspberry&quot;</span> matches
          nothing. Check the exact names with{' '}
          <span className="font-mono not-italic">df[&quot;Crop&quot;].unique()</span>.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="163px"
        description="Keep the three berry crops"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
