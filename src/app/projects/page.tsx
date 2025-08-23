import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    image: "/placeholder-project.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder-project.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/username/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "/placeholder-project.jpg",
    tags: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    githubUrl: "https://github.com/username/weather-app",
    liveUrl: "https://weather-demo.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, syntax highlighting, and SEO optimization.",
    image: "/placeholder-project.jpg",
    tags: ["Next.js", "MDX", "Prisma", "SQLite", "Vercel"],
    githubUrl: "https://github.com/username/blog",
    liveUrl: "https://blog-demo.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "This portfolio website showcasing my projects, skills, and experience with modern design and animations.",
    image: "/placeholder-project.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio-demo.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "API Documentation Tool",
    description: "An interactive API documentation generator with live testing capabilities and beautiful UI.",
    image: "/placeholder-project.jpg",
    tags: ["React", "TypeScript", "OpenAPI", "Monaco Editor"],
    githubUrl: "https://github.com/username/api-docs",
    liveUrl: "https://api-docs-demo.vercel.app",
    featured: false
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <section className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects I've built to solve problems and explore new technologies.
          Each project represents a learning journey and a step forward in my development.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Project Screenshot</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="h-40 bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Screenshot</span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 border-t mt-20">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Interested in working together?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Link href="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
