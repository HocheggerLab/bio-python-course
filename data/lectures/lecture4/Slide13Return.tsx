import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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

export function Slide13Return() {
  return (
    <ConceptSlide
      title={<>Hand the Answer Back — <GradientText>return</GradientText></>}
      lead={
        <>
          So far our functions only <strong>printed</strong>. That&apos;s a dead end — you can
          read it, but your program can&apos;t <em>use</em> it.
        </>
      }
      points={
      <>
        <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
            <span className="font-mono">print</span> is for <em>you</em>
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
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
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">return</span> hands the value out of the function so you can
            put it in a variable and keep working —{' '}
            <span className="font-mono">y * 3</span> only works because{' '}
            <span className="font-mono">y</span> is really 9.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Both print a 9 — but only one of them <strong>gives</strong> you the 9: 💡 A function with no <span className="font-mono">return</span> still gives you
        something back:</>}
      closing={
        <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">None</span> — Python&apos;s word for
        &quot;nothing here&quot;. When a variable is mysteriously{' '}
        <span className="font-mono">None</span>, a missing{' '}
        <span className="font-mono">return</span> is usually why.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="247px"
        description="Live demo — print versus return"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
