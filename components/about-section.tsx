"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const bioSections = [
    {
      heading: "Hi, I'm Lee!",
      content:
        "Solutions architect and full-stack developer with 25 years shipping production code. I've built platforms serving millions of users - from scrappy startups to global brands.",
    },
    {
      heading: null,
      content:
        "I find patterns, ask the right questions, and bring clarity to messy problems. Whether it's DevRel, presales, or technical strategy, I help teams ship faster and with confidence.",
    },
    {
      heading: "What I'm Building",
      content:
        "My stack is React, Next.js, TypeScript, and Python - focused on AI-driven workflows and modern web architecture. I run Release Mode LLC for consulting work.",
    },
    {
      heading: null,
      content:
        "I'm also building Full Stack Drip - videos, podcasts, and content about shipping code, dev culture, and navigating tech in 2025.",
    },
    {
      heading: null,
      content: "Based in Kalamazoo, MI. Let's talk!",
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
              So reach out! Connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/leeflannery/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-brand-blue-light hover:underline font-medium transition-colors"
              >
                LinkedIn
              </a>
              , follow me on{" "}
              <a
                href="https://bsky.app/profile/fullstackdrip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple hover:text-brand-purple-light hover:underline font-medium transition-colors"
              >
                Bluesky
              </a>{" "}
              or{" "}
              <a
                href="https://www.youtube.com/@FullStackDrip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-pink hover:text-brand-pink-light hover:underline font-medium transition-colors"
              >
                YouTube
              </a>
              , or{" "}
              <a
                href="https://cal.com/leeflannery/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:text-brand-green-light hover:underline font-medium transition-colors"
              >
                schedule a call
              </a>
              . I'm here to help, collaborate, or just talk tech!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
