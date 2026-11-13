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
              Lecture 7 part 1 again, with you typing. Which genes does skin cancer need?
              The obvious answer is wrong, and finding out why is the point of the notebook.
            </>
          }
          toolsHeading="pandas you already know"
          tools={[
            { code: 'df.shape · df.head()', means: 'how big the table is; the first five rows' },
            { code: 'df["oncotree_lineage"].value_counts()', means: 'how many cell lines per cancer type' },
            { code: 'df[df["oncotree_lineage"] == "Skin"]', means: 'keep the skin rows' },
            { code: 'skin.mean(numeric_only=True)', means: 'the mean gene effect of every gene, in skin' },
            { code: 'means.nsmallest(10)', means: 'the ten genes skin needs most' },
            { code: '(skin_mean - rest_mean)', means: 'needed in skin compared with everywhere else' },
          ]}
          steps={[
            'what one row is, and what a gene effect of −1 means',
            'the ten genes skin needs most — then the same for lung, and for bowel',
            'the trap: RAN tops every list, so it tells you nothing',
            'the fix: skin minus the rest, and SOX10 appearing near the top',
            'your turn: run the same comparison for a lineage of your choice',
          ]}
          notebook={{ path: 'lab07/01_find_the_suspects.ipynb', label: '01 · Finding the suspects' }}
          footer="About 40 minutes. No plots in this notebook — only tables."
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
              You have a gene and a number. Now make the figure that convinces someone else,
              starting from the one line every matplotlib figure begins with.
            </>
          }
          toolsHeading="matplotlib, from scratch"
          tools={[
            { code: 'fig, ax = plt.subplots()', means: 'a sheet of paper (fig) and one panel on it (ax)' },
            { code: 'ax.hist(df["SOX10"], bins=40)', means: 'the spread of one column' },
            { code: 'ax.scatter(x, y, s=6, alpha=0.4)', means: 'two columns against each other' },
            { code: 'ax.scatter(...) again', means: 'a second group on the SAME panel, drawn on top' },
            { code: 'ax.set_xlabel · set_ylabel · legend', means: 'the labels, and the key' },
            { code: 'fig.savefig("f.png", dpi=300)', means: 'a file you can put in a report' },
          ]}
          steps={[
            'the anatomy of a figure: fig, ax, and who owns the title',
            'a histogram of SOX10 across every line — and the two humps in it',
            'BRAF against SOX10: grey for everything, colour for skin',
            'labels, a legend, and why label= goes on the scatter and not the legend',
            'the box plot with every cell line as a dot on top',
            'saving at 300 dpi, with bbox_inches="tight"',
          ]}
          notebook={{ path: 'lab07/02_showing_it.ipynb', label: '02 · Showing it' }}
          footer="About 45 minutes. The last figure is the one the project asks for."
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
              Four panels instead of one, a function so you write the plotting code once —
              and then the question the box plot leaves hanging.
            </>
          }
          toolsHeading="More than one panel"
          tools={[
            { code: 'fig, axes = plt.subplots(2, 2)', means: 'four panels; axes is a 2-D array' },
            { code: 'axes[0][1]', means: 'row 0, column 1 — counting from 0' },
            { code: 'for ax in axes.flat:', means: 'visit all four without nested loops' },
            { code: 'plt.subplots(2, 2, sharey=True)', means: 'one y-axis scale, so panels compare' },
            { code: 'fig.suptitle(...) · fig.tight_layout()', means: 'a title for the sheet; stop labels overlapping' },
            { code: 'def plot_gene(ax, gene):', means: 'lab 4 again: write it once, use it four times' },
          ]}
          steps={[
            'four genes, four panels, one loop',
            'why sharey changes what the reader concludes',
            'turning the plotting code into a function that takes an ax',
            'the loose end: about 18 of 73 skin lines barely need SOX10 at all',
            'find them, look at them, and read about de-differentiation',
          ]}
          notebook={{ path: 'lab07/03_a_grid_and_a_loose_end.ipynb', label: '03 · A grid, and the loose end' }}
          footer="About 45 minutes. The last section is open-ended on purpose."
        />
      ),
    },
    { title: 'Learn more, free', content: <Slide04LearnMore /> },
  ],
}
