import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `print(df["Allotment"].nunique(), "allotments")
print(df["Allotment"].value_counts())
`

const output = `9 allotments
Allotment
Weald              495
Roedale            390
Whitehawk          311
Hoggs              170
Keston             106
Moulsecoomb        102
Racehill            36
Moulsecoomb_Est      8
Camp_Site            2
Name: count, dtype: int64`

export function Slide21Count() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Count the words — <GradientText variant="yellow">value_counts</GradientText>
        </>
      }
      lead={
        <>
          Text columns can&apos;t be summed, but they can be tallied.{' '}
          <span className="font-mono">.value_counts()</span> counts each different value, biggest
          first.
        </>
      }
      closing={
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardBody>
            <span className="font-mono text-white">.unique()</span> — the different values ·{' '}
            <span className="font-mono text-white">.nunique()</span> — how many there are ·{' '}
            <span className="font-mono text-white">.value_counts()</span> — how often each appears
          </CardBody>
        </SlideCard>
      }
      note={
        <>
          Weald was surveyed 495 times, Camp_Site twice. Totals from Weald will always look big — keep
          that in mind before you compare places.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="100px"
        description="How many surveys at each allotment?"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
