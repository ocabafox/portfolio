import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock blog posts data
const blogPosts = [
  {
    slug: "building-scalable-react-apps",
    title: "Building Scalable React Applications: Best Practices and Patterns",
    description: "Learn how to structure React applications for long-term maintainability and scalability. We'll cover component architecture, state management, and performance optimization techniques.",
    date: "2024-01-15",
    readTime: 8,
    tags: ["React", "Architecture", "Best Practices"],
    featured: true
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization: From Good to Great",
    description: "Dive deep into Next.js performance optimization techniques including image optimization, code splitting, and server-side rendering strategies.",
    date: "2024-01-08",
    readTime: 12,
    tags: ["Next.js", "Performance", "Web Development"],
    featured: true
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Better Code Quality",
    description: "Explore advanced TypeScript features and patterns that can help you write more type-safe and maintainable code in your projects.",
    date: "2024-01-01",
    readTime: 10,
    tags: ["TypeScript", "Programming", "Code Quality"],
    featured: false
  },
  {
    slug: "api-design-best-practices",
    title: "RESTful API Design: Best Practices and Common Pitfalls",
    description: "A comprehensive guide to designing robust and user-friendly APIs, covering everything from resource naming to error handling.",
    date: "2023-12-20",
    readTime: 15,
    tags: ["API", "Backend", "Best Practices"],
    featured: false
  },
  {
    slug: "css-grid-mastery",
    title: "Mastering CSS Grid: Layout Techniques for Modern Web Design",
    description: "Learn how to create complex, responsive layouts with CSS Grid. Includes practical examples and real-world use cases.",
    date: "2023-12-10",
    readTime: 6,
    tags: ["CSS", "Frontend", "Layout"],
    featured: false
  },
  {
    slug: "docker-development-workflow",
    title: "Streamlining Development with Docker: A Complete Guide",
    description: "Set up efficient development environments using Docker. Learn containerization best practices and how to optimize your development workflow.",
    date: "2023-12-01",
    readTime: 11,
    tags: ["Docker", "DevOps", "Development"],
    featured: false
  }
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <section className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold">Blog & Case Studies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sharing my thoughts on web development, problem-solving approaches, 
          and lessons learned from building real-world applications.
        </p>
      </section>

      {/* Featured Posts */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Featured Image</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">{post.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" className="p-0 h-auto font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-8">All Posts</h2>
        <div className="space-y-6">
          {otherPosts.map((post) => (
            <article key={post.slug} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">{post.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline">
                    Read Post
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="text-center py-20 border-t mt-20">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Stay Updated</h2>
          <p className="text-muted-foreground">
            Get notified when I publish new articles about web development, 
            programming tips, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
