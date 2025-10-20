import { LectureData, Slide } from './types'
import {
  Slide00Welcome,
  Slide02TheProblem,
  Slide03GeneDependencyCorrelation,
  Slide04ATRBiologicalContext,
  Slide05PearsonCorrelationCode,
} from './lecture5'

interface SlideDefinition {
  title: string
  contentType: 'center' | 'top' | 'split'
  component: React.ComponentType
  notes?: string
  duration?: number
}

const slideDefinitions: SlideDefinition[] = [
  {
    title: "Welcome to Statistical Analysis & Visualization",
    contentType: "center",
    component: Slide00Welcome
  },
  {
    title: "The Next Challenge: Gene Correlation & Visualization",
    contentType: "center",
    component: Slide02TheProblem
  },
  {
    title: "Understanding Gene Dependency Correlation",
    contentType: "top",
    component: Slide03GeneDependencyCorrelation
  },
  {
    title: "Biological Context: Why Study ATR?",
    contentType: "top",
    component: Slide04ATRBiologicalContext
  },
  {
    title: "Calculating Pearson Correlation with Pandas",
    contentType: "top",
    component: Slide05PearsonCorrelationCode
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

export const lecture5Data: LectureData = {
  id: '5',
  title: 'Advanced Statistical Analysis',
  slides
}