"use client"

import { Linkedin, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContentCommunitySection() {
  return (
    <section className="w-full py-28 px-4 md:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            I Teach Developers in Public
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I create technical content that gets developers to stop scrolling. Here&apos;s what&apos;s resonating:
          </p>
        </div>

        {/* Video Grid - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
                src="https://www.instagram.com/reel/DPkZ_mZEa3D/embed"
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
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

        {/* Stats Callout */}
        <div className="bg-card border-2 border-brand-pink/50 rounded-xl p-8 mb-16 text-center shadow-lg">
          <p className="text-foreground font-medium text-lg">
            <span className="text-brand-pink font-bold">Consistent 1K+ views</span> per short video. Growing audience
            across{" "}
            <a
              href="https://www.tiktok.com/@fullstackdrip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-semibold hover:underline"
            >
              TikTok
            </a>
            ,{" "}
            <a
              href="https://www.instagram.com/fullstackdrip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green font-semibold hover:underline"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@fullstackdrip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 font-semibold hover:underline"
            >
              YouTube
            </a>
            , and{" "}
            <a
              href="https://www.linkedin.com/in/leehflannery/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        {/* LinkedIn Callout */}
        <div className="bg-blue-600 rounded-xl p-8 md:p-10 mb-16 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Linkedin className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold mb-2">
                Recent LinkedIn Post: <span className="text-yellow-300">100K+ Impressions</span>
              </h4>
              <p className="text-white/90 text-lg">
                My analysis of Anthropic&apos;s Bun acquisition hit 100K+ impressions and sparked conversations with
                DevRel leaders across the industry.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7401705844406419457/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-white/90 px-6 py-3">
                View Post <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
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
        </div>
      </div>
    </section>
  )
}
