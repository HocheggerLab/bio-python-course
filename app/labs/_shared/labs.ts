export interface LabMeta {
  num: number
  title: string
  blurb: string
  group: 'Python Basics' | 'Python & Data'
  available: boolean
}

export const labs: LabMeta[] = [
  { num: 1, title: 'Setup & First Steps',           blurb: 'Notebooks, Colab, variables recap and the terminal.',  group: 'Python Basics', available: true  },
  { num: 2, title: 'Lists, Strings & Maps',          blurb: 'Lecture 2 recap notebooks, then local Python with uv.',  group: 'Python Basics', available: true  },
  { num: 3, title: 'Loops, Logic & VS Code',         blurb: 'Iteration and decisions, then your first code editor.',  group: 'Python Basics', available: true  },
  { num: 4, title: 'Functions, Errors & Files',      blurb: 'Reusable tools & robust code, then a folder of genes and a look at drift.', group: 'Python Basics', available: true  },
  { num: 5, title: 'Arrays, numpy & Projects',       blurb: 'One neuron in one dimension, then two — and your first real Python project.', group: 'Python & Data', available: true  },
  { num: 6, title: 'Explorative Data Analysis',      blurb: 'Plotting and exploring biological data.',               group: 'Python & Data', available: false },
  { num: 7, title: 'End-to-End Data Mining',         blurb: 'From raw table to a tidy result and figure.',           group: 'Python & Data', available: false },
  { num: 8, title: 'LLMs & Agentic AI',              blurb: 'Calling LLMs from Python; simple agentic patterns.',    group: 'Python & Data', available: false },
]

export const getLab = (num: number) => labs.find((l) => l.num === num)
