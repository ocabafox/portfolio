import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function Blog() {
  // Filter published posts and sort by date
  const publishedPosts = allPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const featuredPosts = publishedPosts.filter(post => post.featured);
  const otherPosts = publishedPosts.filter(post => !post.featured);

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
                    <Link href={post.url}>
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

                <Link href={post.url}>
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
                    <Link href={post.url}>
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
                
                <Link href={post.url}>
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
