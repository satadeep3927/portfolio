#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Configuration
const RESUME_SOURCE = path.join(__dirname, "../resume/resume.md");
const OUTPUT_PDF = path.join(
  __dirname,
  "../public/resume/Satadeep_Dasgupta_CV.pdf",
);
const OUTPUT_HTML = path.join(__dirname, "../public/resume/resume-temp.html");

// CSS Styles for professional PDF output
const CSS_STYLES = `
<style>
  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-size: 11pt;
  }
  
  h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 0.5em;
    font-size: 24pt;
    font-weight: bold;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
  }
  
  h2 {
    color: #34495e;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 5px;
    margin-top: 1.5em;
    margin-bottom: 0.8em;
    font-size: 14pt;
  }
  
  h3 {
    color: #2980b9;
    margin-top: 1.2em;
    margin-bottom: 0.5em;
    font-size: 12pt;
  }
  
  p {
    margin-bottom: 0.8em;
    text-align: justify;
  }
  
  ul {
    margin-bottom: 1em;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 0.3em;
  }
  
  strong {
    color: #2c3e50;
    font-weight: 600;
  }
  
  em {
    font-style: italic;
    color: #7f8c8d;
  }
  
  .contact-info {
    text-align: center;
    margin-bottom: 2em;
    color: #7f8c8d;
    font-size: 10pt;
  }
  
  .section {
    margin-bottom: 1.5em;
  }
  
  .experience-item {
    margin-bottom: 1.2em;
  }
  
  .project-item {
    margin-bottom: 1em;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
    margin-bottom: 1em;
  }
  
  .skills-category {
    margin-bottom: 0.8em;
  }
  
  .skills-category strong {
    display: block;
    margin-bottom: 0.3em;
    color: #2980b9;
  }
  
  .date-range {
    font-style: italic;
    color: #7f8c8d;
    float: right;
    font-size: 10pt;
  }
  
  hr {
    border: none;
    border-top: 1px solid #bdc3c7;
    margin: 1.5em 0;
  }
  
  a {
    color: #3498db;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  @page {
    margin: 0.75in;
    size: A4;
  }
  
  @media print {
    body {
      font-size: 10pt;
      line-height: 1.4;
    }
    
    h1 {
      font-size: 18pt;
    }
    
    h2 {
      font-size: 12pt;
      page-break-after: avoid;
    }
    
    h3 {
      font-size: 11pt;
      page-break-after: avoid;
    }
    
    .experience-item,
    .project-item {
      page-break-inside: avoid;
    }
  }
</style>
`;

// Function to check if Pandoc is installed
function checkPandoc() {
  return new Promise((resolve, reject) => {
    exec("pandoc --version", (error, stdout, stderr) => {
      if (error) {
        reject(
          new Error(
            "Pandoc is not installed. Please install Pandoc first:\n" +
              "Visit: https://pandoc.org/installing.html\n" +
              "Or run: winget install JohnMacFarlane.Pandoc",
          ),
        );
      } else {
        console.log("✅ Pandoc is available");
        resolve(stdout);
      }
    });
  });
}

// Function to read and process markdown
function processMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");

    // Add HTML wrapper with styles
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Satadeep Dasgupta - CV</title>
  ${CSS_STYLES}
