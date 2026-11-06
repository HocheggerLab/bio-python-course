import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `import pandas as pd

df = pd.read_csv("pollinators_lecture.csv")

print(df.head())
`

const output = `    Month  Allotment       Crop  Flowers  Honeybees  Bumblebees  Hoverflies  Terrestris  Lapidarius  Pascuorum  Pratorum  Hypnorum  Hortorum
0  August  Camp_Site  Raspberry        6          0           0           0           0           0          0         0         0         0
1  August  Camp_Site      Rbean       50          0           0           0           0           0          0         0         0         0
2  August      Hoggs      Rbean      140          0           1           0           0           0          1         0         0         0
3  August      Hoggs      Rbean       28          0           1           0           0           0          0         0         0         1
4  August      Hoggs      Rbean       75          1           0           0           0           0          0         0         0         0`

export function Slide05ReadCsv() {
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
          Real data comes as CSV or Excel files. pandas reads the header row, works out a type for
          every column, and hands you a <strong>DataFrame</strong> — a table with its own analysis
          methods.
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
              Say the separator, skip the header, and give the{' '}
              <span className="text-white">column number</span>. Mixed text and numbers? An error.
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
              Reads the header itself, names every column, and picks a{' '}
              <span className="text-white">type per column</span>. Then{' '}
              <span className="font-mono text-white">.head()</span> shows the first five rows.
            </CardBody>
          </SlideCard>
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="142px"
        description="Read the survey data and look at the top of it"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
