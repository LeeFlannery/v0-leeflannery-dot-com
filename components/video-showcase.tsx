"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Play, BookOpen } from "lucide-react"

export function VideoShowcase() {
  return (
    <section className="py-20 px-4 bg-muted dark:bg-[#111827]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[900px] mx-auto"
      >
        {/* Header with logo */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Image src="/full-stack-drip-logo.png" alt="Full Stack Drip" width={60} height={60} className="rounded-xl" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Watch!</h2>
        </div>

        {/* Video embed */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
          <iframe
            src="https://www.youtube.com/embed/ufa-RCCkSx8?list=PL1KMjfUN0pZSH94lohu71AjIvcq5TXrO0"
            title="Full Stack Drip Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Subtext */}
        <p className="text-center text-muted-foreground text-sm mt-4">
          See more at{" "}
          <a
            href="https://youtube.com/@FullStackDrip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue hover:text-foreground transition-colors underline underline-offset-2"
          >
            youtube.com/@FullStackDrip
          </a>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 max-w-lg mx-auto">
          <a
            href="https://www.youtube.com/@FullStackDrip?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl whitespace-nowrap"
            style={{ backgroundColor: "#E91E78" }}
          >
            <Play className="w-5 h-5 fill-current" />
            Watch on YouTube
          </a>
          <a
            href="https://fullstackdrip.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl whitespace-nowrap"
          >
            <BookOpen className="w-5 h-5" />
            Read on Fullstackdrip.com
          </a>
        </div>
      </motion.div>
    </section>
  )
}
