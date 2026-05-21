import { LectureData, Slide } from './types'
import {
  Slide01Recap,
  Slide02Vectorisation,
  Slide03GeneExpressionData,
  Slide04IntroEDA,
  Slide05DataInspection,
  Slide06GroupByBasics,
  Slide07TidyData,
  Slide08GroupByGeneExpression,
  Slide09DataVisualization,
  Slide10DataTypes,
  Slide11PlotTypes,
  Slide12Aesthetics,
  Slide13FurtherReading,
  Slide14MatplotlibIntro,
  Slide15HistogramsDistribution,
  Slide16Subplots,
  Slide17Scatterplots,
  Slide18Boxplots,
  Slide19Summary,
} from './lecture4'

interface SlideDefinition {
  title: string
  contentType: 'center' | 'top' | 'split'
  component: React.ComponentType
  notes?: string
  duration?: number
}

const slideDefinitions: SlideDefinition[] = [
  {
    title: "Recap: Lecture 3 - Analysing DepMap Data",
    contentType: "top",
    component: Slide01Recap
  },
  {
    title: "Pandas Superpowers: NumPy & Vectorisation",
    contentType: "top",
    component: Slide02Vectorisation
  },
  {
    title: "Our Dataset: DepMap Gene Expression",
    contentType: "top",
    component: Slide03GeneExpressionData
  },
  {
    title: "Introduction to Exploratory Data Analysis",
    contentType: "top",
    component: Slide04IntroEDA
  },
  {
    title: "Data Inspection: Quality Control Checks",
    contentType: "top",
    component: Slide05DataInspection
  },
  {
    title: "The Power of GroupBy",
    contentType: "top",
    component: Slide06GroupByBasics
  },
  {
    title: "Tidy Data Format",
    contentType: "top",
    component: Slide07TidyData
  },
  {
    title: "GroupBy with Gene Expression Data",
    contentType: "top",
    component: Slide08GroupByGeneExpression
  },
  {
    title: "The Power of Data Visualization",
    contentType: "top",
    component: Slide09DataVisualization
  },
  {
    title: "Understanding Data Types",
    contentType: "top",
    component: Slide10DataTypes
  },
  {
    title: "Essential Plot Types",
    contentType: "top",
    component: Slide11PlotTypes
  },
  {
    title: "Visual Aesthetics",
    contentType: "top",
    component: Slide12Aesthetics
  },
  {
    title: "Further Reading",
    contentType: "top",
    component: Slide13FurtherReading
  },
  {
    title: "Introduction to Matplotlib",
    contentType: "top",
    component: Slide14MatplotlibIntro
  },
  {
    title: "Understanding Data Distribution with Histograms",
    contentType: "top",
    component: Slide15HistogramsDistribution
  },
  {
    title: "Creating Subplots for Comparisons",
    contentType: "top",
    component: Slide16Subplots
  },
  {
    title: "Exploring Relationships with Scatter Plots",
    contentType: "top",
    component: Slide17Scatterplots
  },
  {
    title: "Comparing Groups with Box Plots",
    contentType: "top",
    component: Slide18Boxplots
  },
  {
    title: "Lecture 4 Summary: EDA & Visualization",
    contentType: "top",
    component: Slide19Summary
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

export const lecture4Data: LectureData = {
  id: '4',
  title: 'Explorative Data Analysis',
  slides
}
