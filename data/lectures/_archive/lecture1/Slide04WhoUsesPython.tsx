import {
  SlideTitle
} from '@/components/slides'

export function Slide04WhoUsesPython() {
  return (
    <>
      <div className="pb-10">
        <SlideTitle>
          Where Python <span className="text-gradient-purple">Fits In</span>
        </SlideTitle>
      </div>

      <div className="overflow-x-auto mb-12">
        <table className="bio-table mx-auto">
          <thead>
            <tr>
              <th className="text-left">Language</th>
              <th>Type System</th>
              <th>Execution</th>
              <th>Best For</th>
              <th>Learning Curve</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-bio-blue/10">
              <td className="font-bold text-bio-blue">Python 🐍</td>
              <td>Dynamic</td>
              <td>Interpreted</td>
              <td>Data Science, AI, Web, Automation</td>
              <td><span className="text-bio-green">◉◯◯◯◯</span> Easy</td>
            </tr>
            <tr>
              <td className="font-bold">R</td>
              <td>Dynamic</td>
              <td>Interpreted</td>
              <td>Statistics, Data Analysis</td>
              <td><span className="text-bio-yellow">◉◉◯◯◯</span> Moderate</td>
            </tr>
            <tr>
              <td className="font-bold">JavaScript</td>
              <td>Dynamic</td>
              <td>Interpreted/JIT</td>
              <td>Web Development</td>
              <td><span className="text-bio-yellow">◉◉◯◯◯</span> Moderate</td>
            </tr>
            <tr>
              <td className="font-bold">Java</td>
              <td>Static</td>
              <td>Compiled (bytecode)</td>
              <td>Enterprise, Android</td>
              <td><span className="text-orange-400">◉◉◉◯◯</span> Challenging</td>
            </tr>
            <tr>
              <td className="font-bold">C++</td>
              <td>Static</td>
              <td>Compiled</td>
              <td>Systems, Games, Performance</td>
              <td><span className="text-red-400">◉◉◉◉◯</span> Difficult</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <div className="inline-block bg-bio-blue/10 rounded-full px-8 py-4 border border-bio-blue/30">
          <p className="text-lg">
            Python is the <span className="font-bold text-bio-blue">2nd best language</span> for{" "}
            <span className="font-bold text-bio-green">everything!</span>
          </p>
        </div>
      </div>
    </>
  )
}