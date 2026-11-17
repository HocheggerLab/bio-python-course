import { LectureData } from '@/data/lectures/types'
import { GradientText } from '@/components/slides/SlideTitle'
import { RecapSlide } from '@/data/sessions/lab6pandas/RecapSlide'
import { Slide04LearnMore } from './Slide04LearnMore'

/* One slide per notebook. Notebook paths match the Lab 7 list in
   data/notebooks.ts.

   The order is deliberate: notebook 1 has no plots at all, so that the
   figures in notebook 2 answer a question the student already has rather
   than decorating one they were handed. */

export const lab7DepMapData: LectureData = {
  id: 'lab-7-depmap',
  title: 'Lab 7 · From table to figure',
  slides: [
    {
      title: 'Finding the suspects',
      content: (
        <RecapSlide
          title={<>1 · Finding the <GradientText>suspects</GradientText></>}
          intro={
            <>
              Lecture 7 part 1 again, with you typing. Which gene does skin cancer need that
              other cancers do not? The obvious way to ask gives the wrong answer.
            </>
          }
          toolsHeading="pandas you already know, and two new ones"
          tools={[
            { code: 'df["oncotree_lineage"].value_counts()', means: 'how many cell lines per cancer type' },
            { code: 'df[df["oncotree_lineage"] != "Skin"]', means: 'everything that is not skin' },
            { code: 'skin.mean(numeric_only=True)', means: 'the mean of every gene column' },
            { code: 'means.nsmallest(5)', means: 'the five genes the cells need most' },
            { code: 'skin_mean - rest_mean', means: 'needed in skin more than elsewhere' },
            { code: 'difference.idxmin()', means: 'the name of the smallest value' },
          ]}
          steps={[
            'count the groups before you trust them',
            'skin and the rest: a table and its complement',
            'the trap: RAN tops every list, so it tells you nothing',
            'the fix: a difference, and SOX10 comes out on top',
            'most_specific(table, lineage): one function for any cancer type',
            '18 of 73 skin lines hardly need SOX10, so the mean is not enough',
          ]}
          notebook={{ path: 'lab07/01_find_the_suspects.ipynb', label: '01 · Finding the suspects' }}
          footer="About 35 minutes. No plots in this notebook, only tables."
        />
      ),
    },
    {
      title: 'Showing it',
      content: (
        <RecapSlide
          title={<>2 · <GradientText>Showing</GradientText> it</>}
          intro={
            <>
              From an empty figure to a box plot with every cell line as a dot. Each exercise has a
              self-check that looks at the figure you drew.
            </>
          }
          toolsHeading="matplotlib, from scratch"
          tools={[
            { code: 'fig, ax = plt.subplots()', means: 'a sheet of paper (fig) and one panel on it (ax)' },
            { code: 'ax.hist(df["SOX10"], bins=40)', means: 'the spread of one column' },
            { code: 'ax.scatter(x, y, color="grey")', means: 'two columns; call it twice to draw a group on top' },
            { code: 'label="skin" · ax.legend()', means: 'name each layer, then show the key' },
            { code: 'ax.boxplot(groups, tick_labels=names)', means: 'one box per group' },
            { code: 'np.random.normal(1, 0.06, n)', means: 'x values near box 1, so the dots spread out' },
          ]}
          steps={[
            'an empty figure with three labels',
            'histograms: BRAF in every line, SOX10 in skin',
            'a scatter plot, then grey for the rest and colour for skin',
            'broken: why the blue dots disappeared',
            'a box plot, then every cell line as a dot on it',
            'six boxes from a loop with enumerate, then fig.savefig at 300 dpi',
          ]}
          notebook={{ path: 'lab07/02_showing_it.ipynb', label: '02 · Showing it' }}
          footer="About 40 minutes. The box plot with dots is the figure the project asks for."
        />
      ),
    },
    {
      title: 'A grid, and the loose end',
      content: (
        <RecapSlide
          title={<>3 · A grid, and the <GradientText>loose end</GradientText></>}
          intro={
            <>
              Several panels in one figure, a plotting function you write once, and who the 18
              skin lines that do not need SOX10 are.
            </>
          }
          toolsHeading="More than one panel"
          tools={[
            { code: 'fig, axes = plt.subplots(2, 2)', means: 'four panels; pick one with axes[row][col]' },
            { code: 'for ax, name in zip(axes.flat, names):', means: 'visit every panel with a loop' },
            { code: 'plt.subplots(2, 2, sharex=True)', means: 'one scale for all panels, so they compare' },
            { code: 'def plot_gene(ax, gene):', means: 'a function that draws on the panel you give it' },
            { code: 'fig.suptitle(...) · fig.tight_layout()', means: 'a title over the figure; no overlapping labels' },
            { code: 'df["col"].str.contains("Melanoma")', means: 'rows whose text contains a word' },
          ]}
          steps={[
            'two panels side by side, and the axes.hist error',
            'a 2 × 2 grid by hand, then with a loop',
            'why sharex changes what the reader concludes',
            'plot_gene(ax, gene), and a function that ignores its argument',
            'the 18: eight are not melanoma, ten are melanomas that switched',
            'one three-panel figure for the whole result',
          ]}
          notebook={{ path: 'lab07/03_a_grid_and_a_loose_end.ipynb', label: '03 · A grid, and the loose end' }}
          footer="About 40 minutes. The last figure puts the whole lab in three panels."
        />
      ),
    },
    { title: 'Learn more, free', content: <Slide04LearnMore /> },
  ],
}
