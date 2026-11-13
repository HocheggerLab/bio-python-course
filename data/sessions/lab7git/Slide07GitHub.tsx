import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

const k = (s: string) => <span className="font-mono text-white">{s}</span>

const notes: React.ReactNode[] = [
  <>{k('origin')} is just a nickname for the GitHub address. Nothing magic about the word</>,
  <>{k('-u')} links your {k('main')} to theirs, once. After that {k('git push')} is enough</>,
  <>GitHub will not accept your account password. Use {k('gh auth login')}</>,
  <>Your commits stay local until you push. Pushing is the backup</>,
]

export function Slide07GitHub() {
  return (
    <>
      <SlideTitle>
        Link it to <GradientText>GitHub</GradientText>, then push
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        Everything so far lives on your laptop. One more step puts a copy somewhere
        that survives a spilled coffee — and gives you something to show.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            Once per project
          </CardHeading>
          <CodeBox label="terminal" color="blue">{`gh auth login              # once per machine

# make an empty repo on github.com, then:
git remote add origin https://github.com/you/lab07.git
git branch -M main
git push -u origin main`}</CodeBox>
          <CardHeading size="sm" color="green" className="mb-2 md:mb-3 mt-4">
            Every time after that
          </CardHeading>
          <CodeBox label="terminal" color="green">{`git add .
git commit -m "what I changed and why"
git push`}</CodeBox>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            The bits that confuse everyone
          </CardHeading>
          <CardList items={notes} bullet="▸" color="yellow" />
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3">
            Make the repo <span className="text-white">private</span> if you prefer. You can
            make it public later; going the other way is harder.
          </p>
        </SlideCard>
      </div>
    </>
  )
}
