import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

const why: React.ReactNode[] = [
  <>Data files are big, and GitHub refuses anything over 100&nbsp;MB</>,
  <>A virtual environment is thousands of files you can recreate in one command</>,
  <>Committed junk never really goes away — it stays in the history</>,
  <>Never commit passwords, API keys, or anything with patient or personal data in it</>,
]

export function Slide06Gitignore() {
  return (
    <>
      <SlideTitle>
        What <GradientText>not</GradientText> to commit
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        A repository is for the things you wrote. Not for what your computer generated,
        and not for the raw data — which matters immediately, because the DepMap files are large.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            Make this file before your first commit
          </CardHeading>
          <CodeBox label=".gitignore" color="blue">{`.venv/
__pycache__/
.ipynb_checkpoints/
.DS_Store

# data: big, and not ours to redistribute
data/*.csv
!data/depmap_lecture.csv`}</CodeBox>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3">
            The last line is an exception: ignore every CSV <em>except</em> the small teaching
            file, so everyone who clones the repo can still run the notebooks.
          </p>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            Why it matters
          </CardHeading>
          <CardList items={why} bullet="▸" color="yellow" />
        </SlideCard>
      </div>
    </>
  )
}
