export interface Lecture {
  id: number
  title: string
  status: 'available' | 'coming-soon'
  topics: string[]
  slideUrl?: string
  notebookUrl?: string
}

export const lectures: Lecture[] = [
  {
    id: 1,
    title: "Introduction to Python",
    status: "available",
    topics: [
      "Setting up Google Colab",
      "Variables and data types",
      "Basic operations",
      "Your first bio program"
    ],
    slideUrl: "/lectures/1",
    notebookUrl: "/notebooks/lecture-1"
  },
  {
    id: 2,
    title: "Strings & DNA Analysis",
    status: "available",
    topics: [
      "String methods for sequences",
      "DNA/RNA manipulation",
      "Pattern finding",
      "Real sequence analysis"
    ],
    slideUrl: "/lectures/2",
    notebookUrl: "/lectures/lecture2/notebook.ipynb"
  },
  {
    id: 3,
    title: "Functions & Dictionaries",
    status: "coming-soon",
    topics: [
      "Creating reusable functions",
      "Biological dictionaries",
      "Codon tables",
      "Translation tools"
    ]
  },
  {
    id: 4,
    title: "Lists & File I/O",
    status: "coming-soon",
    topics: [
      "Working with data lists",
      "Reading FASTA files",
      "Processing lab data",
      "Batch analysis"
    ]
  },
  {
    id: 5,
    title: "Data Analysis & Visualization",
    status: "coming-soon",
    topics: [
      "NumPy for bio data",
      "Pandas DataFrames",
      "Matplotlib plots",
      "Statistical analysis"
    ]
  }
]