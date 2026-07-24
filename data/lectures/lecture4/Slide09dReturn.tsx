import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `def show_length(seq):
    print(len(seq))        # shows it — hands back nothing

def get_length(seq):
    return len(seq)        # hands the number back

x = show_length("ATGGTACGC")
y = get_length("ATGGTACGC")

print(x)          # None — we caught nothing!
print(y)          # 9
print(y * 3)      # and we can use it
`

const demoOutput = `9
None
9
27`

export function Slide09dReturn() {
  return (
    <>
      <SlideTitle>
        Hand the Answer Back — <GradientText>return</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col justify-center gap-3 md:gap-4">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody className="text-xs md:text-sm xl:text-base">
              So far our functions only <strong>printed</strong>. That&apos;s a dead end — you can
              read it, but your program can&apos;t <em>use</em> it.
            </CardBody>
          </SlideCard>

          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
              <span className="font-mono">print</span> is for <em>you</em>
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              It puts characters on the screen and that&apos;s it. Look at{' '}
              <span className="font-mono">x</span> — we tried to catch what{' '}
              <span className="font-mono">show_length</span> gave us and got{' '}
              <span className="font-mono text-red-400">None</span>. Nothing came back.{' '}
              <strong>The 9 you saw was never yours to keep.</strong>
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              <span className="font-mono">return</span> is for the <em>program</em>
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              <span className="font-mono">return</span> hands the value out of the function so you can
              put it in a variable and keep working —{' '}
              <span className="font-mono">y * 3</span> only works because{' '}
              <span className="font-mono">y</span> is really 9.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody className="text-[11px] md:text-sm">
              💡 A function with no <span className="font-mono">return</span> still gives you
              something back: <span className="font-mono">None</span> — Python&apos;s word for
              &quot;nothing here&quot;. When a variable is mysteriously{' '}
              <span className="font-mono">None</span>, a missing{' '}
              <span className="font-mono">return</span> is usually why.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Both print a 9 — but only one of them <strong>gives</strong> you the 9:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="380px"
              showLineNumbers
              description="Live demo — print versus return"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
