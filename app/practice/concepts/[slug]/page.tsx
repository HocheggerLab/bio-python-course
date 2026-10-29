import Link from 'next/link'
import { notFound } from 'next/navigation'
import SyntaxHighlighter from '@/components/syntax/SyntaxHighlighter'
import { CONCEPTS, getConcept, notebookLabel, notebookUrl, type ConceptBlock } from '@/lib/practice'
import { slideHref } from '@/lib/practice/slides'

export function generateStaticParams() {
  return CONCEPTS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getConcept(slug)
  return c
    ? { title: `${c.title} — Practice`, description: c.summary, alternates: { canonical: `/practice/concepts/${slug}` } }
    : {}
}

function Block({ block }: { block: ConceptBlock }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl md:text-2xl font-semibold text-white">{block.heading}</h3>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed">{block.body}</p>
      {block.code && (
        <div className="rounded-lg border border-code-border overflow-hidden">
          <SyntaxHighlighter code={block.code} className="!rounded-none text-sm md:text-base" />
          {block.output !== undefined && (
            <div className="border-t border-code-border bg-bio-darkest/80 px-4 py-3">
              <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-1">Output</p>
              <pre className="font-mono text-sm md:text-base text-gray-200 whitespace-pre-wrap">{block.output}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getConcept(slug)
  if (!c) notFound()

  return (
    <section className="pt-28 md:pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <Link href="/practice/concepts" className="text-bio-blue hover:underline text-sm">
          ← All concepts
        </Link>
        <p className="text-gray-400 text-sm mt-4">{c.lecture}</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-1 mb-3 text-white">{c.title}</h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">{c.summary}</p>

        <div className="card !p-5 mb-10">
          <h2 className="text-base font-semibold text-white mb-3">Where this is taught</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Lecture slides</p>
              <ul className="flex flex-col gap-1.5">
                {c.slides.map((s) => (
                  <li key={`${s.lecture}-${s.title}`}>
                    <Link href={slideHref(s.lecture, s.title)} className="text-bio-blue hover:underline">
                      Lecture {s.lecture} · {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Notebooks (open in Colab)</p>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <a href={notebookUrl(c.notebook)} target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:underline">
                    {notebookLabel(c.notebook)} ↗
                  </a>
                </li>
                {c.advanced && (
                  <li>
                    <a href={notebookUrl(c.advanced)} target="_blank" rel="noopener noreferrer" className="text-bio-blue hover:underline">
                      {notebookLabel(c.advanced)} ↗
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {c.basics.map((b) => (
            <Block key={b.heading} block={b} />
          ))}
        </div>

        {c.further.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-gradient-purple">Going further</span>
            </h2>
            <p className="text-gray-400 mb-6">
              {c.advanced ? 'From the advanced notebook — this is what the advanced questions test.' : 'For the advanced questions.'}
            </p>
            <div className="flex flex-col gap-10">
              {c.further.map((b) => (
                <Block key={b.heading} block={b} />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-14">
          <Link href={`/practice?section=${c.slug}`} className="btn-primary">
            Practise these questions →
          </Link>
          <Link href="/practice/concepts" className="btn-secondary">
            All concepts
          </Link>
        </div>
      </div>
    </section>
  )
}
