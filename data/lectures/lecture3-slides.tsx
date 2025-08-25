import { LectureData, Slide } from './types'
import {
  WelcomeSlide,
  DevelopmentEnvironmentSlide,
  VSCodeSlide,
  UVPythonSlide,
  TerminalBasicsSlide,
  GitVersionControlSlide,
  ResourcesNextStepsSlide
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
    title: "Welcome to Lecture 2",
    contentType: "center",
    component: WelcomeSlide
  },
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
  }
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
  title: 'Strings, Conditionals & Dictionaries',
  slides
}