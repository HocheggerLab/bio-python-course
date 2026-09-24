import { LectureData } from '@/data/lectures/types'
import { Slide01WhyProgramming } from './Slide01WhyProgramming'
import { Slide02WhyPython } from './Slide02WhyPython'
import { Slide03StoryOfPython } from './Slide03StoryOfPython'
import { Slide04HowToLearn } from './Slide04HowToLearn'
import { Slide05ResponsibleAI } from './Slide05ResponsibleAI'
import { Slide06HowCourseWorks } from './Slide06HowCourseWorks'
import { Slide07Resources } from './Slide07Resources'
import { Slide08Roadmap } from './Slide08Roadmap'
import { Slide09Roadmap2 } from './Slide09Roadmap2'
import { Slide10Assessment } from './Slide10Assessment'
import { Slide11CourseImprovements } from './Slide11CourseImprovements'
import { Slide12HowWeWork } from './Slide12HowWeWork'
import { Slide13TodaysGoal } from './Slide13TodaysGoal'
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
// Closing poll block — sits before the recap, so an overrun eats the summary
// (which is on the website anyway) rather than the only feedback we get.
import { Slide28PollBlockOpener } from './Slide28PollBlockOpener'
import { Slide29PollQ1 } from './Slide29PollQ1'
import { Slide30PollQ2 } from './Slide30PollQ2'
import { Slide31PollQ3 } from './Slide31PollQ3'
import { Slide32Recap } from './Slide32Recap'
import { Slide33Outlook } from './Slide33Outlook'

export const lecture1Data: LectureData = {
  id: 'lecture-1',
  title: 'Data Types, Variables and Basic Operations',
  slides: [
    // ── Intro ──────────────────────────────────────────────
    { title: 'Why Should I Learn Programming?', content: <Slide01WhyProgramming /> },
    { title: 'Why Python?', content: <Slide02WhyPython /> },
    { title: 'The Story of Python', content: <Slide03StoryOfPython /> },  
    { title: 'How to Learn Programming', content: <Slide04HowToLearn /> },
    { title: 'Using AI Responsibly', content: <Slide05ResponsibleAI /> },      
    { title: 'How the Course Works', content: <Slide06HowCourseWorks /> },
    { title: 'Your Main Resources', content: <Slide07Resources /> },
    { title: 'Our Roadmap', content: <Slide08Roadmap /> },
    { title: 'Roadmap — Data Science', content: <Slide09Roadmap2 /> },
    { title: 'Assessment & Exams', content: <Slide10Assessment /> },
    { title: 'Improving This Module', content: <Slide11CourseImprovements /> },    
    { title: "How We'll Work With Python", content: <Slide12HowWeWork /> },
    { title: "Session 1 — Today's Goal", content: <Slide13TodaysGoal /> },
    // ── Block 1: Variables · print · built-ins · errors ────
    { title: 'Variables', content: <Slide14Variables /> },
    { title: 'Naming Variables', content: <Slide15NamingVariables /> },
    { title: 'print()', content: <Slide16Print /> },
    { title: 'f-strings', content: <Slide17FStrings /> },
    { title: 'Built-in Functions', content: <Slide18BuiltinFunctions /> },
    { title: 'Errors Are Normal', content: <Slide19Errors /> },
    { title: 'Common Errors', content: <Slide20CommonErrors /> },
    { title: 'TIY — Fix the errors', content: <Slide21TIYFixErrors /> },
    // ── Block 2: Data types · operators · GC calculator ────
    { title: 'The Four Data Types', content: <Slide22DataTypes /> },
    { title: 'type()', content: <Slide23TypeFunction /> },
    { title: 'Arithmetic Operators', content: <Slide24Operators /> },
    { title: 'Division & Decimals', content: <Slide25Division /> },
    { title: 'Counting Characters — .count()', content: <Slide26CountMethod /> },
    { title: "Demo — Claudia's first report", content: <Slide27FinalDemo /> },
    // ── Closing poll block ────────────────────────────────
    { title: 'What stuck?', content: <Slide28PollBlockOpener /> },
    { title: 'Question 1 — f-strings', content: <Slide29PollQ1 /> },
    { title: 'Question 2 — types', content: <Slide30PollQ2 /> },
    { title: 'Question 3 — naming', content: <Slide31PollQ3 /> },
    // ── Close ─────────────────────────────────────────────
    { title: 'Recap', content: <Slide32Recap /> },
    { title: "What's Next", content: <Slide33Outlook /> },
  ],
}
