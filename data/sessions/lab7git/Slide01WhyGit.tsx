import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

const problems: React.ReactNode[] = [
  <>You changed four cells, nothing works, and you cannot remember what you changed</>,
  <>Yesterday&apos;s version ran. Today&apos;s does not. Yesterday&apos;s is gone</>,
  <>Your laptop is the only copy of three weeks&apos; work</>,
  <>Your supervisor asks which version made the figure in the draft</>,
]

export function Slide01WhyGit() {
  return (
    <>
      <SlideTitle>
        A lab notebook <GradientText>for code</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        You already keep a record of every experiment you run. Git is that record for the
        analysis: what you changed, when, why — and a way back to any of it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-3 md:mb-4">
            Four afternoons you will lose without it
          </CardHeading>
          <CardList items={problems} bullet="▸" color="red" />
        </SlideCard>

        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            The folder everyone ends up with
          </CardHeading>
          <CodeBox label="the usual approach" color="red">{`analysis.py
analysis_v2.py
analysis_v2_fixed.py
analysis_FINAL.py
analysis_FINAL_really.py`}</CodeBox>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3">
            Every one of these is a commit you made by hand, with no date, no message and no way
            to see what changed between them. Git does the same job properly, and the folder
            stays clean: one <span className="font-mono text-white">analysis.py</span>, with its
            whole history behind it.
          </p>
        </SlideCard>
      </div>
    </>
  )
}
