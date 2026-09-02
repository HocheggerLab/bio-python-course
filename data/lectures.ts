export interface Lecture {
  id: number
  title: string
  status: 'available' | 'coming-soon' | 'under-construction'
  topics: string[]
  slideUrl?: string
  notebookUrl?: string
  videoUrl?: string
  labsUrl?: string
  type?: 'core' | 'specialization'
  /** The real dataset this session works on — shown on the card. */
  dataset?: {
    emoji: string
    field: string
    /** Where it came from, in a few words. */
    source: string
  }
}

export const pythonBasicsData: Lecture[] = [
  {
    id: 1,
    title: "Data Types, Variables and Basic Operations",
    status: "available",
    topics: [
      "Variables and assignment",
      "Core types: int, float, bool, str",
      "Arithmetic and string operators",
      "print() and f-strings"
    ],
    slideUrl: "/lectures/1",
    labsUrl: "/labs/1",
    type: 'core'
  },
  {
    id: 2,
    title: "Lists, Strings and Maps",
    status: "under-construction",
    topics: [
      "Lists: holding a collection of sequences",
      "Strings as sequences: indexing & slicing",
      "String methods: .replace(), .find()",
      "Dictionaries: mapping codons to amino acids"
    ],
    slideUrl: "/lectures/2",
    labsUrl: "/labs/2",
    type: 'core'
  },
  {
    id: 3,
    title: "Loops, Dictionaries and Control Flow",
    status: "under-construction",
    topics: [
      "for / while loops and range()",
      "if / elif / else",
      "Dictionaries and .items() iteration",
      "Building a codon translation table"
    ],
    type: 'core'
  },
  {
    id: 4,
    title: "Functions, Files and Error Handling",
    status: "under-construction",
    topics: [
      "Defining functions and return values",
      "Scope, type hints and docstrings",
      "Reading and writing files",
      "try / except and raising errors"
    ],
    type: 'core'
  },
]

export const pythonDataData: Lecture[] = [
  {
    id: 5,
    title: "Arrays — One Neuron, Many Trials",
    status: "under-construction",
    dataset: { emoji: "🐭", field: "Neurobiology", source: "Whisker touch — Maravall Lab, Sussex" },
    topics: [
      "Packages, objects and methods",
      "numpy arrays and vectorisation",
      "Masking and finding events in a signal",
      "2-D arrays: averaging 254 trials into an answer"
    ],
    slideUrl: "/lectures/5",
    labsUrl: "/labs/5",
    type: 'core'
  },
  {
    id: 6,
    title: "DataFrames — Who Pollinates Your Dinner?",
    status: "under-construction",
    dataset: { emoji: "🐝", field: "Ecology", source: "Urban pollinator survey — Nicholls Lab, Sussex" },
    topics: [
      "A column is an array with a name",
      "Selecting columns, filtering rows",
      "value_counts and the effort trap",
      "groupby — split, add up, combine"
    ],
    labsUrl: "/labs/6",
    type: 'core'
  },
  {
    id: 7,
    title: "Plotting and Exploratory Data Analysis",
    status: "coming-soon",
    dataset: { emoji: "🧬", field: "Cancer biology", source: "Cancer Dependency Map (DepMap)" },
    topics: [
      "matplotlib and seaborn",
      "Distributions, box plots and small multiples",
      "Scatter plots, correlation and statistics",
      "Building a publication-ready figure"
    ],
    labsUrl: "/labs/7",
    type: 'core'
  },
  {
    id: 8,
    title: "Analysing Images in Python",
    status: "coming-soon",
    dataset: { emoji: "🔬", field: "Cell biology", source: "Fluorescence microscopy — Hochegger Lab, Sussex" },
    topics: [
      "An image is a 2-D array",
      "Cropping, indexing and displaying",
      "Otsu thresholding: finding the nuclei",
      "Counting, measuring, and a cell-cycle profile"
    ],
    labsUrl: "/labs/8",
    type: 'core'
  }
]

// For backward compatibility
export const coreSessionsData: Lecture[] = [...pythonBasicsData, ...pythonDataData]

export const lectures: Lecture[] = coreSessionsData