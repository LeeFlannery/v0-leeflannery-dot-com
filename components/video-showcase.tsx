"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen } from "lucide-react"

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

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

        {/* CTAs - Made buttons equal width with min-w and same structure */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mt-8 max-w-xl mx-auto">
          <a
            href="https://www.youtube.com/@FullStackDrip?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl min-w-[200px]"
            style={{ backgroundColor: "#E91E78" }}
          >
            <YouTubeIcon className="w-5 h-5" />
            Watch on YouTube
          </a>
          <a
            href="https://fullstackdrip.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl min-w-[200px]"
          >
            <BookOpen className="w-5 h-5" />
            Read on Fullstackdrip.com
          </a>
        </div>
      </motion.div>
    </section>
  )
}
