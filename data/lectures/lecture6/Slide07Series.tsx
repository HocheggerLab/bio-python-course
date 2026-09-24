import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `bb = df["Bumblebees"]

print(type(bb))
print(f"total {bb.sum()}   mean {bb.mean():.2f}   max {bb.max()}")
print("surveys with any bumblebee:", (bb > 0).sum())
`

const output = `<class 'pandas.Series'>
total 548   mean 0.34   max 13
surveys with any bumblebee: 311`

export function Slide07Series() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          A single column is a <GradientText>Series</GradientText>
        </>
      }
      lead={
        <>
          Pull one column out and you get a <strong>Series</strong> — a numpy array that remembers
          its own name. Look at what you can do to it.
        </>
      }
      closing={
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardBody>
            <span className="font-mono text-white">.sum()</span> ·{' '}
            <span className="font-mono text-white">.mean()</span> ·{' '}
            <span className="font-mono text-white">.max()</span> ·{' '}
            <span className="font-mono text-white">(bb &gt; 0).sum()</span> — every one of these is
            last week&apos;s lecture, unchanged. A mask still counts by summing its{' '}
            <span className="text-white">True</span>s.
          </CardBody>
        </SlideCard>
      }
      note={
        <>
          548 bumblebees across 1,620 surveys, and 311 surveys saw at least one. So most surveys saw{' '}
          <strong>none at all</strong> — remember that when you start averaging.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="226px"
        description="One column, and the numpy questions you already know"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
