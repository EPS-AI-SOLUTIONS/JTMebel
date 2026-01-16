import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Ponad 20 lat na rynku",
  "Własna produkcja i magazyn",
  "Certyfikowane materiały",
  "Profesjonalny montaż",
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
              <span className="block text-4xl lg:text-5xl font-bold">20+</span>
              <span className="text-sm text-primary-foreground/80">lat doświadczenia</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground text-balance">
              Innowacja, jakość i zaufanie
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              JT Mebel to polska firma z ponad 20-letnim doświadczeniem w produkcji i dostawie mebli dla sektora
              edukacyjnego i biznesowego. Specjalizujemy się w kompleksowym wyposażeniu przedszkoli, szkół i biur.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nasze meble powstają z najwyższej jakości materiałów, spełniających wszystkie normy bezpieczeństwa.
              Oferujemy pełną obsługę - od projektu, przez produkcję, aż po montaż u klienta.
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
