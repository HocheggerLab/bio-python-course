import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading } from '@/components/slides/SlideCard'
import { CodeBox } from '@/data/sessions/lab5projects/CodeBox'

interface Row { code: string; means: string }

const rows: Row[] = [
  { code: 'git log --oneline', means: 'every commit, one line each, newest first' },
  { code: 'git diff', means: 'what you have changed but not yet staged' },
  { code: 'git diff --staged', means: 'what is about to go into the next commit' },
  { code: 'git show 7a3f21c', means: 'exactly what that one commit changed' },
  { code: 'git log --oneline -- notebook.ipynb', means: 'the history of a single file' },
]

export function Slide04ReadingHistory() {
  return (
    <>
      <SlideTitle>
        Reading the <GradientText>history</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-400 text-sm md:text-base xl:text-lg mt-2 md:mt-3 max-w-3xl mx-auto">
        A record you cannot read is not worth keeping. These four commands are how you
        answer &ldquo;what did I do, and when did it break?&rdquo;
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4 md:col-span-3">
          <CardHeading size="sm" color="blue" className="mb-3 md:mb-4">
            Four commands
          </CardHeading>
          <dl className="flex flex-col gap-2 md:gap-3">
            {rows.map((r) => (
              <div key={r.code} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-x-4 gap-y-0.5">
                <dt className="font-mono [font-variant-ligatures:none] text-white text-xs md:text-sm xl:text-base break-words">{r.code}</dt>
                <dd className="text-gray-400 text-xs md:text-sm xl:text-base">{r.means}</dd>
              </div>
            ))}
          </dl>
        </SlideCard>

        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4 md:col-span-2">
          <CardHeading size="sm" color="yellow" className="mb-3 md:mb-4">
            What a log looks like
          </CardHeading>
          <CodeBox label="git log --oneline" color="yellow">{`9c1d4e2 use blue light, not UV
3b77a10 drop the 2018 surveys
7a3f21c add skin-minus-rest
0e5c8d9 first commit`}</CodeBox>
          <p className="text-gray-400 text-xs md:text-sm xl:text-base mt-3">
            The short code is the commit&apos;s name. You use it to look at a commit, and to go
            back to one.
          </p>
        </SlideCard>
      </div>
    </>
  )
}
