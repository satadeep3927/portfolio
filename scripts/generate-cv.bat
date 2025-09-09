@echo off
echo 📄 Generating CV from Markdown...
echo.

REM Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Run the CV generator
node generate-cv.js

echo.
echo ✅ CV generation completed!
echo.
echo Generated files:
if exist "Satadeep_Dasgupta_CV.pdf" (
    echo   📄 Satadeep_Dasgupta_CV.pdf
)
if exist "resume-temp.html" (
    echo   🌐 resume-temp.html
)

echo.
echo 💡 If PDF generation failed, you can:
echo    1. Open the HTML file in a browser and print to PDF
echo    2. Install Pandoc from https://pandoc.org/installing.html
echo    3. Install Puppeteer with: npm install puppeteer

pause
