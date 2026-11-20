import { StepQuizOpener, StepQuizQuestion } from '@/components/poll/StepQuiz'
import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'
import PollSlide from '@/components/poll/PollSlide'
import LazyPythonRunner from '@/components/python/LazyPythonRunner'

/* Two short quizzes, after Part 1 and Part 2. Questions live in
   lib/poll/content.ts (wording), questions.ts (answers) and answers.ts
   (explanations). */

const q1Code = `# every question starts the same way
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
df = pd.read_csv("depmap_lecture.csv")`

export function SlideQuiz1Opener() {
  return (
    <StepQuizOpener
      eyebrow="Quiz 1"
      title="Which library?"
      accent="Three histograms"
      note={<>The same SOX10 histogram, written three ways. All three import everything, so read the line that draws. Run it, then vote: which library draws the bars?</>}
      code={q1Code}
    />
  )
}

const libCode: Record<'a' | 'b' | 'c', string> = {
  a: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
df = pd.read_csv("depmap_lecture.csv")

fig, ax = plt.subplots()
df["SOX10"].plot.hist(bins=40, ax=ax)
ax.set_xlabel("SOX10 gene effect")
plt.show()
`,
  b: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
df = pd.read_csv("depmap_lecture.csv")

fig, ax = plt.subplots()
ax.hist(df["SOX10"], bins=40)
ax.set_xlabel("SOX10 gene effect")
plt.show()
`,
  c: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
df = pd.read_csv("depmap_lecture.csv")

fig, ax = plt.subplots()
sns.histplot(data=df, x="SOX10", bins=40, ax=ax)
ax.set_xlabel("SOX10 gene effect")
plt.show()
`,
}

/** The runner sits above the options, so the room can run it before voting. */
function LibraryQuestion({ n, id }: { n: number; id: 'a' | 'b' | 'c' }) {
  return (
    <ConceptSlide
      maxWidth="6xl"
      title={<>Question {n} — <GradientText variant="yellow">which library?</GradientText></>}
    >
      <PollSlide
        questionId={`l8-q1${id}`}
        codeSlot={<LazyPythonRunner initialCode={libCode[id]} height="230px" description="Run it, then vote" />}
      />
    </ConceptSlide>
  )
}

export function SlideQuiz1Q1() {
  return <LibraryQuestion n={1} id="a" />
}

export function SlideQuiz1Q2() {
  return <LibraryQuestion n={2} id="b" />
}

export function SlideQuiz1Q3() {
  return <LibraryQuestion n={3} id="c" />
}

const q2Code = `r = compare(skin["SOX10"], rest["SOX10"])
r["difference"]   # -1.22
r["p"]            # 1.3e-27`

export function SlideQuiz2Opener() {
  return (
    <StepQuizOpener
      eyebrow="Quiz 2"
      title="Real or chance,"
      accent="three questions"
      note={<>What a p-value means, which test, and what to conclude.</>}
      code={q2Code}
    />
  )
}

export function SlideQuiz2Q1() {
  return <StepQuizQuestion label="Question" n={1} topic="Reading p" lead={<>What does the p-value mean?</>} questionId="l8-q2a" />
}

export function SlideQuiz2Q2() {
  return <StepQuizQuestion label="Question" n={2} topic="Which test?" lead={<>Two conditions, and you are unsure how the data are distributed.</>} questionId="l8-q2b" />
}

export function SlideQuiz2Q3() {
  return <StepQuizQuestion label="Question" n={3} topic="What do you conclude?" lead={<>KRAS, skin vs the rest: median difference +0.1, p = 0.009.</>} questionId="l8-q2c" />
}
