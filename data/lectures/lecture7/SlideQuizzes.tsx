import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'

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
      note={<>No code to write: decide what kind of data you have, then how to show it.</>}
      code={q1Code}
    />
  )
}

export function SlideQuiz1Q1() {
  return <StepQuizQuestion label="Question" n={1} topic="What kind of data?" lead={<>Which of these columns is categorical?</>} questionId="l7-r2" />
}

export function SlideQuiz1Q2() {
  return <StepQuizQuestion label="Question" n={2} topic="Which aesthetic?" lead={<>Show the lineage on a scatter plot.</>} questionId="l7-q1b" />
}

export function SlideQuiz1Q3() {
  return <StepQuizQuestion label="Question" n={3} topic="Which plot?" lead={<>One continuous column, nothing to split it by.</>} questionId="l7-r3" />
}

const q2Code = `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot(time_h, cells)
ax.set_xlabel("Time (hours)")`

export function SlideQuiz2Opener() {
  return (
    <StepQuizOpener
      eyebrow="Quiz 2"
      title="matplotlib,"
      accent="three questions"
      note={<>Remember who does the drawing: the axes.</>}
      code={q2Code}
    />
  )
}

export function SlideQuiz2Q1() {
  return <StepQuizQuestion label="Question" n={1} topic="Who owns the title?" lead={<>Give the panel a title.</>} questionId="l7-r1" />
}

export function SlideQuiz2Q2() {
  return <StepQuizQuestion label="Question" n={2} topic="Fix the legend" lead={<>Both lines are drawn, but the legend is empty.</>} questionId="l7-p1" />
}

export function SlideQuiz2Q3() {
  return <StepQuizQuestion label="Question" n={3} topic="Two panels" lead={<>Draw in the right-hand panel.</>} questionId="l7-q2c" />
}

const q3Code = `genes = df.columns[4:]
skin = df[df["oncotree_lineage"] == "Skin"][genes].mean()
rest = df[df["oncotree_lineage"] != "Skin"][genes].mean()`

export function SlideQuiz3Opener() {
  return (
    <StepQuizOpener
      eyebrow="Quiz 3"
      title="Which genes does a cancer need?"
      accent="three questions"
      note={<>The analysis you just watched, one step at a time.</>}
      code={q3Code}
    />
  )
}

export function SlideQuiz3Q1() {
  return <StepQuizQuestion label="Question" n={1} topic="Essential everywhere" lead={<>Why not target RAN?</>} questionId="l7-q3a" />
}

export function SlideQuiz3Q2() {
  return <StepQuizQuestion label="Question" n={2} topic="The better question" lead={<>Which genes does skin need more?</>} questionId="l7-q3b" />
}

export function SlideQuiz3Q3() {
  return <StepQuizQuestion label="Question" n={3} topic="Show every cell line" lead={<>Why dots on top of the box?</>} questionId="l7-q3c" />
}
