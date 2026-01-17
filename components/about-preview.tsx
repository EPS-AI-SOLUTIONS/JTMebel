import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Ponad 12 lat doświadczenia",
  "Nowoczesny park maszynowy",
  "Certyfikowane wyroby",
  "Realizacje w kraju i za granicą",
]

export function AboutPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/furniture-factory-production-line--craftsman-worki.jpg"
                alt="Produkcja mebli JT Mebel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-primary text-primary-foreground p-6 lg:p-8 rounded-xl shadow-lg">
              <span className="block text-4xl lg:text-5xl font-bold">1000+</span>
              <span className="text-sm text-primary-foreground/80">wyposażonych sal</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground text-balance">
              Zaufany producent mebli szkolnych
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              JT Mebel Sp. z o.o. to firma z Kartuz specjalizująca się w produkcji seryjnej mebli szkolnych.
              Wykonujemy również indywidualne zamówienia na życzenie klienta.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nasze wyroby posiadają wymagane certyfikaty zgodności z obowiązującymi normami.
              Dysponujemy nowoczesnym parkiem maszynowym, który gwarantuje wysoką jakość i krótkie terminy realizacji.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/o-nas">
                  Poznaj naszą historię
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
