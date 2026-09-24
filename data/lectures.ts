import { showUnpublishedSessions } from '@/lib/visibility'

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
    title: "From One Sequence to Many: Lists, Strings & Maps",
    status: "available",
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
    type: 'core'
  },
  {
    id: 7,
    title: "Plotting and Exploratory Data Analysis",
    status: "under-construction",
    dataset: { emoji: "🧬", field: "Cancer biology", source: "Cancer Dependency Map (DepMap)" },
    topics: [
      "matplotlib and seaborn",
      "Distributions, box plots and small multiples",
      "Scatter plots, correlation and statistics",
      "Building a publication-ready figure"
    ],
    type: 'core'
  },
  {
    id: 8,
    title: "Analysing Images in Python",
    status: "under-construction",
    dataset: { emoji: "🔬", field: "Cell biology", source: "Fluorescence microscopy — Hochegger Lab, Sussex" },
    topics: [
      "An image is a 2-D array",
      "Cropping, indexing and displaying",
      "Otsu thresholding: finding the nuclei",
      "Counting, measuring, and a cell-cycle profile"
    ],
    type: 'core'
  }
]

// For backward compatibility
export const coreSessionsData: Lecture[] = [...pythonBasicsData, ...pythonDataData]

export const lectures: Lecture[] = coreSessionsData
/**
 * Is this lecture's deck published?
 *
 * One source of truth for the nav, the cards and anything else that links
 * out. `status` alone is not enough: it only picks the badge, while a card
 * falls through to /under-construction when the url is absent. A deck counts
 * as published when both agree.
 *
 * Outside production every deck answers true, so a lecture being written is
 * reachable through the menu like any other. See lib/visibility.ts.
 */
export const isLecturePublished = (num: number): boolean =>
  showUnpublishedSessions ||
  coreSessionsData.some((l) => l.id === num && l.status === 'available' && !!l.slideUrl)
