import { LectureData, Slide } from './types'
import {
  Slide00Welcome,
  Slide01ProjectIntro,
  Slide02TheProblem,
  Slide03GeneDependencyCorrelation,
  Slide04ATRBiologicalContext,
  Slide05ProjectOverview,
  Slide06EDA,
  Slide07NaNHandling,
  Slide08GenomeWideCorrelation,
  Slide09CorrelationMethods,
  Slide10SciPyIntro,
  Slide11FDRConcept,
  Slide12FDRCorrection,
  Slide13VolcanoPlot,
  Slide14LinearRegression,
  Slide15SeabornRegplot,
  Slide16ValidationStrategy,
  Slide17VennDiagramConcept,
  Slide18PythonSets,
  Slide19MatplotlibVenn,
  //Slide20JaccardSimilarity,
  Slide21SummaryQuestions,
  Slide22NextSteps,
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
    title: "Course Summary & Today's Project",
    contentType: "center",
    component: Slide00Welcome
  },
  {
    title: "Statistical Analysis & Visualization",
    contentType: "center",
    component: Slide01ProjectIntro
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
    title: "End-to-End Analysis Workflow",
    contentType: "top",
    component: Slide05ProjectOverview
  },
  {
    title: "Exploratory Data Analysis & Missing Values",
    contentType: "top",
    component: Slide06EDA
  },
  {
    title: "NaN Handling: Threshold & Imputation Strategies",
    contentType: "top",
    component: Slide07NaNHandling
  },
  {
    title: "Genome-Wide Correlation: For Loops & DataFrames",
    contentType: "top",
    component: Slide08GenomeWideCorrelation
  },
  {
    title: "Correlation Methods: Pearson vs Spearman",
    contentType: "top",
    component: Slide09CorrelationMethods
  },
  {
    title: "Introducing SciPy: Scientific Python",
    contentType: "top",
    component: Slide10SciPyIntro
  },
  {
    title: "The Multiple Testing Problem & FDR",
    contentType: "top",
    component: Slide11FDRConcept
  },
  {
    title: "Applying FDR Correction with SciPy",
    contentType: "top",
    component: Slide12FDRCorrection
  },
  {
    title: "Visualizing Results: Volcano Plots",
    contentType: "top",
    component: Slide13VolcanoPlot
  },
  {
    title: "Linear Regression: ATR vs SLU7",
    contentType: "top",
    component: Slide14LinearRegression
  },
  {
    title: "Creating Regression Plots with Seaborn",
    contentType: "top",
    component: Slide15SeabornRegplot
  },
  {
    title: "Validation Strategy: Network Overlap",
    contentType: "top",
    component: Slide16ValidationStrategy
  },
  {
    title: "Venn Diagrams: Visualizing Overlap",
    contentType: "top",
    component: Slide17VennDiagramConcept
  },
  {
    title: "Python Sets: The Math Behind Venn Diagrams",
    contentType: "top",
    component: Slide18PythonSets
  },
  {
    title: "Creating Venn Diagrams with matplotlib-venn",
    contentType: "top",
    component: Slide19MatplotlibVenn
  },
  // {
  //   title: "Measuring Overlap: Jaccard Similarity",
  //   contentType: "top",
  //   component: Slide20JaccardSimilarity
  // },
  {
    title: "Summary & Open Questions",
    contentType: "top",
    component: Slide21SummaryQuestions
  },
  {
    title: "Next Steps with Python",
    contentType: "top",
    component: Slide22NextSteps
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

export const lecture5Data: LectureData = {
  id: '5',
  title: 'Advanced Statistical Analysis',
  slides
}