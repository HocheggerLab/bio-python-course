import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `busy = df[(df["Crop"] == "Raspberry") & (df["Bumblebees"] >= 3)]

print(busy.shape)
print(busy[["Month", "Allotment", "Crop", "Bumblebees"]].head(3))
`

const output = `(35, 13)
     Month Allotment       Crop  Bumblebees
39  August     Hoggs  Raspberry           3
40  August     Hoggs  Raspberry           3
44  August     Hoggs  Raspberry           4`

export function Slide14Combine() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Two conditions at once — <GradientText>&amp;</GradientText> and{' '}
          <GradientText variant="green">|</GradientText>
        </>
      }
      lead={
        <>
          Raspberry surveys <em>and</em> at least three bumblebees. Make one mask per condition and
          join them: <span className="font-mono">&amp;</span> means both,{' '}
          <span className="font-mono">|</span> means either.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">
              🪤 The brackets are not optional
            </CardHeading>
            <CardBody>
              Without them Python does <span className="font-mono text-white">&quot;Raspberry&quot; &amp; df[&quot;Bumblebees&quot;]</span>{' '}
              first and stops with a <span className="font-mono text-white">TypeError</span>. Wrap
              every condition in its own <span className="font-mono text-white">( )</span>.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              Not <span className="font-mono">and</span> / <span className="font-mono">or</span>
            </CardHeading>
            <CardBody>
              The words compare <em>one</em> True with one False. A mask holds 1,620 of them, so{' '}
              <span className="font-mono text-white">and</span> raises{' '}
              <span className="font-mono text-white">ValueError: … ambiguous</span>. Use the
              symbols.
            </CardBody>
          </SlideCard>
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="163px"
        description="Raspberry surveys with three or more bumblebees"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
