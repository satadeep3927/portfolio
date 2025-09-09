import { useState } from "react";
import Head from "next/head";
import { Fira_Code } from "next/font/google";
import { getAllContent } from "@/lib/mdx";
import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import { Badge } from "@/components/retroui/Badge";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Download,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { GetStaticProps } from "next";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface ContentItem {
  frontMatter: {
    title: string;
    company?: string;
    start?: string;
    end?: string;
    description?: string;
    tech?: string[];
    github?: string;
    demo?: string;
    journal?: string;
    authors?: string;
    pdf?: string;
    doi?: string;
  };
  content: string;
}

interface HomeProps {
  experience: ContentItem[];
  projects: ContentItem[];
  research: ContentItem[];
}

export default function Home({ experience, projects, research }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedProjects, setExpandedProjects] = useState<{
    [key: number]: boolean;
  }>({});
  const projectsPerPage = 4;

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const toggleExpanded = (index: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text: string, limit: number = 200) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };
  const handleExportCV = async () => {
    try {
      // Download the pre-generated CV HTML file
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = "/resume/Satadeep_Dasgupta_CV.pdf";
      a.download = "Satadeep_Dasgupta_CV.pdf";
      a.target = "_blank"; // Open in new tab so users can print to PDF
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  return (
    <>
      <Head>
        <title>
          Satadeep Dasgupta - Full-Stack Developer & Solution Architect
        </title>
        <meta
          name="description"
          content="Dynamic Full-Stack Developer with 5+ years of experience in React, Node.js, Rust, and C++. Currently working as Solution Architect at Brainium Information Technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${firaCode.variable} font-mono min-h-screen`}>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Retro Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)
            `,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                SATADEEP
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                DASGUPTA
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Dynamic Full-Stack Developer with 5+ years of experience
              designing, developing, and managing complex web applications.
              Specializing in React, Node.js, Rust, and C++ to create scalable
              and efficient software solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" onClick={handleExportCV}>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 flex items-center gap-2 font-mono text-sm">
                <span className="text-green-400">$</span>
                <span className="text-gray-300">satadeep@dev:~</span>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <Button
                variant="link"
                size="icon"
                className="hover:text-yellow-400"
                asChild
              >
                <a
                  href="https://github.com/satadeep3927"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button
                variant="link"
                size="icon"
                className="hover:text-yellow-400"
                asChild
              >
                <a
                  href="https://linkedin.com/in/satadeep-dasgupta-028291188"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button
                variant="link"
                size="icon"
                className="hover:text-yellow-400"
                asChild
              >
                <a href="mailto:satadeep3927@gmail.com">
                  <Mail className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-yellow-500">&gt;</span> SKILLS.json
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Programming Languages */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-yellow-400">
                  Languages
                </h3>
                <div className="space-y-3">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Rust",
                    "C++",
                    "Python",
                    "Java",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Frameworks */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-yellow-400">
                  Technologies
                </h3>
                <div className="space-y-3">
                  {[
                    "Full-Stack Development",
                    "Mobile Development",
                    "Flutter",
                    "React Native",
                    "System Programming",
                    "Performance Optimization",
                    "Backend Development",
                    "Frontend Development",
                    "Software Architecture",
                    "API Design",
                    "Database Management",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spoken Languages */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-yellow-400">
                  Spoken Languages
                </h3>
                <div className="space-y-3">
                  {["English", "Bengali", "Hindi"].map((lang) => (
                    <div key={lang} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-yellow-500">&gt;</span> EXPERIENCE.log
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="w-full">
                  <Card.Header>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <Card.Title className="text-xl">
                          {exp.frontMatter.title}
                        </Card.Title>
                        <Card.Description className="text-yellow-400 font-semibold text-lg">
                          {exp.frontMatter.company}
                        </Card.Description>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-yellow-400 whitespace-nowrap">
                        <Calendar className="w-4 h-4" />
                        {exp.frontMatter.start} - {exp.frontMatter.end}
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Content>
                    <div className="text-gray-300 space-y-2">
                      {exp.content
                        .split("\n")
                        .map((line: string, lineIndex: number) => (
                          <div key={lineIndex}>{line}</div>
                        ))}
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-yellow-500">&gt;</span> PROJECTS/
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => {
                const globalIndex = startIndex + index;
                const isExpanded = expandedProjects[globalIndex];
                const content = isExpanded
                  ? project.content
                  : truncateText(project.content);

                return (
                  <Card key={globalIndex}>
                    <Card.Header>
                      <Card.Title>{project.frontMatter.title}</Card.Title>
                      <Card.Description>
                        {project.frontMatter.description}
                      </Card.Description>
                    </Card.Header>
                    <Card.Content>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.frontMatter.tech?.map((tech: string) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-gray-300 text-sm space-y-2">
                          {content
                            .split("\n")
                            .map((line: string, lineIndex: number) => (
                              <div key={lineIndex}>{line}</div>
                            ))}
                        </div>
                        {project.content.length > 200 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleExpanded(globalIndex)}
                            className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            {isExpanded ? "Read Less" : "Read More"}
                          </Button>
                        )}
                        <div className="flex gap-4 pt-4">
                          {project.frontMatter.github && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.frontMatter.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.frontMatter.demo && (
                            <Button size="sm" asChild>
                              <a
                                href={project.frontMatter.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card.Content>
                  </Card>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={
                          currentPage === page
                            ? "bg-yellow-400 text-black hover:bg-yellow-500"
                            : "text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black"
                        }
                      >
                        {page}
                      </Button>
                    ),
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Research Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-yellow-500">&gt;</span> RESEARCH &
              PUBLICATIONS.log
            </h2>
            <div className="space-y-8">
              {research.map((paper, index) => (
                <Card key={index}>
                  <Card.Header>
                    <Card.Title className="text-xl">
                      {paper.frontMatter.title}
                    </Card.Title>
                    <Card.Description className="text-yellow-400">
                      <span className="font-semibold">
                        {paper.frontMatter.journal}
                      </span>
                      {paper.frontMatter.authors && (
                        <span className="block text-sm text-gray-400 mt-1">
                          Authors: {paper.frontMatter.authors}
                        </span>
                      )}
                    </Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <div className="space-y-4">
                      <div className="text-gray-300 space-y-3">
                        {paper.content
                          .split("\n")
                          .map((line: string, lineIndex: number) => (
                            <div key={lineIndex}>{line}</div>
                          ))}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {paper.frontMatter.pdf && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={paper.frontMatter.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Read Paper
                            </a>
                          </Button>
                        )}
                        {paper.frontMatter.doi && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={`https://doi.org/${paper.frontMatter.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              DOI Link
                            </a>
                          </Button>
                        )}
                        {paper.frontMatter.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={paper.frontMatter.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & CV Export Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              <span className="text-yellow-500">&gt;</span> CONTACT.sh
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let&apos;s build something amazing together!
            </p>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-yellow-400">
                  Get In Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-yellow-500" />
                    <a
                      href="mailto:satadeep3927@gmail.com"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      satadeep3927@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-yellow-500">📱</span>
                    <span>+91 6289877656</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-yellow-500">📍</span>
                    <span>Kolkata, West Bengal, India</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-yellow-400">
                  Social Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/satadeep3927"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
                  >
                    <Github className="w-5 h-5 text-yellow-500" />
                    GitHub Profile
                  </a>
                  <a
                    href="https://linkedin.com/in/satadeep-dasgupta-028291188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-yellow-500" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-yellow-500/30">
              <Button
                onClick={handleExportCV}
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400"
              >
                <Download className="w-5 h-5 mr-2" />
                EXPORT CV
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-yellow-500/30 text-center">
          <p className="text-yellow-400">© 2025 Satadeep Dasgupta</p>
        </footer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { experience, projects, research } = getAllContent();

  return {
    props: {
      experience,
      projects,
      research,
    },
  };
};
