/**
 * Project 2 — the TCGA p53 capstone.
 *
 * Mirrors the Canvas page and `00_start_here` in the private
 * `tcga-capstone` repo. If the marks or tasks change there, change them
 * here too.
 */

export const CAPSTONE_REPO = 'HocheggerLab/tcga-capstone-2026'

const COLAB = `https://colab.research.google.com/github/${CAPSTONE_REPO}/blob/main`

export const DOWNLOAD_COMMANDS = `curl -L https://github.com/${CAPSTONE_REPO}/archive/refs/heads/main.zip -o capstone.zip
unzip capstone.zip
cd tcga-capstone-2026-main
uv sync`

export interface CapstoneNotebook {
  file: string
  title: string
  purpose: string
  colab: string
  optional?: boolean
}

export const notebooks: CapstoneNotebook[] = [
  {
    file: '00_start_here',
    title: 'Start here',
    purpose: 'The question, how it is marked, and how to work.',
    colab: `${COLAB}/00_start_here.ipynb`,
  },
  {
    file: '01_cohort_table',
    title: 'Notebook 01 — the cohort',
    purpose: 'Clean a messy patient export and write your Table 1.',
    colab: `${COLAB}/01_cohort_table.ipynb`,
  },
  {
    file: '02_p53_analysis',
    title: 'Notebook 02 — the analysis',
    purpose: 'Test your gene, draw the figure, write your one-sentence answer.',
    colab: `${COLAB}/02_p53_analysis.ipynb`,
  },
  {
    file: '03_extension',
    title: 'Notebook 03 — the extension',
    purpose: 'One deeper analysis of your choosing.',
    colab: `${COLAB}/03_extension.ipynb`,
    optional: true,
  },
]

export interface CapstoneTask {
  task: string
  fn: string
  purpose: string
}

export const tasks: CapstoneTask[] = [
  { task: '1a', fn: 'load_and_clean', purpose: 'Clean the raw patient export into a tidy table.' },
  { task: '1b', fn: 'describe_cohort', purpose: 'Summarise the cohort as the paper’s “Table 1”.' },
  { task: '2', fn: 'expression_landscape', purpose: 'Rank your gene’s expression across cancer types.' },
  { task: '3', fn: 'compare_groups', purpose: 'A Mann–Whitney U test — written once, used twice.' },
  { task: '4', fn: 'plot_comparison', purpose: 'One figure: normal, TP53 wild-type and TP53-mutant tumours.' },
  { task: '5', fn: 'run_analysis', purpose: 'Combine everything into one answer (marked per key).' },
]

export interface MarkRow {
  part: string
  marks: number
  what: string
}

/** Sums to 100. */
export const marking: MarkRow[] = [
  { part: 'Function correctness', marks: 20, what: 'Each function meets its contract — marked per function.' },
  { part: 'Code quality', marks: 10, what: 'Single-purpose functions, no needless repetition.' },
  { part: 'Documentation', marks: 10, what: 'Docstrings, useful comments, names that say what they hold.' },
  { part: 'Interpretation', marks: 20, what: 'Table 1, the landscape, both comparisons, the figure, your answer.' },
  { part: 'GitHub repository', marks: 15, what: 'Repo link in Notebook 02, at least 5 meaningful commits, a README.' },
  { part: 'Extension (optional)', marks: 25, what: 'One option, done well — the route from 70 to 85.' },
]

export interface ExtensionOption {
  option: string
  question: string
  note?: string
}

export const extensions: ExtensionOption[] = [
  {
    option: 'A',
    question: 'The tumours you called “wild-type” aren’t all wild-type — does TP53 deletion matter?',
    note: 'Only for BRCA, LIHC, LUAD, PRAD and STAD.',
  },
  { option: 'B', question: 'Is it really p53, or just gene dosage?' },
  { option: 'C', question: 'Does it hold in a different tissue?' },
]
