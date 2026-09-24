#!/usr/bin/env node
/**
 * Make slide filenames match the running order.
 *
 *   npm run renumber:slides            # every deck, dry run
 *   npm run renumber:slides -- --write
 *   npm run renumber:slides -- lecture1 --write
 *
 * The array in index.tsx is the source of truth (see data/lectures/types.ts);
 * this only relabels the files so a directory listing reads in teaching order.
 * Because the numbers are cosmetic, re-running after an insert is safe — and
 * is the intended workflow rather than hand-editing suffixes like 9a, 9b.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'

const argv = process.argv.slice(2)
const write = argv.includes('--write')
const only = argv.filter((a) => !a.startsWith('--'))

const decks = [
  ...readdirSync('data/lectures').filter((d) => d.startsWith('lecture')).map((d) => join('data/lectures', d)),
  ...readdirSync('data/sessions').map((d) => join('data/sessions', d)),
].filter((d) => existsSync(join(d, 'index.tsx')) && (!only.length || only.some((o) => d.endsWith(o))))

/** Strip any existing SlideNN / SlideNNa prefix, keeping the descriptive part. */
const describe = (name) => name.replace(/^Slide\d+[a-z]?/, '') || name

let renames = 0
for (const dir of decks) {
  const indexPath = join(dir, 'index.tsx')
  let index = readFileSync(indexPath, 'utf8')

  // Components in the order they appear in the slides array.
  const order = [...index.matchAll(/^\s*\{ title:.*content: <([A-Za-z0-9_]+) \/>/gm)].map((m) => m[1])
  const pad = String(order.length).length

  const plan = []
  order.forEach((component, i) => {
    const file = join(dir, `${component}.tsx`)
    if (!existsSync(file)) return          // inline or shared component, not a file here
    const n = String(i + 1).padStart(Math.max(2, pad), '0')
    const next = `Slide${n}${describe(component)}`
    if (next !== component) plan.push({ from: component, to: next })
  })

  if (!plan.length) continue
  console.log(`\n${dir}`)
  for (const { from, to } of plan) console.log(`  ${from}  ->  ${to}`)
  renames += plan.length
  if (!write) continue

  /* Two passes with a placeholder, because a one-shot rename can collide:
     Slide09Roadmap -> Slide12Roadmap while Slide12 already exists. */
  for (const { from, to } of plan) {
    execFileSync('git', ['mv', join(dir, `${from}.tsx`), join(dir, `__tmp__${to}.tsx`)])
  }
  for (const { to } of plan) {
    execFileSync('git', ['mv', join(dir, `__tmp__${to}.tsx`), join(dir, `${to}.tsx`)])
  }
  for (const { from, to } of plan) {
    const file = join(dir, `${to}.tsx`)
    writeFileSync(file, readFileSync(file, 'utf8').replaceAll(`function ${from}`, `function ${to}`))
    index = index
      .replaceAll(`{ ${from} } from './${from}'`, `{ ${to} } from './${to}'`)
      .replaceAll(`<${from} />`, `<${to} />`)
  }
  writeFileSync(indexPath, index)
}

console.log(
  renames === 0
    ? '\nEverything already in order.'
    : write
      ? `\n${renames} files renamed.`
      : `\n${renames} files would be renamed — re-run with --write.`
)
