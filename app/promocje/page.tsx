import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCatalog } from "@/components/product-catalog"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Tag } from "lucide-react"

export default function PromotionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-accent py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "Strona główna", href: "/" },
                { label: "Promocje", href: "/promocje" },
              ]}
            />
            <div className="flex items-center gap-3 mt-4 mb-2">
              <Tag className="h-8 w-8 text-accent-foreground" />
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-accent-foreground">Promocje</h1>
            </div>
            <p className="text-lg text-accent-foreground/80 max-w-2xl">
              Odkryj nasze najlepsze oferty i okazje. Produkty w obniżonych cenach dostępne przez ograniczony czas.
            </p>
          </div>
        </div>
        <PromotionsContent />
      </main>
      <Footer />
    </div>
  )
}

function PromotionsContent() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <ProductCatalog />
    </div>
  )
}
