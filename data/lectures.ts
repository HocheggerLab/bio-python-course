export interface Lecture {
  id: number
  title: string
  status: 'available' | 'coming-soon' | 'under-construction'
  topics: string[]
  slideUrl?: string
  notebookUrl?: string
  type?: 'core' | 'specialization'
}

export const coreSessionsData: Lecture[] = [
  {
    id: 1,
    title: "Lab Calculations",
    status: "available",
    topics: [
      "Introduction to Python",
      "Types and assignment",
      "Lists, For Loops and Functions",
      "Error Handling"
    ],
    slideUrl: "/lectures/1",
    notebookUrl: "/notebooks/lecture-1",
    type: 'core'
  },
  {
    id: 2,
    title: "Analysing DNA",
    status: "under-construction",
    topics: [
      "String operations, dictionaries and conditionals",
      "Sequence file formats",
      "File I/O",
      "Biopython"
    ],
    slideUrl: "/lectures/2",
    type: 'core'
  },
  {
    id: 3,
    title: "Analysing Data Sets & P-values",
    status: "coming-soon",
    topics: [
      "C-Python and vectorisation",
      "Scientific computing",
      "NumPy and SciPy",
      "Statistical analysis"
    ],
    slideUrl: "/lectures/3",
    type: 'core'
  },
  {
    id: 4,
    title: "Linear Regression of Cancer Data",
    status: "coming-soon",
    topics: [
      "Object-oriented programming",
      "Pandas DataFrames",
      "Cancer dependency analysis",
      "Regression models"
    ],
    type: 'core'
  },
  {
    id: 5,
    title: "Visualising Linear Regression Data",
    status: "coming-soon",
    topics: [
      "Matplotlib fundamentals",
      "Seaborn for statistical plots",
      "Publication-ready figures",
      "Interactive visualizations"
    ],
    type: 'core'
  }
]

export const specializationTracks: Lecture[] = [
  {
    id: 6,
    title: "Image Analysis Track",
    status: "coming-soon",
    topics: [
      "NumPy and scikit-image basics",
      "Microscopy image processing",
      "Cell segmentation and tracking",
      "Batch analysis pipelines"
    ],
    type: 'specialization'
  },
  {
    id: 7,
    title: "Data Analysis & Visualization Track",
    status: "coming-soon",
    topics: [
      "Pandas for biological data",
      "Statistical analysis with SciPy",
      "Creating publication-ready figures",
      "Analyzing experimental results"
    ],
    type: 'specialization'
  },
  {
    id: 8,
    title: "Text Analysis & AI Track",
    status: "coming-soon",
    topics: [
      "Working with LLMs for biology",
      "Automating literature searches",
      "Text mining PubMed abstracts",
      "Building research assistants"
    ],
    type: 'specialization'
  }
]

// For backward compatibility
export const lectures: Lecture[] = [...coreSessionsData, ...specializationTracks]