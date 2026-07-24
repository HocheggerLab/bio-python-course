import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `genomes = [48502, 29903, 9719, 3182]   # λ, SARS-CoV-2, HIV-1, hep B

# How many are larger than 10 kb?
count = 0
for g in genomes:
    if g > 10000:
        count = count + 1
print(count)

# Collect just the large ones into a new list
large = []
for g in genomes:
    if g > 10000:
        large.append(g)
print(large)
`

const demoOutput = `2
[48502, 29903]`

export function Slide12DecisionsInLoop() {
  return (
    <>
      <SlideTitle>
        Decisions Inside a <GradientText>Loop</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-4 md:gap-6">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              Count with a condition
            </CardHeading>
            <CardBody>
              Put an <span className="font-mono">if</span> <em>inside</em> the loop and bump an
              accumulator only when it&apos;s <span className="font-mono">True</span>. That finally
              answers the question from earlier — <strong>how many are over 10&nbsp;kb?</strong>
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Filter into a new list
            </CardHeading>
            <CardBody>
              It&apos;s the transform pattern with a <strong>bouncer at the door</strong>:{' '}
              <span className="font-mono">.append()</span> only the items that pass the test. A
              conditional alone is a toy — inside a loop it&apos;s a tool.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Two of the four — the question we asked at the start, answered automatically:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="340px"
              showLineNumbers
              description="Live demo — if inside a for loop"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
