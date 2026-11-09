import { LectureData } from '@/data/lectures/types'
import { GradientText } from '@/components/slides/SlideTitle'
import { NotebookLaunch } from './NotebookLaunch'

/* Notebook paths are the ones listed for Lab 6 in data/notebooks.ts. */

export const lab6InspectSelectData: LectureData = {
  id: 'lab-6-inspect-select',
  title: 'Lab 6 · Inspect and select',
  slides: [
    {
      title: 'Inspect and select',
      content: (
        <NotebookLaunch
          title={<>Inspect, then <GradientText>select</GradientText></>}
          intro={
            <>
              The real pollinator survey: 22 columns, 1,620 watches, two summers, and a mistake in the
              header row. First find out what&apos;s in it, then start asking it questions.
            </>
          }
          cards={[
            {
              heading: '01 · Inspecting a DataFrame',
              color: 'blue',
              items: [
                '.info(), .describe() — a table describes itself',
                'the column that isn’t there: a header with a stray space',
                'a column is a Series',
                'where are the holes? and which repeats are not errors',
              ],
              notebook: { path: 'lab06/01_dataframe_inspection.ipynb', label: '01 · Inspecting a DataFrame' },
            },
            {
              heading: '02 · Selecting rows and columns',
              color: 'yellow',
              items: [
                '.loc by label, .iloc by position',
                'a question asked of every row: masks, combined with &',
                '.isin() and .between()',
                'dates that are secretly text, then adding a column',
              ],
              notebook: { path: 'lab06/02_selecting_rows_and_columns.ipynb', label: '02 · Selecting rows and columns' },
            },
          ]}
          footer="About 45 minutes for both. Do them in order: notebook 02 assumes you have met the header bug in 01."
        />
      ),
    },
  ],
}

export const lab6GroupbyData: LectureData = {
  id: 'lab-6-groupby',
  title: 'Lab 6 · groupby and your first figure',
  slides: [
    {
      title: 'groupby and your first figure',
      content: (
        <NotebookLaunch
          title={<>Split, summarise, <GradientText>combine</GradientText></>}
          intro={
            <>
              &quot;Which crop gets the most bumblebees?&quot; is one line of pandas. Then the most important
              idea of the lab: a count measures the insects <span className="text-white">and the effort</span>.
              A rate separates them.
            </>
          }
          cards={[
            {
              heading: '03 · groupby',
              color: 'blue',
              items: [
                'one key, one column, one answer per group',
                'several summaries at once with .agg()',
                'two keys at once',
                'the group that is too small to trust',
              ],
              notebook: { path: 'lab06/03_groupby_basics.ipynb', label: '03 · groupby' },
            },
            {
              heading: '04 · Rates, not counts',
              color: 'yellow',
              items: [
                'visits per watch vs visits per flower: the ranking reverses',
                'your first figure, straight from a groupby',
                'draw the reversal',
                'the shape of a season',
              ],
              notebook: { path: 'lab06/04_rates_and_plots.ipynb', label: '04 · Rates and plots' },
            },
          ]}
          footer="About 40 minutes for both. Notebook 04 picks up the ranking you make at the end of 03."
        />
      ),
    },
  ],
}

export const lab6ExtrasData: LectureData = {
  id: 'lab-6-extras',
  title: 'Lab 6 · Extras',
  slides: [
    {
      title: 'Extras',
      content: (
        <NotebookLaunch
          title={<>Extras, for when you&apos;re <GradientText>done</GradientText></>}
          intro={
            <>
              Nothing in the assessed work assumes these. They are here for when the four core notebooks
              are finished. Take them slowly, and come back to them.
            </>
          }
          cards={[
            {
              heading: 'Cleaning, further in',
              color: 'green',
              items: [
                'names that make code readable',
                'who did the surveying, and when?',
                'a date as the index',
                'a clean table you can hand to someone else',
              ],
              notebook: { path: 'lab06/extras/01_cleaning_deeper.ipynb', label: 'Extra · Cleaning, further in' },
            },
            {
              heading: 'Reshaping and joining',
              color: 'purple',
              items: [
                'why the shape is wrong: eight insect columns',
                'melt, and pivot_table back again',
                'use the new shape to check the old one',
                'merge: information the file does not contain',
              ],
              notebook: { path: 'lab06/extras/02_reshape_and_merge.ipynb', label: 'Extra · Reshaping and joining' },
            },
          ]}
        />
      ),
    },
  ],
}
