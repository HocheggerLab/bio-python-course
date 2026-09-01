import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import { SlideLead } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const READ = `with open(bee) as f:
    text = f.read()

# ...and the file is closed here,
# even if something went wrong above.`

const WRITE = `with open(out_file, "w") as f:
    f.write("species,dna,protein\\n")
    for name, d, p in rows:
        f.write(f"{name},{d},{p}\\n")`

export function Slide04ReadWrite() {
  return (
    <>
      <SlideTitle>
        Opening a file with <GradientText variant="green">with</GradientText>
      </SlideTitle>

      <SlideLead>
        Every file you open has to be closed again. Forget, and your results can sit in a buffer and
        never reach the disk. <span className="font-mono text-white">with</span> closes it for you —
        including when your code crashes half way through.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <CodeBox label="reading" color="blue">{READ}</CodeBox>
        <CodeBox label="writing — note the &quot;w&quot;" color="green">{WRITE}</CodeBox>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
        <SlideCard color="red" layout="start" padding="tight" className="border-l-4">
          <CardBody>
            ⚠ <span className="font-mono text-white">&quot;w&quot;</span> empties the file first,
            without asking. Use <span className="font-mono text-white">&quot;a&quot;</span> to add to
            the end instead.
          </CardBody>
        </SlideCard>
        <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
          <CardBody>
            💡 For a whole small file in one go, <span className="font-mono text-white">Path</span>{' '}
            has shortcuts: <span className="font-mono text-white">p.read_text()</span> and{' '}
            <span className="font-mono text-white">p.write_text(s)</span>.
          </CardBody>
        </SlideCard>
      </div>
    </>
  )
}
