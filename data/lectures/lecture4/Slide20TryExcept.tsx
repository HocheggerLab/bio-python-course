import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
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

export function Slide20TryExcept() {
  return (
    <>
      <SlideTitle>
        The Advanced Pattern — <GradientText>try / except</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody className="text-xs md:text-sm xl:text-base">
              Sometimes you <em>can&apos;t</em> check in advance. Is{' '}
              <span className="font-mono">&quot;12.5&quot;</span> a number? The only way to know is to{' '}
              <strong>try converting it</strong> — and be ready if it fails.
            </CardBody>
          </SlideCard>

          <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              <span className="font-mono">try</span> the risk, <span className="font-mono">except</span> the fallout
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Put the line that might fail in <span className="font-mono">try</span>. Name the{' '}
              <strong>specific</strong> error you expect in{' '}
              <span className="font-mono">except ValueError</span>. If it happens, that block runs
              instead of crashing — everything else carries on.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              Name the error you <em>expect</em> — <span className="font-mono">except ValueError</span>,
              not a bare <span className="font-mono">except</span>. Catching <em>everything</em> hides
              the bugs you didn&apos;t predict.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            A column of mixed values — the bad ones become{' '}
            <span className="font-mono not-italic">None</span> instead of a crash:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="360px"
              showLineNumbers
              description="Live demo — try/except for values you can't check in advance"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
