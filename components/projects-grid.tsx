"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

const projects = [
  {
    title: "Full Stack Drip",
    description:
      "Developer experience writing, videos, and social media. Talks on Dev Rel, Tech Advocacy and shipping code.",
    image: "/full-stack-drip-cover.jpg",
    video: null,
    tech: ["Ghost", "Writing", "Video Production", "Community Building", "Teaching"],
    demoUrl: "https://fullstackdrip.com",
    codeUrl: null,
    breakdownUrl: null,
    cardBg: null,
    logos: [{ src: "/logos/ghost-orb.png", alt: "Ghost" }],
  },
  {
    title: "Release Mode",
    description:
      "AI-powered solutions architecture for growing companies. Bridging executive vision and full stack reality.",
    image: "/release-mode-hero.webp",
    video: null,
    tech: ["Astro", "TypeScript", "Tailwind", "MDX", "PartyTown", "pnpm", "Vercel"],
    demoUrl: "https://releasemode.com",
    codeUrl: "https://github.com/leeflannery/releasemode",
    breakdownUrl: "/projects/release-mode",
    cardBg: "#F5C243",
    logos: [
      { src: "/logos/astro.svg", alt: "Astro" },
      { src: "/logos/vercel.svg", alt: "Vercel" },
    ],
  },
  {
    title: "HushCut",
    description:
      "AI-powered silence removal tool that automatically detects and cuts silent segments from video and audio files.",
    image: "/ai-video-editing-app-with-waveform-visualization.jpg",
    video: null,
    tech: ["Next.js", "Python", "FFmpeg"],
    demoUrl: "#",
    codeUrl: "#",
    breakdownUrl: null,
    cardBg: null,
    logos: [],
  },
  {
    title: "Circle Up",
    description:
      "Privacy-focused community platform with secure member directories, friends system, private mailing lists, and granular privacy controls.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop",
    video: null,
    tech: ["Next.js 15", "Supabase", "Tailwind v4", "React Hook Form", "Zod"],
    demoUrl: "https://circle-up-alpha.vercel.app/",
    codeUrl: "https://github.com/LeeFlannery/circle-up",
    breakdownUrl: "/projects/circle-up",
    cardBg: "#FEF3E2",
    logos: [{ src: "/logos/vercel.svg", alt: "Vercel" }],
  },
  {
    title: "Dotfile.sys",
    description:
      "Retro terminal-styled dotfile manager for browsing, searching, and copying shell, git, editor, and AI configurations.",
    image: "/dotfile-sys-screenshot.png",
    video: null,
    tech: ["Next.js", "TypeScript", "CLI"],
    demoUrl: "https://dotfile-sys.vercel.app/",
    codeUrl: "#",
    breakdownUrl: null,
    cardBg: null,
    logos: [],
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
  AI: "bg-brand-purple text-white",
  Writing: "bg-primary text-primary-foreground",
  "Video Production": "bg-brand-yellow text-black",
  "Community Building": "bg-brand-green text-black",
  Teaching: "bg-brand-blue text-white",
  Astro: "bg-[#FF5D01] text-white",
  Tailwind: "bg-[#06B6D4] text-black",
  MDX: "bg-[#FCB32C] text-black",
  PartyTown: "bg-[#8B5CF6] text-white",
  pnpm: "bg-[#F69220] text-black",
  SEO: "bg-brand-teal text-black",
  Vercel: "bg-black text-white",
  "Next.js 15": "bg-black text-white",
  Supabase: "bg-[#3ECF8E] text-black",
  "Tailwind v4": "bg-[#06B6D4] text-black",
  "React Hook Form": "bg-[#EC5990] text-white",
  Zod: "bg-[#3068B7] text-white",
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const hasActions =
    project.breakdownUrl || (project.demoUrl && project.demoUrl !== "#") || (project.codeUrl && project.codeUrl !== "#")

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  }

  const handleCardClick = () => {
    if (project.breakdownUrl) {
      router.push(project.breakdownUrl)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={`group relative overflow-hidden rounded-2xl bg-muted/50 border border-border ${project.breakdownUrl ? "cursor-pointer" : ""}`}
        style={project.cardBg ? { backgroundColor: project.cardBg } : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
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
              className={`transition-transform duration-500 group-hover:scale-110 ${project.cardBg ? "object-contain p-4" : "object-cover"}`}
            />
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {project.logos && project.logos.length > 0 && (
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              {project.logos.map((logo) => (
                <div key={logo.alt} className="h-8 w-8 rounded-lg bg-white/90 p-1.5 shadow-md">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={20}
                    height={20}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 bg-card">
          <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[tech] || "bg-muted text-muted-foreground"}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {hasActions && (
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Explore</p>
              <motion.div
                className="flex gap-2"
                variants={buttonContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.breakdownUrl && (
                  <motion.div variants={buttonVariants} className="flex-1">
                    <Link
                      href={project.breakdownUrl}
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                    >
                      <FileText className="h-4 w-4" />
                      Tech
                    </Link>
                  </motion.div>
                )}
                {project.demoUrl && project.demoUrl !== "#" && (
                  <motion.div variants={buttonVariants} className="flex-1">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-muted text-foreground text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-muted/80 active:scale-95"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Site
                    </a>
                  </motion.div>
                )}
                {project.codeUrl && project.codeUrl !== "#" && (
                  <motion.div variants={buttonVariants} className="flex-1">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-muted text-foreground text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-muted/80 active:scale-95"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Portfolio.</h2>
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
