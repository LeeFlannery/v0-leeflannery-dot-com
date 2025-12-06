"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const bioLines = [
    "Developer relations engineer and solutions architect with 25 years of production experience. I've shipped platforms serving millions of users for global brands.",
    "I run Full Stack Drip, teaching developers through videos and content about modern web stacks and AI tools.",
    "Focus areas: Next.js, TypeScript, Python, AI platform engineering, and helping developers ship better products faster.",
    "Based in Kalamazoo, MI.",
  ]

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
              <Image
                src="/lee-headshot.png"
                alt="Lee Flannery"
                fill
                className="rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 text-secondary-foreground">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl font-bold"
            >
              Lee Flannery
            </motion.h2>

            {bioLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="text-lg md:text-xl leading-relaxed text-secondary-foreground/90"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
