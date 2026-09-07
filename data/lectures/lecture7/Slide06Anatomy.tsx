import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'

export function Slide06Anatomy() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          The <GradientText>figure</GradientText> and the{' '}
          <GradientText variant="green">axes</GradientText>
        </>
      }
      lead={
        <>
          Every figure in every paper you have read is one <strong>figure</strong> with
          one or more <strong>panels</strong> on it. matplotlib calls a panel an{' '}
          <span className="font-mono">Axes</span>. That is the whole model.
        </>
      }
      points={
        <>
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              <span className="font-mono">fig</span> — the sheet of paper
            </CardHeading>
            <CardBody>
              The whole canvas. It owns the size, the layout, and the file you save at the
              end. Figure&nbsp;1 of a paper is one <span className="font-mono">fig</span>.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              <span className="font-mono">ax</span> — one panel on it
            </CardHeading>
            <CardBody>
              One set of x and y axes, with its own data, labels and limits. Panels{' '}
              <strong>A</strong>, <strong>B</strong> and <strong>C</strong> are three{' '}
              <span className="font-mono">ax</span> objects.
            </CardBody>
          </SlideCard>
        </>
      }
      closing={
        <div className="mt-5 md:mt-7 text-center">
          <p className="text-gray-100 text-base md:text-xl xl:text-2xl leading-relaxed max-w-4xl mx-auto">
            You will see code online that never mentions either — just{' '}
            <span className="font-mono text-gray-400">plt.plot()</span>,{' '}
            <span className="font-mono text-gray-400">plt.title()</span>. That style works
            until you want two panels, and then it falls apart.{' '}
            <strong className="text-white">We are not going to learn it.</strong>
          </p>
        </div>
      }
      note={
        <>
          Our rule for the whole course: <span className="font-mono not-italic">plt</span>{' '}
          may <em>create</em> the figure and <em>show</em> it. Everything else goes through{' '}
          <span className="font-mono not-italic">ax</span>.
        </>
      }
    >
      <div />
    </ConceptSlide>
  )
}
