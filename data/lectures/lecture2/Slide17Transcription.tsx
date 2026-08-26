import { GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { ConceptSlide } from '@/components/slides/layouts'
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
    <ConceptSlide
      title={<>Transcription with <GradientText><span className="font-mono">.replace()</span></GradientText></>}
      points={
      <>
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
            Swap every T for a U
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            <span className="font-mono">dna.replace(&quot;T&quot;, &quot;U&quot;)</span> returns a{' '}
            <em>new</em> string with every <span className="font-mono">T</span> turned into{' '}
            <span className="font-mono">U</span> — transcription in one line.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-2 md:mb-3">
            ⚠️ Why we&apos;ll need loops next week
          </CardHeading>
          <CardBody className="text-sm md:text-base xl:text-lg">
            Chaining <span className="font-mono">.replace()</span> to make a complement{' '}
            <strong>breaks</strong>: turn every A into T, then every T into A, and the A&apos;s
            you just made flip straight back. To complement each base{' '}
            <em>independently</em> we need a <span className="text-bio-yellow font-semibold">loop</span> — that&apos;s Session 3.
          </CardBody>
        </SlideCard>
      </>
      }
      note={<>Run it — the second line should be <span className="font-mono not-italic">TACGCA</span>,
        but isn&apos;t:</>}
    >
      <LazyPythonRunner
        initialCode={demoCode}
        height="205px"
        showLineNumbers
        description="Live demo — transcription and the complement trap"
        staticOutput={demoOutput}
      />
    </ConceptSlide>
  )
}
