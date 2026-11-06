import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide, SectionSlide, SplitSlide } from '@/components/slides/layouts'
import { SlideCard, CardHeading, CardBody } from '@/components/slides/SlideCard'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'
import PollSlide from '@/components/poll/PollSlide'
import { getContent } from '@/lib/poll/content'
import GroupByDiagram from './GroupByDiagram'

/* Part 2: one pandas query, built a step at a time towards the bet. Each
   step is the same beat: what we want to know → the one method that does it
   → run → what the result says. After each, a fix-the-code poll (l6-f1…f5)
   whose answer is the line just run. The runners share the workspace, so
   `df` comes from Part 1 and `visits` from step 2. Every output checked
   against pandas 3.1 on public/data/pollinators_lecture.csv. */

type Color = 'blue' | 'green' | 'yellow' | 'purple' | 'red'

const steps: { color: Color; question: string; code: string }[] = [
  { color: 'blue', question: 'Who visits one crop?', code: 'rasp = df[df["Crop"] == "Raspberry"]' },
  {
    color: 'green',
    question: '…and every crop at once?',
    code: 'visits = df.groupby("Crop")[["Honeybees", "Bumblebees"]].sum()',
  },
  {
    color: 'yellow',
    question: 'What share is bumblebee?',
    code: 'visits["share"] = visits["Bumblebees"] / (visits["Honeybees"] + visits["Bumblebees"])',
  },
  { color: 'purple', question: 'Which crop is top?', code: 'visits.sort_values("share", ascending=False)' },
  { color: 'red', question: 'Can we trust it?', code: 'enough = visits[visits["Bumblebees"] >= 20]' },
]

const stepBorder: Record<Color, string> = {
  blue: 'border-l-bio-blue',
  green: 'border-l-bio-green',
  yellow: 'border-l-bio-yellow',
  purple: 'border-l-purple-400',
  red: 'border-l-red-400',
}

const stepText: Record<Color, string> = {
  blue: 'text-bio-blue',
  green: 'text-bio-green',
  yellow: 'text-bio-yellow',
  purple: 'text-purple-300',
  red: 'text-red-400',
}

export function SlideRoadPart() {
  return (
    <SectionSlide
      eyebrow="Part 2"
      title="The road"
      accent="to the answer"
      note="Five steps, one method each — and at the end, your bet."
    />
  )
}

export function SlideRoadMap() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          The map: <GradientText>five steps</GradientText> to the answer
        </>
      }
      lead={
        <>
          &quot;If the bumblebees vanished, which crop would lose its bees?&quot; is too big for one
          line. Break it into questions pandas can answer one at a time.
        </>
      }
      note={<>Each step: what we want → the method → run it → read the result → fix a broken line.</>}
    >
      <ol className="flex flex-col gap-2">
        {steps.map((s, i) => (
          <li
            key={s.question}
            className={`flex flex-col md:flex-row md:items-center gap-1 md:gap-4 rounded-lg border border-white/10 border-l-4 ${stepBorder[s.color]} bg-white/[0.03] px-4 py-2 md:py-2.5`}
          >
            <p className={`md:w-72 shrink-0 font-semibold text-sm md:text-base xl:text-lg ${stepText[s.color]}`}>
              <span className="mr-2 opacity-70">{i + 1}</span>
              {s.question}
            </p>
            <code className="font-mono text-white text-xs md:text-sm whitespace-pre overflow-x-auto">{s.code}</code>
          </li>
        ))}
      </ol>
      <p className="text-center text-bio-green font-semibold text-lg md:text-2xl xl:text-3xl mt-4 md:mt-6">
        → the crop that would lose its bees
      </p>
    </ConceptSlide>
  )
}

/* ── Step 1: one crop ─────────────────────────────────────────────── */

const step1Code = `rasp = df[df["Crop"] == "Raspberry"]

print(rasp.shape)
print("honeybees ", rasp["Honeybees"].sum())
print("bumblebees", rasp["Bumblebees"].sum())
`

const step1Output = `(269, 13)
honeybees  245
bumblebees 311`

