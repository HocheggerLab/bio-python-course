import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const steps = [
  { n: '1', title: 'Classes', body: 'How Python bundles big tools into one thing you can use.', color: 'purple' as const },
  { n: '2', title: 'Borrow them', body: 'Import other people’s classes — first random.', color: 'blue' as const },
  { n: '3', title: 'numpy', body: 'The class built for thousands of numbers: arrays.', color: 'green' as const },
  { n: '4', title: 'The neuron', body: 'Use numpy to pull its answer out of the noise.', color: 'yellow' as const },
]

export function Slide04ThisSession() {
  return (
    <>
      <SlideTitle>
        This Session — <GradientText>Tools for Real Data</GradientText>
      </SlideTitle>

      <div className="flex flex-col gap-6 md:gap-8 xl:gap-10 mt-6 md:mt-10">

        <SlideCard color="neutral" layout="start" padding="normal" className="border-l-4">
          <p className="text-gray-200 text-lg md:text-2xl xl:text-3xl leading-relaxed">
            From now on the data gets big, and the code it needs gets complex: processing huge
            arrays, handling tables, drawing plots, running statistics. Writing all of that{' '}
            <strong className="text-white">from scratch would be impossible</strong>.
          </p>
          <p className="text-gray-200 text-lg md:text-2xl xl:text-3xl leading-relaxed mt-3 md:mt-4">
            So programmers package their tools as{' '}
            <span className="text-bio-yellow font-semibold">classes</span> — and you get to use
            theirs.
          </p>
        </SlideCard>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s) => (
            <SlideCard key={s.n} color={s.color} layout="start" padding="compact" className="border-t-4">
              <CardHeading size="sm" color={s.color} className="mb-2">
                {s.n} · {s.title}
              </CardHeading>
              <CardBody>{s.body}</CardBody>
            </SlideCard>
          ))}
        </div>

      </div>
    </>
  )
}
