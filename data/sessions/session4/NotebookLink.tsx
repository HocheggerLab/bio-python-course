const COLAB_BASE = 'https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main'

export const NOTEBOOK_OPERATORS = `${COLAB_BASE}/lab01/04_operators_and_mini_programs.ipynb`

export function NotebookLink({ url, label }: { url: string; label?: string }) {
  return (
    <div className="flex justify-center mt-3 md:mt-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
      >
        📓 {label ?? 'Colab practice notebook'} →
      </a>
    </div>
  )
}
