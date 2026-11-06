import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Part 2 in three moves: .iloc (positions, like numpy), .loc (names), then
   one slide of masks — a single condition, two combined, and a mask inside
   .loc. Slide13Filter then ties it back to the bet. Outputs checked against
   pandas 3.1 on public/data/pollinators_lecture.csv. */

const ilocCode = `print(df.iloc[0:3, 0:4])     # rows 0–2, columns 0–3
`

const ilocOutput = `    Month  Allotment       Crop  Flowers
0  August  Camp_Site  Raspberry        6
1  August  Camp_Site      Rbean       50
2  August      Hoggs      Rbean      140`

export function SlideIloc() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          By position — <GradientText>.iloc</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">.iloc[rows, columns]</span> counts from 0, exactly like a numpy
          array: rows before the comma, columns after it.
        </>
      }
      closing={
        <SlideCard color="green" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="green" className="mb-1">
            Same as last week
          </CardHeading>
          <CardBody>
            <span className="font-mono text-white">grid[0:3, 0:4]</span> on an array,{' '}
            <span className="font-mono text-white">df.iloc[0:3, 0:4]</span> on a table. The{' '}
            <span className="text-white">i</span> is for integer: positions only, and the end of a
            slice is left out.
          </CardBody>
        </SlideCard>
      }
      note={<>Handy for a peek, fragile for analysis: sort the table and position 0 is a different row.</>}
    >
      <LazyPythonRunner
        initialCode={ilocCode}
        height="100px"
        description="The top-left corner of the table"
        staticOutput={ilocOutput}
      />
    </ConceptSlide>
  )
}

const locCode = `print(df.loc[0:2, ["Crop", "Honeybees", "Bumblebees"]])
`

const locOutput = `        Crop  Honeybees  Bumblebees
0  Raspberry          0           0
1      Rbean          0           0
2      Rbean          0           1`

export function SlideLoc() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          By name — <GradientText variant="green">.loc</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">.loc[rows, columns]</span> uses labels: the row labels on the
          left, and the column names. No more counting to find &quot;Bumblebees&quot;.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              🪤 0:2 gives three rows
            </CardHeading>
            <CardBody>
              A <span className="font-mono text-white">.loc</span> slice <em>includes</em> its end
              label; <span className="font-mono text-white">.iloc</span> leaves it out. Names, not
              positions — so &quot;up to and including row 2&quot;.
            </CardBody>
          </SlideCard>
          <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              Only columns? A shortcut
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">df[[&quot;Crop&quot;, &quot;Bumblebees&quot;]]</span>{' '}
              — a list of names inside the brackets gives a smaller table, every row kept.
            </CardBody>
          </SlideCard>
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={locCode}
        height="100px"
        description="Three rows, three named columns"
        staticOutput={locOutput}
      />
    </ConceptSlide>
  )
}

const maskCode = `# one condition: a mask keeps the rows where it is True
beans = df[df["Crop"] == "Bbean"]
print(beans.shape)

# two conditions: & = both, | = either, brackets round each
busy = df[(df["Crop"] == "Raspberry") & (df["Bumblebees"] >= 3)]
print(busy.shape)

# a mask in .loc: rows by mask, columns by name
print(df.loc[df["Bumblebees"] > 8, ["Month", "Allotment", "Crop", "Bumblebees"]])
`

const maskOutput = `(94, 13)
(35, 13)
    Month    Allotment       Crop  Bumblebees
300  July  Moulsecoomb  Raspberry          10
588   May      Roedale  Raspberry          13`

export function SlideMasks() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          By condition — a <GradientText variant="yellow">mask</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">df[&quot;Crop&quot;] == &quot;Bbean&quot;</span> is 1,620
          True/False values — last week&apos;s <span className="font-mono">dff[go == 1]</span>. Put
          it in the brackets and the table keeps the rows where it is True.
        </>
      }
      closing={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="red" className="mb-1">
              🪤 Brackets round every condition
            </CardHeading>
            <CardBody>
              Without them Python does <span className="font-mono text-white">&quot;Raspberry&quot; &amp; df[…]</span>{' '}
              first and stops with a <span className="font-mono text-white">TypeError</span>.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              <span className="font-mono">&amp;</span> and <span className="font-mono">|</span>, not{' '}
              <span className="font-mono">and</span> / <span className="font-mono">or</span>
            </CardHeading>
            <CardBody>
              The words compare one True with one False. A mask holds 1,620, so{' '}
              <span className="font-mono text-white">and</span> raises a{' '}
              <span className="font-mono text-white">ValueError</span>.
            </CardBody>
          </SlideCard>
        </div>
      }
    >
      <LazyPythonRunner
        initialCode={maskCode}
        height="247px"
        description="One condition, two conditions, and a mask inside .loc"
        staticOutput={maskOutput}
      />
    </ConceptSlide>
  )
}
