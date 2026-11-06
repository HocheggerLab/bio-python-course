'use client'

import { Fragment, useState } from 'react'

/* groupby as a picture, built up one click at a time: six real survey rows
   (the five from the "Nine allotments" slide plus one more raspberry), split
   into a pile per crop, each pile summed, the sums stacked into one table.
   The matching piece of the code line lights up with each stage. */

type Crop = 'Bbean' | 'Raspberry' | 'Squash'
type Row = [Crop, number, number]

const rows: Row[] = [
  ['Bbean', 0, 1],
  ['Squash', 5, 0],
  ['Raspberry', 1, 2],
  ['Bbean', 0, 1],
  ['Squash', 5, 1],
  ['Raspberry', 2, 2],
]

const crops: Crop[] = ['Bbean', 'Raspberry', 'Squash']

const tint: Record<Crop, string> = {
  Bbean: 'bg-bio-green/15 text-bio-green',
  Raspberry: 'bg-red-400/15 text-red-300',
  Squash: 'bg-bio-yellow/15 text-bio-yellow',
}

const stages = [
  { label: 'the table', code: 'df' },
  { label: 'split', code: '.groupby("Crop")' },
  { label: 'apply', code: '[["Honeybees", "Bumblebees"]].sum()' },
  { label: 'combine', code: '' },
]

const captions = [
  'Six rows, crops mixed up.',
  'One pile per crop. Nothing is added yet.',
  'Each pile is summed, column by column.',
  'The sums stacked into one table — one row per crop, crop names as row labels.',
]

function Table({ data, header = true, labels = false }: { data: Row[]; header?: boolean; labels?: boolean }) {
  return (
    <table className="font-mono text-xs md:text-sm xl:text-base w-full border-separate border-spacing-y-0.5">
      {header && (
        <thead>
          <tr className="text-gray-400 text-[10px] md:text-xs">
            <th className="text-left font-normal px-2">{labels ? '' : 'Crop'}</th>
            <th className="text-right font-normal px-2">Honey</th>
            <th className="text-right font-normal px-2">Bumble</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data.map(([crop, h, b], i) => (
          <tr key={i} className={tint[crop]}>
            <td className={`px-2 py-0.5 rounded-l ${labels ? 'font-bold' : ''}`}>{crop}</td>
            <td className="px-2 py-0.5 text-right">{h}</td>
            <td className="px-2 py-0.5 text-right rounded-r">{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const pile = (c: Crop) => rows.filter((r) => r[0] === c)
const total = (c: Crop): Row => [c, pile(c).reduce((s, r) => s + r[1], 0), pile(c).reduce((s, r) => s + r[2], 0)]

export default function GroupByDiagram() {
  const [stage, setStage] = useState(0)
  const shown = (n: number) => (stage >= n ? 'opacity-100' : 'opacity-0 pointer-events-none')

  return (
    <div className="w-full">
      {/* the code, lit up as far as we've got */}
      <div className="flex items-center justify-between gap-3 rounded-lg bg-black/40 border border-white/10 px-3 md:px-4 py-2">
        <code className="font-mono text-sm md:text-lg xl:text-xl">
          {stages.slice(0, 3).map((s, i) => (
            <span key={s.code} className={stage >= i ? 'text-white' : 'text-gray-600'}>
              {s.code}
            </span>
          ))}
        </code>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => setStage(0)}
            className="px-3 py-1 rounded-md text-xs md:text-sm bg-white/10 text-gray-300 hover:bg-white/20"
          >
            Reset
          </button>
          <button
            onClick={() => setStage((s) => Math.min(s + 1, 3))}
            disabled={stage === 3}
            className="px-3 py-1 rounded-md text-xs md:text-sm font-semibold bg-bio-blue text-black disabled:opacity-40"
          >
            {stage === 3 ? 'Done' : `Next: ${stages[stage + 1].label} ▸`}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-x-2 md:gap-x-3 gap-y-2 mt-4 md:mt-5">
        {/* 0 — the table */}
        <div>
          <Table data={rows} />
        </div>

        <span className={`text-gray-500 text-xl transition-opacity duration-500 ${shown(1)}`}>→</span>

        {/* 1 — split */}
        <div className={`flex flex-col gap-2 transition-opacity duration-500 ${shown(1)}`}>
          {crops.map((c) => (
            <div key={c} className="rounded-md border border-dashed border-white/15 p-1">
              <Table data={pile(c)} header={false} />
            </div>
          ))}
        </div>

        <span className={`text-gray-500 text-xl transition-opacity duration-500 ${shown(2)}`}>→</span>

        {/* 2 — apply */}
        <div className={`flex flex-col gap-2 transition-opacity duration-500 ${shown(2)}`}>
          {crops.map((c) => (
            <div key={c} className="rounded-md border border-white/15 p-1">
              <Table data={[total(c)]} header={false} />
              <p className="text-[10px] md:text-xs text-gray-500 px-2">sum of {pile(c).length} rows</p>
            </div>
          ))}
        </div>

        <span className={`text-gray-500 text-xl transition-opacity duration-500 ${shown(3)}`}>→</span>

        {/* 3 — combine */}
        <div className={`transition-opacity duration-500 ${shown(3)}`}>
          <p className="font-mono text-[10px] md:text-xs text-gray-400 px-2 mb-1">visits</p>
          <Table data={crops.map(total)} labels />
        </div>

        {stages.map((st, i) => (
          <Fragment key={st.label}>
            {i > 0 && <span />}
            <p
              className={`self-start text-center text-xs md:text-sm uppercase tracking-widest font-semibold transition-colors ${
                stage === i ? 'text-bio-blue' : stage > i ? 'text-gray-400' : 'text-gray-700'
              }`}
            >
              {st.label}
            </p>
          </Fragment>
        ))}
      </div>

      <p className="text-center text-gray-200 text-sm md:text-lg xl:text-xl mt-3 md:mt-4 min-h-[1.75em]">
        {captions[stage]}
      </p>
    </div>
  )
}
