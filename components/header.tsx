"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "https://www.youtube.com/@FullStackDrip", label: "Videos", external: true },
  { href: "https://fullstackdrip.com", label: "Blog", external: true },
  { href: "#projects", label: "Portfolio" },
  { href: "https://fullstackdrip.com/contact/", label: "Contact", external: true },
]

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-background/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/favicon.png" alt="Lee Flannery Logo" width={40} height={40} className="rounded-xl" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </motion.header>
  )
}
