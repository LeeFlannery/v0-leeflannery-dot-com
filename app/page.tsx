import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/header"
import { BrandCards } from "@/components/brand-cards"
import { ProjectsGrid } from "@/components/projects-grid"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrandCards />
      <ProjectsGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}
