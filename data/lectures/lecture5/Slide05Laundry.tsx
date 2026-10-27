import type { ReactNode } from 'react'
import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

/* Steve Jobs' laundry story, one way per slide so each picture can be big. */
function LaundryFrame({
  heading,
  color,
  img,
  alt,
  children,
}: {
  heading: ReactNode
  color: 'red' | 'green'
  img: string
  alt: string
  children: ReactNode
}) {
  return (
    <>
      <SlideTitle>
        Understanding <GradientText variant="green">Object Oriented Programming</GradientText> 🧺
      </SlideTitle>

      <p className="text-center text-gray-300 text-base md:text-xl xl:text-2xl mt-2 md:mt-3 max-w-4xl mx-auto italic">
        Steve Jobs&apos; laundry story: two ways to get a dirty shirt clean in Tokyo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 items-center">
        <figure className="rounded-xl overflow-hidden ring-1 ring-white/10 mx-auto w-full max-w-[60vh]">
          <img src={img} alt={alt} className="w-full aspect-square object-cover" />
        </figure>

        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color={color} layout="start" padding="compact" className="border-l-4">
            <CardHeading size="md" color={color} className="mb-2 md:mb-3">
              {heading}
            </CardHeading>
          </SlideCard>
          {children}
        </div>
      </div>
    </>
  )
}

export function Slide05LaundryDIY() {
  return (
    <LaundryFrame
      heading="① 🏠 Do it all yourself"
      color="red"
      img="/L3-laundry.png"
      alt="Finding the laundromat: reading a map, the street, the machines, the subway"
    >
      <p className="text-gray-200 text-lg md:text-2xl xl:text-3xl leading-relaxed">
        Find the laundromat, decode the machines, feed them coins — every step,{' '}
        <strong className="text-white">in Japanese</strong>.
      </p>
      <p className="text-gray-400 text-base md:text-xl xl:text-2xl leading-relaxed">
        That is writing everything from scratch.
      </p>
    </LaundryFrame>
  )
}

export function Slide05LaundryHotel() {
  return (
    <LaundryFrame
      heading="② 🏨 Hand it over"
      color="green"
      img="/L3-hotel.png"
      alt="Handing a shirt across a hotel front desk"
    >
      <p className="text-gray-200 text-lg md:text-2xl xl:text-3xl leading-relaxed">
        &ldquo;Clean, please.&rdquo; — and you never see the{' '}
        <strong className="text-white">machine</strong>.
      </p>
      <SlideCard color="purple" layout="start" padding="tight" className="border-l-4">
        <CardBody className="text-base md:text-xl xl:text-2xl">
          A <span className="text-purple-400 font-semibold">class</span> is that hotel: you talk to the
          reception, get a result back — and never see the machine.
        </CardBody>
      </SlideCard>
    </LaundryFrame>
  )
}