export function SlideStep1() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step 1 — who visits <GradientText>one crop?</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">df[&quot;Crop&quot;] == &quot;Raspberry&quot;</span> is a
          mask: 1,620 True/False. Inside <span className="font-mono">df[ ]</span> it keeps the rows
          where it is True. The result is a smaller DataFrame, so we can ask its columns again.
        </>
      }
      closing={
        <SlideCard color="blue" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="blue" className="mb-1">
            What it says
          </CardHeading>
          <CardBody>
            Raspberry has the most bumblebee visits — but 245 honeybee visits too. Lose the
            bumblebees and the honeybees are still there. And there are 17 more crops to check.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={step1Code}
        height="142px"
        description="The raspberry surveys only"
        staticOutput={step1Output}
      />
    </ConceptSlide>
  )
}

/* ── Step 2: every crop ───────────────────────────────────────────── */

export function SlideGroupByPicture() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          How <GradientText variant="green">groupby</GradientText> works
        </>
      }
      lead={
        <>
          Three moves: <strong>split</strong> the rows into piles, <strong>apply</strong> a sum to
          each pile, <strong>combine</strong> the answers. Six real rows from the survey — click
          through.
        </>
      }
      note={<>Step 2 does exactly this, with 1,620 rows and 18 piles.</>}
    >
      <GroupByDiagram />
    </ConceptSlide>
  )
}

const step2Code = `visits = df.groupby("Crop")[["Honeybees", "Bumblebees"]].sum()

print(visits)
`

const step2Output = `            Honeybees  Bumblebees
Crop
Apple              48          23
Bbean               2          23
Blackberry        128          71
Blueberry           0           1
Cherry             11           4
Courgette          24           8
Cucumber            2           4
Currant             3           8
Gooseberry          2          11
Pear                1           1
Pepper              0           0
Physalis            3           9
Plum                7           8
Raspberry         245         311
Rbean              81          46
Squash            104          15
Strawberry          0           1
Tomato              1           4`

export function SlideStep2() {
  return (
    <SplitSlide
      title={
        <>
          Step 2 — <GradientText variant="green">every crop</GradientText> at once
        </>
      }
      lead={
        <>
          <span className="font-mono">.groupby(&quot;Crop&quot;)</span> sorts the rows into one pile
          per crop. Pick the two columns, <span className="font-mono">.sum()</span> each pile: one row
          per crop.
        </>
      }
      ratio="wide-left"
      left={
        <LazyPythonRunner
          initialCode={step2Code}
          height="100px"
          description="Step 1 for all 18 crops in one line"
          staticOutput={step2Output}
        />
      }
      right={
        <div className="flex flex-col gap-3 md:gap-4">
          <SlideCard color="green" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="green" className="mb-1">
              What it says
            </CardHeading>
            <CardBody>
              Eighteen crops, each with its two totals. The crop names are now the row labels. Look
              down the list — does any crop look different?
            </CardBody>
          </SlideCard>
          <SlideCard color="yellow" layout="start" padding="tight" className="border-l-4">
            <CardHeading size="sm" color="yellow" className="mb-1">
              Two pairs of brackets
            </CardHeading>
            <CardBody>
              Two columns are a <span className="text-white">list</span>:{' '}
              <span className="font-mono text-white">[[&quot;Honeybees&quot;, &quot;Bumblebees&quot;]]</span>.
              Outer brackets pick, inner ones make the list.
            </CardBody>
          </SlideCard>
        </div>
      }
    />
  )
}

/* ── Step 3: the share ────────────────────────────────────────────── */

const step3Code = `visits["share"] = visits["Bumblebees"] / (visits["Honeybees"] + visits["Bumblebees"])

print(visits.head().round(2))
`

const step3Output = `            Honeybees  Bumblebees  share
Crop
Apple              48          23   0.32
Bbean               2          23   0.92
Blackberry        128          71   0.36
Blueberry           0           1   1.00
Cherry             11           4   0.27`

export function SlideStep3() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step 3 — what <GradientText variant="yellow">fraction</GradientText> are bumblebees?
        </>
      }
      lead={
        <>
          Assign to a column name that doesn&apos;t exist yet and pandas makes it. The sum runs down
          every row at once — last week&apos;s numpy, with names.
        </>
      }
      closing={
        <SlideCard color="yellow" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="yellow" className="mb-1">
            What it says
          </CardHeading>
          <CardBody>
            The share is the question that matters: 0.92 means 92 of every 100 bee visits are
            bumblebees. Take them away and only 8 are left. A big share is a big loss.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={step3Code}
        height="100px"
        description="A new column: the bumblebee share"
        staticOutput={step3Output}
      />
    </ConceptSlide>
  )
}

