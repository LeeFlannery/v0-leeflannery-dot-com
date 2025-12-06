"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const footerLinks = {
  connect: [
    { name: "YouTube", href: "https://www.youtube.com/@FullStackDrip" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/leeflannery/" },
    { name: "Instagram", href: "https://instagram.com/fullstackdrip" },
    { name: "Bluesky", href: "https://bsky.app/profile/fullstackdrip.com" },
    { name: "Threads", href: "https://threads.net/@fullstackdrip" },
    { name: "TikTok", href: "https://tiktok.com/@fullstackdrip" },
    { name: "GitHub", href: "https://github.com/leeflannery" },
  ],
  work: [
    { name: "Full Stack Drip", href: "https://fullstackdrip.com" },
    { name: "Release Mode", href: "https://releasemode.com" },
    { name: "Schedule a Call", href: "https://cal.com/releasemode-lee/officehours" },
  ],
  resources: [
    { name: "Newsletter", href: "https://fullstackdrip.com/#/portal/" },
    { name: "Amazon", href: "https://amazon.com/shop/fullstackdrip" },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function FooterColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-4">
      <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 px-4">
      <motion.div
        className="mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <FooterColumn title="Connect" links={footerLinks.connect} />
          <FooterColumn title="Work" links={footerLinks.work} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Lee Flannery. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
