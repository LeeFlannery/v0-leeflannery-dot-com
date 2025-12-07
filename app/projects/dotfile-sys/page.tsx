"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Terminal, Search, Keyboard, Layout, Monitor, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  {
    icon: Terminal,
    title: "Organized Categories",
    description: "Shell, Git, Editors, AI Config, and System configurations",
  },
  {
    icon: Search,
    title: "Real-time Search",
    description: "Search across file names, descriptions, and tags instantly",
  },
  {
    icon: Monitor,
    title: "Syntax Highlighting",
    description: "File viewer with syntax highlighting and navigation controls",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description: "Arrow keys for navigation, / for search, ESC to clear",
  },
  {
    icon: Layout,
    title: "Three-Pane Layout",
    description: "Responsive sidebar, file list, and content viewer",
  },
  {
    icon: Zap,
    title: "Status Bar",
    description: "Current file position and totals always visible",
  },
]

const techStack = [
  {
    category: "Core",
    items: [
      { name: "Next.js 16", description: "App Router with React 19" },
      { name: "TypeScript", description: "Type safety throughout" },
      { name: "Tailwind CSS v4", description: "Custom retro-futuristic theme" },
    ],
  },
  {
    category: "UI Components",
    items: [
      { name: "Radix UI", description: "Comprehensive primitives collection" },
      { name: "Lucide React", description: "Icon system" },
      { name: "cmdk", description: "Command palette" },
    ],
  },
  {
    category: "Typography",
    items: [
      { name: "VT323", description: "Retro terminal font" },
      { name: "JetBrains Mono", description: "Code font" },
    ],
  },
  {
    category: "Additional",
    items: [
      { name: "React Hook Form + Zod", description: "Form validation" },
      { name: "next-themes", description: "Dark mode support" },
      { name: "Sonner", description: "Toast notifications" },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Vercel", description: "Hosting with Analytics" },
      { name: "v0.app", description: "Built with v0" },
    ],
  },
]

export default function DotfileSysPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#c8c8a0]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#3a3a3a] bg-[#1a1a1a]/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-[#c8c8a0]/60 hover:text-[#c8c8a0] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-mono">Back to Portfolio</span>
          </Link>
          <a
            href="https://dotfile-sys.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-[#c8c8a0] hover:text-white transition-colors"
          >
            Visit Site
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 border-b border-[#3a3a3a]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="h-8 w-8 text-[#8fa876]" />
              <h1 className="text-4xl md:text-5xl font-mono font-bold text-[#8fa876]">{">"} DOTFILE.SYS</h1>
            </div>
            <p className="text-xl text-[#c8c8a0]/80 font-mono mb-8 max-w-2xl">
              A retro-futuristic dotfile directory and snippet browser featuring a terminal-inspired UI for browsing and
              managing developer configuration files.
            </p>

            {/* Screenshot */}
            <div className="relative rounded-lg overflow-hidden border border-[#3a3a3a] shadow-2xl">
              <Image
                src="/dotfile-sys-screenshot.png"
                alt="Dotfile.sys interface"
                width={1200}
                height={675}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 border-b border-[#3a3a3a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-mono font-bold text-[#8fa876] mb-8">{">"} KEY_FEATURES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-lg border border-[#3a3a3a] bg-[#252525] hover:border-[#8fa876]/50 transition-colors"
                >
                  <feature.icon className="h-6 w-6 text-[#8fa876] mb-3" />
                  <h3 className="font-mono font-bold text-[#c8c8a0] mb-1">{feature.title}</h3>
                  <p className="text-sm text-[#c8c8a0]/60 font-mono">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 border-b border-[#3a3a3a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-mono font-bold text-[#8fa876] mb-8">{">"} TECH_STACK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-lg border border-[#3a3a3a] bg-[#252525]"
                >
                  <h3 className="font-mono font-bold text-[#8fa876] mb-4 text-sm uppercase tracking-wide">
                    [{category.category}]
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <span className="font-mono font-medium text-[#c8c8a0]">{item.name}</span>
                        <p className="text-xs text-[#c8c8a0]/50 font-mono">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-[#c8c8a0]/60 font-mono">[OK] SYSTEM READY</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://dotfile-sys.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#8fa876] text-[#1a1a1a] font-mono font-bold rounded hover:bg-[#a0b987] transition-colors"
              >
                {">"} LAUNCH_APP
              </a>
              <a
                href="https://github.com/LeeFlannery/v0-dotfile-directory-web-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#8fa876] text-[#8fa876] font-mono rounded hover:bg-[#8fa876]/10 transition-colors"
              >
                {">"} VIEW_SOURCE
              </a>
              <Link
                href="/#projects"
                className="px-6 py-3 border border-[#3a3a3a] text-[#c8c8a0] font-mono rounded hover:border-[#8fa876] transition-colors"
              >
                {"<"} RETURN
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
