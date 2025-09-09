# 📄 Product Requirements Document (PRD)

**Product Name:** Retro Dev Portfolio
**Version:** 1.3 (Server-Side CV Export)

---

## 1. 🎯 Goal

Create a **single-page retro developer portfolio** powered by **MDX content** with a **live, server-side generated CV export** in PDF format.

---

## 2. 🌐 Tech Stack

- **Framework:** Next.js (deployed on Vercel)
- **Styling:** Tailwind CSS + ShadCN UI
- **Content:** MDX files (`/content`)
- **Assets:** Vercel Blob (images, PDFs, research papers)
- **PDF Generation:**
  - `pdfkit` or `@react-pdf/renderer` on a Next.js API Route
  - Exports structured PDF using MDX content

---

## 3. 🔑 Key Features

### 3.1 Portfolio Page (Single Page)

- **Hero** → Name, tagline (retro glow)
- **About Me** → Bio, socials
- **Skills** → Grid of categorized skills
- **Experience** → Timeline (MDX driven)
- **Projects** → Grid cards (GitHub/demo links)
- **Research Papers** → List with abstracts + Blob PDF links
- **Contact** → Email, GitHub, LinkedIn
- **Export CV Button** → Calls `/api/export-cv` → returns PDF

---

### 3.2 CV Export (Server-Side)

- **Source:** Pulls live data from MDX files (same as portfolio)
- **API Route (`/api/export-cv`)**
  - Fetch MDX data
  - Format into structured sections (About, Skills, Experience, Projects, Research)
  - Generate PDF with **consistent retro typography** (dark/yellow theme adapted to print)

- **Download:** Returns PDF with filename `Satadeep_Dasgupta_CV.pdf`

---

## 4. 📊 Data Structure

**Experience Example**

```mdx
---
title: "Software Engineer"
company: "TechCorp"
start: "2022"
end: "Present"
---

- Designed AR features with Jetpack Compose
- Built high-performance image sync in Rust
```

**Research Example**

```mdx
---
title: "Optimizing AR Marker Detection"
journal: "IEEE AR/VR 2024"
pdf: "https://blob.vercel.com/research/marker-detection.pdf"
---

Markerless AR detection improvements using ORB (OpenCV).
```

---

## 5. 📦 Integrations

- **Next.js MDX** → Load portfolio content
- **Vercel Blob** → Store research PDFs & downloadable assets
- **PDFKit** (Node) → Generate CV via API route
- **ShadCN UI** → For retro-styled UI components (cards, modals, buttons)

---

## 6. 🛠 Roadmap

1. Build MDX-driven portfolio layout
2. Add Retro Dark + Yellow theme (pixel-inspired)
3. Implement Vercel Blob for assets
4. Create `/api/export-cv` route → PDFKit formatting
5. Style CV with consistent layout & print-friendly retro look
6. Polish UI & deploy to Vercel

---

## 7. 🚀 Success Metrics

- **One source of truth:** MDX updates instantly reflect in both portfolio + CV.
- **Performance:** PDF generated <2s on serverless API route.
- **Professional Layout:** Recruiter-ready, consistent formatting.
- **Theme Consistency:** Retro dark/yellow branding respected in PDF.
