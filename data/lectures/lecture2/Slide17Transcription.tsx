import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `dna = "ATGCGT"

# .replace(old, new) swaps every occurrence — DNA to mRNA:
mrna = dna.replace("T", "U")
print(mrna)

# Tempting but BROKEN — a complement by chaining replace:
print(dna.replace("A", "T").replace("T", "A"))   # NOT the complement!
`

const demoOutput = `AUGCGU
AAGCGA`

export function Slide17Transcription() {
  return (
    <>
      <SlideTitle>
        Transcription with <GradientText><span className="font-mono">.replace()</span></GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              Swap every T for a U
            </CardHeading>
            <CardBody>
              <span className="font-mono">dna.replace(&quot;T&quot;, &quot;U&quot;)</span> returns a{' '}
              <em>new</em> string with every <span className="font-mono">T</span> turned into{' '}
              <span className="font-mono">U</span> — transcription in one line.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
              ⚠️ Why we&apos;ll need loops next week
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Chaining <span className="font-mono">.replace()</span> to make a complement{' '}
              <strong>breaks</strong>: turn every A into T, then every T into A, and the A&apos;s
              you just made flip straight back. To complement each base{' '}
              <em>independently</em> we need a <span className="text-bio-yellow font-semibold">loop</span> — that&apos;s Session 3.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — the second line should be <span className="font-mono not-italic">TACGCA</span>,
            but isn&apos;t:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="240px"
              showLineNumbers
              description="Live demo — transcription and the complement trap"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
