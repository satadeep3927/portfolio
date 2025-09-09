import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface FrontMatter {
  title: string
  company?: string
  start?: string
  end?: string
  journal?: string
  pdf?: string
  doi?: string
  authors?: string
  github?: string
  demo?: string
  tech?: string[]
  description?: string
  date?: string
}

export interface ContentItem {
  slug: string
  frontMatter: FrontMatter
  content: string
}

export function getContentByType(type: 'experience' | 'projects' | 'research'): ContentItem[] {
  const typeDirectory = path.join(contentDirectory, type)
  
  if (!fs.existsSync(typeDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(typeDirectory)
  
  const content = filenames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const filePath = path.join(typeDirectory, name)
      const source = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(source)
      
      return {
        slug: name.replace(/\.mdx$/, ''),
        frontMatter: data as FrontMatter,
        content,
      }
    })
    .sort((a, b) => {
      // Sort by date (newest first), fallback to start date, then title
      const dateA = a.frontMatter.date || a.frontMatter.start || '0000-01'
      const dateB = b.frontMatter.date || b.frontMatter.start || '0000-01'
      
      // Convert to comparable format and sort in descending order (newest first)
      const timeA = new Date(dateA + '-01').getTime() // Add day if missing
      const timeB = new Date(dateB + '-01').getTime()
      
      if (timeB !== timeA) {
        return timeB - timeA // Newest first
      }
      
      // If dates are equal, sort by title alphabetically
      return a.frontMatter.title.localeCompare(b.frontMatter.title)
    })

  return content
}

export function getAllContent() {
  return {
    experience: getContentByType('experience'),
    projects: getContentByType('projects'),
    research: getContentByType('research'),
  }
}
