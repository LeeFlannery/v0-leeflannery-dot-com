"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Zap, Paintbrush, FileText, Gauge, Terminal, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const techCategories = [
  {
    title: "Core Framework",
    icon: Zap,
    items: [
      { name: "Astro 5.13", desc: "Static Site Generation with islands architecture for optimal performance" },
      { name: "TypeScript", desc: "Full type safety across the codebase" },
      { name: "MDX", desc: "Rich content authoring with React components in Markdown" },
    ],
  },
  {
    title: "Styling & UI",
    icon: Paintbrush,
    items: [
      { name: "Tailwind CSS 3.4", desc: "Utility-first CSS with custom design tokens" },
      { name: "@tailwindcss/typography", desc: "Beautiful typography for blog content" },
      { name: "Astro Icon", desc: "Optimized SVG icons (Tabler & Flat Color Icons)" },
      { name: "Inter Variable Font", desc: "Modern variable font for typography" },
    ],
  },
  {
    title: "Content & SEO",
    icon: FileText,
    items: [
      { name: "Content Collections", desc: "Type-safe, structured content management" },
      { name: "XML Sitemap", desc: "Auto-generated sitemap for search engines" },
      { name: "@astrolib/seo", desc: "Comprehensive meta tags, Open Graph, Twitter Cards" },
      { name: "RSS Feed", desc: "Blog syndication" },
      { name: "Reading Time", desc: "Custom remark plugin for estimated reading time" },
    ],
  },
  {
    title: "Performance",
    icon: Gauge,
    items: [
      { name: "Unpic", desc: "Universal image CDN with automatic optimization" },
      { name: "Sharp", desc: "High-performance image processing" },
      { name: "@playform/compress", desc: "CSS, HTML, and JavaScript compression" },
      { name: "Partytown", desc: "Third-party script execution in web worker" },
      { name: "Static Generation", desc: "Pre-rendered pages for instant loading" },
    ],
  },
  {
    title: "Blog System",
    icon: BookOpen,
    items: [
      { name: "Category & Tag Taxonomies", desc: "Organized content structure" },
      { name: "Pagination", desc: "Configurable posts per page" },
      { name: "Related Posts", desc: "Automatic recommendations" },
      { name: "Responsive Tables", desc: "Custom rehype plugin" },
      { name: "Customizable Permalinks", desc: "Flexible URL structure" },
    ],
  },
  {
    title: "Developer Experience",
    icon: Terminal,
    items: [
      { name: "ESLint", desc: "Code quality with TypeScript, Astro, and a11y plugins" },
      { name: "Prettier", desc: "Consistent code formatting" },
      { name: "Path Aliases", desc: "Clean imports with ~/ prefix" },
      { name: "YAML Configuration", desc: "Centralized config system" },
      { name: "pnpm", desc: "Fast, disk-efficient package management" },
    ],
  },
]

const achievements = [
  "100% static generation for maximum performance",
  "Fully typed configuration and content system",
  "Custom remark/rehype plugin pipeline for enhanced Markdown processing",
  "Modular component architecture with reusable widgets",
  "SEO-first approach with comprehensive meta tag management",
]

export default function ReleaseModePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://releasemode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              Live Site
            </a>
            <a
              href="https://github.com/leeflannery/releasemode"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-9 w-9 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero - simplified */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Release Mode</h1>
            <p className="text-lg text-muted-foreground">
              Portfolio & business site for an AI Solutions Architect & Fractional CTO. Built with Astro, TypeScript,
              and Tailwind. Focused on performance, SEO, and accessibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Screenshot - using provided image */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden border border-border shadow-lg"
          >
            <Image
              src="/images/photo-1551288049-bebda4e38f71.jpeg"
              alt="Analytics Dashboard"
              width={1200}
              height={675}
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-12"
          >
            Tech Stack
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#F5C243]/20 text-[#F5C243]">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <span className="font-medium text-foreground text-sm">{item.name}</span>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-8"
          >
            Key Technical Achievements
          </motion.h2>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.li
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3 text-foreground"
              >
                <span className="text-[#F5C243] mt-1">•</span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deployment note */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-semibold text-foreground mb-3">Deployment</h3>
          <p className="text-muted-foreground text-sm">
            Hosted on AWS Amplify with Route 53 for DNS. Optimized caching strategies (1-year TTL for static assets).
            Google Analytics with privacy-focused Partytown integration.
          </p>
        </div>
      </section>

      {/* CTA - simplified */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://releasemode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F5C243] text-black hover:bg-[#F5C243]/90 transition-colors font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              Visit releasemode.com
            </a>
            <a
              href="https://github.com/leeflannery/releasemode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              <Github className="h-4 w-4" />
              View Source
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
