# 🚀 Retro Developer Portfolio

A modern, retro-themed developer portfolio built with Next.js, featuring MDX content management and CLI-based CV generation.

## 🌟 Features

- **Retro Dark Theme**: Classic terminal-inspired design with yellow accents
- **MDX Content**: Dynamic content management for experience, projects, and research
- **RetroUI Components**: Custom components built with shadcn/ui
- **CV Export**: Pre-generated HTML CV with print-to-PDF capability
- **Responsive Design**: Optimized for all device sizes
- **Fast Performance**: Powered by Next.js 15 with Turbopack

## 🏗️ Project Structure

```
📁 portfolio/
├── 📁 content/           # MDX content files
│   ├── experience/       # Work experience entries
│   ├── projects/         # Project showcases
│   └── research/         # Research papers
├── 📁 pages/            # Next.js pages
│   ├── index.tsx        # Main portfolio page
│   └── api/             # API routes
├── 📁 resume/           # CV source files
│   └── resume.md        # Markdown resume source
├── 📁 scripts/          # Build utilities
│   └── generate-cv.js   # CV generation script
├── 📁 public/           # Static assets
│   └── resume/          # Generated CV files
└── 📁 styles/           # Global styles
```

## 🚀 Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Start development server:**

```bash
npm run dev
```

3. **Generate CV:**

```bash
npm run generate-cv
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Content Management

### Adding Experience

Create new `.mdx` files in `content/experience/`:

```mdx
---
title: "Your Role"
company: "Company Name"
start: "2024"
end: "Present"
---

- Key achievement 1
- Key achievement 2
```

### Adding Projects

Create new `.mdx` files in `content/projects/`:

```mdx
---
title: "Project Name"
description: "Brief description"
tech: ["React", "TypeScript"]
github: "https://github.com/user/repo"
demo: "https://demo-url.com"
---

Detailed project description...
```

### Adding Research

Create new `.mdx` files in `content/research/`:

```mdx
---
title: "Paper Title"
journal: "Conference/Journal"
year: "2024"
pdf: "https://example.com/paper.pdf"
doi: "10.1000/example"
---

Abstract content...
```

## 🎨 Styling

- **Framework**: Tailwind CSS v4
- **Components**: shadcn/ui with custom RetroUI theme
- **Typography**: Fira Code monospace font
- **Colors**: Dark theme with yellow (#FBD700) accents

## 📄 CV Generation

The portfolio includes a CLI-based CV generation system:

1. **Source**: `resume/resume.md` (Markdown format)
2. **Output**: `public/resume/Satadeep_Dasgupta_CV.html`
3. **Usage**: Click "EXPORT CV" button on the portfolio or run `npm run generate-cv`

### CV Workflow:

1. Edit `resume/resume.md` with your information
2. Run `npm run generate-cv` to generate HTML
3. Portfolio automatically links to the generated file
4. Users can print to PDF from their browser

## 🚢 Deployment

The portfolio is designed for deployment on Vercel:

1. **Connect repository** to Vercel
2. **Build settings**: Next.js (automatic)
3. **Environment**: No special variables needed
4. **Build command**: `npm run build`

### Pre-deployment:

```bash
# Generate CV before deployment
npm run generate-cv

# Build project
npm run build
```

## 🛠️ Technologies

- **Next.js 15.5.2** - React framework with Turbopack
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **MDX** - Markdown with JSX components
- **shadcn/ui** - Modern UI components
- **Lucide React** - Icon library

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
