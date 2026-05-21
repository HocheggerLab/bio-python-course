import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks = [
  'Before you run: predict each output',
  'Then run and see how many you got right',
  'Watch the gotchas: "16" vs 16, and the comparison',
]

const initialCode = `print(type("ATGCGT"))
print(type(16))
print(type(0.5625))
print(type(True))
print(type("16"))
print(type(16 > 0))
`

const expectedOutput = `<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
<class 'str'>
<class 'bool'>`

const hints = [
  'Quotes make a value a str — even when it looks like a number.',
  'A comparison (16 > 0) evaluates to True/False — so its type is bool.',
  'Try changing 16 to 16.0 and predict what changes.',
]

export function Slide21TIYPredictType() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Predict the type</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <SlideCard color="yellow" layout="middle" padding="compact">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-5">
            Your task
          </CardHeading>
          <CardList items={tasks} numbered color="yellow" />
          <p className="text-gray-300 text-xs md:text-sm xl:text-base mt-4 md:mt-6 italic">
            <span className="text-bio-blue not-italic font-semibold">Tip:</span>{' '}
            <span className="font-mono not-italic">type(x)</span> tells you what kind of value{' '}
            <span className="font-mono not-italic">x</span> is.
          </p>
        </SlideCard>

        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="280px"
            showLineNumbers
            description="Data types — type()"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
