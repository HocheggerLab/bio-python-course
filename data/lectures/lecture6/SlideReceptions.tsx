import { SlideTitle, GradientText } from '@/components/slides/SlideTitle'
import { SplitSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Part 1 told as lecture 5's hotel: the DataFrame is the reception you deal
   with first, each column is a second, smaller reception (a Series). Each
   gets one live slide (attributes vs methods, as with the numpy array) and
   one menu slide with a link to its page in the pandas docs. Every name on
   the menus exists in pandas 3.1; outputs checked against
   public/data/pollinators_lecture.csv. */

type Color = 'purple' | 'blue' | 'green' | 'yellow' | 'red'

type Group = {
  heading: string
  color: Color
  items: [string, string][]
}

function Menu({ groups, more, docs, docsLabel }: { groups: Group[]; more: string; docs: string; docsLabel: string }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6 max-w-6xl mx-auto w-full">
        {groups.map((g) => (
          <SlideCard key={g.heading} color={g.color} layout="start" padding="tight" className="border-t-4">
            <CardHeading size="sm" color={g.color} className="mb-2">
              {g.heading}
            </CardHeading>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-3 gap-y-1 md:gap-y-1.5">
              {g.items.map(([name, what]) => (
                <li key={name} className="leading-tight">
                  <span className="font-mono text-white text-xs md:text-sm xl:text-base">{name}</span>
                  <span className="block text-gray-400 text-[11px] md:text-xs xl:text-sm">{what}</span>
                </li>
              ))}
            </ul>
          </SlideCard>
        ))}
      </div>

      <p className="text-center text-sm md:text-lg xl:text-xl mt-4 md:mt-6">
        <span className="text-gray-300">{more} The full menu: </span>
        <a
          href={docs}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-bio-blue hover:text-bio-green transition-colors break-all"
        >
          {docsLabel}
        </a>
      </p>
    </>
  )
}

/* ── The DataFrame: the main reception ─────────────────────────────── */

const frameCode = `# attributes: what the table holds (no brackets)
print(df.shape)
print(df.dtypes)

# a method you have already used: df.head()
`

const frameOutput = `(1620, 13)
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

export function SlideFrameReception() {
  return (
    <SplitSlide
      title={
        <>
          The DataFrame&apos;s <GradientText variant="green">reception</GradientText>
        </>
      }
      lead={
        <>
          Last week: an object is a hotel, and you only ever talk to its reception. The DataFrame is
          the main reception you will work with today.
        </>
      }
      left={
        <LazyPythonRunner
          initialCode={frameCode}
          height="142px"
          description="What the table holds"
          staticOutput={frameOutput}
        />
      }
      right={
        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              Attributes — no brackets
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">df.shape</span>: 1,620 rows, 13 columns.{' '}
              <span className="font-mono text-white">df.dtypes</span>: the type of every column.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              Methods — brackets
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">df.head()</span>,{' '}
              <span className="font-mono text-white">df.describe()</span>,{' '}
              <span className="font-mono text-white">df.sort_values()</span> — jobs the table does for
              you.
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              The difference from numpy
            </CardHeading>
            <CardBody>
              An array has one type for <strong>everything</strong>. A DataFrame has one type{' '}
              <strong>per column</strong>: text where there is text, integers where there are counts.
            </CardBody>
          </SlideCard>
        </div>
      }
    />
  )
}

const frameGroups: Group[] = [
  {
    heading: '🧾 About itself',
    color: 'purple',
    items: [
      ['.shape', 'rows, columns'],
      ['.columns', 'the column names'],
      ['.dtypes', 'type of each column'],
      ['.index', 'the row labels'],
    ],
  },
  {
    heading: '👀 Look',
    color: 'blue',
    items: [
      ['.head() .tail()', 'first / last rows'],
      ['.sample()', 'random rows'],
      ['.describe()', 'summary of every number column'],
      ['.info()', 'types and missing values'],
    ],
  },
  {
    heading: '✂️ Pick',
    color: 'yellow',
    items: [
      ['df["col"]', 'one column'],
      ['.loc[ ]', 'rows and columns by name'],
      ['.iloc[ ]', 'rows and columns by position'],
      ['.drop()', 'leave some out'],
    ],
  },
  {
    heading: '🧹 Order and tidy',
    color: 'green',
    items: [
      ['.sort_values()', 'sort by a column'],
      ['.rename()', 'new column names'],
      ['.dropna() .fillna()', 'deal with gaps'],
      ['.drop_duplicates()', 'remove repeated rows'],
    ],
  },
  {
    heading: '📊 Summarise',
    color: 'red',
    items: [
      ['.sum() .mean()', 'down every column'],
      ['.count()', 'values per column'],
      ['.groupby()', 'one answer per group'],
      ['.corr()', 'which columns move together'],
    ],
  },
  {
    heading: '📤 Combine and save',
    color: 'purple',
    items: [
      ['.merge()', 'join two tables'],
      ['.plot()', 'a quick chart'],
      ['.to_csv()', 'write a CSV file'],
      ['.to_excel()', 'write a spreadsheet'],
    ],
  },
]

export function SlideFrameMenu() {
  return (
    <>
      <SlideTitle>
        What a DataFrame <GradientText variant="green">can do</GradientText>
      </SlideTitle>
      <p className="text-center text-gray-300 text-sm md:text-lg xl:text-xl mt-2 md:mt-3 max-w-4xl mx-auto">
        A taste of the menu at the table&apos;s reception. You don&apos;t learn it; you look it up.
      </p>
      <Menu
        groups={frameGroups}
        more="…and about 200 more."
        docs="https://pandas.pydata.org/docs/reference/frame.html"
        docsLabel="pandas.pydata.org → DataFrame"
      />
    </>
  )
}

/* ── The Series: a column's own reception ──────────────────────────── */

const seriesCode = `bb = df["Bumblebees"]
print(type(bb))

