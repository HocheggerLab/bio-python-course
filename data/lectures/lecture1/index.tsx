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
import { Slide16Variables } from './Slide16Variables'
import { Slide17NamingVariables } from './Slide17NamingVariables'
import { Slide18Print } from './Slide18Print'
import { Slide19FStrings } from './Slide19FStrings'
import { Slide20BuiltinFunctions } from './Slide20BuiltinFunctions'
import { Slide21Errors } from './Slide21Errors'
import { Slide22CommonErrors } from './Slide22CommonErrors'
import { Slide23TIYFixErrors } from './Slide23TIYFixErrors'
// Block 2 — Data types, operators, GC calculator
import { Slide24DataTypes } from './Slide24DataTypes'
import { Slide25TypeFunction } from './Slide25TypeFunction'
import { Slide26Operators } from './Slide26Operators'
import { Slide27Division } from './Slide27Division'
import { Slide28CountMethod } from './Slide28CountMethod'
import { Slide29FinalDemo } from './Slide29FinalDemo'
// Closing poll block — sits before the recap, so an overrun eats the summary
// (which is on the website anyway) rather than the only feedback we get.
import { Slide31PollBlockOpener } from './Slide31PollBlockOpener'
import { Slide32PollQ1 } from './Slide32PollQ1'
import { Slide33PollQ2 } from './Slide33PollQ2'
import { Slide34PollQ3 } from './Slide34PollQ3'
import { Slide35Recap } from './Slide35Recap'
import { Slide36Outlook } from './Slide36Outlook'

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
    { title: 'Variables', content: <Slide16Variables /> },
    { title: 'Naming Variables', content: <Slide17NamingVariables /> },
    { title: 'print()', content: <Slide18Print /> },
    { title: 'f-strings', content: <Slide19FStrings /> },
    { title: 'Built-in Functions', content: <Slide20BuiltinFunctions /> },
    { title: 'Errors Are Normal', content: <Slide21Errors /> },
    { title: 'Common Errors', content: <Slide22CommonErrors /> },
    { title: 'TIY — Fix the errors', content: <Slide23TIYFixErrors /> },
    // ── Block 2: Data types · operators · GC calculator ────
    { title: 'The Four Data Types', content: <Slide24DataTypes /> },
    { title: 'type()', content: <Slide25TypeFunction /> },
    { title: 'Arithmetic Operators', content: <Slide26Operators /> },
    { title: 'Division & Decimals', content: <Slide27Division /> },
    { title: 'Counting Characters — .count()', content: <Slide28CountMethod /> },
    { title: "Demo — Claudia's first report", content: <Slide29FinalDemo /> },
    // ── Closing poll block ────────────────────────────────
    { title: 'What stuck?', content: <Slide31PollBlockOpener /> },
    { title: 'Question 1 — f-strings', content: <Slide32PollQ1 /> },
    { title: 'Question 2 — types', content: <Slide33PollQ2 /> },
    { title: 'Question 3 — naming', content: <Slide34PollQ3 /> },
    // ── Close ─────────────────────────────────────────────
    { title: 'Recap', content: <Slide35Recap /> },
    { title: "What's Next", content: <Slide36Outlook /> },
  ],
}
