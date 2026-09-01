const COLAB_BASE = 'https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main'

export const NOTEBOOK_ARRAYS_1D_BASICS = `${COLAB_BASE}/lab05/01_arrays_1d_basics.ipynb`
export const NOTEBOOK_ARRAYS_1D_ADVANCED = `${COLAB_BASE}/lab05/02_arrays_1d_advanced_concepts.ipynb`
export const NOTEBOOK_ARRAYS_2D_BASICS = `${COLAB_BASE}/lab05/03_arrays_2d_basics.ipynb`
export const NOTEBOOK_VECTORISATION = `${COLAB_BASE}/lab05/04_vectorisation.ipynb`

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
