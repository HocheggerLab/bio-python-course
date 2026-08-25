import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide21WhenWhich() {
  return (
    <>
      <SlideTitle>
        Which One? <GradientText variant="green">if</GradientText> vs{' '}
        <GradientText>try / except</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 mt-3 md:mt-4">

        <SlideCard color="neutral" layout="start" padding="compact">
          <CardBody className="text-xs md:text-sm xl:text-base">
            Both stop a crash. The question is simple:{' '}
            <strong>can you check the problem cheaply, before you act?</strong>
          </CardBody>
        </SlideCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">

          {/* if guard */}
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">if</span> — look before you leap
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base mb-2 md:mb-3">
              Reach for a guard when the check is <strong>easy and certain</strong>:
            </CardBody>
            <ul className="flex flex-col gap-1.5 md:gap-2 text-[11px] md:text-sm xl:text-base text-gray-300">
              <li>▸ Is this valid DNA? <span className="font-mono text-bio-green">all(b in &quot;ATGC&quot; …)</span></li>
              <li>▸ Is the sequence empty? <span className="font-mono text-bio-green">len(seq) == 0</span></li>
              <li>▸ Is the list non-empty before I average it?</li>
            </ul>
            <CardBody className="text-[11px] md:text-sm mt-2 md:mt-3">
              Your <strong>default</strong> — clearer, and it says exactly what you require.
            </CardBody>
          </SlideCard>

          {/* try/except */}
          <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              <span className="font-mono">try / except</span> — ask forgiveness
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base mb-2 md:mb-3">
              Reach for it when you <strong>can&apos;t</strong> check first, or checking would just
              repeat the work:
            </CardBody>
            <ul className="flex flex-col gap-1.5 md:gap-2 text-[11px] md:text-sm xl:text-base text-gray-300">
              <li>▸ Converting text to a number — <span className="font-mono">float(cell)</span></li>
              <li>▸ Opening a file that might not exist</li>
              <li>▸ A download or server that might fail</li>
            </ul>
            <CardBody className="text-[11px] md:text-sm mt-2 md:mt-3">
              The error comes from <strong>outside your control</strong>, or the attempt <em>is</em>{' '}
              the test.
            </CardBody>
          </SlideCard>

        </div>

        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <CardBody className="text-[11px] md:text-sm xl:text-base">
            💡 Rule of thumb for this course: in a data-analysis notebook you&apos;ll reach for an{' '}
            <span className="font-mono">if</span> guard <strong>almost every time</strong>. Keep{' '}
            <span className="font-mono">try / except</span> for files, downloads, and messy
            text-to-number conversions.
          </CardBody>
        </SlideCard>

      </div>
    </>
  )
}
