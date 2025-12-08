"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Sparkles, Palette, Zap, Monitor, Moon, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LeeFlanneryComPage() {
  const techStack = [
    {
      category: "Core Framework",
      items: [
        { name: "Next.js 16", description: "App Router, RSC, latest features" },
        { name: "TypeScript", description: "Type safety throughout" },
        { name: "React 19", description: "Latest React with concurrent features" },
      ],
    },
    {
      category: "Styling & UI",
      items: [
        { name: "Tailwind CSS v4", description: "Utility-first styling" },
        { name: "shadcn/ui", description: "Accessible component primitives" },
        { name: "Radix UI", description: "Headless UI components" },
        { name: "Framer Motion", description: "Animations and transitions" },
      ],
    },
    {
      category: "Features",
      items: [
        { name: "Dark Mode", description: "next-themes for system preference" },
        { name: "Google Analytics", description: "Traffic and engagement tracking" },
        { name: "Vercel Analytics", description: "Core Web Vitals monitoring" },
      ],
    },
    {
      category: "Deployment",
      items: [
        { name: "Vercel", description: "Edge deployment and previews" },
        { name: "v0", description: "Bootstrapped components and layouts" },
        { name: "Bun", description: "Fast package manager and runtime" },
      ],
    },
  ]

  const features = [
    {
      icon: Sparkles,
      title: "Built with v0",
      description: "Bootstrapped with v0 by Vercel",
    },
    {
      icon: Palette,
      title: "Custom Design System",
      description: "Brand colors, typography, and component variants",
    },
    {
      icon: Zap,
      title: "Framer Motion Animations",
      description: "Spring physics, staggered reveals, and hover interactions",
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Mobile-first approach with breakpoint-specific layouts",
    },
    {
      icon: Moon,
      title: "Dark Mode Support",
      description: "System preference detection with manual toggle",
    },
    {
      icon: BarChart,
      title: "Dual Analytics",
      description: "Google Analytics + Vercel Analytics for complete insights",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 px-4 bg-gradient-to-br from-brand-blue/20 via-background to-brand-purple/10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 mb-6"
          >
            <div className="h-20 w-20 rounded-2xl bg-brand-blue flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">LF</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">LeeFlannery.com</h1>
              <p className="text-muted-foreground mt-2">This very site you're looking at right now</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Personal portfolio and landing page built with Next.js 16, Tailwind v4, and Framer Motion. Bootstrapped with
            v0.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-[#FEF9C3]">
            <Image
              src="/images/lee-usa-hawaii-yellow.jpg"
              alt="Lee Flannery"
              width={1200}
              height={600}
              className="w-full object-contain max-h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <feature.icon className="h-8 w-8 text-brand-blue mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">{item.name}</span>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The v0 Experiment */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Built with v0</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              Bootstrapped with v0, Vercel's AI-powered development tool. It was a fast way to scaffold components,
              iterate on layouts, and get the design system in place. From there, the usual tweaking and refining.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Check It Out</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://leeflannery.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue text-white font-medium hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
              You're Already Here
            </a>
            <a
              href="https://github.com/LeeFlannery/v0-leeflannery-dot-com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
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
