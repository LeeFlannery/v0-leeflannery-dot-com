import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/header"
import { BrandCards } from "@/components/brand-cards"
import { ProjectsGrid } from "@/components/projects-grid"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { ContentCommunitySection } from "@/components/content-community-section"
import { LatestVideo } from "@/components/latest-video"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LatestVideo />
      <ContentCommunitySection />
      <ProjectsGrid />
      <AboutSection />
      <BrandCards />
      <Footer />
    </main>
  )
}
