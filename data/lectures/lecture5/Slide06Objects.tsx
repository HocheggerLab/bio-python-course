import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# ── Behind the desk: the hotel staff ──────────
class DNASequence:
    def __init__(self, sequence):         # runs when you build it
        self.sequence = sequence.upper()  # attribute: data it keeps

    def gc_content(self):                 # method: a job it does
        gc = self.sequence.count("G") + self.sequence.count("C")
        return gc / len(self.sequence) * 100

# ── At the reception: you ─────────────────────
gene = DNASequence("atcgatcgatcg")

print(gene.sequence)       # attribute: no brackets
print(gene.gc_content())   # method: brackets, it does the work
`

const demoOutput = `ATCGATCGATCG
50.0`

export function Slide06Objects() {
  return (
    <>
      <SlideTitle>
        Build the Simplest <GradientText variant="purple">Object</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-3 md:mt-4 xl:mt-6 items-center">

        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2 md:mb-3">
              🏨 The class — the whole hotel
            </CardHeading>
            <CardBody>
              Python bundles data and the functions that work on it into a{' '}
              <span className="font-mono text-white">class</span> — the whole workflow, like the staff
              who wash and iron your shirt.
            </CardBody>
          </SlideCard>

          <SlideCard color="purple" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              🛎️ The API — the reception
            </CardHeading>
            <CardBody>
              You never enter the laundry room. You use the reception: its{' '}
              <span className="text-white">attributes</span> (what it holds —{' '}
              <span className="font-mono text-white">gene.sequence</span>) and its{' '}
              <span className="text-white">methods</span> (what it does for you —{' '}
              <span className="font-mono text-white">gene.gc_content()</span>). Together they are the{' '}
              <span className="text-purple-300 font-semibold">API</span>, the application programming
              interface.
            </CardBody>
          </SlideCard>

          <SlideCard color="neutral" layout="start" padding="tight">
            <CardBody>
              Data alone is just a container — a dictionary does that. The method makes it a hotel: your
              Lab 4 <span className="font-mono">gc_content</span> now travels with the data.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-sm md:text-lg xl:text-xl italic">
            Run it — then build a second gene and ask it the same two things:
          </p>
          <div className="overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="394px"
              description="Live demo — one attribute, one method"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
