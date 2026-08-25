/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Technical-docs dark theme ───────────────────────────────
           Token names are unchanged so every existing slide inherits
           the new look without edits. Values are desaturated: one
           calm blue accent, muted semantic colours, flat surfaces. */

        // Accent — a documentation blue, not neon cyan
        "bio-blue": "#5b9df9",
        "bio-light-blue": "#8fbcfb",
        "bio-dark-blue": "#3d7fd6",

        /* Surfaces. The page sits on `bio-darkest`; `bio-dark` is now the
           *panel* colour, one step lighter — so the ~500 existing
           `bg-bio-dark/50` code blocks read as raised surfaces instead of
           disappearing into the background. */
        "bio-dark": "#1b1f27",
        "bio-darker": "#151920",
        "bio-darkest": "#0d0f13",

        // Code blocks — one step darker than the page, hairline border
        "code-bg": "#0a0c0f",
        "code-border": "#22262e",
        "output-bg": "#12151a",
        "output-border": "#22262e",

        // Semantic accents (kept: they carry pedagogical meaning)
        "bio-yellow": "#d6a44c",
        "bio-green": "#5fb37a",
        "bio-purple": {
          light: "#9d86d4",
          DEFAULT: "#8b74c9",
        },

        // DNA visualization colors
        "dna-start": "#e07b6f",
        "dna-stop": "#5fb3ae",
      },

      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      fontSize: {
        hero: "4rem",
        section: "2.5rem",
        "slide-title": "3rem",
      },

      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      backgroundImage: {
        // Flat now — kept as tokens so old utility names still resolve
        "bio-gradient": "none",
        "dark-gradient": "none",
        "blue-gradient": "none",
      },

      boxShadow: {
        // No glow. Depth comes from borders, not light.
        "bio-glow": "none",
        "bio-glow-sm": "none",
        code: "none",
      },

      borderRadius: {
        xl: "0.5rem",
        "2xl": "0.625rem",
      },
    },
  },
  plugins: [],
};
