---
version: alpha
name: Python for Biologists
description: Bio-themed dark UI for an interactive programming course for UK life sciences undergraduates.

colors:
  primary: "#00d4ff"
  primary-light: "#58e6ff"
  primary-dark: "#0099cc"
  bg-dark: "#1a1a2e"
  bg-darker: "#16213e"
  bg-darkest: "#0d1117"
  code-bg: "#0d1117"
  code-border: "#30363d"
  output-bg: "#1c2333"
  output-border: "#2d3748"
  accent-yellow: "#ffd700"
  accent-green: "#4CAF50"
  accent-purple: "#667eea"
  accent-purple-dark: "#764ba2"
  dna-start: "#ff6b6b"
  dna-stop: "#4ecdc4"
  text-body: "#d1d5db"
  text-muted: "#9ca3af"

typography:
  hero:
    fontFamily: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
    fontSize: 4rem
    fontWeight: 700
  section:
    fontFamily: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
    fontSize: 2.5rem
    fontWeight: 700
  slide-title-xl:
    fontFamily: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
    fontSize: 3.75rem
    fontWeight: 700
  slide-title-lg:
    fontFamily: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
    fontSize: 3rem
    fontWeight: 700
  slide-title-md:
    fontFamily: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
    fontSize: 2.5rem
    fontWeight: 700
  body:
    fontFamily: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
    fontSize: 1rem
    lineHeight: 1.7
  code:
    fontFamily: Monaco, Menlo, Ubuntu Mono, Consolas, monospace
    fontSize: 0.875rem
    lineHeight: 1.6

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px

spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 80px

components:
  btn-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-dark}"
    rounded: "{rounded.full}"
    padding: 12px 24px
    typography: body
  btn-primary-hover:
    backgroundColor: "{colors.primary-light}"
  btn-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  btn-secondary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-dark}"
  card:
    backgroundColor: "rgba(255,255,255,0.05)"
    rounded: "{rounded.lg}"
    padding: 24px
  card-hover:
    backgroundColor: "rgba(255,255,255,0.05)"
  concept-box:
    backgroundColor: "rgba(255,255,255,0.05)"
    rounded: "{rounded.xl}"
    padding: 24px
  code-block:
    backgroundColor: "{colors.code-bg}"
    textColor: "#e6edf3"
    rounded: "{rounded.lg}"
    padding: 20px
  output-block:
    backgroundColor: "{colors.output-bg}"
    textColor: "{colors.primary-light}"
    rounded: "{rounded.lg}"
    padding: 16px
  badge-available:
    backgroundColor: "rgba(76,175,80,0.2)"
    textColor: "{colors.accent-green}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-coming-soon:
    backgroundColor: "rgba(249,115,22,0.2)"
    textColor: "#fb923c"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-under-construction:
    backgroundColor: "rgba(255,215,0,0.2)"
    textColor: "{colors.accent-yellow}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  nav:
    backgroundColor: "rgba(0,0,0,0.2)"
    textColor: "{colors.text-body}"
    height: 72px
  slide-navigation-bar:
    backgroundColor: "rgba(0,0,0,0.1)"
    height: 48px
  glass:
    backgroundColor: "rgba(255,255,255,0.1)"
  glass-dark:
    backgroundColor: "rgba(0,0,0,0.2)"
---

## Overview

Dark-mode biology lab aesthetic meets clean educational UI. The design reads like a modern research tool — dark backgrounds evoke a terminal or microscope interface, while the electric cyan accent (`bio-blue`) drives all interactive elements.

Every decision serves biology students: code blocks look like real terminals, DNA sequence colours are meaningful (ATG = red, stop codons = teal), and the glassmorphism surfaces create depth without competing with content-heavy lecture slides.

The slide system is the centrepiece — fullscreen, one slide at a time, with a fixed navigation bar at the bottom. Homepage sections stack vertically with glassmorphism cards.

## Colors

The palette is rooted in deep navy backgrounds with a single electric accent.

- **Primary / bio-blue (`#00d4ff`):** The sole interactive color. Used for links, active states, borders on hover, gradient text headings, and the slide indicator pill. Never use it decoratively for non-interactive elements.
- **bg-dark (`#1a1a2e`) / bg-darker (`#16213e`):** The two-stop page background gradient applied to `<body>`. All content sits on this.
- **bg-darkest / code-bg (`#0d1117`):** GitHub-dark code background. Used only inside code and output blocks.
- **accent-yellow (`#ffd700`):** Exercise boxes, video buttons, warning badges. Signals "do this now."
- **accent-green (`#4CAF50`):** Success states, bio-notes, available badges. Signals "correct / ready."
- **accent-purple (`#667eea` → `#764ba2`):** Gradient used exclusively for seminar/specialisation sections and `text-gradient-purple`. Distinguishes those sections from core lecture content.
- **dna-start (`#ff6b6b`) / dna-stop (`#4ecdc4`):** Semantic colors for DNA visualisations only. Do not repurpose.
- **text-body (`#d1d5db`) / text-muted (`#9ca3af`):** Default prose and secondary labels.

## Typography

Two font stacks, two roles — never mixed:

- **UI font** (`Segoe UI` stack): All headings, body copy, navigation, badges, labels. System font stack — no web font loading overhead.
- **Code font** (`Monaco` stack): All code blocks, output blocks, DNA visualisations, inline code. Monospace only.

Heading scale used in slides:
- `xl`: `text-6xl md:text-7xl` — title slides only
- `large` (default): `text-5xl md:text-6xl` — most slide titles via `<SlideTitle>`
- `medium`: `text-4xl md:text-5xl` — subsection titles
- `small`: `text-3xl md:text-4xl` — secondary slide headings

