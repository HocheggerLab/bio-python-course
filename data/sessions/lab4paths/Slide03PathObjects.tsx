import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const CODE = `from pathlib import Path

data_dir = Path("/Users/you/Downloads/sequences")
bee = data_dir / "Bombus_terrestris.fasta"

bee.name      # 'Bombus_terrestris.fasta'
bee.stem      # 'Bombus_terrestris'  <- the species, free
bee.suffix    # '.fasta'
bee.exists()  # True — or a problem you can catch early`

export function Slide03PathObjects() {
  return (
    <>
      <SlideTitle>
        A path is an <GradientText>object</GradientText>, not a string
      </SlideTitle>

      <SlideLead>
        Once it is a <span className="font-mono text-white">Path</span>, you can ask it questions —
        and it answers the same way on every operating system.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <CodeBox label="pathlib" color="blue">{CODE}</CodeBox>

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              The slash builds paths
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">data_dir / &quot;file.fasta&quot;</span> reads
              like a path and behaves like one. Python inserts the right separator, so the same code
              works on macOS and Windows.
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-2">
              <span className="font-mono">.stem</span> is doing real work today
            </CardHeading>
            <CardBody>
              Your 99 files are named{' '}
              <span className="font-mono text-white">Genus_species.fasta</span>. That means{' '}
              <span className="font-mono text-white">.stem</span> hands you the species name without
              a single line of string parsing — the filename <em>is</em> data.
            </CardBody>
          </SlideCard>
        </div>
      </div>
    </>
  )
}
