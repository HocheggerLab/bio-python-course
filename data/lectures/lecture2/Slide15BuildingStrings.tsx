import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `primer = "GGG"
seq    = "ATGCGT"

print(primer + seq)   # + joins strings end to end
print("N" * 5)        # * repeats a string

# Strings can't be edited in place — this line would ERROR:
# seq[0] = "T"        # TypeError! (uncomment to see it)
`

const demoOutput = `GGGATGCGT
NNNNN`

export function Slide15BuildingStrings() {
  return (
    <>
      <SlideTitle>
        Building Strings — <GradientText>and why they don&apos;t change</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              <span className="font-mono">+</span> joins, <span className="font-mono">*</span> repeats
            </CardHeading>
            <CardBody>
              The same operators you used on numbers and lists also build strings —{' '}
              <span className="font-mono">primer + seq</span> joins them, and{' '}
              <span className="font-mono">&quot;N&quot; * 5</span> repeats.
            </CardBody>
          </SlideCard>

          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
              ⚠️ Strings are immutable
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Unlike a list, you <strong>can&apos;t</strong> edit a string in place —{' '}
              <span className="font-mono text-red-400">seq[0] = &quot;T&quot;</span> is a{' '}
              <span className="font-mono">TypeError</span>. To &ldquo;change&rdquo; a string you
              build a <em>new</em> one with slicing and <span className="font-mono">+</span>.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then uncomment the last line to meet the TypeError:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — building strings + immutability"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
