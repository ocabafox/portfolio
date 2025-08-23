import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock blog post data - in a real app, this would come from your CMS or MDX files
const blogPosts = {
  "building-scalable-react-apps": {
    title: "Building Scalable React Applications: Best Practices and Patterns",
    description: "Learn how to structure React applications for long-term maintainability and scalability.",
    date: "2024-01-15",
    readTime: 8,
    tags: ["React", "Architecture", "Best Practices"],
    content: `
# Building Scalable React Applications: Best Practices and Patterns

Building applications that can grow and adapt over time is one of the biggest challenges in modern web development. In this article, we'll explore proven patterns and practices for creating React applications that remain maintainable as they scale.

## Component Architecture

The foundation of any scalable React application is a well-thought-out component architecture. Here are the key principles I follow:

### 1. Single Responsibility Principle

Each component should have one clear purpose. This makes components easier to test, debug, and reuse.

\`\`\`jsx
// Good: Single responsibility
function UserAvatar({ user, size = "medium" }) {
  return (
    <img 
      src={user.avatar} 
      alt={user.name}
      className={\`avatar avatar-\${size}\`}
    />
  );
}

// Better: Even more focused
function AvatarImage({ src, alt, size }) {
  return (
    <img 
      src={src} 
      alt={alt}
      className={\`avatar avatar-\${size}\`}
    />
  );
}
\`\`\`

### 2. Composition Over Inheritance

React's composition model is powerful. Instead of creating complex inheritance hierarchies, compose smaller components together.

\`\`\`jsx
// Good: Using composition
function Card({ children, title, actions }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}
\`\`\`

## State Management Strategy

As applications grow, state management becomes increasingly important. Here's my approach:

### 1. Start with Local State

Don't reach for global state management tools immediately. React's built-in state is often sufficient.

\`\`\`jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Local state is perfect for component-specific data
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'active') return !todo.completed;
      return true;
    });
  }, [todos, filter]);
  
  return (
    // ... component JSX
  );
}
\`\`\`

### 2. Lift State Up When Needed

When multiple components need to share state, lift it to their common ancestor.

### 3. Consider Global State for Truly Global Data

Use tools like Zustand or Redux only for data that truly needs to be global (user authentication, theme, etc.).

## Performance Optimization

Performance is crucial for scalability. Here are the techniques I use:

### 1. Memoization

Use \`React.memo\`, \`useMemo\`, and \`useCallback\` strategically:

\`\`\`jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data, onUpdate }) {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: heavyComputation(item)
    }));
  }, [data]);
  
  const handleUpdate = useCallback((id, newValue) => {
    onUpdate(id, newValue);
  }, [onUpdate]);
  
  return (
    // ... component JSX
  );
});
\`\`\`

### 2. Code Splitting

Split your code at the route level and for heavy components:

\`\`\`jsx
import { lazy, Suspense } from 'react';

const DashboardPage = lazy(() => import('./pages/Dashboard'));
const SettingsPage = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
\`\`\`

## Testing Strategy

A scalable application needs a comprehensive testing strategy:

### 1. Unit Tests for Utilities

Test pure functions and utility methods thoroughly.

### 2. Component Tests

Test component behavior, not implementation details:

\`\`\`jsx
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

test('marks todo as completed when clicked', () => {
  const todo = { id: 1, text: 'Test todo', completed: false };
  const onToggle = jest.fn();
  
  render(<TodoItem todo={todo} onToggle={onToggle} />);
  
  fireEvent.click(screen.getByRole('checkbox'));
  
  expect(onToggle).toHaveBeenCalledWith(1);
});
\`\`\`

### 3. Integration Tests

Test how components work together, especially for critical user flows.

## Conclusion

Building scalable React applications is about making thoughtful architectural decisions early and consistently applying best practices. Focus on:

- Clear component boundaries and responsibilities
- Appropriate state management strategies
- Performance optimization where it matters
- Comprehensive testing coverage

Remember, scalability isn't just about handling more users—it's about maintaining code quality as your team and codebase grow.

---

*Have questions about React architecture or want to share your own experiences? Feel free to reach out to me on [Twitter](https://twitter.com) or [LinkedIn](https://linkedin.com).*
`
  },
  // Add more blog posts here...
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
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
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }

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
          <div 
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            className="space-y-6"
          />
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
