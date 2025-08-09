export interface Lecture {
  id: number
  title: string
  status: 'available' | 'coming-soon' | 'under-construction'
  topics: string[]
  slideUrl?: string
  notebookUrl?: string
}

export const lectures: Lecture[] = [
  {
    id: 1,
    title: "Automate lab calculations",
    status: "available",
    topics: [
      "Setting up Google Colab",
      "Variables and data types",
      "Functions, Lists and Loops",
      "Your first bio program"
    ],
    slideUrl: "/lectures/1",
    notebookUrl: "/notebooks/lecture-1"
  },
  {
    id: 2,
    title: "Strings & DNA Analysis",
    status: "under-construction",
    topics: [
      "String methods for sequences",
      "Dictionaries and Conditionals",
      "Biopython",
      "Real sequence analysis"
    ],
    slideUrl: "/lectures/2"
  },
  {
    id: 3,
    title: "Image Analysis in Python",
    status: "coming-soon",
    topics: [
      "Numpy, Scikit-image",
      "Image segmentation",
      "Feature Extraction",
      "Batch analysis"
    ]
  },
  {
    id: 4,
    title: "Analyse Cancer Cell Dependencies",
    status: "coming-soon",
    topics: [
      "Object Oriented Programming",
      "Pandas, Matplotlib and Seaborn",
      "Linear Regression Analysis",
      "Plotting and Visualisation",
    ]
  },
  {
    id: 5,
    title: "Building a local AI agent to perform PubMed searches",
    status: "coming-soon",
    topics: [
      "Working with LLMs",
      "Understanding agentic AI",
      "Deploying a local model",
      "Automating PubMed searches and text analysis"
    ]
  }
]