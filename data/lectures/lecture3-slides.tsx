import { LectureData, Slide } from './types'
import { 
  Slide01Recap,
  Slide02TheProblem,
  Slide03TodaysGoals,
  Slide04Part1Title,
  Slide05LaundryAnalogy,
  Slide06PackageTypes,
  Slide07RandomExample,
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