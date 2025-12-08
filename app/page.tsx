import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/header"
import { VideoShowcase } from "@/components/video-showcase"
import { BrandCards } from "@/components/brand-cards"
import { ProjectsGrid } from "@/components/projects-grid"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { ContentCommunitySection } from "@/components/content-community-section"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <VideoShowcase />
      <ContentCommunitySection />
      <ProjectsGrid />
      <AboutSection />
      <BrandCards />
      <Footer />
    </main>
  )
}
