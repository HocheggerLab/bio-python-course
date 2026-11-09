import { LectureData } from '@/data/lectures/types'
import { GradientText } from '@/components/slides/SlideTitle'
import { RecapSlide } from './RecapSlide'

/* One slide per notebook. Notebook paths match the Lab 6 list in
   data/notebooks.ts; the numbers quoted are checked against
   lab06/data/pollinators_lecture.csv. */

export const lab6PandasData: LectureData = {
  id: 'lab-6-pandas',
  title: 'Lab 6 · pandas practice',
  slides: [
    {
      title: 'Look before you analyse',
      content: (
        <RecapSlide
          title={<>1 · Look before you <GradientText>analyse</GradientText></>}
          intro={
            <>
              Lecture part 1 again, slowly, with you typing the code. Find out what is in the
              survey, and the two things to be careful about, before asking it anything.
            </>
          }
          tools={[
            { code: 'df.shape · df.head()', means: 'how big the table is; the first five rows' },
            { code: 'df.info()', means: 'the type of each column, and whether anything is missing' },
            { code: 'df.describe()', means: 'a quick summary of every number column' },
            { code: 'df["Honeybees"].sum()', means: 'one column (a Series), then a method on it' },
            { code: 'df["Allotment"].value_counts()', means: 'how many rows have each value' },
            { code: '(df["Honeybees"] > 5).sum()', means: 'a mask of True/False, then count the Trues' },
          ]}
          steps={[
            'the size and shape of the table',
            'what describe() tells you, row by row',
            'the lecture’s revision numbers, worked out yourself',
            'two odd things: flower counts that are estimates, and Weald (495 surveys) vs Camp_Site (2)',
            'counting with a condition',
          ]}
          notebook={{ path: 'lab06/01_look_before_you_analyse.ipynb', label: '01 · Look before you analyse' }}
          footer="About 35 minutes. Every exercise has a self-check that tells you what to fix."
        />
      ),
    },
    {
      title: 'Pick out the rows you want',
      content: (
        <RecapSlide
          title={<>2 · Pick out the <GradientText>rows you want</GradientText></>}
          intro={
            <>
              Stop looking at the whole table. Choose the columns, keep the rows that match, put
              them in order, and do step 1 of the lecture yourself.
            </>
          }
          tools={[
            { code: 'df[["Crop", "Bumblebees"]]', means: 'choose columns: a list inside the brackets' },
            { code: 'df[df["Crop"] == "Bbean"]', means: 'keep the rows where the mask is True' },
            { code: '(cond 1) & (cond 2)', means: '“and”: round brackets around each condition' },
            { code: 'df["Crop"].isin([...])', means: 'match any value from a list' },
            { code: 'df.sort_values("Flowers", ascending=False)', means: 'put the rows in order, biggest first' },
          ]}
          steps={[
            'choosing columns, and the double brackets',
            'filtering rows, read from the inside out',
            'two conditions with &, and the error message to look out for',
            'sorting, and the busiest surveys',
            'step 1: who visits broad bean?',
          ]}
          notebook={{ path: 'lab06/02_pick_out_the_rows.ipynb', label: '02 · Pick out the rows you want' }}
          footer="About 35 minutes."
        />
      ),
    },
    {
      title: 'From one crop to every crop',
      content: (
        <RecapSlide
          title={<>3 · From one crop to <GradientText>every crop</GradientText></>}
          intro={
            <>
              Steps 2 to 5 of the lecture: if the bumblebees disappeared, which crop would lose the
              most? Then one more check, to make the comparison fair.
            </>
          }
          tools={[
            { code: 'df.groupby("Crop")["Bumblebees"].sum()', means: 'for each crop, add up the bumblebees' },
            { code: 'visits["share"] = ... / (... + ...)', means: 'a new column, calculated row by row' },
            { code: '(visits["share"] * 100).round(1)', means: 'the share as a percentage' },
            { code: 'visits.sort_values("share", ascending=False)', means: 'which crop is top?' },
            { code: 'visits[visits["Bumblebees"] >= 20]', means: 'keep only the crops with enough data' },
            { code: 'df.groupby("Crop").size()', means: 'how many surveys of each crop' },
          ]}
          steps={[
            'groupby as split, take, combine',
            'the bumblebee share, and what NaN means',
            'why strawberry “wins” with 100%',
            'the trust filter, and the lecture’s answer',
            'per survey: two questions, two answers',
          ]}
          notebook={{ path: 'lab06/03_one_crop_to_every_crop.ipynb', label: '03 · From one crop to every crop' }}
          footer="About 40 minutes. Lecture 7 turns tables like these into figures."
        />
      ),
    },
    {
      title: 'Advanced: the real survey file',
      content: (
        <RecapSlide
          title={<>Advanced · The <GradientText>real survey file</GradientText></>}
          intro={
            <>
              Optional, for when notebooks 1 to 3 felt comfortable. The file the researchers
              published: 23 columns, and the problems every real dataset has. Fewer demos, more
              decisions.
            </>
          }
          toolsHeading="Part A · Cleaning: four problems"
          tools={[
            { code: 'df.columns.str.strip()', means: 'a column that won’t work: a hidden space in its name' },
            { code: 'df.isna().sum()', means: 'missing plant counts. Why brambles? And should you drop them?' },
            { code: 'df.duplicated().sum()', means: 'rows that appear twice. Mistakes, or real empty surveys?' },
            { code: 'pd.to_datetime(df["Date"])', means: 'dates stored as text, and six surveys in the wrong month' },
          ]}
          stepsHeading="Part B · Analysis: three questions"
          steps={[
            'do shared plots attract more insects? (per survey vs per flower)',
            'which bumblebee species visit broad bean, and what is nectar robbing?',
            'was 2018 a worse year for bees?',
            'then: a question of your own',
          ]}
          notebook={{ path: 'lab06/04_advanced_the_real_survey.ipynb', label: '04 · Advanced: the real survey file' }}
          footer="About an hour; fine to spread over two sessions. Nothing in the assessed work depends on it."
        />
      ),
    },
  ],
}
