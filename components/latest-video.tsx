"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function LatestVideo() {
  return (
    <section className="w-full pt-6 pb-6 px-4 md:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center"
        >
          Latest Long-Form Content
        </motion.h2>
        <motion.div variants={itemVariants}>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
            <iframe
              src="https://www.youtube.com/embed/24PM-YGcrhI"
              title="Full Stack Drip Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
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
        </motion.div>
      </motion.div>
    </section>
  )
}
