import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

const code = `print(df.shape)
print()
print(df.dtypes)
`

const output = `(1620, 13)

Month           str
Allotment       str
Crop            str
Flowers       int64
Honeybees     int64
Bumblebees    int64
Hoverflies    int64
Terrestris    int64
Lapidarius    int64
Pascuorum     int64
Pratorum      int64
Hypnorum      int64
Hortorum      int64
dtype: object`

export function Slide07WhatsInIt() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          What is actually <GradientText>in there</GradientText>
        </>
      }
      lead={
        <>
          Two questions to ask of any table before you trust a single number that comes out of it.
        </>
      }
      points={
        <>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              <span className="font-mono">.shape</span>
            </CardHeading>
            <CardBody>
              1,620 rows, 13 columns — the same tuple idea as numpy, and the first thing to check
              after loading anything.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              <span className="font-mono">.dtypes</span>
            </CardHeading>
            <CardBody>
              Every column, with the kind of thing it holds. (<span className="font-mono">.columns</span>{' '}
              gives just the names, if that is all you want.)
            </CardBody>
          </SlideCard>
        </>
      }
      note={
        <>
          There is the whole difference. A numpy array has one type for{' '}
          <strong>everything</strong>; a DataFrame has one type <strong>per column</strong> — text
          where there is text, integers where there are counts. Exactly what a real table needs.
        </>
      }
    >
      <LazyPythonRunner
        initialCode={code}
        height="184px"
        description="Shape, names, and the type of each column"
        staticOutput={output}
      />
    </ConceptSlide>
  )
}
