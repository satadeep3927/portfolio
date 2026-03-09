# CV Generation System

This portfolio includes both Markdown and HTML versions of the CV with professional styling.

## 📄 Available Formats

### 1. **HTML CV** (Recommended)

- **File**: `public/resume/Satadeep_Dasgupta_CV.html`
- **Features**:
  - Professional retro-themed design matching portfolio
  - Print-optimized layout for PDF export
  - Modern two-column layout
  - ATS-friendly structure
  - Clean typography with proper visual hierarchy

### 2. **Markdown CV**

- **File**: `resume/Satadeep_Dasgupta_CV.md`
- **Features**:
  - Plain text format
  - Easy to edit and version control
  - Can be converted to PDF via script

## 🚀 Generating PDF

### Method 1: From HTML (Best Quality)

**Prerequisites**: Install Puppeteer

```bash
npm install puppeteer
```

**Generate PDF**:

```bash
node scripts/generate-cv.js
```

This will create: `public/resume/Satadeep_Dasgupta_CV.pdf`

### Method 2: Manual Print-to-PDF

1. Open `public/resume/Satadeep_Dasgupta_CV.html` in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF"
4. Adjust margins to "None" or "Minimum"
5. Enable "Background graphics"
6. Save as `Satadeep_Dasgupta_CV.pdf`

### Method 3: Using Pandoc (Markdown only)

**Prerequisites**: Install Pandoc

```bash
# Windows
winget install JohnMacFarlane.Pandoc

# Mac
brew install pandoc

# Linux
sudo apt-get install pandoc
```

**Generate PDF**:

```bash
node scripts/generate-cv.js
```

## ✏️ Editing the CV

### To Update Content:

1. **Edit the HTML CV**:
   - File: `public/resume/Satadeep_Dasgupta_CV.html`
   - Update content in the HTML structure
   - Preview in browser
   - Print to PDF when satisfied

2. **Edit the Markdown CV**:
   - File: `resume/Satadeep_Dasgupta_CV.md`
   - Edit in any text editor
   - Run generation script to create PDF

### Keeping Both in Sync:

For major content changes, update both files to maintain consistency:

- HTML for professional web/PDF presentation
- Markdown for easy version control and plain text needs

## 🎨 Styling

The HTML CV uses:

- **Font**: Inter + Fira Code (monospace for headings)
- **Colors**: Retro dark theme with yellow accents (#fbbf24)
- **Layout**: Responsive two-column grid
- **Print**: Optimized for A4 paper with proper margins

## 📋 Recent Updates

### Enhanced Content (March 2026):

- ✅ Added quantifiable achievements (80% DDoS reduction, 50% faster deployments, etc.)
- ✅ Highlighted AIME platform and national leadership presentation
- ✅ Emphasized systems programming and distributed systems expertise
- ✅ Added Key Achievements section
- ✅ Professional two-column HTML layout
- ✅ Print-optimized styling

## 🔗 Integration with Portfolio

The CV is accessible from the portfolio:

- Download button in hero section
- Export CV button in contact section
- Direct link: `/resume/Satadeep_Dasgupta_CV.pdf`

## 📦 File Structure

```
portfolio/
├── resume/
│   └── Satadeep_Dasgupta_CV.md          # Markdown source
├── public/
│   └── resume/
│       ├── Satadeep_Dasgupta_CV.html    # HTML CV (styled)
│       └── Satadeep_Dasgupta_CV.pdf     # Generated PDF
└── scripts/
    └── generate-cv.js                    # PDF generation script
```

## 💡 Tips

1. **For Recruiters**: HTML CV is ATS-friendly and prints beautifully
2. **For Quick Updates**: Edit Markdown, regenerate PDF
3. **For Best Presentation**: Use HTML CV, print with background graphics enabled
4. **Version Control**: Commit both HTML and Markdown versions

## 🆘 Troubleshooting

**PDF generation fails?**

- Install Puppeteer: `npm install puppeteer`
- Or use manual print-to-PDF from browser

**Styling looks wrong in PDF?**

- Enable "Background graphics" in print dialog
- Set margins to "Minimum" or "None"
- Use Chrome/Edge for best results

**Want to customize colors?**

- Edit CSS variables in HTML CV's `<style>` section
- Adjust `--primary`, `--bg-dark`, etc.
