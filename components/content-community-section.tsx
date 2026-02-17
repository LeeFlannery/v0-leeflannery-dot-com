"use client"

import { Linkedin, Youtube, Eye, UserPlus, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

function useCountUp(end: number, duration = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return count
}

function useInView(threshold = 0.2) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export function ContentCommunitySection() {
  const { ref: linkedInRef, isInView: linkedInVisible } = useInView(0.2)

  const impressionsCount = useCountUp(116647, 2500, linkedInVisible)
  const followersCount = useCountUp(99, 1500, linkedInVisible)
  const engagementCount = useCountUp(647, 2000, linkedInVisible)

  return (
    <section className="w-full py-28 px-4 md:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Catch Me on YouTube, Instagram, and TikTok
          </h2>
        </div>

        {/* Video Grid - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* TikTok Embed */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border max-w-xs mx-auto md:max-w-none">
            <div className="aspect-[9/16] w-full">
              <iframe
                src="https://www.tiktok.com/embed/v2/7579449998576798990"
                className="w-full h-full"
                allowFullScreen
                allow="encrypted-media"
              />
            </div>
            <div className="p-3 text-center">
              <a
                href="https://www.tiktok.com/@fullstackdrip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-brand-pink transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border max-w-xs mx-auto md:max-w-none">
            <div className="aspect-[9/16] w-full">
              <iframe
                src="https://www.instagram.com/p/DQmotIJkcJm/embed"
                className="w-full h-full"
                allowFullScreen
                allow="encrypted-media"
              />
            </div>
            <div className="p-3 text-center">
              <a
                href="https://www.instagram.com/fullstackdrip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-brand-green transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* YouTube Short Embed */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border max-w-xs mx-auto md:max-w-none">
            <div className="aspect-[9/16] w-full">
              <iframe
                src="https://www.youtube.com/embed/RJMtgTgsuhI"
                title="Full Stack Drip Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-3 text-center">
              <a
                href="https://www.youtube.com/@fullstackdrip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-red-500 transition-colors"
              >
                YouTube Shorts
              </a>
            </div>
          </div>
        </div>

        {/* Featured LinkedIn Post Section */}
        <div className="mb-16" ref={linkedInRef}>
          <div
            className={`bg-card rounded-2xl shadow-xl border border-border overflow-hidden transition-all duration-700 ease-out ${
              linkedInVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Hero Header */}
            <div className="bg-[#0A66C2] px-6 py-8 md:px-10 md:py-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 rounded-full p-2">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Featured Post</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight text-balance">
                116K+ Developers Saw This Post About Bun.
              </h3>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-10">
              {/* Story intro */}
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                Anthropic acquired Bun. I wrote what I thought it meant for AI and for TypeScript development.
                Conversation ensued. Even some trolls! <span className="font-semibold">That&apos;s the goal.</span>{" "}
                <span className="text-muted-foreground">Er ... the conversation I mean, not the trolling.</span>
              </p>

              {/* Big Stats Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {/* Hero Stat - Impressions - Much larger */}
                <div
                  className={`lg:col-span-2 bg-[#0A66C2]/10 border-2 border-[#0A66C2]/30 rounded-2xl p-8 md:p-10 text-center transition-all duration-700 delay-200 ease-out ${
                    linkedInVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <Eye className="w-12 h-12 text-[#0A66C2] mx-auto mb-4" />
                  <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#0A66C2] tabular-nums">
                    {impressionsCount.toLocaleString()}
                  </p>
                  <p className="text-lg text-muted-foreground mt-2">impressions</p>
                  <p className="text-sm text-[#0A66C2] font-semibold mt-3">That was really cool.</p>
                </div>

                {/* Secondary stats stacked */}
                <div className="flex flex-col gap-4">
                  {/* New Followers */}
                  <div
                    className={`bg-muted/50 rounded-xl p-5 text-center flex-1 flex flex-col justify-center transition-all duration-700 delay-300 ease-out ${
                      linkedInVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <UserPlus className="w-6 h-6 text-brand-green mx-auto mb-2" />
                    <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{followersCount}</p>
                    <p className="text-xs text-muted-foreground mt-1">new followers</p>
                    <p className="text-xs text-brand-green font-medium mt-1">
                      in 24 hours. 100th guy couldn&apos;t commit.
                    </p>
                  </div>

                  {/* Engagement */}
                  <div
                    className={`bg-muted/50 rounded-xl p-5 text-center flex-1 flex flex-col justify-center transition-all duration-700 delay-[400ms] ease-out ${
                      linkedInVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-brand-pink" />
                      <MessageCircle className="w-5 h-5 text-brand-pink" />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{engagementCount}</p>
                    <p className="text-xs text-muted-foreground mt-1">reactions + comments</p>
                    <p className="text-xs text-brand-pink font-medium mt-1">
                      one guy gave it the laugh emoji. Can&apos;t win &apos;em all!
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing statement */}
              <p className="text-center text-muted-foreground italic mb-8">
                &ldquo;Making developers care enough to have opinions about JavaScript runtimes: that&apos;s Full Stack
                Drip.&rdquo;
              </p>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7401705844406419457/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#0A66C2] hover:bg-[#004182] text-white px-8 py-6 text-lg">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Read the full analysis
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://www.youtube.com/@fullstackdrip" target="_blank" rel="noopener noreferrer">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe on YouTube
            </Button>
          </a>
          <a href="https://fullstackdrip.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="px-8 py-6 text-lg border-2 bg-transparent">
              Read on Full Stack Drip
            </Button>
          </a>
          <a href="https://fullstackdrip.com/membership" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white bg-transparent"
            >
              Get Full Stack Drip: The Newsletter
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
