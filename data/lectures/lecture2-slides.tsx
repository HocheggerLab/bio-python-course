import { LectureData, Slide } from './types'
import {
  Slide01Welcome,
  Slide02TodaysGoals,
  Slide03DarrensProblem,
  Slide04ORFExplainer,
  Slide05ORFProblemBreakdown,
  Slide06FinalCode,
  Slide07Part1Title,
  Slide08ReviewDataTypes,
  Slide09DNAStringOperationSlicing,
  Slide10FindingATG,
  Slide11Part2Title,
  Slide12ConditionalsBasics,
  Slide13FindATGFunction,
  Slide14Part3Title,
  Slide15DictionariesBasics,
  Slide16TwoCoreFunctions,
  Slide17FinalCodeError,
  Slide18ErrorMessages,
  Slide19DefensiveProgramming,
  Slide20FASTAFileFormats,
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
    title: "Welcome",
    contentType: "center",
    component: Slide01Welcome
  },
  {
    title: "Today's Goals",
    contentType: "center",
    component: Slide02TodaysGoals
  },
  {
    title: "Meet Darren",
    contentType: "center",
    component: Slide03DarrensProblem
  },
  {
    title: "Open Reading Frames",
    contentType: "center",
    component: Slide04ORFExplainer
  },
  {
    title: "Breaking Down the Problem",
    contentType: "center",
    component: Slide05ORFProblemBreakdown
  },
  {
    title: "The Complete Solution",
    contentType: "center",
    component: Slide06FinalCode
  },
  {
    title: "String Fundamentals",
    contentType: "center",
    component: Slide07Part1Title
  },
  {
    title: "Data Types & Strings",
    contentType: "center",
    component: Slide08ReviewDataTypes
  },
  {
    title: "String Slicing",
    contentType: "center",
    component: Slide09DNAStringOperationSlicing
  },
  {
    title: "Finding ATGs",
    contentType: "center",
    component: Slide10FindingATG
  },
  {
    title: "Python Conditionals",
    contentType: "center",
    component: Slide11Part2Title
  },
  {
    title: "Conditionals Basics",
    contentType: "center",
    component: Slide12ConditionalsBasics
  },
  {
    title: "Building find_atg()",
    contentType: "center",
    component: Slide13FindATGFunction
  },
  {
    title: "Python Dictionaries",
    contentType: "center",
    component: Slide14Part3Title
  },
  {
    title: "Dictionaries Basics",
    contentType: "center",
    component: Slide15DictionariesBasics
  },
  {
    title: "Two Core Functions",
    contentType: "center",
    component: Slide16TwoCoreFunctions
  },
  {
    title: "Debugging & Error Handling",
    contentType: "center",
    component: Slide17FinalCodeError
  },
  {
    title: "Understanding Error Messages",
    contentType: "center",
    component: Slide18ErrorMessages
  },
  {
    title: "Defensive Programming",
    contentType: "center",
    component: Slide19DefensiveProgramming
  },
  {
    title: "DNA Sequence File Formats: FASTA",
    contentType: "top",
    component: Slide20FASTAFileFormats
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

export const lecture2Data: LectureData = {
  id: '2',
  title: 'Analysing DNA: String Operations, Sequence Formats & Biopython',
  slides
}