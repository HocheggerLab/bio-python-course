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
  CompleteCodeSlide,
  Step1CodeSlide,
  Step1Variables,
  Step1Datatypes,
  Step1PrintingFStrings,
  Step2IntroSlide,
  Step2Lists,
  Step2ForLoops,
  Step2CodeSlide,
  Step3IntroSlide,
  Step3Functions,
  Step3Parameters,
  Step3CodeSlide,
  Step4IntroSlide,
  Step4CodeSlide,
  FinalResultSlide,
  GoogleColabSlide,
  ReadyToStartSlide,
  Lecture1SummarySlide,
  NextStepsSlide,
  FurtherResourcesSlide
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
    title: "The Complete Solution",
    contentType: "center",
    component: CompleteCodeSlide
  },
  {
    title: "Step 1: The Code",
    contentType: "center",
    component: Step1CodeSlide
  },
  {
    title: "Google Colab: Your Python Laboratory",
    contentType: "center",
    component: GoogleColabSlide
  },
  {
    title: "Variables & Assignment",
    contentType: "center", 
    component: Step1Variables
  },
  {
    title: "Data Types",
    contentType: "center",
    component: Step1Datatypes
  },
  {
    title: "Printing & F-Strings",
    contentType: "center",
    component: Step1PrintingFStrings
  },
  {
    title: "Analyzing Many Values at Once",
    contentType: "center",
    component: Step2IntroSlide
  },
  {
    title: "Lists - Storing Multiple Values",
    contentType: "center",
    component: Step2Lists
  },
  {
    title: "For Loops - Processing Each Item",
    contentType: "center",
    component: Step2ForLoops
  },
  // {
  //   title: "Step 2: Process Many Concentrations",
  //   contentType: "center",
  //   component: Step2CodeSlide
  // },
  {
    title: "Creating Reusable Functions",
    contentType: "center",
    component: Step3IntroSlide
  },
  {
    title: "Functions - Packaging Your Code",
    contentType: "center",
    component: Step3Functions
  },
  {
    title: "Function Parameters & Arguments",
    contentType: "center",
    component: Step3Parameters
  },
  {
    title: "The Complete Solution",
    contentType: "center",
    component: CompleteCodeSlide
  },
  {
    title: "Lecture 1 Summary",
    contentType: "center",
    component: Lecture1SummarySlide
  },
  {
    title: "Next Steps",
    contentType: "center",
    component: NextStepsSlide
  },
  {
    title: "Further Resources",
    contentType: "center",
    component: FurtherResourcesSlide
  },
  
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