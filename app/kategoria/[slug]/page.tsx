import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCatalog } from "@/components/product-catalog"
import { Breadcrumbs } from "@/components/breadcrumbs"

const categoryData: Record<string, { name: string; description: string }> = {
  przedszkole: {
    name: "Przedszkole i Żłobek",
    description: "Kolorowe i bezpieczne meble dla najmłodszych. Wszystkie produkty spełniają normy bezpieczeństwa.",
  },
  szkola: {
    name: "Szkoła",
    description: "Ergonomiczne meble szkolne dla uczniów i nauczycieli. Trwałe i funkcjonalne rozwiązania.",
  },
  biuro: {
    name: "Biuro",
    description: "Profesjonalne meble biurowe dla nowoczesnych przestrzeni pracy.",
  },
  multimedia: {
    name: "Multimedia",
    description: "Sprzęt audiowizualny i interaktywny dla edukacji i biznesu.",
  },
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categoryData[slug] || {
    name: "Produkty",
    description: "Przeglądaj naszą ofertę mebli i wyposażenia.",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "Strona główna", href: "/" },
                { label: category.name, href: `/kategoria/${slug}` },
              ]}
            />
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-foreground mt-4 mb-2">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{category.description}</p>
          </div>
        </div>
        <ProductCatalog category={slug} />
      </main>
      <Footer />
    </div>
  )
}
