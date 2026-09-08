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
import { Slide09cCourseImprovements } from './Slide09cCourseImprovements'
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
// Closing poll block — sits before the recap, so an overrun eats the summary
// (which is on the website anyway) rather than the only feedback we get.
import { PollBlockOpener } from './PollBlockOpener'
import { PollQ1 } from './PollQ1'
import { PollQ1Results } from './PollQ1Results'
import { PollQ2 } from './PollQ2'
import { PollQ2Results } from './PollQ2Results'
import { PollQ3 } from './PollQ3'
import { PollQ3Results } from './PollQ3Results'
import { Slide29Recap } from './Slide29Recap'
import { Slide30Outlook } from './Slide30Outlook'

export const lecture1Data: LectureData = {
  id: 'lecture-1',
  title: 'Data Types, Variables and Basic Operations',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { id: 1,  title: 'Course Programme',                contentType: 'center', content: <Slide01CourseProgramme /> },
    { id: 2,  title: 'How the Course Works',            contentType: 'center',    content: <Slide02HowCourseWorks /> },
    { id: 4,  title: 'Assessment & Exams',              contentType: 'center', content: <Slide03Assessment /> },
    { id: 5,  title: 'Your Main Resources',             contentType: 'center',    content: <Slide04Resources /> },
    { id: 6,  title: 'How to Learn Programming',        contentType: 'center',    content: <Slide05HowToLearn /> },
    { id: 7,  title: 'Using AI Responsibly',            contentType: 'center', content: <Slide06ResponsibleAI /> },
    { id: 8,  title: 'Why Should I Learn Programming?', contentType: 'center',    content: <Slide07WhyProgramming /> },
    { id: 9,  title: 'Why Python?',                     contentType: 'center',    content: <Slide08WhyPython /> },
    { id: 10, title: 'The Story of Python',             contentType: 'center',    content: <Slide08aStoryOfPython /> },
    { id: 11, title: "How We'll Work With Python",      contentType: 'center',    content: <Slide11HowWeWork /> },
    { id: 12, title: 'Our Roadmap',                     contentType: 'center',    content: <Slide09Roadmap /> },
    { id: 13, title: 'Roadmap — Data Science',          contentType: 'center',    content: <Slide09bRoadmap2 /> },
    { id: 14, title: 'Course Improvements',             contentType: 'center',    content: <Slide09cCourseImprovements /> },
    { id: 15, title: "Session 1 — Today's Goal",        contentType: 'center',    content: <Slide10TodaysGoal /> },
    // ── Block 1: Variables · print · built-ins · errors ────
    { id: 16, title: 'Variables',                       contentType: 'center',    content: <Slide14Variables /> },
    { id: 17, title: 'Naming Variables',                contentType: 'center',    content: <Slide15NamingVariables /> },
    { id: 18, title: 'print()',                         contentType: 'center',    content: <Slide16Print /> },
    { id: 19, title: 'f-strings',                       contentType: 'center',    content: <Slide17FStrings /> },
    { id: 20, title: 'Built-in Functions',              contentType: 'center',    content: <Slide18BuiltinFunctions /> },
    { id: 21, title: 'Errors Are Normal',               contentType: 'center',    content: <Slide19Errors /> },
    { id: 22, title: 'Common Errors',                   contentType: 'center',    content: <Slide20CommonErrors /> },
    { id: 23, title: 'TIY — Fix the errors',            contentType: 'center',    content: <Slide21TIYFixErrors /> },
    // ── Block 2: Data types · operators · GC calculator ────
    { id: 24, title: 'The Four Data Types',             contentType: 'center',    content: <Slide22DataTypes /> },
    { id: 25, title: 'type()',                          contentType: 'center',    content: <Slide23TypeFunction /> },
    { id: 26, title: 'Arithmetic Operators',            contentType: 'center',    content: <Slide24Operators /> },
    { id: 27, title: 'Division & Decimals',             contentType: 'center',    content: <Slide25Division /> },
    { id: 28, title: 'Counting Characters — .count()',  contentType: 'center',    content: <Slide26CountMethod /> },
    { id: 29, title: "Demo — Claudia's first report",   contentType: 'center',    content: <Slide27FinalDemo /> },
    { id: 30, title: 'TIY — Spike train',               contentType: 'center',    content: <Slide28TIYSpikeTrain /> },
    // ── Closing poll block ────────────────────────────────
    { id: 31, title: 'What stuck?',                     contentType: 'center',    content: <PollBlockOpener /> },
    { id: 32, title: 'Question 1 — f-strings',          contentType: 'center',    content: <PollQ1 /> },
    { id: 33, title: 'Question 1 — responses',          contentType: 'center',    content: <PollQ1Results />, teacher: true },
    { id: 34, title: 'Question 2 — types',              contentType: 'center',    content: <PollQ2 /> },
    { id: 35, title: 'Question 2 — responses',          contentType: 'center',    content: <PollQ2Results />, teacher: true },
    { id: 36, title: 'Question 3 — naming',             contentType: 'center',    content: <PollQ3 /> },
    { id: 37, title: 'Question 3 — responses',          contentType: 'center',    content: <PollQ3Results />, teacher: true },
    // ── Close ─────────────────────────────────────────────
    { id: 38, title: 'Recap',                           contentType: 'center',    content: <Slide29Recap /> },
    { id: 39, title: "What's Next",                     contentType: 'center',    content: <Slide30Outlook /> },
  ],
}
