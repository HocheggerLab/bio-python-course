import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `import random

# roll a die for you and for the bee
you = random.randint(1, 6)
bee = random.randint(1, 6)

print(f"You rolled {you}, the bee rolled {bee}")

if you > bee:
    print("You win! 🎉")
elif bee > you:
    print("The bee wins! 🐝")
else:
    print("Draw — roll again!")
`

const demoOutput = `You rolled 5, the bee rolled 2
You win! 🎉`

export function Slide05RandomGame() {
  return (
    <>
      <SlideTitle>
        A First Package — <GradientText variant="green">random</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 xl:mt-8 items-center">

        <div className="flex flex-col gap-4 md:gap-5">
          <SlideCard color="neutral" layout="start" padding="compact">
            <CardBody>
              <span className="font-mono">random</span> is in the standard library — one{' '}
              <span className="font-mono">import</span> and you can simulate chance: dice, coin
              flips, shuffling a deck, picking a sample.
            </CardBody>
          </SlideCard>

          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-2 md:mb-3">
              The tools you&apos;ll use
            </CardHeading>
            <CardBody>
              <span className="font-mono">random.randint(1, 6)</span> — a whole number in a range ·{' '}
              <span className="font-mono">random.choice(list)</span> — pick one ·{' '}
              <span className="font-mono">random.random()</span> — a decimal 0–1
            </CardBody>
          </SlideCard>

          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardBody>
              ▶ <strong>Run it a few times.</strong> A different result every time. So… how does it
              decide? Hold that thought.
            </CardBody>
          </SlideCard>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 min-h-0">
          <p className="text-gray-300 text-sm md:text-lg xl:text-xl italic">
            Roll against the bee — run it, then run it again:
          </p>
          <div className="overflow-hidden rounded-xl">
            <LazyPythonRunner
              initialCode={demoCode}
              height="394px"
              description="Live demo — random dice duel"
              staticOutput={demoOutput}
            />
          </div>
        </div>

      </div>
    </>
  )
}
