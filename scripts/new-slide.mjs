#!/usr/bin/env node
/**
 * Scaffold a slide and put it in the running order.
 *
 *   npm run new:slide -- lecture1 "Improving This Module"
 *   npm run new:slide -- lecture1 "Improving This Module" --after "Our Roadmap"
 *   npm run new:slide -- session3 "Now open the notebook" --before "Recap" --teacher
 *
 * The deck index is a plain ordered list, so inserting is an import plus one
 * line — this just does that reliably, and refuses rather than guessing when
 * the anchor is ambiguous.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const argv = process.argv.slice(2)
const flags = {}
const positional = []
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--after' || argv[i] === '--before') flags[argv[i].slice(2)] = argv[++i]
  else if (argv[i] === '--teacher') flags.teacher = true
  else positional.push(argv[i])
}

const [deck, title] = positional
if (!deck || !title) {
  console.error('usage: npm run new:slide -- <deck> "<Title>" [--after "<Title>"|--before "<Title>"] [--teacher]')
  process.exit(1)
}

const dir = existsSync(join('data/lectures', deck))
  ? join('data/lectures', deck)
  : join('data/sessions', deck)
if (!existsSync(dir)) {
  console.error(`No such deck: ${deck} (looked in data/lectures and data/sessions)`)
  process.exit(1)
}

/** "Improving This Module" -> "ImprovingThisModule" */
const component = title
  .replace(/[^\p{L}\p{N} ]/gu, '')
  .split(/\s+/)
  .filter(Boolean)
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join('')

const file = join(dir, `${component}.tsx`)
if (existsSync(file)) {
  console.error(`${file} already exists`)
  process.exit(1)
}

const indexPath = join(dir, 'index.tsx')
let index = readFileSync(indexPath, 'utf8')

const anchorTitle = flags.after ?? flags.before
let anchorLine = null
if (anchorTitle) {
  const lines = index.split('\n')
  const matches = lines
    .map((l, i) => [l, i])
    .filter(([l]) => /^\s*\{ title:/.test(l) && l.includes(anchorTitle))
  if (matches.length === 0) {
    console.error(`No slide titled like "${anchorTitle}" in ${indexPath}`)
    process.exit(1)
  }
  if (matches.length > 1) {
    console.error(`"${anchorTitle}" matches ${matches.length} slides — be more specific.`)
    process.exit(1)
  }
  anchorLine = matches[0][1]
}

const [head, ...tail] = title.split(' ')
const accent = tail.join(' ')

mkdirSync(dir, { recursive: true })
writeFileSync(
  file,
  `import { GradientText } from '@/components/slides/SlideTitle'
import { ConceptSlide } from '@/components/slides/layouts'

export function ${component}() {
  return (
    <ConceptSlide
      title={<>${head}${accent ? ` <GradientText>${accent}</GradientText>` : ''}</>}
      lead="One sentence saying why this slide exists."
    >
      <p className="text-center text-gray-300">TODO</p>
    </ConceptSlide>
  )
}
`
)

// Import goes after the last existing local import, so the list stays together.
const imports = [...index.matchAll(/^import .* from '\.\/.*'$/gm)]
if (!imports.length) {
  console.error(`Could not find local imports in ${indexPath} — add the slide by hand.`)
  process.exit(1)
}
const lastImport = imports[imports.length - 1]
const importLine = `import { ${component} } from './${component}'`
index =
  index.slice(0, lastImport.index + lastImport[0].length) +
  '\n' + importLine +
  index.slice(lastImport.index + lastImport[0].length)

const entry = `    { title: ${JSON.stringify(title)},${flags.teacher ? ' teacher: true,' : ''} content: <${component} /> },`

if (anchorLine !== null) {
  const lines = index.split('\n')
  /* The import added above shifted every later line by one. */
  const at = anchorLine + 1 + (flags.after ? 1 : 0)
  lines.splice(at, 0, entry)
  index = lines.join('\n')
} else {
  // Default: last slide in the deck.
  const closing = index.lastIndexOf('  ],')
  index = index.slice(0, closing) + entry + '\n' + index.slice(closing)
}

writeFileSync(indexPath, index)
console.log(`created  ${file}`)
console.log(`updated  ${indexPath}  (${anchorTitle ? `${flags.after ? 'after' : 'before'} "${anchorTitle}"` : 'at the end'})`)
console.log('then:    npm run renumber:slides -- --write')
