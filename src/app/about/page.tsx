import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux/Zustand", "Figma", "Vite", "Retool"]
  },
  {
    category: "Backend", 
    items: ["Node.js", "Go", "Nest.js", "PostgreSQL", "SQL/NoSQL", "RestApi", "JWT", "Auth0"]
  },
  {
    category: "Tools & Services",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest", "CI/CD", "Postman", "Storybook"]
  }
];

const experience = [
  {
    company: "Screenrights / Ray Business Technologies",
    position: "Full Stack Developer",
    period: "2022 - Present",
    description: [
      "Implemented new features and innovative solutions using React and Next.js",
      "Optimized application performance through efficient code refactoring and bug fixes",
      "Set up and configured frontend architecture and development workflows",
      "Provided technical feasibility analysis and feedback for proposed features",
      "Built and maintained full-stack applications using modern tech stack",
      "Collaborated with cross-functional teams to deliver pixel-perfect UI components",
      "Developed and maintained scalable and maintainable codebase",
    ]
  },
  {
    company: "KomBea",
    position: "Frontend Developer", 
    period: "2020 - 2022",
    description: [
      "Built and maintained scalable web applications using React, TypeScript, and Node.js",
      "Integrated APIs for real-time communication and customer interaction systems",
      "Implemented secure compliance-driven features for call center automation solutions",
      "Improved system performance and enhanced automation workflows",
      "Contributed to robust, cloud-ready architecture development",
      "CI/CD pipelines with GitHub Actions for automated testing and deployment",
      "Collaborated with design team using Figma to create pixel-perfect UI components",
      "Utilized React Redux for state management in complex applications",
    ]
  },
     {
     company: "A-FIS PTE.LTD.",
     position: "Full Stack Developer", 
     period: "2015 - 2020",
     description: [
       "Built high-performance web applications using Go and Gin framework",
       "Implemented efficient data scraping algorithms with rate limiting mechanisms",
       "Developed Redis-based session management and caching solutions",
       "Designed and maintained PostgreSQL databases for persistent storage",
       "Utilized Docker containerization for scalable deployment architectures",
       "Implemented CI/CD pipelines with GitHub Actions for automated testing and deployment",
       "Built real-time content aggregation systems with optimized performance"
     ]
   }
];

const yearsOfExperience = new Date().getFullYear() - 2015;

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto space-y-12 pb-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with {yearsOfExperience}+ years of experience building modern web applications
            that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="h-80 bg-muted rounded-lg overflow-hidden">
              <img 
                src="/images/my-profile-picture.jpg" 
                alt="Ricky Ocaba - Full Stack Developer" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="flex gap-4 justify-center">
              <Link href="https://github.com/ocabafox" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/ricky-ocaba-5b6238125" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:ocaba.ricky@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over {yearsOfExperience} years of experience in software development, I've evolved from a curious 
                  developer into a versatile full-stack engineer. My journey began with a fascination 
                  for how digital solutions can transform businesses and improve user experiences.
                </p>
                <p>
                  I specialize in building scalable web applications using modern technologies like 
                  React, Next.js, TypeScript, and Go. My expertise spans from crafting intuitive 
                  frontend interfaces to architecting robust backend systems with PostgreSQL, Redis, 
                  and cloud-ready infrastructures.
                </p>
                <p>
                  Throughout my career, I've contributed to diverse projects - from rights management 
                  platforms serving the entertainment industry to customer interaction systems and 
                  high-performance web applications. I'm passionate about writing clean, maintainable 
                  code and implementing innovative solutions that drive real business value.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring emerging technologies, optimizing system 
                  performance, and collaborating with cross-functional teams to deliver exceptional 
                  digital experiences.
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
