export interface Lecture {
  id: number
  title: string
  status: 'available' | 'coming-soon' | 'under-construction'
  topics: string[]
  slideUrl?: string
  notebookUrl?: string
  videoUrl?: string
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
      "For loops",
      "Lists and file I/O"
    ],
    slideUrl: "/lectures/1",
    notebookUrl: "/notebooks/lecture-1",
    videoUrl: "https://www.youtube.com/playlist?list=PLYTU_Kb0BRDIjqcvTBfBkuWq6xEi6Wie2",
    type: 'core'
  },
  {
    id: 2,
    title: "Analysing DNA",
    status: "available",
    topics: [
      "String operations",
      "Sequence file formats",
      "File I/O",
      "Biopython"
    ],
    slideUrl: "/lectures/2",
    notebookUrl: "/notebooks/lecture-2",
    videoUrl: "https://www.youtube.com/playlist?list=PLYTU_Kb0BRDJB7Z6tLVHbJUtMcVcmev3-",
    type: 'core'
  },
  {
    id: 3,
    title: "Linear Regression of Cancer Data",
    status: "available",
    topics: [
      "Object-oriented programming",
      "Pandas DataFrames",
      "Cancer dependency analysis"
    ],
    slideUrl: "/lectures/3",
    notebookUrl: "/notebooks/lecture-3",
    type: 'core'
  },
  {
    id: 4,
    title: "Statistical Analysis & Data Visualization",
    status: "under-construction",
    topics: [
      "Linear regression analysis",
      "Matplotlib & Seaborn visualization",
      "Cancer gene correlation analysis",
      "Publication-ready figures"
    ],
    slideUrl: "/lectures/4",
    type: 'core'
  },
  {
    id: 5,
    title: "Analysing Image Data & Statistics",
    status: "coming-soon",
    topics: [
      "C-Python and vectorisation",
      "Scientific computing (NumPy, SciPy)",
      "Statistical analysis"
    ],
    slideUrl: "/lectures/5",
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