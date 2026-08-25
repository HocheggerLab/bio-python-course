import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide25Division() {
  return (
    <>
      <SlideTitle>
        Division &amp; <GradientText>Decimals</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
            <span className="font-mono">/</span> always gives back a float
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            Even when the numbers divide evenly. That decimal point is Python keeping your
            fractions honest — exactly what GC content needs.
          </CardBody>
          <pre className="bg-bio-dark/60 rounded-lg p-3 md:p-5 font-mono text-xs md:text-base xl:text-lg text-gray-200 overflow-x-auto">
{`9 / 3       # 3.0   (a float, not 3!)

gc_count = 9
length   = 16
gc_frac  = gc_count / length    # 0.5625`}
          </pre>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            <span className="font-mono">round()</span> — tidy the decimal for reporting
          </CardHeading>
          <CardBody className="mb-3 md:mb-4">
            A fraction like <span className="font-mono">0.5625</span> becomes a friendlier
            percentage once you multiply by 100 and round it.
          </CardBody>
          <pre className="bg-bio-dark/60 rounded-lg p-3 md:p-5 font-mono text-xs md:text-base xl:text-lg text-gray-200 overflow-x-auto">
{`gc_frac * 100              # 56.25
round(gc_frac * 100, 1)    # 56.2  (1 decimal place)`}
          </pre>
        </SlideCard>

      </div>
    </>
  )
}
