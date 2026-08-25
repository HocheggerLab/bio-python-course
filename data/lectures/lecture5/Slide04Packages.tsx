import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SlideCard, CardHeading, CardList } from '@/components/slides/SlideCard'

const stdlib = [
  'random — chance, shuffling, sampling',
  'math — sqrt, pi, logarithms',
  'pathlib — files & folders (you met this in the lab)',
  'datetime · csv — dates and simple tables',
]

const thirdParty = [
  'pandas — data tables',
  'numpy — fast numbers & arrays',
  'matplotlib — plots and figures',
  'biopython — sequence tools',
]

export function Slide04Packages() {
  return (
    <>
      <SlideTitle>
        Two Kinds of <GradientText variant="purple">Package</GradientText>
      </SlideTitle>

      <p className="text-center text-gray-300 text-base md:text-xl xl:text-2xl mt-4 md:mt-6 max-w-4xl mx-auto">
        <span className="font-mono text-purple-400">import</span> borrows code someone else already
        wrote and debugged. That code comes from two places.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-6 md:mt-8">

        {/* Standard library */}
        <SlideCard color="green" layout="start" padding="normal" className="border-l-4">
          <CardHeading size="md" color="green" className="mb-2 md:mb-3">
            ① The standard library
          </CardHeading>
          <p className="text-gray-400 text-sm md:text-lg xl:text-xl mb-4 md:mb-5">
            Ships <strong>with Python</strong> — nothing to install, just{' '}
            <span className="font-mono">import</span>.
          </p>
          <CardList items={stdlib} bullet="•" color="green" />
        </SlideCard>

        {/* Third-party */}
        <SlideCard color="blue" layout="start" padding="normal" className="border-l-4">
          <CardHeading size="md" color="blue" className="mb-2 md:mb-3">
            ② Third-party packages
          </CardHeading>
          <p className="text-gray-400 text-sm md:text-lg xl:text-xl mb-4 md:mb-5">
            Written by the community, published on <strong>PyPI</strong>. You install them first —{' '}
            <span className="font-mono">uv add pandas</span> (Lab 2). In Colab, already done.
          </p>
          <CardList items={thirdParty} bullet="•" color="blue" />
        </SlideCard>

      </div>

      <p className="text-center text-bio-yellow text-sm md:text-lg xl:text-xl font-semibold mt-5 md:mt-7">
        Either way, once it&apos;s imported you use it the same way:{' '}
        <span className="font-mono">import name</span> → <span className="font-mono">name.tool()</span>
      </p>
    </>
  )
}