Gradient text is used for primary headings only. The blue gradient (`text-gradient`) is for Python/programming content; the purple gradient (`text-gradient-purple`) is for biology/specialisation content. Do not apply gradients to body copy or labels.

## Layout

**Homepage:** Single-page scroll. Fixed navigation (72px tall, `glass-dark`). Sections with `container mx-auto max-w-6xl` centered. Hero has top padding of `pt-32` to clear the nav.

**Lecture pages:** Full-screen slide system. One slide visible at a time (`min-h-screen`). Fixed `slide-navigation` bar at the bottom (`z-50`, 48px). No page scroll — scroll is per-slide.

**Slide content alignment:**
- `.slide-content` — `flex flex-col justify-center` — for balanced slides
- `.slide-content-top` — `flex flex-col justify-start pt-24` — for content-heavy slides that need top alignment

**Grid system:** Tailwind grid with semantic column counts: `grid-cols-2`, `grid-cols-3`, `grid-cols-4` (responsive to `md:grid-cols-4`). No magic numbers.

**Max widths:** `max-w-6xl` for homepage sections; `95%` for slide content.

## Elevation & Depth

Three elevation layers using glassmorphism:

1. **Page background:** `bg-gradient-to-br from-bio-dark to-bio-darker` — the foundation, no blur
2. **`.glass-dark`:** `bg-black/20 backdrop-blur-md border border-white/10` — cards, nav, slide navigation bar. Primary surface.
3. **`.glass`:** `bg-white/10 backdrop-blur-md border border-white/20` — elevated interactive elements

Hover lift: cards translate `-translate-y-1` with `shadow-bio-glow-sm` (`0 10px 20px rgba(0,212,255,0.2)`) on hover. Use sparingly — only on clickable cards, not decorative containers.

## Shapes

- Cards: `rounded-xl` (16px)
- Concept boxes: `rounded-2xl` (20px)
- Buttons: `rounded-full` — pill shape is a hard rule, never use square buttons
- Code blocks: `rounded-xl` with `border border-code-border`
- Badges: `rounded-full` with `px-3 py-1`
- Slide indicators: `rounded-full`, active state widens to `w-8` (pill)
- Left-accent rule: `concept-box` and `output-block` use `border-l-4` colored accent — left border only, not all four sides

## Components

### Navigation
Fixed top bar using `.glass-dark`. Logo: emoji + `text-gradient` text. Desktop links use `.nav-link`. Dropdowns open `bg-bio-dark/95 backdrop-blur-md border border-bio-blue/20`. Mobile: hamburger toggling a slide-in panel.

### Slide System
Each lecture page renders a `SlideManager` that shows one `.slide` at a time. The fixed `.slide-navigation` bar contains: prev/next arrow buttons, slide indicators (dots, active = blue pill), and a slide counter. Slides scroll internally when content overflows — use `.slide-scrollbar` for styled scrollbars.

### `<SlideTitle>` + `<GradientText>`
The canonical heading component for all slide titles. Always use it instead of raw `<h1>`/`<h2>`. `GradientText` variants: `default` (blue), `purple`, `green`, `yellow`.

### `<ConceptCard>`
White-bg-5 glassmorphism box with colored left border based on `variant`: `default` (white/10), `highlight` (bio-blue/50), `warning` (yellow/50), `success` (green/50). Icon rendered as large emoji before the title.

### `<StatsGrid>`
Grid of stat boxes using `.glass-dark`. Supports 2/3/4 columns. Values use accent colors; labels in `text-gray-400`.

### `<LectureCard>`
`.card` with a status badge, lecture number circle (`.lecture-number`), topic list with `▸` bullets in `text-bio-blue`, and action buttons. Three button states: Slides (primary), Notebooks (secondary), Video (secondary with yellow accent).

### Buttons
- **`.btn-primary`:** Solid bio-blue, dark text, pill. Use for the main action.
- **`.btn-secondary`:** Outlined bio-blue, pill. Use for secondary actions.
- Size override pattern: `!py-1 !px-3 text-xs` for compact card buttons.
- Yellow video button: override border and text to `border-bio-yellow text-bio-yellow hover:bg-bio-yellow hover:text-bio-dark`.

### Code Blocks
`.code-block` for Python source, `.output-block` for stdout/results. Code blocks use `font-mono text-sm` with `whitespace-pre-wrap`. Output blocks have `border-l-4 border-l-bio-light-blue`. Never put output inside a code block — they are semantically different.

### Status Badges
Three variants: `.badge-available` (green), `.badge-coming-soon` (orange), `.badge-under-construction` (yellow). Always placed before the title in a card.

### Bio Note / Exercise Box
- `.bio-note` — green left border, green-tinted background. For biological context.
- `.exercise-box` — yellow border + yellow-tinted bg. For student tasks.

## Do's and Don'ts

**Do:**
- Use `text-gradient` for primary section headings and `<SlideTitle>` content
- Use `glass-dark` for all floating surfaces (nav, dropdowns, cards)
- Apply `rounded-full` to all buttons without exception
- Keep the slide navigation bar fixed at `bottom-0` — never move it
- Use `▸` as the list bullet character in topic lists
- Use `border-l-4` accents on concept and output blocks, not full borders

**Don't:**
- Don't use `bio-blue` for decorative non-interactive elements — it signals interactivity
- Don't mix the code font into UI text or the UI font into code blocks
- Don't apply `text-gradient` or `text-gradient-purple` to body copy or labels
- Don't use the DNA colors (`dna-start`, `dna-stop`) outside DNA visualisation contexts
- Don't add `backdrop-blur` to elements inside the slide system — performance degrades on older tablets
- Don't create new accent colors — extend one of the existing semantic color roles instead
- Don't use square or `rounded-md` buttons — pill shape is the system rule
