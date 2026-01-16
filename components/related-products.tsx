import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock related products
const allProducts = [
  {
    id: 7,
    name: "Krzesło szkolne ISO",
    category: "szkola",
    price: 120,
    image: "/school-chair-iso-standard.jpg",
  },
  {
    id: 12,
    name: "Biurko nauczyciela",
    category: "szkola",
    price: 950,
    image: "/teacher-desk-wooden-classroom-furniture.jpg",
  },
  {
    id: 5,
    name: "Stolik przedszkolny okrągły",
    category: "przedszkole",
    price: 320,
    image: "/round-kindergarten-table--colorful-children-furnit.jpg",
  },
  {
    id: 8,
    name: "Regał przedszkolny na zabawki",
    category: "przedszkole",
    price: 580,
    image: "/kindergarten-toy-storage-shelf-colorful.jpg",
  },
  {
    id: 4,
    name: "Szafa metalowa aktowa",
    category: "biuro",
    price: 780,
    image: "/metal-filing-cabinet--office-storage-furniture--gr.jpg",
  },
  {
    id: 9,
    name: "Fotel obrotowy ergonomiczny",
    category: "biuro",
    price: 890,
    image: "/ergonomic-office-chair-black-mesh.jpg",
  },
]

interface RelatedProductsProps {
  currentProductId: number
  category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const relatedProducts = allProducts.filter((p) => p.category === category && p.id !== currentProductId).slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <section className="py-12 lg:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-8">Podobne produkty</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
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
              </Link>
              <div className="p-4">
                <Link href={`/produkt/${product.id}`}>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">{product.price} zł</span>
                  <Button size="icon" variant="outline" className="bg-transparent">
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
