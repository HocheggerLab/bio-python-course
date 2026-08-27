import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SplitSlide, Figure } from '@/components/slides/layouts'

export function Slide02bTwoWords() {
  return (
    <SplitSlide
      title={
        <>
          Same Four Buzzes — <GradientText variant="green">Different Order</GradientText>
        </>
      }
      lead={
        <>
          The two words use identical ingredients. Only the{' '}
          <span className="text-bio-green font-semibold">middle two segments are swapped</span>.
        </>
      }
      ratio="even"
      left={
        <Figure
          src="/L5-go-nogo.png"
          alt="The GO and NOGO whisker stimulus sequences, four segments each, middle two swapped"
          maxHeight="46vh"
          caption={
            <>
              Bale et al., 2021,{' '}
              <em className="not-italic">Current Biology</em> (CC BY 4.0)
            </>
          }
        />
      }
      right={
        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              Why this is genuinely hard
            </CardHeading>
            <CardBody className="text-base md:text-xl xl:text-2xl">
              The first <strong>100 ms is identical</strong> in both words. At the start the mouse
              cannot possibly know which one it is getting — it has to wait for the first change
              and listen for the order.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Then it must decide
            </CardHeading>
            <CardBody className="text-base md:text-xl xl:text-2xl">
              The word lasts 550 ms. Then a{' '}
              <span className="text-bio-blue font-semibold">1.5-second window</span> to lick, or
              not. Mice reach 70% correct after about five training sessions.
            </CardBody>
          </SlideCard>
        </div>
      }
      note={
        <>
          Telling <span className="font-mono not-italic">CAT</span> from{' '}
          <span className="font-mono not-italic">ACT</span> — by touch alone, in half a second.
        </>
      }
    />
  )
}
