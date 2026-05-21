import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const rules = [
  'Start with a letter or underscore (not a digit)',
  'Letters, digits, underscores only — no spaces, no dashes',
  'Case-sensitive: gene ≠ Gene ≠ GENE',
  'Avoid reserved words: list, str, print, sum…',
]

const conventions = [
  'snake_case for variables: gc_content, sequence_length',
  'Be descriptive: sequence_length beats sl',
  'Lowercase by convention — UPPERCASE is for constants',
]

const demoCode = `name      = "BRCA1_exon3"     # a string
length    = 16                 # an integer
gc_frac   = 0.5625             # a float
is_coding = True               # a boolean

print(name)
print(length)
print(gc_frac)
print(is_coding)
`

const demoOutput = `BRCA1_exon3
16
0.5625
True`

export function Slide14Variables() {
  return (
    <>
      <SlideTitle>
        Variables — <GradientText>labels for your data</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — concept + live runner */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              A variable is a name attached to a value
            </CardHeading>
            <CardBody>
              The <span className="font-mono text-bio-blue">=</span> sign is{' '}
              <span className="text-bio-blue font-semibold">assignment</span>, not equality.
              Read it as <em>&ldquo;put this value into this label&rdquo;</em>.
            </CardBody>
          </SlideCard>

          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it, then try changing the values:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="220px"
              showLineNumbers
              description="Live demo — variable assignment"
              staticOutput={demoOutput}
            />
          </div>
        </div>

        {/* RIGHT — rules + conventions */}
        <div className="flex flex-col gap-4 md:gap-6 min-h-0">
          <SlideCard color="green" layout="middle" padding="compact" className="flex-1">
            <CardHeading size="sm" color="green" className="mb-3 md:mb-4">Naming rules</CardHeading>
            <CardList items={rules} bullet="✓" color="green" />
          </SlideCard>
          <SlideCard color="yellow" layout="middle" padding="compact" className="flex-1">
            <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">Lab conventions</CardHeading>
            <CardList items={conventions} bullet="→" color="yellow" />
          </SlideCard>
        </div>

      </div>
    </>
  )
}
