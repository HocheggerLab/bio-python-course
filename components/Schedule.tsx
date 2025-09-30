import { scheduleData } from '@/data/schedule'

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 px-6 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-header">
          Course <span className="text-gradient">Schedule</span>
        </h2>
        <div className="concept-box">
          <table className="bio-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Lecture Topic</th>
                <th>Seminar</th>
                <th>Assignment</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((week) => (
                <tr key={week.week}>
                  <td>{week.week}</td>
                  <td>{week.lectureTopic}</td>
                  <td>{week.seminar}</td>
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
      </div>
    </section>
  )
}