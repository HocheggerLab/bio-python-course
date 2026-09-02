import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd

df = pd.read_csv("pollinators_lecture.csv")

print(df.head())
`

const output = `    Month  Allotment       Crop  ...  Pratorum  Hypnorum  Hortorum
0  August  Camp_Site  Raspberry  ...         0         0         0
1  August  Camp_Site      Rbean  ...         0         0         0
2  August      Hoggs      Rbean  ...         0         0         0
3  August      Hoggs      Rbean  ...         0         0         1
4  August      Hoggs      Rbean  ...         0         0         0

[5 rows x 13 columns]`

export function Slide06ReadCsv() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          One line to <GradientText>open the file</GradientText>
        </>
      }
      lead={
        <>
          Experiment Data come as Excel or CSV files. You can load this in numpy with <span className="font-mono">np.loadtxt</span> with{' '}
          <span className="font-mono">delimiter</span>, <span className="font-mono">skiprows</span>{' '}
          and <span className="font-mono">usecols</span> but its cumbersome. Pandas reads the header row,
          works out the types, and hands you a <strong>DataFrame</strong> objects that comes with lots of analysis methods.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-2">
              Numpy
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">
                np.loadtxt(path, delimiter=&quot;,&quot;, skiprows=1, usecols=1)
              </span>
              <br />
              <br />
              You had to say what the separator was, that there was a header, and{' '}
              <span className="text-white">which numbered column</span> you meant. If you differnet tyes you get an error!
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-2">
              Pandas
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">pd.read_csv(path)</span>
              <br />
              <br />
              pandas reads the header itself, names every column, and works out a{' '}
              <span className="text-white">type per column</span> — text where there is text,
              integers where there are integers.
            </CardBody>
          </SlideCard>
        </div>
      }
      note={
        <>
          <span className="font-mono not-italic">.head()</span> shows the first five rows. The{' '}
          <span className="font-mono not-italic">...</span> is pandas being polite — thirteen columns
          will not fit, so it hides the middle. Picking the ones you want is Part 2.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="205px"
        description="Read the survey data and look at the top of it"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