# attributes
print(bb.name, bb.dtype)

# methods: last week's numpy, unchanged
print(f"total {bb.sum()}   mean {bb.mean():.2f}   max {bb.max()}")
print("surveys with any bumblebee:", (bb > 0).sum())
`

const seriesOutput = `<class 'pandas.Series'>
Bumblebees int64
total 548   mean 0.34   max 13
surveys with any bumblebee: 311`

export function SlideSeriesReception() {
  return (
    <SplitSlide
      title={
        <>
          Each column has its own reception: a <GradientText>Series</GradientText>
        </>
      }
      lead={
        <>
          Ask the table for one column and you get the second type of the day — a numpy array that
          remembers its own name.
        </>
      }
      left={
        <LazyPythonRunner
          initialCode={seriesCode}
          height="226px"
          description="One column, and the numpy questions you already know"
          staticOutput={seriesOutput}
        />
      }
      right={
        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="blue" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="blue" className="mb-1">
              Attributes
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">.name</span> and{' '}
              <span className="font-mono text-white">.dtype</span> — a column knows what it is
              called and what it holds. One type, like an array.
            </CardBody>
          </SlideCard>
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              Methods
            </CardHeading>
            <CardBody>
              <span className="font-mono text-white">.sum()</span>,{' '}
              <span className="font-mono text-white">.mean()</span>,{' '}
              <span className="font-mono text-white">.max()</span>, and a mask counted by summing its{' '}
              <span className="text-white">True</span>s — all last week&apos;s numpy.
            </CardBody>
          </SlideCard>
          <SlideCard color="neutral" layout="start" padding="tight">
            <CardBody>
              548 bumblebees in 1,620 surveys, and only 311 surveys saw any. Most saw{' '}
              <strong>none at all</strong> — remember that when you start averaging.
            </CardBody>
          </SlideCard>
        </div>
      }
    />
  )
}

const seriesGroups: Group[] = [
  {
    heading: '🧾 About itself',
    color: 'purple',
    items: [
      ['.name', 'the column name'],
      ['.dtype', 'what it holds'],
      ['.size', 'how many values'],
      ['.is_unique', 'any repeats?'],
    ],
  },
  {
    heading: '📊 Numbers (numpy)',
    color: 'green',
    items: [
      ['.sum() .mean()', 'total, average'],
      ['.median() .std()', 'middle, spread'],
      ['.min() .max()', 'smallest, largest'],
      ['.describe()', 'all of them at once'],
    ],
  },
  {
    heading: '🔍 Where',
    color: 'blue',
    items: [
      ['.idxmax()', 'label of the largest'],
      ['.nlargest()', 'the top n'],
      ['.between()', 'inside a range?'],
      ['.isin()', 'one of these values?'],
    ],
  },
  {
    heading: '🏷️ Words',
    color: 'yellow',
    items: [
      ['.value_counts()', 'how often each value'],
      ['.unique()', 'the distinct values'],
      ['.nunique()', 'how many distinct'],
      ['.str.lower()', 'text methods, every row'],
    ],
  },
  {
    heading: '🧹 Change',
    color: 'red',
    items: [
      ['.sort_values()', 'in order'],
      ['.round()', 'round every value'],
      ['.map()', 'swap values for others'],
      ['.isna()', 'which are missing?'],
    ],
  },
  {
    heading: '📤 Hand back',
    color: 'purple',
    items: [
      ['.to_numpy()', 'the plain array'],
      ['.to_list()', 'a Python list'],
      ['.plot()', 'a quick chart'],
      ['.to_frame()', 'back to a table'],
    ],
  },
]

export function SlideSeriesMenu() {
  return (
    <>
      <SlideTitle>
        What a Series <GradientText>can do</GradientText>
      </SlideTitle>
      <p className="text-center text-gray-300 text-sm md:text-lg xl:text-xl mt-2 md:mt-3 max-w-4xl mx-auto">
        Everything numpy did, plus jobs for columns of words: counting categories, finding the
        distinct values, working on text.
      </p>
      <Menu
        groups={seriesGroups}
        more="…and about 200 more."
        docs="https://pandas.pydata.org/docs/reference/series.html"
        docsLabel="pandas.pydata.org → Series"
      />
    </>
  )
}
