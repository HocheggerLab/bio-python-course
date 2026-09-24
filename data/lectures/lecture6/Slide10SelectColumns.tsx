import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `print(df[["Crop", "Honeybees", "Bumblebees"]].head())
`

const output = `        Crop  Honeybees  Bumblebees
0  Raspberry          0           0
1      Rbean          0           0
2      Rbean          0           1
3      Rbean          0           1
4      Rbean          1           0`

export function Slide10SelectColumns() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Take only the <GradientText>columns you want</GradientText>
        </>
      }
      lead={
        <>
          One name in the brackets gives you a Series. A <strong>list</strong> of names gives you a
          smaller DataFrame — which is why you see two sets of brackets.
        </>
      }
      closing={
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardBody>
            <span className="font-mono text-white">df[&quot;Crop&quot;]</span> → one column, a
            Series. &nbsp;
            <span className="font-mono text-white">df[[&quot;Crop&quot;, &quot;Honeybees&quot;]]</span>{' '}
            → a table with two columns. The inner brackets are just a normal Python{' '}
            <span className="text-white">list</span> — nothing new.
          </CardBody>
        </SlideCard>
      }
      note={<>No more <span className="font-mono not-italic">usecols=(1, 2, 3)</span> and counting positions. You ask for columns by name.</>}
    >
      <LazyPythonRunner
        initialCode={code}
        height="142px"
        description="Three columns instead of thirteen"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
