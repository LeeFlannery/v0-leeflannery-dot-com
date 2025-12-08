"use client"

import { Linkedin, Youtube, Eye, UserPlus, Heart, MessageCircle } from "lucide-react"
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

        {/* Latest Long-Form Content */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Latest Long-Form Content
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
              <iframe
                src="https://www.youtube.com/embed/ufa-RCCkSx8?list=PL1KMjfUN0pZSH94lohu71AjIvcq5TXrO0"
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
          </div>
        </div>

        {/* Featured LinkedIn Post Section */}
        <div className="mb-16">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Hero Header */}
            <div className="bg-[#0A66C2] px-6 py-8 md:px-10 md:py-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 rounded-full p-2">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Featured Post</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight text-balance">
                This Post About a JavaScript Runtime Got 116K+ Impressions and Made Some People Mad
              </h3>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-10">
              {/* Story intro */}
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                Anthropic acquired Bun. I wrote why this matters for AI development. Some developers agreed. Some
                didn&apos;t. <span className="font-semibold">Everyone engaged.</span>
              </p>

              {/* Big Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                {/* Primary Stat - Impressions */}
                <div className="col-span-2 bg-[#0A66C2]/5 border-2 border-[#0A66C2]/20 rounded-xl p-6 text-center">
                  <Eye className="w-8 h-8 text-[#0A66C2] mx-auto mb-2" />
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A66C2]">116,647</p>
                  <p className="text-sm text-muted-foreground mt-1">impressions</p>
                  <p className="text-xs text-[#0A66C2] font-medium mt-2">That&apos;s a lot of developers reached.</p>
                </div>

                {/* New Followers */}
                <div className="bg-muted/50 rounded-xl p-5 text-center flex flex-col justify-center">
                  <UserPlus className="w-6 h-6 text-brand-green mx-auto mb-2" />
                  <p className="text-3xl md:text-4xl font-bold text-foreground">99</p>
                  <p className="text-xs text-muted-foreground mt-1">new followers</p>
                  <p className="text-xs text-brand-green font-medium mt-1">in 48 hours</p>
                </div>

                {/* Engagement */}
                <div className="bg-muted/50 rounded-xl p-5 text-center flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-brand-pink" />
                    <MessageCircle className="w-5 h-5 text-brand-pink" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground">647</p>
                  <p className="text-xs text-muted-foreground mt-1">reactions + comments</p>
                  <p className="text-xs text-brand-pink font-medium mt-1">some were heated</p>
                </div>
              </div>

              {/* Secondary Stats Row */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 py-6 border-y border-border">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">76,922</p>
                  <p className="text-xs text-muted-foreground">members reached</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">188</p>
                  <p className="text-xs text-muted-foreground">profile views</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">31</p>
                  <p className="text-xs text-muted-foreground">shares</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">66</p>
                  <p className="text-xs text-muted-foreground">saves</p>
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
        </div>
      </div>
    </section>
  )
}
