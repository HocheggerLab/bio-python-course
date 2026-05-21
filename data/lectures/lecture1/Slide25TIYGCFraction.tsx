import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks = [
  'Add G and C counts into gc_count',
  'Divide by the total length to get gc_frac',
  'Print the result on one line',
]

const initialCode = `g_count = 5
c_count = 4
length  = 16

# Fill in the two calculations:
gc_count = 0
gc_frac  = 0

print(f"GC count: {gc_count}")
print(f"GC frac:  {gc_frac}")
`

const expectedOutput = `GC count: 9
GC frac:  0.5625`

const hints = [
  'Add g_count and c_count to get gc_count.',
  'Divide gc_count by length using / (not //).',
  'gc_count = g_count + c_count   then   gc_frac = gc_count / length',
]

export function Slide25TIYGCFraction() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Compute GC fraction</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="yellow" layout="middle" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-5">
            Your task
          </CardHeading>
          <CardList items={tasks} numbered color="yellow" />
          <p className="text-gray-300 text-xs md:text-sm xl:text-base mt-4 md:mt-6 italic">
            This is the GC-content calculation you&apos;ll reuse for the rest of the course.
          </p>
        </SlideCard>

        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="280px"
            showLineNumbers
            description="Float arithmetic — division"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
