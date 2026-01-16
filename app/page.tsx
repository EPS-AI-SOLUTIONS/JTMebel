import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutPreview } from "@/components/about-preview"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBadges />
        <CategoriesSection />
        <FeaturedProducts />
        <AboutPreview />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