/* ── Step 4: sort ─────────────────────────────────────────────────── */

const step4Code = `print(visits.sort_values("share", ascending=False).head().round(2))
`

const step4Output = `            Honeybees  Bumblebees  share
Crop
Strawberry          0           1   1.00
Blueberry           0           1   1.00
Bbean               2          23   0.92
Gooseberry          2          11   0.85
Tomato              1           4   0.80`

export function SlideStep4() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step 4 — which crop is <GradientText variant="purple">top?</GradientText>
        </>
      }
      lead={
        <>
          <span className="font-mono">.sort_values(&quot;share&quot;)</span> orders the rows by one
          column, smallest first. <span className="font-mono">ascending=False</span> turns it round.
        </>
      }
      closing={
        <SlideCard color="red" layout="start" padding="compact" className="border-l-4">
          <CardHeading size="sm" color="red" className="mb-1">
            What it says — wait…
          </CardHeading>
          <CardBody>
            Strawberry and blueberry: 100% bumblebees! From <strong>one</strong> bee each. Odd
            thing 2 from Part 1 is back — a number built on almost no data means nothing.
          </CardBody>
        </SlideCard>
      }
    >
      <LazyPythonRunner
        initialCode={step4Code}
        height="79px"
        description="Highest share first"
        staticOutput={step4Output}
      />
    </ConceptSlide>
  )
}

/* ── Step 5: enough data ──────────────────────────────────────────── */

const step5Code = `enough = visits[visits["Bumblebees"] >= 20]

print(enough.sort_values("share", ascending=False).round(2))
`

const step5Output = `            Honeybees  Bumblebees  share
Crop
Bbean               2          23   0.92
Raspberry         245         311   0.56
Rbean              81          46   0.36
Blackberry        128          71   0.36
Apple              48          23   0.32`

export function SlideStep5() {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Step 5 — can we <GradientText variant="yellow">trust it?</GradientText>
        </>
      }
      lead={
        <>
          Step 1&apos;s mask again, this time on the crop table: keep only crops with at least 20
          bumblebee visits, then sort.
        </>
      }
      closing={
        <details className="group rounded-lg border-l-4 border-bio-green/60 bg-bio-green/[0.07] px-4 md:px-5 py-3 cursor-pointer">
          <summary className="list-none text-bio-green font-bold text-lg md:text-2xl xl:text-3xl">
            <span className="group-open:hidden">Run it, read the top row → click</span>
            <span className="hidden group-open:inline">Broad bean — 92%</span>
          </summary>
          <p className="mt-1 text-gray-200 text-sm md:text-lg xl:text-xl leading-snug">
            23 bumblebee visits, 2 from honeybees. Take the bumblebees away and almost nothing is
            left. Raspberry has the most bumblebees, but its 245 honeybees would carry on.
          </p>
        </details>
      }
    >
      <LazyPythonRunner
        initialCode={step5Code}
        height="100px"
        description="Crops with enough visits to trust"
        staticOutput={step5Output}
      />
    </ConceptSlide>
  )
}

/* ── The fix-the-code polls ───────────────────────────────────────── */

const fixes = [
  { id: 'l6-f1', topic: 'one crop', lead: 'Should give the raspberry rows: KeyError.' },
  { id: 'l6-f2', topic: 'every crop', lead: 'Should give one row per crop: ValueError.' },
  { id: 'l6-f3', topic: 'the share', lead: 'No error, but a share can’t be above 1.' },
  { id: 'l6-f4', topic: 'the top', lead: 'No error, but the list is upside down.' },
  { id: 'l6-f5', topic: 'enough data', lead: 'No error, but where is the table?' },
]

export function SlideFix({ n }: { n: number }) {
  const f = fixes[n - 1]
  const broken = getContent(f.id)?.code ?? ''
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={
        <>
          Fix step {n} — <GradientText variant="yellow">{f.topic}</GradientText>
        </>
      }
      lead={
        <>
          {f.lead} Run it, vote, fix it.
        </>
      }
    >
      <PollSlide
        questionId={f.id}
        codeSlot={
          <LazyPythonRunner
            initialCode={broken}
            height={`${broken.split('\n').length * 21 + 16}px`}
            description="The broken line — run it"
          />
        }
      />
    </ConceptSlide>
  )
}
