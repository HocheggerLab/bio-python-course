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
  type?: 'core' | 'specialization' | 'bonus'
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
    title: "Control Flow: Teaching a Program to Run Itself",
    status: "available",
    topics: [
      "for loops and the accumulator pattern",
      "if / elif / else inside a loop",
      "Looping through a dictionary with .items()",
      "range() and translating a gene"
    ],
    slideUrl: "/lectures/3",
    labsUrl: "/labs/3",
    type: 'core'
  },
  {
    id: 4,
    title: "Functions, Files and Error Handling",
    status: "available",
    topics: [
      "Defining functions and return values",
      "Scope, type hints and docstrings",
      "Reading and writing files",
      "try / except and raising errors"
    ],
    slideUrl: "/lectures/4",
    labsUrl: "/labs/4",
    type: 'core'
  },
]

export const pythonDataData: Lecture[] = [
  {
    id: 5,
    title: "Arrays — One Neuron, Many Trials",
    status: "available",
    dataset: { emoji: "🐭", field: "Neurobiology", source: "Whisker touch — Maravall Lab, Sussex" },
    topics: [
      "Classes and objects: attributes and methods",
      "Imports and the random module",
      "numpy arrays, vectorisation and the method menu",
      "Boolean filtering and np.where on a real neuron"
    ],
    slideUrl: "/lectures/5",
    labsUrl: "/labs/5",
    type: 'core'
  },
  {
    id: 6,
    title: "DataFrames — Who Pollinates Your Dinner?",
    status: "available",
    dataset: { emoji: "🐝", field: "Ecology", source: "Urban pollinator survey — Nicholls Lab, Sussex" },
    topics: [
      "The DataFrame and the Series: two receptions",
      "Five steps from raw table to answer",
      "Masks, a new column and sort_values",
      "groupby — split, apply, combine"
    ],
    slideUrl: "/lectures/6",
    type: 'core'
  },
  {
    id: 7,
    title: "Plotting — Making Data Visible",
    status: "under-construction",
    dataset: { emoji: "🧬", field: "Cancer biology", source: "Cancer Dependency Map (DepMap)" },
    topics: [
      "How a figure shows data: kinds of data, kinds of plot",
      "fig and ax: building a basic figure",
      "Scatter, colour, box plots and two panels",
      "Who needs SOX10? A DepMap case"
    ],
    type: 'core'
  },
  {
    id: 8,
    title: "Exploratory Data Analysis and Statistics",
    status: "under-construction",
    topics: [
      "Look before you test: distributions and summaries",
      "Comparing two groups: box plot, median difference",
      "The Mann–Whitney test and what a p-value means",
      "Many tests, many chances: multiple testing"
    ],
    type: 'core'
  }
]

// Bonus sessions, after week 11 — not part of the assessed course.
export const bonusData: Lecture[] = [
  {
    id: 9,
    title: "Analysing Images in Python",
    status: "under-construction",
    dataset: { emoji: "🔬", field: "Cell biology", source: "Fluorescence microscopy — Hochegger Lab, Sussex" },
    topics: [
      "An image is a 2-D array",
      "Cropping, indexing and displaying",
      "Otsu thresholding: finding the nuclei",
      "Counting, measuring, and a cell-cycle profile"
    ],
    type: 'bonus'
  },
  {
    id: 10,
    title: "Coding with Agentic AI",
    status: "coming-soon",
    topics: [
      "What a coding agent is, and what it does on your machine",
      "Briefing an agent: context, scope and a clear goal",
      "Reviewing what it wrote: tests, diffs and git",
      "When to use one, and when to write it yourself"
    ],
    type: 'bonus'
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
