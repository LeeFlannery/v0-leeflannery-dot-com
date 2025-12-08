"use client"

import {
  Linkedin,
  Youtube,
  ExternalLink,
  Eye,
  Users,
  UserPlus,
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
} from "lucide-react"
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
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              Developer Content That Performs
            </h3>
            <p className="text-muted-foreground">Recent LinkedIn Analysis: Anthropic&apos;s Bun Acquisition</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {/* Left Side - LinkedIn Post Card (60%) */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-lg border border-border p-6">
              <div className="flex items-start gap-3 mb-4">
                <Linkedin className="w-5 h-5 text-[#0A66C2] flex-shrink-0 mt-1" />
                <div className="flex items-center gap-3">
                  <img
                    src="/images/linked3.png"
                    alt="Lee Flannery"
                    className="w-12 h-12 rounded-full object-cover object-top"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Lee Flannery</p>
                    <p className="text-sm text-gray-500">Solutions Engineer | Dev Rel & DX | Creator</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-800 mb-6">
                <p className="font-semibold">WHOA. Anthropic just acquired Bun.</p>
                <p className="text-sm leading-relaxed">
                  If you&apos;re not familiar, Bun is a JavaScript runtime, package manager, bundler, and test runner
                  all rolled into one. A lot of my current videos are about these kinds of tools, but the thing about
                  Bun is - it&apos;s the runtime. Not just tooling on top of Node. The actual runtime. And this thing is
                  FAST. A lot faster than Node.js.
                </p>
                <p className="text-sm leading-relaxed">
                  Here&apos;s why this is huge: Claude Code hit $1 billion in run-rate revenue in six months.
                  That&apos;s insane growth for a coding tool.
                </p>
                <p className="text-sm leading-relaxed">
                  And now Anthropic owns the entire stack - from the AI model generating your code down to the runtime
                  executing it. They control the whole pipeline. And Bun is legit good if I do say so myself.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7401705844406419457/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#0A66C2] font-medium hover:underline"
              >
                Read full post on LinkedIn <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Right Side - Stats Dashboard (40%) */}
            <div className="lg:col-span-2 bg-card rounded-xl shadow-lg border border-border p-6">
              <h4 className="text-xl font-bold text-foreground mb-6">Impact</h4>

              <div className="space-y-4">
                {/* Primary Stats - Large */}
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Eye className="w-4 h-4 text-[#0A66C2]" />
                    </div>
                    <p className="text-3xl font-bold text-foreground">116,647</p>
                    <p className="text-xs text-muted-foreground">Impressions</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-[#0A66C2]" />
                    </div>
                    <p className="text-3xl font-bold text-foreground">76,922</p>
                    <p className="text-xs text-muted-foreground">Members Reached</p>
                  </div>
                </div>

                {/* Profile Activity */}
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">188</p>
                    <p className="text-xs text-muted-foreground">Profile Views</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-0">
                      <UserPlus className="w-3 h-3 text-[#0A66C2]" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">99</p>
                    <p className="text-xs text-muted-foreground">Followers Gained</p>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <Heart className="w-4 h-4 text-[#0A66C2] mx-auto mb-1" />
                    <p className="text-lg font-bold text-foreground">589</p>
                    <p className="text-[10px] text-muted-foreground">Reactions</p>
                  </div>
                  <div className="text-center">
                    <MessageCircle className="w-4 h-4 text-[#0A66C2] mx-auto mb-1" />
                    <p className="text-lg font-bold text-foreground">58</p>
                    <p className="text-[10px] text-muted-foreground">Comments</p>
                  </div>
                  <div className="text-center">
                    <Repeat2 className="w-4 h-4 text-[#0A66C2] mx-auto mb-1" />
                    <p className="text-lg font-bold text-foreground">31</p>
                    <p className="text-[10px] text-muted-foreground">Reposts</p>
                  </div>
                  <div className="text-center">
                    <Bookmark className="w-4 h-4 text-[#0A66C2] mx-auto mb-1" />
                    <p className="text-lg font-bold text-foreground">66</p>
                    <p className="text-[10px] text-muted-foreground">Saves</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6 pt-4 border-t border-border">
                From a single post analyzing the Anthropic-Bun acquisition
              </p>
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
