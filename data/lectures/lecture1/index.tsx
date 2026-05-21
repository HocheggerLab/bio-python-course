import { LectureData } from '@/data/lectures/types'
import { Slide01CourseProgramme } from './Slide01CourseProgramme'
import { Slide02HowCourseWorks } from './Slide02HowCourseWorks'
import { Slide03Assessment } from './Slide03Assessment'
import { Slide04Resources } from './Slide04Resources'
import { Slide05HowToLearn } from './Slide05HowToLearn'
import { Slide06ResponsibleAI } from './Slide06ResponsibleAI'
import { Slide07WhyProgramming } from './Slide07WhyProgramming'
import { Slide08WhyPython } from './Slide08WhyPython'
import { Slide08aStoryOfPython } from './Slide08aStoryOfPython'
import { Slide09Roadmap } from './Slide09Roadmap'
import { Slide09bRoadmap2 } from './Slide09bRoadmap2'
import { Slide10TodaysGoal } from './Slide10TodaysGoal'
import { Slide11HowWeWork } from './Slide11HowWeWork'
import { Slide14Variables } from './Slide14Variables'
import { Slide15PrintFStrings } from './Slide15PrintFStrings'
import { Slide16BuiltinFunctions } from './Slide16BuiltinFunctions'
import { Slide17TIYAssign } from './Slide17TIYAssign'
import { Slide18TIYSwap } from './Slide18TIYSwap'
import { Slide19DataTypes } from './Slide19DataTypes'
import { Slide20Booleans } from './Slide20Booleans'
import { Slide21TIYPredictType } from './Slide21TIYPredictType'
import { Slide22IntegerArithmetic } from './Slide22IntegerArithmetic'
import { Slide23TIYCodonArithmetic } from './Slide23TIYCodonArithmetic'
import { Slide24FloatArithmetic } from './Slide24FloatArithmetic'
import { Slide25TIYGCFraction } from './Slide25TIYGCFraction'
import { Slide26CountMethod } from './Slide26CountMethod'
import { Slide27FinalDemo } from './Slide27FinalDemo'
import { Slide28TIYSpikeTrain } from './Slide28TIYSpikeTrain'
import { Slide29Recap } from './Slide29Recap'
import { Slide30Outlook } from './Slide30Outlook'

export const lecture1Data: LectureData = {
  id: 'lecture-1',
  title: 'Data Types, Variables and Basic Operations',
  slides: [
    { id: 1,  title: 'Course Programme',                contentType: 'center', content: <Slide01CourseProgramme /> },
    { id: 2,  title: 'How the Course Works',            contentType: 'top',    content: <Slide02HowCourseWorks /> },
    { id: 3,  title: 'Assessment & Exams',              contentType: 'center', content: <Slide03Assessment /> },
    { id: 4,  title: 'Your Main Resources',             contentType: 'top',    content: <Slide04Resources /> },
    { id: 5,  title: 'How to Learn Programming',        contentType: 'top',    content: <Slide05HowToLearn /> },
    { id: 6,  title: 'Using AI Responsibly',            contentType: 'top',    content: <Slide06ResponsibleAI /> },
    { id: 7,  title: 'Why Should I Learn Programming?', contentType: 'top',    content: <Slide07WhyProgramming /> },
    { id: 8,  title: 'Why Python?',                     contentType: 'top',    content: <Slide08WhyPython /> },
    { id: 9,  title: 'The Story of Python',             contentType: 'top',    content: <Slide08aStoryOfPython /> },
    { id: 10, title: "How We'll Work With Python",      contentType: 'top',    content: <Slide11HowWeWork /> },
    { id: 11, title: 'Our Roadmap',                     contentType: 'top',    content: <Slide09Roadmap /> },
    { id: 12, title: 'Roadmap — Data Science',          contentType: 'top',    content: <Slide09bRoadmap2 /> },
    { id: 13, title: "Session 1 — Today's Goal",        contentType: 'top',    content: <Slide10TodaysGoal /> },
    { id: 14, title: 'Variables',                       contentType: 'top',    content: <Slide14Variables /> },
    { id: 15, title: 'print() and f-strings',           contentType: 'top',    content: <Slide15PrintFStrings /> },
    { id: 16, title: 'Built-in Functions',              contentType: 'top',    content: <Slide16BuiltinFunctions /> },
    { id: 17, title: 'TIY — Assign your own',           contentType: 'top',    content: <Slide17TIYAssign /> },
    { id: 18, title: 'TIY — Swap two variables',        contentType: 'top',    content: <Slide18TIYSwap /> },
    { id: 19, title: 'Data Types',                      contentType: 'top',    content: <Slide19DataTypes /> },
    { id: 20, title: 'Booleans & Comparisons',          contentType: 'top',    content: <Slide20Booleans /> },
    { id: 21, title: 'TIY — Predict the type',          contentType: 'top',    content: <Slide21TIYPredictType /> },
    { id: 22, title: 'Integer Arithmetic',              contentType: 'top',    content: <Slide22IntegerArithmetic /> },
    { id: 23, title: 'TIY — Codon arithmetic',          contentType: 'top',    content: <Slide23TIYCodonArithmetic /> },
    { id: 24, title: 'Float Arithmetic',                contentType: 'top',    content: <Slide24FloatArithmetic /> },
    { id: 25, title: 'TIY — Compute GC fraction',       contentType: 'top',    content: <Slide25TIYGCFraction /> },
    { id: 26, title: 'Counting Characters — .count()',  contentType: 'top',    content: <Slide26CountMethod /> },
    { id: 27, title: "Demo — Claudia's first report",   contentType: 'top',    content: <Slide27FinalDemo /> },
    { id: 28, title: 'Test — Spike train',              contentType: 'top',    content: <Slide28TIYSpikeTrain /> },
    { id: 29, title: 'Recap',                           contentType: 'top',    content: <Slide29Recap /> },
    { id: 30, title: "What's Next",                     contentType: 'top',    content: <Slide30Outlook /> },
  ],
}
