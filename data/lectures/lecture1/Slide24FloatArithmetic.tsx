import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide24FloatArithmetic() {
  return (
    <>
      <SlideTitle>
        Float Arithmetic &amp; <GradientText>Division</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">/</span> always returns a float
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Even when both numbers divide evenly. This is how Python keeps fractions honest —
            you never lose precision by accident.
          </CardBody>
          <pre className="bg-bio-dark/60 rounded-lg p-3 md:p-5 font-mono text-xs md:text-base xl:text-lg text-gray-200 overflow-x-auto">
{`9 / 3        # 3.0     (float, not int!)
9 // 3       # 3       (int — floor division)

gc_count = 9
length   = 16
gc_frac  = gc_count / length    # 0.5625`}
          </pre>
        </SlideCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 flex-1 min-h-0">
          <SlideCard color="green" layout="middle" padding="compact">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">Mixing int and float</CardHeading>
            <CardBody className="mb-2 md:mb-3 text-xs md:text-sm xl:text-base">
              Mix an int and a float — the result is a float. Python promotes upward.
            </CardBody>
            <pre className="bg-bio-dark/60 rounded p-3 md:p-4 font-mono text-xs md:text-base xl:text-lg text-gray-200">
{`16 + 0.5     # 16.5  (float)
2  *  0.25   # 0.5   (float)`}
            </pre>
          </SlideCard>

          <SlideCard color="yellow" layout="middle" padding="compact">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">Converting on purpose</CardHeading>
            <CardBody className="mb-2 md:mb-3 text-xs md:text-sm xl:text-base">
              Use <span className="font-mono">int()</span> and <span className="font-mono">float()</span>{' '}
              to convert. <span className="font-mono">int()</span> truncates — it does not round.
            </CardBody>
            <pre className="bg-bio-dark/60 rounded p-3 md:p-4 font-mono text-xs md:text-base xl:text-lg text-gray-200">
{`float(16)     # 16.0
int(0.9)      # 0   (truncated!)
round(0.5625, 2)  # 0.56`}
            </pre>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
