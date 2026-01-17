import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-office-furniture-showroom-with-wooden-desks.jpg"
          alt="Showroom mebli JT Mebel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6 lg:space-y-8">
          <p className="text-primary-foreground/80 text-sm lg:text-base font-medium tracking-wide uppercase">
            Producent certyfikowanych mebli szkolnych
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight text-balance">
            Meble szkolne i przedszkolne
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
            Wyposażyliśmy tysiące sal lekcyjnych w kraju i za granicą. Nowoczesny park maszynowy gwarantuje
            wysoką jakość i krótkie terminy realizacji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Zobacz katalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-transparent">
              <Link href="/kontakt">Zapytaj o ofertę</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
