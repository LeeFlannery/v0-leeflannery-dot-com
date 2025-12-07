import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Video, Pen, Users, BookOpen, Mic, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Full Stack Drip - Tech Breakdown | Lee Flannery",
  description:
    "The tools and workflow behind Full Stack Drip - developer education through writing, video, and community.",
}

const contentStack = [
  {
    category: "Publishing Platform",
    items: [
      { name: "Ghost CMS", description: "Headless CMS for newsletters, memberships, and content management" },
      { name: "Custom Theme", description: "Tailored Ghost theme for brand consistency" },
    ],
  },
  {
    category: "Video Production",
    items: [
      { name: "OBS Studio", description: "Live streaming and screen recording" },
      { name: "DaVinci Resolve", description: "Professional video editing and color grading" },
      { name: "Descript", description: "AI-powered transcription and podcast editing" },
    ],
  },
  {
    category: "Audio",
    items: [
      { name: "Shure SM7B", description: "Broadcast-quality dynamic microphone" },
      { name: "Focusrite Scarlett", description: "Audio interface for recording" },
      { name: "Adobe Podcast", description: "AI audio enhancement and noise removal" },
    ],
  },
  {
    category: "Design & Graphics",
    items: [
      { name: "Figma", description: "Thumbnails, graphics, and visual design" },
      { name: "Canva", description: "Quick social media assets" },
      { name: "Midjourney", description: "AI-generated imagery for covers and illustrations" },
    ],
  },
  {
    category: "Distribution",
    items: [
      { name: "YouTube", description: "Long-form tutorials and walkthroughs" },
      { name: "Ghost Newsletters", description: "Email distribution to subscribers" },
      { name: "Social Media", description: "Twitter/X, LinkedIn, Instagram for reach" },
    ],
  },
  {
    category: "Workflow",
    items: [
      { name: "Notion", description: "Content calendar and idea management" },
      { name: "GitHub", description: "Code examples and project repositories" },
      { name: "Vercel", description: "Hosting demo projects and examples" },
    ],
  },
]

const features = [
  {
    icon: Pen,
    title: "Written Content",
    description: "Long-form articles, tutorials, and guides on Ghost CMS with full newsletter integration.",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Screen recordings and walkthroughs edited in DaVinci Resolve, published to YouTube.",
  },
  {
    icon: Mic,
    title: "Live Streams",
    description: "Building in public with OBS Studio - real coding sessions, Q&A, and community interaction.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Membership tiers, Discord, and direct engagement with developers learning to ship.",
  },
  {
    icon: BookOpen,
    title: "Teaching",
    description: "Next.js, AI tools, TypeScript, and modern web dev - practical, production-focused content.",
  },
  {
    icon: Zap,
    title: "Shipping",
    description: "Every tutorial ships something real. No tutorial hell, just production code.",
  },
]

export default function FullStackDripPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-foreground hover:bg-card transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Image src="/full-stack-drip-logo.png" alt="Full Stack Drip" width={120} height={120} className="mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Full Stack Drip</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Developer education through writing, video, and community. Teaching developers to ship production code.
          </p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-border shadow-2xl">
            <Image
              src="/images/photo-1460925895917-afdab827c52f.jpeg"
              alt="Full Stack Drip Analytics"
              width={900}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">What It Is</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Full Stack Drip is a developer education platform focused on shipping real code. No tutorial hell - every
              piece of content results in something deployed, something functional, something you can point to.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Content spans written tutorials, YouTube videos, live coding streams, and newsletter deep-dives. Topics
              include Next.js, AI integration, TypeScript, and the practical side of modern web development.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Content Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-card border border-border">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tools & Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentStack.map((category) => (
              <div key={category.category} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="text-muted-foreground text-sm ml-2">— {item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Ship First</h3>
              <p className="text-muted-foreground">
                Every tutorial deploys something. Theory is useful, but shipping is the goal.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Production Quality</h3>
              <p className="text-muted-foreground">
                No toy examples. Real patterns, real architecture, real code you'd use at work.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Build in Public</h3>
              <p className="text-muted-foreground">
                Live streams, progress updates, honest takes on what works and what doesn't.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Content shaped by what developers actually need, not what gets the most clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fullstackdrip.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Full Stack Drip
            </a>
            <a
              href="https://youtube.com/@FullStackDrip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
            >
              <Video className="h-4 w-4" />
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
