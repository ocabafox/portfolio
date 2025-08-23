import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux/Zustand"]
  },
  {
    category: "Backend", 
    items: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Services",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"]
  }
];

const experience = [
  {
    company: "Tech Company",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    description: [
      "Led development of modern web applications using React and Next.js",
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    company: "Startup Inc",
    position: "Full Stack Developer", 
    period: "2020 - 2022",
    description: [
      "Built and maintained full-stack applications using MEAN stack",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team to create pixel-perfect UI components"
    ]
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 4+ years of experience building modern web applications
            that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="h-80 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Your Photo</span>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:your.email@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I started my journey in web development 4 years ago, driven by curiosity 
                  about how digital products work. What began as a hobby quickly became my passion.
                </p>
                <p>
                  Today, I specialize in creating modern, responsive web applications using 
                  React, Next.js, and TypeScript. I believe in writing clean, maintainable 
                  code and creating exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or sharing my knowledge through 
                  blog posts and mentoring.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="/resume.pdf" download>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline">Get In Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            <p className="text-muted-foreground">
              Technologies and tools I work with regularly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="p-3 border rounded-lg bg-card">
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Experience</h2>
            <p className="text-muted-foreground">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-6 pb-8 last:pb-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
