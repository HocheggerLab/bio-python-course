import { LectureData, Slide } from './types'
import {
  Slide01Welcome,
  Slide02HowToLearnPython,
  Slide03AIAndLLMs,
  Slide04WhoUsesPython,
  Slide05PythonStory,
  Slide06PythonOrganisation,
  Slide07ProgrammingParadigms,
  Slide08LanguageComparison,
  Slide09CourseStructure,
  Slide10WhatWellBuild,
  Slide11ReadyToStart,
  Slide12TheProblem,
  Slide13TheSolution,
  Slide14BreakingDownProblems,
  Slide15CompleteCode,
  Slide16Step1Code,
  Slide17GoogleColab,
  Slide18VariablesAssignment,
  Slide19DataTypes,
  Slide20PrintingFStrings,
  Slide21AnalyzingManyValues,
  Slide22Lists,
  Slide23ForLoops,
  Slide24CreatingReusableFunctions,
  Slide25Functions,
  Slide26FunctionParameters,
  Slide27CompleteCodeAgain,
  Slide28Lecture1Summary,
  Slide29NextSteps,
  Slide30FurtherResources
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
    component: Slide01Welcome
  },
  {
    title: "How to Teach (and Learn) Python",
    contentType: "center",
    component: Slide02HowToLearnPython
  },
  {
    title: "AI & LLMs: A Double-Edged Sword",
    contentType: "center",
    component: Slide03AIAndLLMs
  },
  {
    title: "Who Uses Python?",
    contentType: "top",
    component: Slide04WhoUsesPython
  },
  {
    title: "The Story of Python",
    contentType: "center",
    component: Slide05PythonStory
  },
  {
    title: "The Python Organisation",
    contentType: "top",
    component: Slide06PythonOrganisation
  },
  {
    title: "Programming Paradigms",
    contentType: "center",
    component: Slide07ProgrammingParadigms
  },
  {
    title: "Language Comparison",
    contentType: "center",
    component: Slide08LanguageComparison
  },
  {
    title: "Course Structure",
    contentType: "center",
    component: Slide09CourseStructure
  },
  {
    title: "What We'll Build Together",
    contentType: "center",
    component: Slide10WhatWellBuild
  },
  {
    title: "Ready to Start Coding?",
    contentType: "center",
    component: Slide11ReadyToStart
  },
  {
    title: "The Problem",
    contentType: "center",
    component: Slide12TheProblem
  },
  {
    title: "The Solution: Code Planning",
    contentType: "center",
    component: Slide13TheSolution
  },
  {
    title: "Breaking Down Problems",
    contentType: "center",
    component: Slide14BreakingDownProblems
  },
  {
    title: "The Complete Solution",
    contentType: "center",
    component: Slide15CompleteCode
  },
  {
    title: "Step 1: The Code",
    contentType: "center",
    component: Slide16Step1Code
  },
  {
    title: "Google Colab: Your Python Laboratory",
    contentType: "center",
    component: Slide17GoogleColab
  },
  {
    title: "Variables & Assignment",
    contentType: "center", 
    component: Slide18VariablesAssignment
  },
  {
    title: "Data Types",
    contentType: "center",
    component: Slide19DataTypes
  },
  {
    title: "Printing & F-Strings",
    contentType: "center",
    component: Slide20PrintingFStrings
  },
  {
    title: "Analyzing Many Values at Once",
    contentType: "center",
    component: Slide21AnalyzingManyValues
  },
  {
    title: "Lists - Storing Multiple Values",
    contentType: "center",
    component: Slide22Lists
  },
  {
    title: "For Loops - Processing Each Item",
    contentType: "center",
    component: Slide23ForLoops
  },
  {
    title: "Creating Reusable Functions",
    contentType: "center",
    component: Slide24CreatingReusableFunctions
  },
  {
    title: "Functions - Packaging Your Code",
    contentType: "center",
    component: Slide25Functions
  },
  {
    title: "Function Parameters & Arguments",
    contentType: "center",
    component: Slide26FunctionParameters
  },
  {
    title: "The Complete Solution",
    contentType: "center",
    component: Slide27CompleteCodeAgain
  },
  {
    title: "Lecture 1 Summary",
    contentType: "center",
    component: Slide28Lecture1Summary
  },
  {
    title: "Next Steps",
    contentType: "center",
    component: Slide29NextSteps
  },
  {
    title: "Further Resources",
    contentType: "center",
    component: Slide30FurtherResources
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