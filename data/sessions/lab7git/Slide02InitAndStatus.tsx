import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

const k = (s: string) => <span className="font-mono text-white">{s}</span>

const notes: React.ReactNode[] = [
  <>{k('git init')} makes one hidden folder, {k('.git')}. That folder <em>is</em> the repository</>,
  <>Delete {k('.git')} and you have an ordinary folder again. Nothing else is touched</>,
  <>One repo per project. Not one for your whole laptop, and not one per file</>,
  <>{k('git status')} is the command you type most. When lost, type it</>,
]

export function Slide02InitAndStatus() {
  return (
    <>
      <SlideTitle>
        Start a repo, then <GradientText>ask where you are</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Two commands. The first you run once per project; the second you run constantly,
        and it tells you everything about the state you are in.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            In the terminal, inside your project folder
          </CardHeading>
          <CodeBox label="terminal" color="blue">{`cd lab07
git init
git status`}</CodeBox>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3">
            Git will also ask who you are, once per machine:
          </p>
          <CodeBox label="terminal" color="blue">{`git config --global user.name "Your Name"
git config --global user.email "you@sussex.ac.uk"`}</CodeBox>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            What to know
          </CardHeading>
          <CardList items={notes} bullet="▸" color="yellow" />
        </SlideCard>
      </div>
    </>
  )
}
