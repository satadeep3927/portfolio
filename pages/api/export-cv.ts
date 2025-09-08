import { NextApiRequest, NextApiResponse } from 'next'
import PDFDocument from 'pdfkit'
import { getAllContent } from '@/lib/mdx'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { experience, projects, research } = getAllContent()
    
    // Create PDF document
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 50, bottom: 50, left: 50, right: 50 }
    })

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="Satadeep_Dasgupta_CV.pdf"')

    // Pipe PDF to response
    doc.pipe(res)

    // Header
    doc.fontSize(24)
       .fillColor('#000000')
       .text('SATADEEP DASGUPTA', 50, 50, { align: 'center' })
    
    doc.fontSize(12)
       .text('Full-Stack Developer & AR Researcher', 50, 80, { align: 'center' })
       .text('Kolkata, India', 50, 95, { align: 'center' })
    
    // Add a line separator
    doc.moveTo(50, 115)
       .lineTo(545, 115)
       .stroke()

    let yPosition = 140

    // About Section
    doc.fontSize(16)
       .fillColor('#000000')
       .text('ABOUT', 50, yPosition)
    
    yPosition += 25
    doc.fontSize(10)
       .text('Passionate full-stack developer and AR researcher with expertise in building modern web applications and cutting-edge augmented reality solutions. Experienced in React, Next.js, TypeScript, and computer vision technologies.', 50, yPosition, { width: 495 })
    
    yPosition += 60

    // Skills Section
    doc.fontSize(16)
       .text('TECHNICAL SKILLS', 50, yPosition)
    
    yPosition += 25
    doc.fontSize(10)
       .text('Frontend: React, Next.js, TypeScript, Tailwind CSS', 50, yPosition)
    yPosition += 15
    doc.text('Backend: Node.js, Python, Rust, PostgreSQL', 50, yPosition)
    yPosition += 15
    doc.text('AR/CV: OpenCV, ARCore, Computer Vision, Machine Learning', 50, yPosition)
    
    yPosition += 40

    // Experience Section
    doc.fontSize(16)
       .text('PROFESSIONAL EXPERIENCE', 50, yPosition)
    
    yPosition += 25
    
    experience.forEach((exp) => {
      if (yPosition > 700) {
        doc.addPage()
        yPosition = 50
      }
      
      doc.fontSize(12)
         .fillColor('#000000')
         .text(exp.frontMatter.title, 50, yPosition)
      
      doc.fontSize(10)
         .fillColor('#666666')
         .text(`${exp.frontMatter.company} | ${exp.frontMatter.start} - ${exp.frontMatter.end}`, 50, yPosition + 15)
      
      yPosition += 35
      
      // Clean and format content
      const cleanContent = exp.content
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
        .replace(/- /g, '• ') // Convert dashes to bullets
        .split('\n')
        .filter((line: string) => line.trim())
      
      cleanContent.forEach((line: string) => {
        if (yPosition > 720) {
          doc.addPage()
          yPosition = 50
        }
        doc.fontSize(9)
           .fillColor('#000000')
           .text(line.trim(), 50, yPosition, { width: 495 })
        yPosition += 12
      })
      
      yPosition += 20
    })

    // Projects Section
    if (yPosition > 600) {
      doc.addPage()
      yPosition = 50
    }
    
    doc.fontSize(16)
       .fillColor('#000000')
       .text('KEY PROJECTS', 50, yPosition)
    
    yPosition += 25
    
    projects.forEach((project) => {
      if (yPosition > 700) {
        doc.addPage()
        yPosition = 50
      }
      
      doc.fontSize(12)
         .fillColor('#000000')
         .text(project.frontMatter.title, 50, yPosition)
      
      doc.fontSize(9)
         .fillColor('#666666')
         .text(project.frontMatter.description || '', 50, yPosition + 15, { width: 495 })
      
      yPosition += 35
      
      if (project.frontMatter.tech) {
        doc.fontSize(9)
           .fillColor('#000000')
           .text(`Technologies: ${project.frontMatter.tech.join(', ')}`, 50, yPosition)
        yPosition += 15
      }
      
      yPosition += 15
    })

    // Research Section
    if (research.length > 0) {
      if (yPosition > 600) {
        doc.addPage()
        yPosition = 50
      }
      
      doc.fontSize(16)
         .fillColor('#000000')
         .text('RESEARCH PUBLICATIONS', 50, yPosition)
      
      yPosition += 25
      
      research.forEach((paper) => {
        if (yPosition > 700) {
          doc.addPage()
          yPosition = 50
        }
        
        doc.fontSize(12)
           .fillColor('#000000')
           .text(paper.frontMatter.title, 50, yPosition)
        
        doc.fontSize(9)
           .fillColor('#666666')
           .text(paper.frontMatter.journal || '', 50, yPosition + 15)
        
        yPosition += 40
      })
    }

    // Contact Section
    if (yPosition > 650) {
      doc.addPage()
      yPosition = 50
    }
    
    doc.fontSize(16)
       .fillColor('#000000')
       .text('CONTACT', 50, yPosition)
    
    yPosition += 25
    doc.fontSize(10)
       .text('Email: satadeep.dasgupta@email.com', 50, yPosition)
    yPosition += 15
    doc.text('GitHub: github.com/satadeep', 50, yPosition)
    yPosition += 15
    doc.text('LinkedIn: linkedin.com/in/satadeep-dasgupta', 50, yPosition)

    // Finalize PDF
    doc.end()
    
  } catch (error) {
    console.error('Error generating PDF:', error)
    res.status(500).json({ message: 'Error generating PDF' })
  }
}
