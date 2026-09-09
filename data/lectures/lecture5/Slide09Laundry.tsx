import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide09Laundry() {
  return (
    <>
      <SlideTitle>
        Understanding <GradientText variant="green">Object Oriented Programming</GradientText> 🧺
      </SlideTitle>

      <p className="text-center text-gray-300 text-base md:text-xl xl:text-2xl mt-3 md:mt-4 max-w-4xl mx-auto italic">
        Steve Jobs&apos; laundry story: two ways to get a dirty shirt clean in Tokyo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-4 md:mt-5 max-w-4xl mx-auto">

        {/* DIY */}
        <SlideCard color="red" layout="start" padding="compact" className="border-t-4">
          <CardHeading size="sm" color="red" className="mb-2">
            🏠 Do it all yourself
          </CardHeading>
          <figure className="rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 mb-2">
            <img
              src="/L3-laundry.png"
              alt="Finding the laundromat: reading a map, the street, the machines, the subway"
              className="w-full aspect-square object-cover"
            />
          </figure>
          <CardBody className="text-sm md:text-lg xl:text-xl">
            Find it, decode it, feed it coins — every step,{' '}
            <strong>in Japanese</strong>.
          </CardBody>
        </SlideCard>

        {/* Hand it off */}
        <SlideCard color="green" layout="start" padding="compact" className="border-t-4">
          <CardHeading size="sm" color="green" className="mb-2">
            🏨 Hand it over
          </CardHeading>
          <figure className="rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 mb-2">
            <img
              src="/L3-hotel.png"
              alt="Handing a shirt across a hotel front desk"
              className="w-full aspect-square object-cover"
            />
          </figure>
          <CardBody className="text-sm md:text-lg xl:text-xl">
            &ldquo;Clean, please.&rdquo; — and you never see the{' '}
            <strong>machine</strong>.
          </CardBody>
        </SlideCard>

      </div>

      {/* The lesson */}
      <SlideCard color="purple" layout="start" padding="tight" className="border-l-4 mt-4 md:mt-5 max-w-4xl mx-auto">
        <CardBody className="text-base md:text-xl xl:text-2xl">
          An <span className="text-purple-400 font-semibold">object</span> is that front desk: hand
          it <span className="font-mono">something.method()</span>, get a result back.
        </CardBody>
      </SlideCard>
    </>
  )
}
