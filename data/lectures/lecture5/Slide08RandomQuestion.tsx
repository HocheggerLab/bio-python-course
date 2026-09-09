import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

const internals = `def genrand_uint32():
    y = mt[mti]
    y ^= (y >> 11)
    y ^= (y << 7)  & 0x9d2c5680
    y ^= (y << 15) & 0xefc60000
    y ^= (y >> 18)
    # …~600 more lines of the
    #    Mersenne Twister algorithm`

export function Slide08RandomQuestion() {
  return (
    <>
      <SlideTitle>
        How Does <GradientText variant="purple">random</GradientText> Actually Work?
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-start">

        {/* LEFT — the scary machinery */}
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-gray-300 text-sm md:text-lg xl:text-xl italic">
            When you call <span className="font-mono">random.randint(1, 6)</span>, this is what runs
            underneath:
          </p>
          <pre className="bg-bio-dark/60 rounded-xl p-4 md:p-6 font-mono text-[12px] md:text-base xl:text-lg text-gray-300 overflow-auto">
{internals}
          </pre>
        </div>

        {/* RIGHT — you don't need the internals; you need the API */}
        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              You don&apos;t need to know.
            </CardHeading>
            <CardBody className="text-sm md:text-lg xl:text-xl">
              <span className="font-mono">random</span> hides that machinery behind one simple name —{' '}
              <span className="text-bio-green font-semibold">abstraction</span>. You call it, you
              trust it, you move on.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              What you <em>do</em> need — the API
            </CardHeading>
            <CardBody className="text-sm md:text-lg xl:text-xl">
              The <strong>A</strong>pplication <strong>P</strong>rogramming{' '}
              <strong>I</strong>nterface: the package&apos;s <strong>access points</strong> — which
              methods it gives you, what to pass in, what comes back.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-sm md:text-lg xl:text-xl">
              📖 And you look it up — every package documents its API:
              <a
                href="https://docs.python.org/3/library/random.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 font-mono text-bio-blue hover:text-bio-green transition-colors break-all"
              >
                docs.python.org/3/library/random.html
              </a>
            </CardBody>
          </SlideCard>
        </div>

      </div>
    </>
  )
}
