import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import { SlideLead, SlideNote } from '@/components/slides/layouts'
import { CodeBox } from './CodeBox'

const CODE = `# where you happen to be standing — this MOVES
Path.cwd()

# where this script lives — this does not
Path(__file__).parent

results_dir = Path(__file__).parent / "results"
results_dir.mkdir(parents=True, exist_ok=True)`

export function Slide05CwdVsFile() {
  return (
    <>
      <SlideTitle>
        The bug that <GradientText variant="yellow">catches everyone</GradientText>
      </SlideTitle>

      <SlideLead>
        Your script works. You run it from one folder up, and it cannot find anything. Nothing
        changed in the code — you did.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">
              <span className="font-mono">Path.cwd()</span>
            </CardHeading>
            <CardBody>
              The folder your <span className="text-white">terminal</span> was in when you pressed
              Enter. Move, and it is a different answer.
            </CardBody>
          </SlideCard>

          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              <span className="font-mono">Path(__file__).parent</span>
            </CardHeading>
            <CardBody>
              The folder the <span className="text-white">script</span> is saved in. Same answer
              from anywhere — this is the one you usually want.
            </CardBody>
          </SlideCard>
        </div>

        <CodeBox label="the safe version" color="green">{CODE}</CodeBox>
      </div>

      <SlideNote>
        <span className="font-mono">exist_ok=True</span> means running it a second time is not an
        error — and you <em>will</em> run it a second time.
      </SlideNote>
    </>
  )
}
