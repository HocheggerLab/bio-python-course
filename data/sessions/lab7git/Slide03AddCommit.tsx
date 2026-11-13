import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

const k = (s: string) => <span className="font-mono text-white">{s}</span>

const stage: React.ReactNode[] = [
  <>{k('git add')} does not save anything. It <em>chooses</em> what goes into the next snapshot</>,
  <>{k('git commit')} takes the snapshot, with your message attached</>,
  <>{k('git add .')} stages everything that changed — fine while you are learning</>,
  <>A good message says <em>why</em>: &ldquo;drop the 2018 surveys, dates were wrong&rdquo;, not &ldquo;update&rdquo;</>,
]

export function Slide03AddCommit() {
  return (
    <>
      <SlideTitle>
        The <GradientText>add, commit</GradientText> cycle
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        This is the whole of git, for now. Edit something, decide it is worth keeping,
        write down why. Repeat several times an hour.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            The cycle
          </CardHeading>
          <CodeBox label="terminal" color="blue">{`# ... you edit 01_find_the_suspects.ipynb ...

git status                  # what changed?
git add 01_find_the_suspects.ipynb
git commit -m "add the skin-minus-rest difference"

git status                  # clean again`}</CodeBox>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            Why two commands and not one
          </CardHeading>
          <CardList items={stage} bullet="▸" color="yellow" />
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3">
            Commit when something <em>works</em>, not when you stop for lunch. Each commit should
            be one idea, so that going back to it gives you something that runs.
          </p>
        </SlideCard>
      </div>
    </>
  )
}