</head>
<body>
${content}
</body>
</html>
`;

    return htmlContent;
  } catch (error) {
    throw new Error(`Failed to read markdown file: ${error.message}`);
  }
}

// Function to convert markdown to PDF using Pandoc
function convertToPDF(inputFile, outputFile) {
  return new Promise((resolve, reject) => {
    const command = `pandoc "${inputFile}" -f markdown -t pdf -o "${outputFile}" --pdf-engine=wkhtmltopdf --css=styles.css --margin-top=0.75in --margin-bottom=0.75in --margin-left=0.75in --margin-right=0.75in`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        // Fallback to HTML-to-PDF if wkhtmltopdf is not available
        console.log("⚠️  wkhtmltopdf not found, using alternative method...");
        convertViaPuppeteer(inputFile, outputFile).then(resolve).catch(reject);
      } else {
        console.log(`✅ PDF generated successfully: ${outputFile}`);
        resolve(stdout);
      }
    });
  });
}

// Alternative conversion using Puppeteer (if available)
function convertViaPuppeteer(inputFile, outputFile) {
  return new Promise((resolve, reject) => {
    // Check if Puppeteer is available
    exec("node -e \"require('puppeteer')\"", (error) => {
      if (error) {
        // Final fallback: simple HTML conversion
        console.log("⚠️  Puppeteer not available, generating HTML version...");
        generateHTMLVersion(inputFile, outputFile.replace(".pdf", ".html"))
          .then(resolve)
          .catch(reject);
      } else {
        // Use Puppeteer for PDF generation
        const puppeteerScript = `
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const htmlContent = fs.readFileSync('${inputFile}', 'utf8');
  await page.setContent(htmlContent);
  
  await page.pdf({
    path: '${outputFile}',
    format: 'A4',
    margin: {
      top: '0.75in',
      bottom: '0.75in',
      left: '0.75in',
      right: '0.75in'
    },
    printBackground: true
  });
  
  await browser.close();
  console.log('✅ PDF generated successfully: ${outputFile}');
})();
`;

        fs.writeFileSync("temp-pdf-generator.js", puppeteerScript);
        exec("node temp-pdf-generator.js", (error, stdout, stderr) => {
          fs.unlinkSync("temp-pdf-generator.js");
          if (error) {
            reject(error);
          } else {
            resolve(stdout);
          }
        });
      }
    });
  });
}

// Generate HTML version as fallback
function generateHTMLVersion(inputFile, outputFile) {
  return new Promise((resolve, reject) => {
    try {
      const htmlContent = processMarkdown(inputFile);
      fs.writeFileSync(outputFile, htmlContent);
      console.log(`✅ HTML version generated: ${outputFile}`);
      console.log(
        "💡 You can open this in a browser and print to PDF manually",
      );
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

// Main execution function
async function generateCV() {
  try {
    console.log("🚀 Starting CV generation...");

    // Check if source file exists
    if (!fs.existsSync(RESUME_SOURCE)) {
      throw new Error(`Source file not found: ${RESUME_SOURCE}`);
    }

    // Try different conversion methods
    try {
      await checkPandoc();
      await convertToPDF(RESUME_SOURCE, OUTPUT_PDF);
    } catch (pandocError) {
      console.log("⚠️  Pandoc method failed, trying alternative...");
      await convertViaPuppeteer(RESUME_SOURCE, OUTPUT_PDF);
    }

    console.log("🎉 CV generation completed!");
  } catch (error) {
    console.error("❌ Error generating CV:", error.message);
    console.log("\n📝 Alternative options:");
    console.log("1. Install Pandoc: https://pandoc.org/installing.html");
    console.log("2. Install Puppeteer: npm install puppeteer");
    console.log("3. Use the generated HTML file and print to PDF manually");
    process.exit(1);
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
📄 CV Generator CLI

Usage: node generate-cv.js [options]

Options:
  --help, -h     Show this help message
  --version, -v  Show version information

Description:
  Converts ${RESUME_SOURCE} to PDF format using available tools.
  Falls back gracefully if dependencies are missing.

Dependencies (optional):
  - Pandoc (recommended): https://pandoc.org/installing.html
  - Puppeteer: npm install puppeteer
  
Output:
  - ${OUTPUT_PDF} (if PDF generation succeeds)
  - ${OUTPUT_HTML} (as fallback)
`);
    process.exit(0);
  }

  if (args.includes("--version") || args.includes("-v")) {
    console.log("CV Generator v1.0.0");
    process.exit(0);
  }

  generateCV();
}

module.exports = { generateCV };
