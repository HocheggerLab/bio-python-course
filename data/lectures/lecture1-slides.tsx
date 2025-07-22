import { LectureData, Slide } from './types'
import {
  WelcomeSlide,
  AILLMSlide,
  WhoUsesPythonSlide,
  PythonStorySlide,
  PythonOrganisationSlide,
  ProgrammingParadigmsSlide,
  LanguageComparisonSlide,
  CourseStructureSlide,
  WhatWellBuildSlide,
  TheProblemSlide,
  TheSolutionSlide,
  BreakingDownProblemsSlide,
  Step1CodeSlide,
  ReadyToStartSlide
} from './lecture1'

interface SlideDefinition {
  title: string
  contentType: 'center' | 'top' | 'split'
  component: React.ComponentType
  notes?: string
  duration?: number
}

const slideDefinitions: SlideDefinition[] = [
  {
    title: "Welcome",
    contentType: "center",
    component: WelcomeSlide
  },
  {
    title: "AI & LLMs: A Double-Edged Sword",
    contentType: "center",
    component: AILLMSlide
  },
  {
    title: "Who Uses Python?",
    contentType: "top",
    component: WhoUsesPythonSlide
  },
  {
    title: "The Story of Python",
    contentType: "center",
    component: PythonStorySlide
  },
  {
    title: "The Python Organisation",
    contentType: "top",
    component: PythonOrganisationSlide
  },
  {
    title: "Programming Paradigms",
    contentType: "center",
    component: ProgrammingParadigmsSlide
  },
  {
    title: "Language Comparison",
    contentType: "center",
    component: LanguageComparisonSlide
  },
  {
    title: "Course Structure",
    contentType: "center",
    component: CourseStructureSlide
  },
  {
    title: "What We'll Build Together",
    contentType: "center",
    component: WhatWellBuildSlide
  },
  {
    title: "Ready to Start Coding?",
    contentType: "center",
    component: ReadyToStartSlide
  },
  {
    title: "The Problem",
    contentType: "center",
    component: TheProblemSlide
  },
  {
    title: "The Solution: Code Planning",
    contentType: "center",
    component: TheSolutionSlide
  },
  {
    title: "Breaking Down Problems",
    contentType: "center",
    component: BreakingDownProblemsSlide
  },
  {
    title: "Step 1: The Code",
    contentType: "center",
    component: Step1CodeSlide
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

export const lecture1Data: LectureData = {
  id: '1',
  title: 'Introduction to Python for Biologists',
  slides
}