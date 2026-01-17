import Link from "next/link"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Krzesło szkolne Ergos",
    category: "Szkoła",
    price: "144 zł",
    originalPrice: "160 zł",
    image: "/school-chair-iso-standard.jpg",
    isPromo: true,
  },
  {
    id: 2,
    name: "Krzesło przedszkolne Kamil",
    category: "Przedszkole",
    price: "210 zł",
    image: "/colorful-children-chair-for-kindergarten--stackabl.jpg",
    isPromo: false,
  },
  {
    id: 3,
    name: "Fotel obrotowy Intrata",
    category: "Biuro",
    price: "990 zł",
    originalPrice: "1 260 zł",
    image: "/ergonomic-office-chair-black-mesh.jpg",
    isPromo: true,
  },
  {
    id: 4,
    name: "Stół szkolny Krzyś Duo 2-os.",
    category: "Szkoła",
    price: "308 zł",
    image: "/adjustable-school-desk-with-wooden-top-and-metal-f.jpg",
    isPromo: false,
  },
  {
    id: 5,
    name: "Regał szkolny Kubuś AN01",
    category: "Szkoła",
    price: "830 zł",
    image: "/kindergarten-toy-storage-shelf-colorful.jpg",
    isPromo: false,
  },
  {
    id: 6,
    name: "Monitor interaktywny Optoma 65\"",
    category: "Multimedia",
    price: "4 970 zł",
    image: "/interactive-whiteboard-touchscreen-display--modern.jpg",
    isPromo: false,
  },
  {
    id: 7,
    name: "Tablica ceramiczna biała",
    category: "Tablice",
    price: "500 zł",
    originalPrice: "700 zł",
    image: "/interactive-whiteboard-in-classroom--modern-presen.jpg",
    isPromo: true,
  },
  {
    id: 8,
    name: "Stolik przedszkolny okrągły",
    category: "Przedszkole",
    price: "320 zł",
    image: "/round-kindergarten-table--colorful-children-furnit.jpg",
    isPromo: false,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
              Polecane produkty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Odkryj nasze bestsellery i aktualne promocje</p>
          </div>
          <Link
            href="/produkty"
            className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all"
          >
            Zobacz wszystkie produkty
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <Link href={`/produkt/${product.id}`} className="block relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isPromo && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    PROMOCJA
                  </span>
                )}
              </Link>
              <div className="p-5">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</span>
                <Link href={`/produkt/${product.id}`}>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-foreground">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="icon" variant="outline" className="shrink-0 bg-transparent">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only">Dodaj do koszyka</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
