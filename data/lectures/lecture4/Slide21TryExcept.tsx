import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `def to_number(text):
    try:
        return float(text)          # attempt the risky bit
    except ValueError:              # only if THAT specific error happens
        return None                 # a sensible fallback

# A messy column, straight from a spreadsheet
for cell in ["12.5", "N/A", "3.0", ""]:
    print(cell, "->", to_number(cell))
`

const demoOutput = `12.5 -> 12.5
N/A -> None
3.0 -> 3.0
 -> None`

export function Slide21TryExcept() {
  return (
    <ConceptSlide
      title={<>The Advanced Pattern — <GradientText>try / except</GradientText></>}
      lead={
        <>
          Sometimes you <em>can&apos;t</em> check in advance. Is{' '}
          <span className="font-mono">&quot;12.5&quot;</span> a number? The only way to know is to{' '}
          <strong>try converting it</strong> — and be ready if it fails.
        </>
      }
      points={
      <>
        <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
            <span className="font-mono">try</span> the risk, <span className="font-mono">except</span> the fallout
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Put the line that might fail in <span className="font-mono">try</span>. Name the{' '}
            <strong>specific</strong> error you expect in{' '}
            <span className="font-mono">except ValueError</span>. If it happens, that block runs
            instead of crashing — everything else carries on.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>A column of mixed values — the bad ones become{' '}
        <span className="font-mono not-italic">None</span> instead of a crash:</>}
      closing={
        <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
          <CardBody className="text-sm md:text-base xl:text-lg">
            Name the error you <em>expect</em> — <span className="font-mono">except ValueError</span>,
        not a bare <span className="font-mono">except</span>. Catching <em>everything</em> hides
        the bugs you didn&apos;t predict.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        description="Live demo — try/except for values you can't check in advance"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
