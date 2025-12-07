"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Check,
  Zap,
  Paintbrush,
  FileText,
  Gauge,
  Terminal,
  Rocket,
  Building2,
  Wrench,
  Bot,
  Users,
  LayoutGrid,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const serviceOfferings = [
  {
    title: "Fractional CTO / Strategic Advisor",
    icon: Building2,
    description: "Senior technical leadership without a full-time hire",
    features: [
      "Architecture & Roadmap Consulting",
      "Team Structure & Hiring",
      "Vendor Reviews & Due Diligence",
      "Async Availability (Slack/Notion)",
    ],
  },
  {
    title: "Platform & Stack Modernization",
    icon: Wrench,
    description: "Modernize legacy tech and ship scalable products fast",
    features: [
      "React / Next.js / Astro Modernization",
      "CMS Upgrades (Ghost, Sanity, Storyblok)",
      "API Redesign & Serverless Infrastructure",
      "DevOps & Infrastructure Lift",
    ],
  },
  {
    title: "AI-Powered Workflows",
    icon: Bot,
    description: "Build smarter workflows using Claude, GPT-4, and OpenAI APIs",
    features: [
      "Custom AI Integration",
      "Prompt Libraries & Test Generation",
      "Workflow Automation (n8n, Supabase)",
      "Internal Tool Development",
    ],
  },
  {
    title: "Developer Experience & Enablement",
    icon: Users,
    description: "Make your devs happier, faster, and more productive",
    features: [
      "DX Audits & Onboarding Redesign",
      "Internal Documentation & Training",
      "Series A+ Engineering Focus",
      "Process Optimization",
    ],
  },
  {
    title: "Architecture & Integration",
    icon: LayoutGrid,
    description: "For orgs launching new products or rebuilding foundational systems",
    features: [
      "Composable Architecture & CMS Planning",
      "Integration Strategy (Auth, CRM, Analytics)",
      "Technical Discovery & Delivery",
      "Foundation System Rebuilds",
    ],
  },
]

const techCategories = [
  {
    title: "Core Framework",
    icon: Zap,
    items: [
      { name: "Astro 5.13", desc: "Static Site Generation with islands architecture" },
      { name: "TypeScript", desc: "Full type safety across the codebase" },
      { name: "MDX", desc: "Rich content authoring with React components" },
    ],
  },
  {
    title: "Styling & UI",
    icon: Paintbrush,
    items: [
      { name: "Tailwind CSS 3.4", desc: "Utility-first CSS with custom design tokens" },
      { name: "@tailwindcss/typography", desc: "Beautiful typography for blog content" },
      { name: "Astro Icon", desc: "Optimized SVG icons (Tabler & Flat Color)" },
      { name: "Inter Variable Font", desc: "Modern variable font for typography" },
    ],
  },
  {
    title: "Content & SEO",
    icon: FileText,
    items: [
      { name: "Content Collections", desc: "Type-safe, structured content management" },
      { name: "XML Sitemap", desc: "Auto-generated sitemap for search engines" },
      { name: "@astrolib/seo", desc: "Meta tags, Open Graph, Twitter Cards" },
      { name: "RSS Feed", desc: "Blog syndication for readers" },
    ],
  },
  {
    title: "Performance",
    icon: Gauge,
    items: [
      { name: "Unpic", desc: "Universal image CDN with auto optimization" },
      { name: "Sharp", desc: "High-performance image processing" },
      { name: "@playform/compress", desc: "CSS, HTML, and JS compression" },
      { name: "Partytown", desc: "Third-party scripts in web worker" },
    ],
  },
  {
    title: "Developer Experience",
    icon: Terminal,
    items: [
      { name: "ESLint", desc: "Code quality with TypeScript & a11y plugins" },
      { name: "Prettier", desc: "Consistent code formatting" },
      { name: "Path Aliases", desc: "Clean imports with ~/ prefix" },
      { name: "pnpm", desc: "Fast, disk-efficient package management" },
    ],
  },
  {
    title: "Deployment",
    icon: Rocket,
    items: [
      { name: "Netlify & Vercel", desc: "Multi-platform deployment ready" },
      { name: "Optimized Caching", desc: "1-year TTL for static assets" },
      { name: "Google Analytics", desc: "Privacy-focused Partytown integration" },
    ],
  },
]

const achievements = [
  "100% static generation for maximum performance",
  "Fully typed configuration and content system",
  "Custom remark/rehype plugin pipeline for enhanced Markdown",
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
            href="/#projects"
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

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-[#F5C243]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Portfolio</span>
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                AI-Powered Solutions Architecture for <span className="text-[#7C3AED]">Growing Companies</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                We bridge the gap between executive vision and full stack reality. Release Mode designs AI
                implementations that work for both developers and business stakeholders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://cal.com/releasemode-lee/officehours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#3B5CCC] text-white hover:bg-[#2D4AAF] transition-colors font-medium"
                >
                  Schedule a Strategy Call
                </a>
                <a
                  href="https://releasemode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Live Site
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/release-mode-hero.webp"
                alt="Release Mode"
                width={400}
                height={400}
                className="w-64 md:w-80 lg:w-96"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 px-4 bg-[#F5C243]/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
          >
            Service Offerings
          </motion.h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Senior technical leadership, modernized systems, and AI-powered workflows that accelerate development teams.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceOfferings.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#3B5CCC] text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
          >
            Tech Stack
          </motion.h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Built with modern, performance-optimized technologies focused on SEO, accessibility, and developer
            experience.
          </p>
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
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
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

      {/* Why Choose */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
          >
            Why Choose Release Mode?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Modern stack expertise",
                desc: "React, Next.js, Astro, and AI integration that actually works in production",
              },
              {
                title: "Results-driven approach",
                desc: "Technology strategy that moves your business forward, not sideways",
              },
              {
                title: "Proven finisher",
                desc: "We take projects from concept to successful launch without the drama",
              },
              {
                title: "AI-first development",
                desc: "Leverage AI tools and workflows that give you competitive advantage",
              },
              {
                title: "Clear communication",
                desc: "We translate complex tech into business momentum and actionable plans",
              },
              { title: "Full stack reality", desc: "Bridge the gap between executive vision and production code" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border border-border"
              >
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#22C55E] flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#F5C243]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Technology Strategy?
            </h2>
            <p className="text-gray-700 mb-8">
              Let's discuss how we can team up to modernize your stack, accelerate your team, and leverage AI for
              competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/releasemode-lee/officehours"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#3B5CCC] text-white hover:bg-[#2D4AAF] transition-colors font-medium"
              >
                Book a Call
              </a>
              <a
                href="mailto:lee@releasemode.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-medium"
              >
                Email Direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            &larr; Back to leeflannery.com
          </Link>
          <p className="italic">"See Connections. Build Solutions. Ship Results."</p>
          <a
            href="https://github.com/leeflannery/releasemode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            View Source
          </a>
        </div>
      </footer>
    </main>
  )
}
