import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);
  
  if (!post || !post.published) {
    notFound();
  }
  
  const MDXContent = getMDXComponent(post.body.code);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="space-y-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXContent />
        </article>

        {/* Article Footer */}
        <footer className="border-t pt-12 mt-12">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Enjoyed this article?</h3>
              <p className="text-muted-foreground">
                Follow me for more content about web development and programming.
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button>Get In Touch</Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline">Read More Posts</Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
