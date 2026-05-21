import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const tasks = [
  'Two tubes got the wrong labels — swap them',
  'Make gene_a hold "BRCA1" and gene_b hold "TP53"',
  'Watch out: the obvious way loses one of the values!',
]

const initialCode = `gene_a = "TP53"
gene_b = "BRCA1"

# Swap them so gene_a == "BRCA1" and gene_b == "TP53"
# Your code here:


print(f"gene_a: {gene_a}")
print(f"gene_b: {gene_b}")
`

const expectedOutput = `gene_a: BRCA1
gene_b: TP53`

const hints = [
  'Beware the trap: gene_a = gene_b then gene_b = gene_a — the second line uses the new gene_a, so both end up "BRCA1".',
  'Classic fix: use a third variable as a temporary holder. tmp = gene_a   then   gene_a = gene_b   then   gene_b = tmp.',
  'Python shortcut: gene_a, gene_b = gene_b, gene_a   — one line, no temporary. This is called tuple unpacking.',
]

export function Slide18TIYSwap() {
  return (
    <>
      <SlideTitle>
        Try it Yourself — <GradientText variant="yellow">Swap two variables</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8 flex-1 min-h-0">

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <SlideCard color="yellow" layout="start" padding="compact">
            <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
              Your task
            </CardHeading>
            <CardList items={tasks} numbered color="yellow" />
          </SlideCard>

          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2 md:mb-3">
              ⚠️ Why it&apos;s tricky
            </CardHeading>
            <CardBody className="text-xs md:text-sm xl:text-base">
              Assignment <em>overwrites</em>. If you write{' '}
              <span className="font-mono text-red-400">gene_a = gene_b</span> first, you&apos;ve
              already lost <span className="font-mono">&quot;TP53&quot;</span> — there&apos;s nothing
              left to copy back into <span className="font-mono">gene_b</span>.
            </CardBody>
            <p className="text-gray-400 text-[11px] md:text-xs xl:text-sm mt-2 md:mt-3 italic">
              Cycle the hints for two solutions — one classical, one Pythonic.
            </p>
          </SlideCard>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={initialCode}
            expectedOutput={expectedOutput}
            hints={hints}
            height="320px"
            showLineNumbers
            description="Variables — the swap puzzle"
            staticOutput={expectedOutput}
          />
        </div>

      </div>
    </>
  )
}
