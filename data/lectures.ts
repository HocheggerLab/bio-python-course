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
    title: "Analysing DepMap Data",
    status: "available",
    topics: [
      "Object-oriented programming",
      "Pandas DataFrames",
      "Cancer dependency analysis"
    ],
    slideUrl: "/lectures/3",
    notebookUrl: "/notebooks/lecture-3",
    videoUrl: "https://www.youtube.com/playlist?list=PLYTU_Kb0BRDKScs5gRfKyLdvnc-mveSCB",
    type: 'core'
  },
  {
    id: 6,
    title: "Explorative Data Analysis",
    status: "available",
    topics: [
      "Vectorisation",
      "Explorative data analysis techniques",
      "Visualization principles",
      "Matplotlib for scientific plots"
    ],
    slideUrl: "/lectures/4",
    notebookUrl: "/notebooks/lecture-4",
    videoUrl: "https://www.youtube.com/watch?v=rIGN8RcXHP8&list=PLYTU_Kb0BRDLyGEG_kbOjL8e7hgkxEBWD&index=11",
    type: 'core'
  },
  {
    id: 7,
    title: "End to End Data Mining Project",
    status: "available",
    topics: [
      "Linear regression analysis",
      "Seaborn for publication-ready plots",
      "Statistics and SciPy",
      "Exploring new packages on PyPI"
    ],
    slideUrl: "/lectures/5",
    notebookUrl: "/notebooks/lecture-5",
    videoUrl: "https://www.youtube.com/playlist?list=PLYTU_Kb0BRDI4iMytSaNMFZL64K2jm9uK",
    type: 'core'
  },
  {
    id: 8,
    title: "LLMs and Agentic AI in Biology",
    status: "available",
    topics: [
      "Working with LLMs for biology",
      "Automating literature searches",
      "Text mining PubMed abstracts",
      "Building research assistants"
    ],
    slideUrl: "/lectures/8",
    type: 'core'
  }
]

// For backward compatibility
export const coreSessionsData: Lecture[] = [...pythonBasicsData, ...pythonDataData]

export const lectures: Lecture[] = coreSessionsData