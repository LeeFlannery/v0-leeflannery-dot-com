"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const bioSections = [
    {
      heading: "Hi, I'm Lee!",
      content:
        "My favorite thing is helping other developers get unstuck.",
    },
    {
      heading: null,
      content:
        "I've spent two decades doing the work DevRel teams do: building demos, explaining complex systems to different audiences, creating documentation developers use, and shipping reference implementations. Along the way, I've also scaled production systems to millions of users.",
    },
    {
      heading: null,
      content:
        "I find patterns, ask the right questions, and bring clarity to messy problems. I'm big on building in public and sharing what I learn.",
    },
    {
      heading: "Current Focus",
      content:
        "Deep in AI-assisted development. Building with Claude Code, V0.app, and Cursor daily, exploring MCP server implementations, and figuring out multi-model orchestration with OpenRouter and AWS Bedrock. Documenting what works.",
    },
    {
      heading: null,
      content:
        "My current stack is React, Next.js, TypeScript, and Python. I run Release Mode LLC for consulting, and Full Stack Drip for videos, podcasts, and content about shipping code.",
    },
    {
      heading: null,
      content: "Based in Kalamazoo, MI.",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start gap-12 md:gap-16"
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

          <div className="flex flex-col gap-4 text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl font-bold"
            >
              Lee Flannery
            </motion.h2>

            {bioSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {section.heading && <h3 className="font-semibold text-xl mt-4 mb-1">{section.heading}</h3>}
                <p className="text-lg md:text-xl leading-relaxed text-white/80">{section.content}</p>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + bioSections.length * 0.1 }}
              className="text-lg md:text-xl leading-relaxed text-white/80 mt-4"
            >
              <a
                href="https://www.linkedin.com/in/leeflannery/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-blue-300 hover:underline font-medium transition-colors"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href="https://bsky.app/profile/fullstackdrip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple hover:text-purple-300 hover:underline font-medium transition-colors"
              >
                Bluesky
              </a>
              {" · "}
              <a
                href="https://www.youtube.com/@FullStackDrip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-pink hover:text-pink-300 hover:underline font-medium transition-colors"
              >
                YouTube
              </a>
              {" · "}
              <a
                href="https://cal.com/leeflannery/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:text-green-300 hover:underline font-medium transition-colors"
              >
                Book a call
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
