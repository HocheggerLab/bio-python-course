import { LectureData, Slide } from './types'
import {
  WelcomeSlide,
  TodaysGoalSlide,
  DarrensProblemSlide,
  ORFExplainerSlide,
  ORFProblemBreakdownSlide,
  Part1TitleSlide,
  ReviewDataTypesSlide,
  DNAStringOperationSlideSlicing,
  FindingATGSlide,
  DevelopmentEnvironmentSlide,
  VSCodeSlide,
  UVPythonSlide,
  TerminalBasicsSlide,
  GitVersionControlSlide,
  ResourcesNextStepsSlide
} from './lecture2'

interface SlideDefinition {
  title: string
  contentType: 'center' | 'top' | 'split'
  component: React.ComponentType
  notes?: string
  duration?: number
}

const slideDefinitions: SlideDefinition[] = [
  {
    title: "Welcome to Lecture 2",
    contentType: "center",
    component: WelcomeSlide
  },
  {
    title: "Today's Goal",
    contentType: "center",
    component: TodaysGoalSlide
  },
  {
    title: "Meet Darren",
    contentType: "center",
    component: DarrensProblemSlide
  },
  {
    title: "Understanding ORFs",
    contentType: "center",
    component: ORFExplainerSlide
  },
  {
    title: "Breaking Down the ORF Problem",
    contentType: "center",
    component: ORFProblemBreakdownSlide
  },

  {
    title: "Part 1: String Fundamentals",
    contentType: "center",
    component: Part1TitleSlide
  },
  {
    title: "Review: Data Types & Strings",
    contentType: "center",
    component: ReviewDataTypesSlide
  },
  {
    title: "DNA String Slicing",
    contentType: "center",
    component: DNAStringOperationSlideSlicing
  },
  {
    title: "Finding ATGs: Loops + Slicing",
    contentType: "center",
    component: FindingATGSlide
  },
  // More DNA analysis slides will be added here
  
  // Programming environment preamble
  {
    title: "Beyond Google Colab",
    contentType: "center",
    component: DevelopmentEnvironmentSlide
  },
  {
    title: "VS Code: Your New Python Laboratory",
    contentType: "center",
    component: VSCodeSlide
  },
  {
    title: "UV Python: Modern Package Management",
    contentType: "center",
    component: UVPythonSlide
  },
  {
    title: "Terminal Essentials",
    contentType: "center",
    component: TerminalBasicsSlide
  },
  {
    title: "Git Version Control",
    contentType: "center",
    component: GitVersionControlSlide
  },
  {
    title: "Resources & Next Steps",
    contentType: "center",
    component: ResourcesNextStepsSlide
  },
  // DNA analysis content starts here
  
]

const slides: Slide[] = slideDefinitions.map((def, index) => ({
  id: index + 1,
  title: def.title,
  contentType: def.contentType,
  content: <def.component />,
  ...(def.notes && { notes: def.notes }),
  ...(def.duration && { duration: def.duration })
}))

export const lecture2Data: LectureData = {
  id: '2',
  title: 'Analysing DNA: String Operations, Sequence Formats & Biopython',
  slides
}