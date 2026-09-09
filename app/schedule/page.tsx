import Link from 'next/link'
import { scheduleData } from '@/data/schedule'

export const metadata = { title: 'Schedule — Python for Biologists' }

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">

        <Link
          href="/"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to home
        </Link>

        <div className="text-center mb-10 md:mb-14">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Schedule
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One lecture and one lab each week, with the assessment deadlines marked.
          </p>
        </div>

        <div className="concept-box">
          <table className="bio-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Lecture</th>
                <th>Assessment</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((week) => (
                <tr key={week.week}>
                  <td>{week.week}</td>
                  <td>{week.lectureTopic}</td>
                  <td>
                    {week.assignment.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-400 text-sm md:text-base mt-6 md:mt-8">
          Deadlines and submission are on{' '}
          <a
            href="https://canvas.sussex.ac.uk/courses/34489"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bio-blue hover:text-bio-yellow underline underline-offset-4 transition-colors"
          >
            Canvas
          </a>
          . See <Link href="/assessment" className="text-bio-blue hover:text-bio-yellow underline underline-offset-4 transition-colors">Assessment</Link> for what each piece involves.
        </p>

      </div>
    </div>
  )
}
