const COLAB_BASE = 'https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main'

export const NOTEBOOK_LISTS_BASICS = `${COLAB_BASE}/lab02/01_lists_basics.ipynb`
export const NOTEBOOK_LISTS_ADVANCED = `${COLAB_BASE}/lab02/02_lists_advanced_concepts.ipynb`
export const SOLUTIONS_LISTS_BASICS = `${COLAB_BASE}/lab02/solutions/01_lists_basics_solutions.ipynb`
export const SOLUTIONS_LISTS_ADVANCED = `${COLAB_BASE}/lab02/solutions/02_lists_advanced_concepts_solutions.ipynb`

export function NotebookLink({
  url,
  label,
  solutionsUrl,
}: {
  url: string
  label?: string
  solutionsUrl?: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 mt-3 md:mt-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
      >
        📓 {label ?? 'Colab practice notebook'} →
      </a>
      {solutionsUrl && (
        <a
          href={solutionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 text-xs underline underline-offset-4 transition-colors"
        >
          🔑 Solutions — try it first
        </a>
      )}
    </div>
  )
}
