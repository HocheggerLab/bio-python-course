# 🧬 Python for Biologists - Course Website

This is the official course website for **Python for Biologists**, a practical programming course designed for Year 3 Biology, Biochemistry, and Neuroscience students at the University of Sussex.

🌐 **Live Site**: [python-for-biologists.vercel.app](https://python-for-biologists.vercel.app)

## 📚 About the Course

This course teaches Python programming through biological applications, requiring no prior coding experience. Students learn to:
- Automate lab calculations
- Analyze DNA/RNA sequences
- Process experimental data
- Create data visualizations
- Build practical tools for research

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HocheggerLab/python-for-biologists-website.git
cd python-for-biologists-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/                    # Next.js app router pages
│   ├── lectures/          # Lecture slide viewer pages
│   ├── notebooks/         # Notebook listing pages
│   └── under-construction/ # Placeholder for upcoming content
├── components/            # React components
│   ├── lectures/         # Lecture-specific components
│   └── slides/           # Reusable slide components
├── data/                  # Course data and content
│   └── lectures/         # Lecture slide components
├── layout/               # Layout components (Navigation, Footer)
├── public/               # Static assets
└── styles/              # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Bio-blue (#00d4ff) - Interactive elements
- **Secondary**: Bio-green (#4CAF50) - Success states
- **Accent**: Bio-yellow (#ffd700) - Highlights
- **Background**: Dark gradients (#1a1a2e to #0a0a0f)

### Components
- Glass-morphism cards with backdrop blur
- Gradient text effects
- Smooth animations and transitions
- Responsive grid layouts

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Content

1. **New Lecture**: Add to `/data/lectures.ts`
2. **New Slides**: Create components in `/data/lectures/lectureX/`
3. **New Resources**: Update `/data/resources.ts`

## 🚢 Deployment

The site automatically deploys to Vercel when changes are pushed to the main branch.

### Manual Deployment
```bash
npm run build
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Course Instructor**: Prof. Helfrid Hochegger (hh65@sussex.ac.uk)
- **Teaching Assistant**: Dr. Doran Amos (D.P.Amos@sussex.ac.uk)
- **Course Repository**: [github.com/HocheggerLab/y3-bio-python](https://github.com/HocheggerLab/y3-bio-python)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Lecture content developed by Helfrid Hochegger
- Designed for University of Sussex Life Sciences students

---

<p align="center">Made with ❤️ for biology students learning to code</p>