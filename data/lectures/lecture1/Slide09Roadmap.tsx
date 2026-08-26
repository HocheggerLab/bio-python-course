import { GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide, Figure, StepList, type Step } from '@/components/slides/layouts'

const sessions: Step[] = [
  {
    label: 'Data Types, Variables & Operations',
    detail: 'Calculate the GC content and length of one DNA sequence',
    tag: 'Today',
    accent: 'blue',
  },
  {
    label: 'Strings & Data Structures',
    detail: 'Store many sequences; find and translate codons',
    accent: 'green',
  },
  {
    label: 'Loops & Control Flow',
    detail: 'Process all 10,000 sequences in one go',
    accent: 'purple',
  },
  {
    label: 'Functions, Files & Error Handling',
    detail: "Package the pipeline into a reusable program — Claudia's tool",
    accent: 'yellow',
  },
]

export function Slide09Roadmap() {
  return (
    <SplitSlide
      title={<>Our <GradientText>Roadmap</GradientText></>}
      ratio="wide-right"
      left={
        <Figure
          src="/1_9_learning_python.png"
          alt="Claudia learning Python — variables, lists, loops, functions"
          caption={
            <>
              Claudia&apos;s journey — from{' '}
              <span className="text-bio-blue font-semibold not-italic">variables</span> to a working{' '}
              <span className="text-bio-yellow font-semibold not-italic">analysis pipeline</span>.
            </>
          }
        />
      }
      right={<StepList steps={sessions} />}
    />
  )
}
