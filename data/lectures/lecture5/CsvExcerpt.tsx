/* A few real rows of the lecture CSV, with one column lit up — so students
   see exactly which column `usecols=` is pulling out of the file. */
/* The file also has reward and lick columns; today we only use these four. */
const HEADER = ['frame', 'dff', 'go', 'nogo']

export function CsvExcerpt({
  rows,
  highlight,
  notes = {},
}: {
  rows: string[]
  /** Column index to light up (the usecols number). */
  highlight: number
  /** Optional margin note per frame, e.g. { '43': 'go starts' }. */
  notes?: Record<string, string>
}) {
  return (
    <div className="w-fit max-w-full mx-auto rounded-md border border-white/10 bg-bio-dark/40 p-3 md:p-4 overflow-x-auto">
      <table className="font-mono text-xs md:text-base xl:text-lg text-gray-400 leading-snug">
        <thead>
          <tr>
            {HEADER.map((h, i) => (
              <th
                key={h}
                className={`px-2 md:px-3 pb-1 text-right font-semibold ${
                  i === highlight ? 'text-bio-yellow bg-bio-yellow/10 rounded-t' : 'text-gray-500'
                }`}
              >
                {h}
                <span className="block text-[10px] md:text-xs font-normal opacity-70">{i}</span>
              </th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const cells = row.split(',').slice(0, HEADER.length)
            return (
              <tr key={cells[0]}>
                {cells.map((c, i) => (
                  <td
                    key={i}
                    className={`px-2 md:px-3 text-right ${
                      i === highlight ? 'text-white font-semibold bg-bio-yellow/10' : ''
                    }`}
                  >
                    {c}
                  </td>
                ))}
                <td className="pl-2 text-bio-green text-[10px] md:text-xs xl:text-sm whitespace-nowrap">
                  {notes[cells[0]] ?? ''}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
