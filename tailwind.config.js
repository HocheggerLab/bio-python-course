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
        // Primary bio-themed colors
        "bio-blue": "#00d4ff",
        "bio-light-blue": "#58e6ff",
        "bio-dark-blue": "#0099cc",

        // Dark backgrounds (from lecture 2 design)
        "bio-dark": "#1a1a2e",
        "bio-darker": "#16213e",
        "bio-darkest": "#0d1117",

        // Code block colors
        "code-bg": "#0d1117",
        "code-border": "#30363d",
        "output-bg": "#1c2333",
        "output-border": "#2d3748",

        // Accent colors
        "bio-yellow": "#ffd700",
        "bio-green": "#4CAF50",
        "bio-purple": {
          light: "#764ba2",
          DEFAULT: "#667eea",
        },

        // DNA visualization colors
        "dna-start": "#ff6b6b", // ATG highlight
        "dna-stop": "#4ecdc4", // Stop codon highlight
      },

      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
        mono: ["Monaco", "Menlo", "Ubuntu Mono", "Consolas", "monospace"],
      },

      fontSize: {
        // Custom sizes for consistency
        hero: "4rem",
        section: "2.5rem",
        "slide-title": "3rem",
      },

      animation: {
        "slide-in": "slideIn 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      backgroundImage: {
        // Gradients from the designs
        "bio-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "dark-gradient": "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        "blue-gradient": "linear-gradient(90deg, #00d4ff, #0099cc)",
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        "bio-glow": "0 20px 40px rgba(0, 212, 255, 0.3)",
        "bio-glow-sm": "0 10px 20px rgba(0, 212, 255, 0.2)",
        code: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

