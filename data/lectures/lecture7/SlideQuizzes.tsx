import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'
import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'

/** A figure that hides its message: shown first, for half a minute of discussion. */
function ProblemSlide({ n, topic, message, src, alt, hint }: {
  n: number; topic: string; message: string; src: string; alt: string; hint: React.ReactNode
}) {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={<>Question {n} — <GradientText variant="yellow">{topic}</GradientText></>}
      lead={<>The message this figure should show: <strong>{message}</strong> Can you see it?</>}
      note={hint}
    >
      <div className="flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="rounded-lg bg-white max-h-[46vh] w-auto" />
      </div>
    </ConceptSlide>
  )
}

/** Four attempted fixes side by side, then the vote. */
function FixesSlide({ n, topic, prefix, questionId }: { n: number; topic: string; prefix: string; questionId: string }) {
  const fixes = (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
      {['A', 'B', 'C', 'D'].map((x) => (
        <figure key={x} className="rounded-lg bg-white p-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/l7-quiz/${prefix}_${x}.png`} alt={`Fix ${x}`} className="w-full h-auto" />
          <figcaption className="text-center font-bold text-bio-darkest text-sm md:text-base">{x}</figcaption>
        </figure>
      ))}
    </div>
  )
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={<>Question {n} — <GradientText variant="yellow">{topic}</GradientText></>}
      lead={<>Four ways to fix it. Which gives the clearest message?</>}
    >
      <PollSlide questionId={questionId} codeSlot={fixes} />
    </ConceptSlide>
  )
}

/* Three short quizzes, one at the end of each part. Questions live in
   lib/poll/content.ts (wording), questions.ts (answers) and answers.ts
   (explanations). */

const q1Code = `# DepMap: one row per cell line
cell_line_name    oncotree_lineage    SOX10    BRAF    RAN
NIH:OVCAR-3       Ovary/Fallopian…   -0.327  -0.331  -4.196
HEL               Myeloid            -0.137   …        …`

export function SlideQuiz1Opener() {
  return (
    <StepQuizOpener
      eyebrow="Quiz 1"
      title="How a figure shows data,"
      accent="three questions"
      note={<>No code to write: decide what kind of data you have, then pick the figure that shows the message best.</>}
      code={q1Code}
    />
  )
}

export function SlideQuiz1Q1() {
  return <StepQuizQuestion label="Question" n={1} topic="What kind of data?" lead={<>Which of these columns is categorical?</>} questionId="l7-r2" />
}

export function SlideQuiz1Q2Problem() {
  return (
    <ProblemSlide
      n={2}
      topic="the hidden message"
      message="skin cancer lines need both BRAF and SOX10."
      src="/l7-quiz/q2_problem.png"
      alt="Scatter of BRAF against SOX10 gene effect, all cell lines in one colour"
      hint={<>Every cell line is the same colour, so you can&apos;t tell which dots are skin cancer. What would you change?</>}
    />
  )
}

export function SlideQuiz1Q2() {
  return <FixesSlide n={2} topic="the hidden message" prefix="q2" questionId="l7-q1v" />
}

export function SlideQuiz1Q3Problem() {
  return (
    <ProblemSlide
      n={3}
      topic="the wrong kind of plot"
      message="skin cancer lines need SOX10 more than other cancers."
      src="/l7-quiz/q3_problem.png"
      alt="Line plot of mean SOX10 gene effect across 30 cancer types in alphabetical order"
      hint={<>The line joins one cancer type to the next. Does &quot;from Prostate to Skin&quot; mean anything? What kind of data is on the x-axis?</>}
    />
  )
}

export function SlideQuiz1Q3() {
  return <FixesSlide n={3} topic="the wrong kind of plot" prefix="q3" questionId="l7-q1w" />
}

const q2Code = `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.hist(df["SOX10"], bins=40)
ax.set_xlabel("SOX10 gene effect")`

export function SlideQuiz2Opener() {
  return (
    <StepQuizOpener
      eyebrow="Quiz 2"
      title="Building a basic figure,"
      accent="three questions"
      note={<>Make it, put data on it, label it.</>}
      code={q2Code}
    />
  )
}

export function SlideQuiz2Q1() {
  return <StepQuizQuestion label="Question" n={1} topic="fig and ax" lead={<>What does plt.subplots() hand you?</>} questionId="l7-q2b" />
}

export function SlideQuiz2Q2() {
  return <StepQuizQuestion label="Question" n={2} topic="Who owns the title?" lead={<>Give the panel a title.</>} questionId="l7-r1" />
}

export function SlideQuiz2Q3() {
  return <StepQuizQuestion label="Question" n={3} topic="More detail" lead={<>The histogram hides the tail.</>} questionId="l7-q2a" />
}

const q3Code = `fig, ax = plt.subplots()
ax.scatter(rest["BRAF"], rest["SOX10"], color="grey", label="other")
ax.scatter(skin["BRAF"], skin["SOX10"], color="blue", label="skin")
ax.legend()`

export function SlideQuiz3Opener() {
  return (
    <StepQuizOpener
      eyebrow="Quiz 3"
      title="Extending a figure,"
      accent="three questions"
      note={<>Groups, legends, panels: the moves that found the SOX10 suspects.</>}
      code={q3Code}
    />
  )
}

export function SlideQuiz3Q1() {
  return <StepQuizQuestion label="Question" n={1} topic="Add to the same panel" lead={<>One panel, a second group of cell lines.</>} questionId="l7-q3d" />
}

export function SlideQuiz3Q2() {
  return <StepQuizQuestion label="Question" n={2} topic="A grid of panels" lead={<>Count them, then find the last one.</>} questionId="l7-q3e" />
}

export function SlideQuiz3Q3() {
  return <StepQuizQuestion label="Question" n={3} topic="Why only skin?" lead={<>Read the biology off the figure.</>} questionId="l7-q3f" />
}
