import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide06bLaundry() {
  return (
    <>
      <SlideTitle>
        Use It, Don&apos;t <GradientText variant="green">Build It</GradientText> 🧺
      </SlideTitle>

      <p className="text-center text-gray-300 text-base md:text-xl xl:text-2xl mt-3 md:mt-5 max-w-4xl mx-auto italic">
        Dirty shirt, foreign city. Two ways to get it clean:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 md:mt-7">

        {/* DIY */}
        <SlideCard color="red" layout="start" padding="compact" className="border-t-4">
          <CardHeading size="sm" color="red" className="mb-3">
            🏠 Do it all yourself
          </CardHeading>
          <figure className="rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 mb-3">
            <img
              src="/L3-laundry.png"
              alt="A laundromat with unfamiliar machines"
              className="w-full h-40 md:h-52 xl:h-60 object-contain"
            />
          </figure>
          <CardBody className="text-sm md:text-lg xl:text-xl">
            Find the laundromat, decode the buttons, get coins &amp; detergent, watch the cycle. You
            must understand <strong>every step</strong>.
          </CardBody>
        </SlideCard>

        {/* Hand it off */}
        <SlideCard color="green" layout="start" padding="compact" className="border-t-4">
          <CardHeading size="sm" color="green" className="mb-3">
            🏨 Hand it to the front desk
          </CardHeading>
          <figure className="rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 mb-3">
            <img
              src="/L3-hotel.png"
              alt="A hotel front desk offering a laundry service"
              className="w-full h-40 md:h-52 xl:h-60 object-contain"
            />
          </figure>
          <CardBody className="text-sm md:text-lg xl:text-xl">
            &ldquo;Clean, please.&rdquo; → a clean shirt comes back. You never see the machine. You
            trust the <strong>service</strong>.
          </CardBody>
        </SlideCard>

      </div>

      {/* The lesson */}
      <SlideCard color="purple" layout="start" padding="normal" className="border-l-4 mt-5 md:mt-7">
        <CardBody className="text-base md:text-xl xl:text-2xl">
          An <span className="text-purple-400 font-semibold">object</span> is that front desk. You
          hand it a request — <span className="font-mono">something.method()</span> — and get a
          result back. The machinery stays hidden. <span className="font-mono">random</span> did it;{' '}
          <span className="font-mono">pandas</span> will too.
        </CardBody>
      </SlideCard>
    </>
  )
}
