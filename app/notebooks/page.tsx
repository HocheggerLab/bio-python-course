import Link from 'next/link'
import { labNotebooks, colabUrl, notebookCount } from '@/data/notebooks'

export const metadata = { title: 'Notebooks — Python for Biologists' }

export default function NotebooksPage() {
  return (
    <div className="min-h-screen bg-bio-darkest pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">

        <Link
          href="/"
          className="inline-flex items-center mb-8 text-bio-blue hover:text-bio-yellow transition-colors text-sm md:text-base"
        >
          ← Back to home
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-bio-blue mb-4">
            Notebooks
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every practice notebook from the labs — {notebookCount} of them, opening
            straight into Colab. Save a copy to your Drive before you start, or your
            work goes when the tab closes.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {labNotebooks.map((lab) => (
            <section key={lab.lab}>
              <div className="flex items-baseline gap-3 mb-3 md:mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Lab {lab.lab} — {lab.labTitle}
                </h2>
                {lab.available ? (
                  <Link
                    href={`/labs/${lab.lab}`}
                    className="text-bio-blue hover:text-bio-yellow text-xs md:text-sm font-semibold transition-colors"
                  >
                    lab page →
                  </Link>
                ) : (
                  <span className="text-gray-500 text-xs md:text-sm font-semibold">
                    coming soon
                  </span>
                )}
              </div>

              {lab.notebooks.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 text-gray-500 text-sm">
                  Notebooks for this lab are still being written.
                </div>
              ) : (
                <ul className="flex flex-col gap-2 md:gap-3">
                  {lab.notebooks.map((nb) => (
                    <li
                      key={nb.path}
                      className="flex flex-wrap items-center gap-3 md:gap-4 rounded-xl border border-bio-blue/20 bg-bio-blue/[0.06] px-4 py-3 md:px-5 md:py-4"
                    >
                      <span className="text-xl md:text-2xl shrink-0">📓</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-white font-semibold text-sm md:text-base">
                          {nb.title}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm mt-0.5">{nb.blurb}</p>
                      </div>
                      {nb.solutions && (
                        <a
                          href={colabUrl(nb.solutions)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-gray-400 hover:text-gray-200 text-xs md:text-sm underline underline-offset-4 transition-colors"
                        >
                          🔑 Solutions
                        </a>
                      )}
                      <a
                        href={colabUrl(nb.path)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-4 py-1.5 text-xs md:text-sm transition-colors"
                      >
                        Open in Colab →
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

      </div>
    </div>
  )
}
