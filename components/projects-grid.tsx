"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "HushCut",
    description:
      "AI-powered silence removal tool that automatically detects and cuts silent segments from video and audio files.",
    image: "/ai-video-editing-app-with-waveform-visualization.jpg",
    video: null,
    tech: ["Next.js", "Python", "FFmpeg"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Circle Up",
    description:
      "Non-profit SaaS platform helping organizations manage donations, volunteers, and community engagement.",
    image: "/non-profit-dashboard-with-donation-charts.jpg",
    video: null,
    tech: ["Next.js", "Prisma", "Postgres"],
    demoUrl: "https://circle-up-alpha.vercel.app/",
    codeUrl: "#",
  },
  {
    title: "Full Stack Drip Hub",
    description:
      "Community platform for developers to learn, share, and grow together with tutorials, discussions, and resources.",
    image: "/developer-community-platform-with-pink-theme.jpg",
    video: null,
    tech: ["Next.js", "Ghost", "React"],
    demoUrl: "https://fullstackdrip.com",
    codeUrl: "#",
  },
  {
    title: "Dotfile.sys",
    description:
      "A modern dotfile management system for developers to sync and manage their configurations across machines.",
    image: "/terminal-dotfile-manager-dark-theme.jpg",
    video: null,
    tech: ["Next.js", "TypeScript", "CLI"],
    demoUrl: "https://dotfile-sys.vercel.app/",
    codeUrl: "#",
  },
]

const techColors: Record<string, string> = {
  "Next.js": "bg-black text-white",
  Python: "bg-secondary text-secondary-foreground",
  FFmpeg: "bg-green-700 text-white",
  Prisma: "bg-card-foreground text-card",
  Postgres: "bg-secondary text-secondary-foreground",
  Ghost: "bg-card-foreground text-card",
  React: "bg-brand-blue-light text-black",
  TypeScript: "bg-secondary text-secondary-foreground",
  CLI: "bg-muted-foreground text-white",
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="group relative overflow-hidden rounded-2xl bg-muted/50 border border-border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image/Video Container */}
        <div className="relative aspect-video overflow-hidden">
          {project.video && isHovered ? (
            <video src={project.video} autoPlay muted loop playsInline className="h-full w-full object-cover" />
          ) : (
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Links overlay */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {project.codeUrl && project.codeUrl !== "#" && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[tech] || "bg-muted text-muted-foreground"}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsGrid() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of things I&apos;ve built, shipped, and am currently working on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
