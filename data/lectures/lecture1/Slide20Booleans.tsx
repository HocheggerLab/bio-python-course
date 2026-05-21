import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `length    = 16
gc_frac   = 0.5625
sequence  = "ATGCGTACGTAGGCTA"

# Each comparison gives back True or False
print(length > 100)               # too short?
print(gc_frac > 0.5)              # GC-rich?
print(sequence.startswith("ATG")) # looks like a coding sequence?

# Combine with and / or / not
print(length > 50 and gc_frac > 0.4)
print(gc_frac < 0.3 or gc_frac > 0.7)
print(not sequence.startswith("ATG"))
`

const demoOutput = `False
True
True
False
False
False`

export function Slide20Booleans() {
  return (
    <>
      <SlideTitle>
        Booleans &amp; <GradientText>Comparisons</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        {/* LEFT — concept + operator tables */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="purple" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="purple" className="mb-2 md:mb-3">
              A comparison always produces a Boolean
            </CardHeading>
            <CardBody>
              Two values come in, <span className="font-mono text-bio-green">True</span> or{' '}
              <span className="font-mono text-red-400">False</span> comes out. Booleans are how
              Python answers <em>yes/no</em> questions about data.
            </CardBody>
          </SlideCard>

          <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1 min-h-0">
            <SlideCard color="blue" layout="start" padding="tight">
              <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">Operators</CardHeading>
              <pre className="font-mono text-[11px] md:text-sm xl:text-base text-gray-200 leading-relaxed">
{`==   equal
!=   not equal
<    less than
>    greater than
<=   ≤
>=   ≥`}
              </pre>
            </SlideCard>

            <SlideCard color="green" layout="start" padding="tight">
              <CardHeading size="sm" color="green" className="mb-2 md:mb-3">Combine</CardHeading>
              <pre className="font-mono text-[11px] md:text-sm xl:text-base text-gray-200 leading-relaxed">
{`and   both True
or    either True
not   flip True↔False`}
              </pre>
              <p className="text-[10px] md:text-xs xl:text-sm text-gray-400 mt-2 italic">
                Note: <span className="font-mono">==</span> compares,{' '}
                <span className="font-mono">=</span> assigns.
              </p>
            </SlideCard>
          </div>
        </div>

        {/* RIGHT — live runner */}
        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-xs md:text-sm xl:text-base italic">
            Run it — then change the values and see how the answers flip:
          </p>
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="320px"
              showLineNumbers
              description="Live demo — comparisons and booleans"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
