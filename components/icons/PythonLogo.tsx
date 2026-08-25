/**
 * The Python logo, drawn in the course palette rather than the official
 * blue/yellow so it sits inside the docs theme without shouting.
 */
export function PythonLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 110" role="img" aria-label="Python" className={className}>
      <path
        fill="currentColor"
        className="text-bio-blue"
        d="M54.918 0C26.898 0 28.648 12.15 28.648 12.15l.031 12.588h26.74v3.78H18.05S.116 26.484.116 54.757c0 28.273 15.653 27.27 15.653 27.27h9.34v-13.12s-.503-15.653 15.401-15.653h26.52s14.902.241 14.902-14.4V14.65S84.294 0 54.918 0zM40.174 8.464a4.81 4.81 0 1 1 0 9.62 4.81 4.81 0 0 1 0-9.62z"
      />
      <path
        className="text-bio-yellow"
        fill="currentColor"
        d="M55.709 109.512c28.02 0 26.27-12.15 26.27-12.15l-.031-12.588H55.208v-3.78h37.369s17.934 2.034 17.934-26.239c0-28.273-15.653-27.27-15.653-27.27h-9.34v13.12s.503 15.653-15.401 15.653h-26.52s-14.902-.241-14.902 14.4v24.203s-2.262 14.651 27.114 14.651zM70.453 101.048a4.81 4.81 0 1 1 0-9.62 4.81 4.81 0 0 1 0 9.62z"
      />
    </svg>
  )
}
