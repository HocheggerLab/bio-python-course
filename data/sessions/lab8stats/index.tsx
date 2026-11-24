import { LectureData } from '@/data/lectures/types'
import { GradientText } from '@/components/slides/SlideTitle'
import { RecapSlide } from '@/data/sessions/lab6pandas/RecapSlide'
import { SlideLearnMore } from './SlideLearnMore'

/* One slide per notebook. Notebook paths match the Lab 8 list in
   data/notebooks.ts. Both use the lecture's DepMap file (257 genes), which
   the setup cell downloads from y3-bio-python/lab08/data. */

export const lab8StatsData: LectureData = {
  id: 'lab-8-stats',
  title: 'Lab 8 · Figures and tests',
  slides: [
    {
      title: 'Quicker figures',
      content: (
        <RecapSlide
          title={<>1 · Quicker <GradientText>figures</GradientText></>}
          intro={
            <>
              The Lab 7 figures in fewer lines: pandas for a quick look, seaborn to compare groups.
            </>
          }
          toolsHeading="pandas and seaborn, both on top of matplotlib"
          tools={[
            { code: 'df["SOX10"].plot.hist(bins=40, ax=ax)', means: 'a column draws its own histogram' },
            { code: 'medians.nsmallest(8).plot.barh(ax=ax)', means: 'a groupby result draws itself too' },
            { code: 'sns.scatterplot(data=skin, x="BRAF", y="SOX10")', means: 'name the columns; seaborn finds the numbers' },
            { code: 'df.loc[is_skin, "group"] = "skin"', means: 'a label column: relabel only the rows you pick' },
            { code: 'sns.boxplot(...) · sns.stripplot(...)', means: 'one box per group, every cell line as a dot' },
            { code: 'def group_figure(table, gene): ... return fig', means: 'a function that returns the figure, as the project asks' },
          ]}
          steps={[
            'a pandas histogram of BRAF',
            'median BRAF per lineage as bars',
            'a seaborn scatter of the skin lines',
            'broken: why every row says skin',
            'MDM2 in three groups, box plus dots',
            'group_figure(table, gene), then save it',
          ]}
          notebook={{ path: 'lab08/01_quicker_figures.ipynb', label: '01 · Quicker figures' }}
          footer="About 40 minutes. group_figure is the three-group figure your project needs."
        />
      ),
    },
    {
      title: 'Real, or chance?',
      content: (
        <RecapSlide
          title={<>2 · Real, or <GradientText>chance?</GradientText></>}
          intro={
            <>
              Is a difference bigger than chance? One test, one function, many genes.
            </>
          }
          toolsHeading="scipy.stats"
          tools={[
            { code: 'mannwhitneyu(a, b).pvalue', means: 'could this difference be chance?' },
            { code: 'p < 0.05', means: 'the cut-off; difference first, then p' },
            { code: 'def compare(a, b): return {...}', means: 'medians, difference, p and significant, by name' },
            { code: 'pd.DataFrame(rows)', means: 'a list of dictionaries becomes a table, one row per gene' },
            { code: 'spearmanr(x, y).statistic', means: 'do two columns move together?' },
            { code: 'linregress(x, y).slope', means: 'by how much: the line, its r squared, a prediction' },
          ]}
          steps={[
            '500 random groups vs real skin',
            'BRAF and PAX8: significant?',
            'broken: result < 0.05',
            'NRAS: real but small',
            'compare(a, b), then nine genes',
            'Spearman, then your own regression line',
          ]}
          notebook={{ path: 'lab08/02_real_or_chance.ipynb', label: '02 · Real, or chance?' }}
          footer="About 50 minutes. compare() is the core of your project's statistics."
        />
      ),
    },
    {
      title: 'Statistics the hacker’s way',
      content: (
        <RecapSlide
          title={<>3 · Advanced: statistics the <GradientText>hacker’s way</GradientText></>}
          intro={<>Optional. A p-value and a confidence interval from a loop and random numbers, no formula.</>}
          toolsHeading="numpy, a loop, and rng"
          tools={[
            { code: 'rng = np.random.default_rng()', means: 'a random number generator' },
            { code: 'rng.permutation(is_skin)', means: 'the same labels, shuffled: pure chance' },
            { code: 'values[labels] · values[~labels]', means: 'the True group and the False group' },
            { code: 'count / n', means: 'how often chance beat the real difference: the p-value' },
            { code: 'rng.choice(a, size=len(a), replace=True)', means: 'one bootstrap sample of your own data' },
            { code: 'np.percentile(boots, [2.5, 97.5])', means: 'the middle 95 %: a confidence interval' },
          ]}
          steps={[
            'median_diff(values, labels)',
            'permutation_p: a thousand shuffles',
            'a loop and Mann–Whitney agree: MDM2 and RAN',
            'broken: a bootstrap with no width',
            'bootstrap_ci(a, b): SOX10 and TP53',
            'a shuffled correlation, then NRAS: when methods disagree',
          ]}
          notebook={{ path: 'lab08/03_advanced_statistics_for_hackers.ipynb', label: '03 · Statistics the hacker’s way' }}
          footer="About 40 minutes. Based on Jake VanderPlas’s talk Statistics for Hackers, from Lecture 8."
        />
      ),
    },
    { title: 'Learn more, free', content: <SlideLearnMore /> },
  ],
}
