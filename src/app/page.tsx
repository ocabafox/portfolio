import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Screenrights",
    description: "I contributed to Screenrights, a rights and royalty management platform for the screen industry. The system supports educators, government, and broadcasters in Australia and New Zealand by enabling licensed access to broadcast content. My work involved building and improving features that streamline royalty distribution, rights management, and industry services such as collection account management, residuals, and global royalty tracking.",
    image: "/images/screenrights-logo.svg",
    tech: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'AWS', 'Git', 'Figma', 'Unit Testing', 'React Redux', 'Agile Development', 'React Query', 'React Hook Form', 'Retool'],
  },
  {
    title: 'Websta.me',
    description: 'A high-performance Instagram web viewer built with Go and Gin framework, featuring real-time content aggregation and caching. Implemented efficient data scraping algorithms with rate limiting, Redis-based session management, and PostgreSQL for persistent storage. The application utilized Docker containerization for scalable deployment and CI/CD pipelines for automated testing and deployment workflows.',
    image: "/images/websta_logo.png",
    tech: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Docker', 'Git', 'Agile Development', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'KomBea',
    description: 'Develops customer interaction and call center automation solutions. My work involved building and maintaining scalable web applications, integrating APIs for real-time communication, and implementing secure compliance-driven features. I focused on improving system performance, enhancing automation workflows, and contributing to a robust, cloud-ready architecture.',
    image: '/images/kombea.svg',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git', 'Figma', 'React Redux', 'Agile Development'],
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left Side - Frontend */}
            <div className="text-left space-y-6">
              <div className="space-y-2">
                <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-100 dark:bg-clip-text dark:text-transparent">
                  Frontend
                </h2>
                <p className="text-lg text-muted-foreground max-w-sm">
                  Crafting beautiful, responsive user interfaces with modern web technologies
                </p>
              </div>
              <div className="space-y-2 text-sm font-mono text-muted-foreground">
                <div>&lt;React&gt;</div>
                <div className="pl-4">TypeScript</div>
                <div className="pl-4">Next.js</div>
                <div>&lt;/Tailwind&gt;</div>
                <div>CSS • HTML5</div>
              </div>
            </div>

            {/* Right Side - Backend */}
            <div className="text-right space-y-6">
              <div className="space-y-2">
                <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-700 via-gray-800 to-zinc-900 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-gray-100 dark:to-gray-100 dark:bg-clip-text dark:text-transparent">
                  Backend
                </h2>
                <p className="text-lg text-muted-foreground max-w-sm ml-auto">
                  Building robust APIs and scalable server architectures with clean code
                </p>
              </div>
              <div className="space-y-2 text-sm font-mono text-muted-foreground text-right">
                <div>Node.js {'{}'}</div>
                <div className="pr-4">Nest.js</div>
                <div className="pr-4">PostgreSQL</div>
                <div>API • REST</div>
                <div>Docker</div>
              </div>
            </div>
          </div>

          {/* Center Profile Image */}
          <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative float-animation">
              {/* Pulse rings */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-blue-400 pulse-ring"></div>
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-purple-400 pulse-ring animation-delay-1000"></div>
              
              {/* Profile Image Container */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl relative">
                {/* Base Profile Image */}
                <img
                  src="/images/my-profile-picture.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -top-8 -right-8 w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-500 opacity-60"></div>
              <div className="absolute -bottom-6 -left-8 w-5 h-5 bg-green-500 rounded-full animate-bounce delay-1000 opacity-60"></div>
              <div className="absolute -bottom-8 -right-6 w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-1500 opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Introduction Text */}
        <div className="text-center space-y-6 mt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ricky
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack developer passionate about creating innovative solutions 
            that make a difference. I build modern web applications with clean code 
            and exceptional user experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link href="/projects">
            <Button size="lg">View Projects</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">Get In Touch</Button>
          </Link>
          <a href="/resume.pdf" download>
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </a>
        </div>

        <div className="flex gap-6 pt-8">
          <Link href="https://github.com/ocabafox" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/ricky-ocaba-5b6238125/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:ocaba.ricky@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 border-t">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Technologies I Use</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I work with modern technologies to build scalable and performant applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "React", "Next.js", "TypeScript", "Node.js", "Nest.js", "PostgreSQL",
            "Tailwind CSS", "AWS", "Docker", "Git", "Figma", "Go", "GraphQL", 
            "Unit Testing", "CI/CD", "MERN", "React Redux", "Agile Development", 
            "React Query", "React Hook Form", "Retool", "ContentLayer", "MongoDB",
            "Express.js", "REST APIs", "Jest", "Cypress", "GitHub Actions", "Vercel",
            "Zustand", "Vite", "MySQL", "ESLint", "Prettier", "Postman"
          ].map((tech) => (
            <div key={tech} className="flex items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow">
              <span className="font-medium text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 border-t">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.title} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link href="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
