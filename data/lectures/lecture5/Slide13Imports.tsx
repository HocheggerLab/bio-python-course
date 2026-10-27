import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const demoCode = `# 1. The whole package, under its own name
import random
print(random.randint(1, 6))

# 2. The whole package, under a short alias
import numpy as np
print(np.array([1, 2, 3]) * 2)

# 3. Just one name from a package
from numpy import array
print(array([1, 2, 3]) * 2)
`

const demoOutput = `4
[2 4 6]
[2 4 6]`

const ways = [
  {
    code: 'import random',
    use: 'random.randint(1, 6)',
    body: 'The whole package. Every call starts with its full name.',
    color: 'green' as const,
  },
  {
    code: 'import numpy as np',
    use: 'np.array([1, 2, 3])',
    body: 'The same, with a short alias. Everyone writes np — you will see it in every example online.',
    color: 'blue' as const,
  },
  {
    code: 'from numpy import array',
    use: 'array([1, 2, 3])',
    body: 'Only one name, used on its own. Short — but the reader no longer sees where it came from.',
    color: 'purple' as const,
  },
]

export function Slide13Imports() {
  return (
    <>
      <SlideTitle>
        Three Ways to <GradientText>Import</GradientText>
      </SlideTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-10 mt-4 md:mt-6 items-center">
        <div className="flex flex-col gap-3 md:gap-4">
          {ways.map((w) => (
            <SlideCard key={w.code} color={w.color} layout="start" padding="tight" className="border-l-4">
              <CardHeading size="sm" color={w.color} className="mb-1 font-mono">
                {w.code}
              </CardHeading>
              <p className="font-mono text-white text-sm md:text-base xl:text-lg mb-1">→ {w.use}</p>
              <CardBody>{w.body}</CardBody>
            </SlideCard>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl">
          <LazyPythonRunner
            initialCode={demoCode}
            height="394px"
            description="Live demo — three ways in"
            staticOutput={demoOutput}
          />
        </div>
      </div>
    </>
  )
}
