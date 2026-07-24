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
// Block 1 — Variables, print, built-ins, errors
import { Slide14Variables } from './Slide14Variables'
import { Slide15NamingVariables } from './Slide15NamingVariables'
import { Slide16Print } from './Slide16Print'
import { Slide17FStrings } from './Slide17FStrings'
import { Slide18BuiltinFunctions } from './Slide18BuiltinFunctions'
import { Slide19Errors } from './Slide19Errors'
import { Slide20CommonErrors } from './Slide20CommonErrors'
import { Slide21TIYFixErrors } from './Slide21TIYFixErrors'
// Block 2 — Data types, operators, GC calculator
import { Slide22DataTypes } from './Slide22DataTypes'
import { Slide23TypeFunction } from './Slide23TypeFunction'
import { Slide24Operators } from './Slide24Operators'
import { Slide25Division } from './Slide25Division'
import { Slide26CountMethod } from './Slide26CountMethod'
import { Slide27FinalDemo } from './Slide27FinalDemo'
import { Slide28TIYSpikeTrain } from './Slide28TIYSpikeTrain'
import { Slide29Recap } from './Slide29Recap'
import { Slide30Outlook } from './Slide30Outlook'

export const lecture1Data: LectureData = {
  id: 'lecture-1',
  title: 'Data Types, Variables and Basic Operations',
  slides: [
    // ── Intro ──────────────────────────────────────────────
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
    // ── Block 1: Variables · print · built-ins · errors ────
    { id: 14, title: 'Variables',                       contentType: 'top',    content: <Slide14Variables /> },
    { id: 15, title: 'Naming Variables',                contentType: 'top',    content: <Slide15NamingVariables /> },
    { id: 16, title: 'print()',                         contentType: 'top',    content: <Slide16Print /> },
    { id: 17, title: 'f-strings',                       contentType: 'top',    content: <Slide17FStrings /> },
    { id: 18, title: 'Built-in Functions',              contentType: 'top',    content: <Slide18BuiltinFunctions /> },
    { id: 19, title: 'Errors Are Normal',               contentType: 'top',    content: <Slide19Errors /> },
    { id: 20, title: 'Common Errors',                   contentType: 'top',    content: <Slide20CommonErrors /> },
    { id: 21, title: 'TIY — Fix the errors',            contentType: 'top',    content: <Slide21TIYFixErrors /> },
    // ── Block 2: Data types · operators · GC calculator ────
    { id: 22, title: 'The Four Data Types',             contentType: 'top',    content: <Slide22DataTypes /> },
    { id: 23, title: 'type()',                          contentType: 'top',    content: <Slide23TypeFunction /> },
    { id: 24, title: 'Arithmetic Operators',            contentType: 'top',    content: <Slide24Operators /> },
    { id: 25, title: 'Division & Decimals',             contentType: 'top',    content: <Slide25Division /> },
    { id: 26, title: 'Counting Characters — .count()',  contentType: 'top',    content: <Slide26CountMethod /> },
    { id: 27, title: "Demo — Claudia's first report",   contentType: 'top',    content: <Slide27FinalDemo /> },
    { id: 28, title: 'TIY — Spike train',               contentType: 'top',    content: <Slide28TIYSpikeTrain /> },
    { id: 29, title: 'Recap',                           contentType: 'top',    content: <Slide29Recap /> },
    { id: 30, title: "What's Next",                     contentType: 'top',    content: <Slide30Outlook /> },
  ],
}
