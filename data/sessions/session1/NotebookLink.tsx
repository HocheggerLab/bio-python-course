export const SESSION1_COLAB_URL =
  'https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/lecture01/01_using_notebooks.ipynb'

export function NotebookLink() {
  return (
    <div className="flex justify-center mt-3 md:mt-4">
      <a
        href={SESSION1_COLAB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-bio-green/20 hover:bg-bio-green/30 border border-bio-green/40 text-bio-green font-semibold px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm xl:text-base transition-colors"
      >
        📓 Colab practice notebook →
      </a>
    </div>
  )
}
