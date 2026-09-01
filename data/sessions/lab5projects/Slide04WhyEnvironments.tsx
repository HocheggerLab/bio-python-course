import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody, CardList } from '@/components/slides/SlideCard'
import { SlideLead } from '@/components/slides/layouts'

const notToday = [
  'source .venv/bin/activate — uv run does it for you',
  'pip install — uv add records it; pip does not',
  'conda — a different world; you do not need both',
  'requirements.txt — pyproject.toml replaced it',
]

export function Slide04WhyEnvironments() {
  return (
    <>
      <SlideTitle>
        Why not just install it <GradientText variant="yellow">everywhere</GradientText>?
      </SlideTitle>

      <SlideLead>
        Because your next project will want a different version, and the one after that will want
        the old one back.
      </SlideLead>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 items-start">
        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">
              One shared pile
            </CardHeading>
            <CardBody>
              Your dissertation needs numpy 1.26. A new tool needs 2.4. Install both globally and
              one of them breaks — usually the one you are not looking at, silently, weeks later.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              One pile per project
            </CardHeading>
            <CardBody>
              Each folder gets its own <span className="font-mono text-white">.venv</span>. They
              cannot see each other, so they cannot break each other. That is the whole idea of a{' '}
              <span className="text-white">virtual environment</span>.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2">
              The real reason: other people
            </CardHeading>
            <CardBody>
              &quot;It works on my machine&quot; is the most expensive sentence in science.{' '}
              <span className="font-mono text-white">pyproject.toml</span> plus{' '}
              <span className="font-mono text-white">uv.lock</span> turn your analysis into
              something a reviewer, a collaborator, or you-in-two-years can actually re-run.
            </CardBody>
          </SlideCard>
          <SlideCard color="neutral" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="neutral" className="mb-2">
              Not today
            </CardHeading>
            <CardList items={notToday} bullet="✗" color="neutral" />
          </SlideCard>
        </div>
      </div>
    </>
  )
}
