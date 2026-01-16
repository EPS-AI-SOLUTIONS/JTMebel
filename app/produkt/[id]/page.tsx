import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"
import { Breadcrumbs } from "@/components/breadcrumbs"

// Mock product data
const products: Record<
  string,
  {
    id: number
    name: string
    category: string
    categorySlug: string
    price: number
    originalPrice?: number
    description: string
    features: string[]
    specifications: { label: string; value: string }[]
    images: string[]
    colors: { name: string; value: string }[]
    inStock: boolean
    sku: string
  }
> = {
  "1": {
    id: 1,
    name: "Ławka szkolna regulowana",
    category: "Szkoła",
    categorySlug: "szkola",
    price: 450,
    originalPrice: 520,
    description:
      "Nowoczesna ławka szkolna z regulacją wysokości, idealna dla uczniów w różnym wieku. Wykonana z wysokiej jakości materiałów, zapewnia komfort i ergonomię podczas nauki. Blat wykonany z płyty laminowanej odpornej na zarysowania.",
    features: [
      "Regulacja wysokości w zakresie 64-76 cm",
      "Blat odporny na zarysowania",
      "Stabilna konstrukcja metalowa",
      "Haczyk na tornister",
      "Krawędź ABS chroniąca przed uszkodzeniami",
      "Certyfikat zgodności z normą PN-EN 1729",
    ],
    specifications: [
      { label: "Wymiary blatu", value: "70 x 50 cm" },
      { label: "Wysokość", value: "64-76 cm (regulowana)" },
      { label: "Materiał blatu", value: "Płyta laminowana HPL" },
      { label: "Konstrukcja", value: "Stal malowana proszkowo" },
      { label: "Waga", value: "12 kg" },
      { label: "Gwarancja", value: "24 miesiące" },
    ],
    images: [
      "/adjustable-school-desk-with-wooden-top-and-metal-f.jpg",
      "/school-desk-side-view.jpg",
      "/school-desk-detail-legs.jpg",
    ],
    colors: [
      { name: "Buk", value: "#D4A574" },
      { name: "Szary", value: "#9CA3AF" },
    ],
    inStock: true,
    sku: "LAW-REG-001",
  },
  "2": {
    id: 2,
    name: "Krzesełko przedszkolne Kolorowe",
    category: "Przedszkole",
    categorySlug: "przedszkole",
    price: 85,
    description:
      "Bezpieczne i wygodne krzesełko dla dzieci w wieku przedszkolnym. Lekkie, łatwe do przenoszenia i układania w stosy. Zaokrąglone krawędzie zapewniają bezpieczeństwo najmłodszym.",
    features: [
      "Zaokrąglone, bezpieczne krawędzie",
      "Możliwość sztaplowania (do 10 szt.)",
      "Lekka konstrukcja (1,5 kg)",
      "Antypoślizgowe stopki",
      "Odporne na zabrudzenia",
      "Certyfikat bezpieczeństwa EN 1729-1",
    ],
    specifications: [
      { label: "Wysokość siedziska", value: "26 cm" },
      { label: "Szerokość siedziska", value: "30 cm" },
      { label: "Głębokość siedziska", value: "28 cm" },
      { label: "Materiał", value: "Polipropylen" },
      { label: "Waga", value: "1,5 kg" },
      { label: "Gwarancja", value: "24 miesiące" },
    ],
    images: ["/colorful-children-chair-for-kindergarten--stackabl.jpg"],
    colors: [
      { name: "Czerwony", value: "#EF4444" },
      { name: "Niebieski", value: "#3B82F6" },
      { name: "Zielony", value: "#22C55E" },
      { name: "Żółty", value: "#EAB308" },
    ],
    inStock: true,
    sku: "KRZ-PRZ-002",
  },
  "3": {
    id: 3,
    name: "Biurko gabinetowe Premium",
    category: "Biuro",
    categorySlug: "biuro",
    price: 1890,
    originalPrice: 2200,
    description:
      "Eleganckie biurko gabinetowe z przestronnymi szufladami i wykończeniem premium. Idealne do gabinetu dyrektora lub sali konferencyjnej. Solidna konstrukcja z drewna i metalu.",
    features: [
      "Trzy pojemne szuflady z cichym domykiem",
      "Blat z naturalnego forniru",
      "Wbudowany organizer na kable",
      "Regulowane nóżki",
      "Zamek centralny",
      "Wykończenie premium",
    ],
    specifications: [
      { label: "Wymiary", value: "160 x 80 x 75 cm" },
      { label: "Materiał blatu", value: "Płyta MDF + fornir dębowy" },
      { label: "Grubość blatu", value: "28 mm" },
      { label: "Nogi", value: "Metal malowany proszkowo" },
      { label: "Waga", value: "45 kg" },
      { label: "Gwarancja", value: "36 miesięcy" },
    ],
    images: ["/executive-office-desk-with-drawers--dark-wood-fini.jpg"],
    colors: [
      { name: "Orzech", value: "#5D4037" },
      { name: "Dąb", value: "#A1887F" },
    ],
    inStock: true,
    sku: "BIU-GAB-003",
  },
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products[id] || products["1"]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <Breadcrumbs
            items={[
              { label: "Strona główna", href: "/" },
              { label: product.category, href: `/kategoria/${product.categorySlug}` },
              { label: product.name, href: `/produkt/${product.id}` },
            ]}
          />
        </div>
        <ProductDetail product={product} />
        <RelatedProducts currentProductId={product.id} category={product.categorySlug} />
      </main>
      <Footer />
    </div>
  )
}
