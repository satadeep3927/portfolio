# CV Generator PowerShell Script
# Generates PDF CV from Markdown using Node.js

Write-Host "📄 Generating CV from Markdown..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is available
try {
    $nodeVersion = node --version 2>$null
    if ($LASTEXITCODE -ne 0) {
        throw "Node.js not found"
    }
    Write-Host "✅ Node.js is available: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Run the CV generator
Write-Host "🚀 Running CV generator..." -ForegroundColor Cyan
try {
    node generate-cv.js
    $exitCode = $LASTEXITCODE
} catch {
    Write-Host "❌ Error running CV generator: $_" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "✅ CV generation completed!" -ForegroundColor Green
Write-Host ""

# Check what files were generated
Write-Host "Generated files:" -ForegroundColor Cyan
if (Test-Path "Satadeep_Dasgupta_CV.pdf") {
    Write-Host "  📄 Satadeep_Dasgupta_CV.pdf" -ForegroundColor Green
}
if (Test-Path "resume-temp.html") {
    Write-Host "  🌐 resume-temp.html" -ForegroundColor Green
}

Write-Host ""
Write-Host "💡 If PDF generation failed, you can:" -ForegroundColor Yellow
Write-Host "   1. Open the HTML file in a browser and print to PDF" -ForegroundColor White
Write-Host "   2. Install Pandoc from https://pandoc.org/installing.html" -ForegroundColor White
Write-Host "   3. Install Puppeteer with: npm install puppeteer" -ForegroundColor White

Write-Host ""
Read-Host "Press Enter to exit"
