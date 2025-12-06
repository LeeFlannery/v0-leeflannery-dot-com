"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const cards = [
  {
    title: "Full Stack Drip",
    description:
      "Full Stack Drip is a creator community hub where I build in public, teach, and learn with devs and other creative nerds.",
    logo: "/full-stack-drip-logo.png",
    link: "https://fullstackdrip.com",
    gradient: "from-brand-pink to-brand-pink-gradient-end",
    slideFrom: -100,
    hasVideo: true,
  },
  {
    title: "Release Mode",
    description:
      "Release Mode is my consultancy where I offer Dev Rel and CTO services around AI Enablement and Developer Experience.",
    logo: "/release-mode-logo.png",
    link: "https://releasemode.com",
    gradient: "from-brand-yellow to-brand-yellow-gradient-end",
    slideFrom: 100,
    hasVideo: false,
    darkText: true,
  },
]

export function BrandCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {cards.map((card, index) => {
          const CardWrapper = card.hasVideo ? motion.div : motion.a
          const wrapperProps = card.hasVideo ? {} : { href: card.link, target: "_blank", rel: "noopener noreferrer" }

          return (
            <CardWrapper
              key={card.title}
              {...wrapperProps}
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
                  {card.hasVideo ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${
                        card.darkText ? "text-black/70 hover:text-black" : "text-white/80 hover:text-white"
                      }`}
                    >
                      Visit {card.link.replace("https://", "")}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${
                        card.darkText ? "text-black/70" : "text-white/80"
                      }`}
                    >
                      Visit {card.link.replace("https://", "")}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  )}
                </div>

                {/* YouTube Embed for Full Stack Drip */}
                {card.hasVideo && (
                  <div className="flex flex-col gap-4">
                    <div className="w-full lg:w-[400px] aspect-video rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.youtube.com/embed/ufa-RCCkSx8?list=PL1KMjfUN0pZSH94lohu71AjIvcq5TXrO0"
                        title="Latest Full Stack Drip Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <a
                      href="https://fullstackdrip.com/membership/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-pink shadow-md transition-all hover:scale-105 hover:shadow-lg"
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
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Join Full Stack Drip
                    </a>
                  </div>
                )}
              </div>
            </CardWrapper>
          )
        })}
      </div>
    </section>
  )
}
