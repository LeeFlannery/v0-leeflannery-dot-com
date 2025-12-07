"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const cards = [
  {
    title: "Release Mode",
    description:
      "Release Mode is my consultancy where I offer Dev Rel and CTO services around AI Enablement and Developer Experience.",
    logo: "/release-mode-logo.png",
    link: "https://releasemode.com",
    gradient: "from-brand-yellow to-brand-yellow-gradient-end",
    slideFrom: 100,
    darkText: true,
  },
]

export function BrandCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {cards.map((card) => (
          <motion.a
            key={card.title}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: card.slideFrom }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`
              relative block rounded-3xl bg-gradient-to-br ${card.gradient} 
              p-8 md:p-10 overflow-hidden shadow-lg cursor-pointer
              transition-shadow duration-300 hover:shadow-2xl
            `}
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
              {/* Logo and Text */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={card.logo || "/placeholder.svg"}
                    alt={card.title}
                    width={80}
                    height={80}
                    className="rounded-xl"
                  />
                  <h3
                    className={`font-serif text-3xl md:text-4xl font-bold ${
                      card.darkText ? "text-black" : "text-white"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className={`text-lg md:text-xl leading-relaxed ${card.darkText ? "text-black/80" : "text-white/90"}`}
                >
                  {card.description}
                </p>
                <span
                  className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${
                    card.darkText ? "text-black/70" : "text-white/80"
                  }`}
                >
                  Visit {card.link.replace("https://", "")}
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
