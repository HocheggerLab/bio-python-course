/**
 * Every practice notebook, in the order the labs use them.
 *
 * One list, so the /notebooks page and the lab decks cannot drift apart —
 * the Session 1 link spent a term pointing at a directory that did not exist
 * because each deck carried its own copy of the URL.
 */
const COLAB = 'https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main'

export interface NotebookMeta {
  /** Repo path, which is also the Colab path. */
  path: string
  title: string
  /** What it practises, in a few words. */
  blurb: string
  /** Worked answers, where they exist. */
  solutions?: string
}

export interface LabNotebooks {
  lab: number
  labTitle: string
  available: boolean
  notebooks: NotebookMeta[]
}

export const colabUrl = (path: string) => `${COLAB}/${path}`

export const labNotebooks: LabNotebooks[] = [
  {
    lab: 1,
    labTitle: 'Setup & First Steps',
    available: true,
    notebooks: [
      { path: 'lab01/01_using_notebooks.ipynb', title: '01 · Using notebooks', blurb: 'Cells, run order, recovering from a NameError.' },
      { path: 'lab01/02_variables_and_print.ipynb', title: '02 · Variables & print', blurb: 'Assignment, print() and f-strings.', solutions: 'lab01/solutions/02_variables_and_print_solutions.ipynb' },
      { path: 'lab01/03_data_types.ipynb', title: '03 · Data types', blurb: 'int, float, str, bool — and the type trap.', solutions: 'lab01/solutions/03_data_types_solutions.ipynb' },
      { path: 'lab01/04_operators_and_mini_programs.ipynb', title: '04 · Operators', blurb: 'Arithmetic, comparisons, a molarity calculator.', solutions: 'lab01/solutions/04_operators_and_mini_programs_solutions.ipynb' },
    ],
  },
  {
    lab: 2,
    labTitle: 'Lists, Strings & Maps',
    available: true,
    notebooks: [
      { path: 'lab02/01_lists_basics.ipynb', title: '01 · Lists — basics', blurb: 'Indexing, slicing, growing a list.' },
      { path: 'lab02/02_lists_advanced_concepts.ipynb', title: '02 · Lists — advanced', blurb: 'Nesting, sorting, list methods.' },
      { path: 'lab02/03_strings_basics.ipynb', title: '03 · Strings — basics', blurb: 'A sequence you can slice and count.' },
      { path: 'lab02/04_strings_advanced_concepts.ipynb', title: '04 · Strings — advanced', blurb: 'Methods, splitting, building text.' },
      { path: 'lab02/05_dictionaries_basics.ipynb', title: '05 · Dictionaries — basics', blurb: 'Lookup by key, the codon table.' },
      { path: 'lab02/06_dictionaries_advanced_concepts.ipynb', title: '06 · Dictionaries — advanced', blurb: 'get(), counting, nested data.' },
    ],
  },
  {
    lab: 3,
    labTitle: 'Loops, Logic & VS Code',
    available: true,
    notebooks: [
      { path: 'lab03/01_loops_basics.ipynb', title: '01 · Loops — basics', blurb: 'for, range, accumulating a result.' },
      { path: 'lab03/02_loops_advanced_concepts.ipynb', title: '02 · Loops — advanced', blurb: 'Nesting, enumerate, comprehensions.' },
      { path: 'lab03/03_conditionals_basics.ipynb', title: '03 · If / else', blurb: 'Making decisions in code.' },
      { path: 'lab03/04_conditionals_advanced_concepts.ipynb', title: '04 · If / else — advanced', blurb: 'Chained tests, truthiness, guard clauses.' },
    ],
  },
  {
    lab: 4,
    labTitle: 'Functions, Errors & Files',
    available: true,
    notebooks: [
      { path: 'lab04/01_functions_basics.ipynb', title: '01 · Functions — basics', blurb: 'Arguments, return, one job per function.' },
      { path: 'lab04/02_functions_advanced_concepts.ipynb', title: '02 · Functions — advanced', blurb: 'Defaults, docstrings, composing functions.' },
      { path: 'lab04/03_errors_basics.ipynb', title: '03 · Errors — basics', blurb: 'Reading a traceback, try / except.' },
      { path: 'lab04/04_errors_advanced_concepts.ipynb', title: '04 · Errors — advanced', blurb: 'Raising your own, failing loudly.' },
    ],
  },
  {
    lab: 5,
    labTitle: 'Arrays, numpy & Projects',
    available: true,
    notebooks: [
      { path: 'lab05/01_arrays_1d_basics.ipynb', title: '01 · Arrays — basics', blurb: 'One neuron, one dimension.' },
      { path: 'lab05/02_arrays_1d_advanced_concepts.ipynb', title: '02 · Arrays — asking questions', blurb: 'Masking, thresholds, finding onsets.' },
      { path: 'lab05/03_arrays_2d_basics.ipynb', title: '03 · Arrays — 2D', blurb: 'Stacking trials, averaging across rows.' },
      { path: 'lab05/04_vectorisation.ipynb', title: '04 · Vectorisation', blurb: 'Why bother with numpy at all.' },
    ],
  },
  { lab: 6, labTitle: 'Explorative Data Analysis', available: false, notebooks: [] },
  { lab: 7, labTitle: 'End-to-End Data Mining', available: false, notebooks: [] },
  { lab: 8, labTitle: 'LLMs & Agentic AI', available: false, notebooks: [] },
]

export const notebookCount = labNotebooks.reduce((n, l) => n + l.notebooks.length, 0)
