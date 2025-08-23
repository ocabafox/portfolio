# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and MDX for showcasing projects, skills, and blog content.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme toggle
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Blog System**: MDX-powered blog with syntax highlighting and metadata
- **Project Showcase**: Display projects with GitHub integration capabilities
- **Contact Forms**: Professional contact page with multiple contact methods
- **Resume Download**: PDF resume download functionality
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Performance**: Optimized images, code splitting, and fast loading times

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX with Contentlayer for blog posts
- **State Management**: Zustand for theme and global state
- **Icons**: Lucide React icons
- **Typography**: Geist font family
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
├── content/               # MDX blog content
│   └── blog/             # Blog posts
├── public/               # Static assets
│   └── resume.pdf        # Downloadable resume
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utility functions
│   ├── store/            # Zustand stores
│   └── types/            # TypeScript type definitions
├── contentlayer.config.ts # Content configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.ts        # Next.js configuration
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
1. Update personal details in:
   - `src/app/page.tsx` (hero section)
   - `src/app/about/page.tsx` (about content)
   - `src/app/contact/page.tsx` (contact info)

### Projects
1. Edit project data in `src/app/projects/page.tsx`
2. Add project images to `public/` directory
3. Update GitHub and live demo URLs

### Blog Content
1. Create new MDX files in `content/blog/`
2. Follow the frontmatter format:
   ```yaml
   ---
   title: "Your Blog Post Title"
   description: "Brief description"
   date: "2024-01-01"
   tags: ["tag1", "tag2"]
   featured: true
   published: true
   ---
   ```

### Resume
1. Replace `public/resume.pdf` with your actual resume
2. Update the download links in the components

### Styling
1. Modify the color scheme in `tailwind.config.ts`
2. Update CSS variables in `src/app/globals.css`
3. Customize components in `src/components/`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
The project is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Features Overview

### Home Page
- Hero section with introduction
- Skills showcase
- Featured projects preview
- Social links and resume download

### About Page
- Personal story and background
- Detailed skills breakdown
- Professional experience timeline
- Social media integration

### Projects Page
- Featured and regular project sections
- Project descriptions and tech stacks
- GitHub and live demo links
- Responsive grid layout

### Blog Page
- MDX-powered blog posts
- Featured posts section
- Tag-based categorization
- Reading time estimates

### Contact Page
- Multiple contact methods
- Contact form (ready for backend integration)
- Social media links
- Professional availability status

## 🎨 Design System

The project uses a consistent design system with:
- **Colors**: Defined CSS custom properties for light/dark themes
- **Typography**: Hierarchical text styles with proper contrast
- **Spacing**: Consistent spacing scale throughout
- **Components**: Reusable UI components with variants
- **Responsive**: Mobile-first responsive design

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have questions or need help customizing the portfolio:
- Open an issue in the repository
- Check the documentation
- Reach out through the contact form

---

Built with ❤️ using Next.js and Tailwind CSS
