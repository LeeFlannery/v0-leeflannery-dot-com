"use client"

import { motion } from "framer-motion"
import { SocialLinks } from "./social-links"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background">
      {/* Hero Content */}
      <motion.div
        className="flex min-h-screen flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-center font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Lee Flannery
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-xl text-center font-serif text-2xl font-semibold text-foreground md:text-3xl"
        >
          I build production systems and teach developers on{" "}
          <a
            href="https://www.youtube.com/@FullStackDrip"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:underline"
          >
            Full Stack Drip
          </a>
          .
        </motion.p>

        <motion.div variants={itemVariants} className="flex w-full max-w-2xl flex-col items-stretch gap-4 md:flex-row">
          {/* Pink YouTube Subscribe Button */}
          <motion.a
            href="https://www.youtube.com/@FullStackDrip?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex h-14 flex-1 items-center justify-center gap-3 whitespace-nowrap rounded-lg px-8 text-lg font-medium text-white shadow-lg transition-colors hover:opacity-90"
            style={{ backgroundColor: "#E91E78" }}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </motion.a>

          {/* Blue Schedule a Call Button */}
          <motion.a
            href="https://cal.com/releasemode-lee/officehours"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex h-14 flex-1 items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-secondary px-8 text-lg font-medium text-secondary-foreground shadow-lg transition-colors hover:bg-secondary/90"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Schedule a Call
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10">
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  )
}
