import { LectureData, Slide } from './types'
import {
  WelcomeSlide,
  TeachingPhilosophySlide,
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
  Step2IntroSlide,
  Step2CodeSlide,
  Step3IntroSlide,
  Step3CodeSlide,
  Step4IntroSlide,
  Step4CodeSlide,
  FinalResultSlide,
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
    title: "How to Teach (and Learn) Python",
    contentType: "center",
    component: TeachingPhilosophySlide
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
  },
  {
    title: "Scaling with Loops",
    contentType: "center",
    component: Step2IntroSlide
  },
  {
    title: "Loops: The Code",
    contentType: "center",
    component: Step2CodeSlide
  },
  {
    title: "Processing Many Values at Once",
    contentType: "center",
    component: Step3IntroSlide
  },
  {
    title: "Lists & For Loops: The Code",
    contentType: "center",
    component: Step3CodeSlide
  },
  {
    title: "Working with Real Data Files",
    contentType: "center",
    component: Step4IntroSlide
  },
  {
    title: "File I/O: The Code",
    contentType: "center",
    component: Step4CodeSlide
  },
  {
    title: "The Complete Solution",
    contentType: "center",
    component: FinalResultSlide
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
  title: 'Lab Calculations: Intro to Python, Types, Assignment & For Loops',
  slides
}