import Link from "next/link"
import { FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Porozmawiajmy o Twoim projekcie
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić szczegóły zamówienia. Oferujemy indywidualne wyceny i profesjonalne
            doradztwo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link href="/kontakt" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Skontaktuj się
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-transparent">
              <Link href="/katalog" className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Pobierz katalog PDF
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
