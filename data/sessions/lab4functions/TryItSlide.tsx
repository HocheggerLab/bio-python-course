import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { SlideNote } from '@/components/slides/layouts'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/** A recap's practice slide: a few predict-then-run tasks beside a live Python editor. */
export function TryItSlide({
  topic,
  tasks,
  code,
  output,
}: {
  topic: string
  tasks: React.ReactNode[]
  code: string
  output: string
}) {
  return (
    <>
      <SlideTitle>
        Try it — <GradientText variant="purple">{topic}</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Real Python, right here in the browser. Change anything, press <span className="text-white">Run</span>, and
        see what happens — you cannot break it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6">
        <SlideCard color="purple" layout="start" padding="compact">
          <CardHeading size="sm" color="purple" className="mb-3">
            Predict first, then run
          </CardHeading>
          <CardList items={tasks} numbered color="purple" />
        </SlideCard>

        <LazyPythonRunner
          initialCode={code}
          height="260px"
          description={`Try it — ${topic}`}
          staticOutput={output}
        />
      </div>

      <SlideNote>
        <span className="text-white">Reset Code</span> brings the example back. The same works in your notebook: click{' '}
        <span className="text-white">+ Code</span> for a new cell.
      </SlideNote>
    </>
  )
}
