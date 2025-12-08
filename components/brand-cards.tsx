"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function BrandCards() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.a
          href="https://releasemode.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="relative block rounded-2xl bg-gradient-to-br from-brand-yellow to-brand-yellow-gradient-end 
            p-4 md:p-6 overflow-hidden shadow-md cursor-pointer
            transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="relative z-10 flex items-center justify-center gap-4">
            <Image src="/release-mode-logo.png" alt="Release Mode" width={48} height={48} className="rounded-lg" />
            <span className="inline-flex items-center gap-2 text-black font-medium">
              Click here to go to Release Mode
              <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
