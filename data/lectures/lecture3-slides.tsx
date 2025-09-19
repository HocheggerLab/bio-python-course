import { LectureData, Slide } from './types'
import { 
  Slide01Recap,
  Slide02TheProblem,
  Slide03TodaysGoals,
  Slide04Part1Title,
  Slide05LaundryAnalogy,
  Slide06PackageTypes,
  Slide07RandomExample,
  Slide08Part3Title,
  Slide09IntroClasses,
  Slide10ClassMethods,
  Slide11Part4Title,
  Slide12DataIntro,
  Slide13FirstPandasSteps,
  Slide14ResearchQuestion,
  Slide15FilteringData,
  Slide16Statistics,
  Slide17DataSorting,
} from './lecture3'

interface SlideDefinition {
  title: string
  contentType: 'center' | 'top' | 'split'
  component: React.ComponentType
  notes?: string
  duration?: number
}

const slideDefinitions: SlideDefinition[] = [
  {
    title: "Recap: Our Python Journey So Far",
    contentType: "center",
    component: Slide01Recap
  },
  {
    title: "Meet Sarah: Big Data Challenge",
    contentType: "center",
    component: Slide02TheProblem
  },
  {
    title: "Today's Learning Journey",
    contentType: "center",
    component: Slide03TodaysGoals
  },
  {
    title: "Part 1: Python Package Ecosystem",
    contentType: "center",
    component: Slide04Part1Title
  },
  {
    title: "Steve Jobs' Laundry Analogy",
    contentType: "center",
    component: Slide05LaundryAnalogy
  },
  {
    title: "Standard Library vs PyPI Packages",
    contentType: "center",
    component: Slide06PackageTypes
  },
  {
    title: "Standard Library Example: Random",
    contentType: "center",
    component: Slide07RandomExample
  },
  {
    title: "Part 3: Classes & Objects",
    contentType: "center",
    component: Slide08Part3Title
  },
  {
    title: "Classes: Storing Data",
    contentType: "top",
    component: Slide09IntroClasses
  },
  {
    title: "Classes: Adding Methods",
    contentType: "top",
    component: Slide10ClassMethods
  },
  {
    title: "Part 4: Enter Pandas",
    contentType: "center",
    component: Slide11Part4Title
  },
  {
    title: "Our Dataset: DepMap CRISPR",
    contentType: "top",
    component: Slide12DataIntro
  },
  {
    title: "First Steps: Loading & Inspecting Data",
    contentType: "top",
    component: Slide13FirstPandasSteps
  },
  {
    title: "Research Question: Essential Genes",
    contentType: "top",
    component: Slide14ResearchQuestion
  },
  {
    title: "Step 1: Filtering DataFrames",
    contentType: "top",
    component: Slide15FilteringData
  },
  {
    title: "Step 2: Calculating Statistics",
    contentType: "top",
    component: Slide16Statistics
  },
  {
    title: "Step 3: Sorting Data",
    contentType: "top",
    component: Slide17DataSorting
  },
  // More slides will be added here
]

const slides: Slide[] = slideDefinitions.map((def, index) => ({
  id: index + 1,
  title: def.title,
  contentType: def.contentType,
  content: <def.component />,
  ...(def.notes && { notes: def.notes }),
  ...(def.duration && { duration: def.duration })
}))

export const lecture3Data: LectureData = {
  id: '3',
  title: 'Linear Regression of Cancer Data: Pandas & Data Analysis',
  slides
}