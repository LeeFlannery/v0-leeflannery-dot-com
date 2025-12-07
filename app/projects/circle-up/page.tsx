"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Shield, Users, Mail, Calendar, Bell, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const techStack = [
  {
    category: "Core Framework",
    items: [
      { name: "Next.js 15.2.6", description: "App Router with React 19" },
      { name: "TypeScript", description: "Type-safe development" },
      { name: "React 19", description: "Latest React features" },
    ],
  },
  {
    category: "Database & Auth",
    items: [
      { name: "Supabase", description: "PostgreSQL + Auth" },
      { name: "Row Level Security", description: "Database-level privacy" },
    ],
  },
  {
    category: "Styling & UI",
    items: [
      { name: "Tailwind CSS v4", description: "Custom 'groovy' design system" },
      { name: "Radix UI", description: "Accessible primitives" },
      { name: "shadcn/ui", description: "Component library" },
      { name: "Geist", description: "Typography" },
    ],
  },
  {
    category: "Forms & Validation",
    items: [
      { name: "React Hook Form", description: "Form state management" },
      { name: "Zod", description: "Schema validation" },
    ],
  },
  {
    category: "Additional",
    items: [
      { name: "Lucide React", description: "Icons" },
      { name: "date-fns", description: "Date utilities" },
      { name: "Recharts", description: "Data visualization" },
      { name: "next-themes", description: "Theme switching" },
    ],
  },
  {
    category: "Deployment",
    items: [{ name: "Vercel", description: "Hosting & CI/CD" }],
  },
]

const features = [
  {
    icon: Shield,
    title: "Privacy-First Directory",
    description: "Connect with members through a secure directory with friend-based visibility controls",
  },
  {
    icon: Users,
    title: "Friends System",
    description: "Build connections with a friend-request system that respects boundaries",
  },
  {
    icon: Mail,
    title: "Private Mailing Lists",
    description: "Topic-based groups with built-in privacy protection",
  },
  {
    icon: Calendar,
    title: "Shared Calendar",
    description: "Community event tracking and coordination",
  },
  {
    icon: Bell,
    title: "Messaging System",
    description: "Announcements and updates with granular privacy settings",
  },
  {
    icon: Lock,
    title: "Granular Privacy Controls",
    description: "Users control who sees their information",
  },
]

export default function CircleUpPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm font-medium hover:bg-card transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4" style={{ backgroundColor: "#FEF3E2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span style={{ color: "#D97706" }}>Circle</span> <span style={{ color: "#059669" }}>Up</span>
              <span style={{ color: "#D97706" }}>!</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Privacy-focused community communication platform for groups who value both connection and data protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=675&fit=crop"
              alt="Circle Up"
              width={1200}
              height={675}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-lg bg-card border border-border"
                >
                  <div
                    className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#D97706" }}
                  >
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <h2 className="text-xl font-bold text-foreground mb-3">Design Philosophy</h2>
            <p className="text-muted-foreground">
              Combines serious privacy protection with a fun, approachable UI featuring playful animations,
              retro-inspired design elements, and an emphasis on user delight. The custom "groovy" design system makes
              community engagement enjoyable while never compromising on data security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-foreground mb-8">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border"
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <span className="font-medium text-foreground">{item.name}</span>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://circle-up-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: "#D97706" }}
            >
              <ExternalLink className="h-5 w-5" />
              Visit Site
            </a>
            <a
              href="https://github.com/LeeFlannery/circle-up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium transition-transform hover:scale-105"
            >
              <Github className="h-5 w-5" />
              View Source
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
