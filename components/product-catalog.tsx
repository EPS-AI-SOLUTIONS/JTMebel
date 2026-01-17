"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ShoppingCart, Grid3X3, List, SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Product data based on JT Mebel catalog
const allProducts = [
  {
    id: 1,
    name: "Krzesło szkolne Ergos",
    category: "szkola",
    subcategory: "krzesla",
    price: 144,
    originalPrice: 160,
    image: "/school-chair-iso-standard.jpg",
    isPromo: true,
    colors: ["szary", "niebieski", "zielony"],
    inStock: true,
  },
  {
    id: 2,
    name: "Krzesło przedszkolne Kamil",
    category: "przedszkole",
    subcategory: "krzesla",
    price: 210,
    image: "/colorful-children-chair-for-kindergarten--stackabl.jpg",
    isPromo: false,
    colors: ["czerwony", "niebieski", "zielony", "żółty"],
    inStock: true,
  },
  {
    id: 3,
    name: "Fotel obrotowy Intrata",
    category: "biuro",
    subcategory: "fotele",
    price: 990,
    originalPrice: 1260,
    image: "/ergonomic-office-chair-black-mesh.jpg",
    isPromo: true,
    colors: ["czarny", "szary"],
    inStock: true,
  },
  {
    id: 4,
    name: "Stół szkolny Krzyś Duo 2-os.",
    category: "szkola",
    subcategory: "stoly",
    price: 308,
    image: "/adjustable-school-desk-with-wooden-top-and-metal-f.jpg",
    isPromo: false,
    colors: ["buk", "szary", "biały"],
    inStock: true,
  },
  {
    id: 5,
    name: "Regał szkolny Kubuś AN01",
    category: "szkola",
    subcategory: "regaly",
    price: 830,
    image: "/kindergarten-toy-storage-shelf-colorful.jpg",
    isPromo: false,
    colors: ["buk", "biały"],
    inStock: true,
  },
  {
    id: 6,
    name: "Monitor interaktywny Optoma 65\"",
    category: "multimedia",
    subcategory: "monitory",
    price: 4970,
    image: "/interactive-whiteboard-touchscreen-display--modern.jpg",
    isPromo: false,
    colors: ["czarny"],
    inStock: true,
  },
  {
    id: 7,
    name: "Tablica ceramiczna biała",
    category: "multimedia",
    subcategory: "tablice",
    price: 500,
    originalPrice: 700,
    image: "/interactive-whiteboard-in-classroom--modern-presen.jpg",
    isPromo: true,
    colors: ["biały"],
    inStock: true,
  },
  {
    id: 8,
    name: "Krzesło przedszkolne Miś",
    category: "przedszkole",
    subcategory: "krzesla",
    price: 210,
    image: "/colorful-children-chair-for-kindergarten--stackabl.jpg",
    isPromo: false,
    colors: ["czerwony", "niebieski", "zielony"],
    inStock: true,
  },
  {
    id: 9,
    name: "Krzesło szkolne Krzyś",
    category: "szkola",
    subcategory: "krzesla",
    price: 178,
    image: "/school-chair-iso-standard.jpg",
    isPromo: false,
    colors: ["szary", "niebieski"],
    inStock: true,
  },
  {
    id: 10,
    name: "Stół szkolny Oskar 2-os.",
    category: "szkola",
    subcategory: "stoly",
    price: 270,
    image: "/adjustable-school-desk-with-wooden-top-and-metal-f.jpg",
    isPromo: false,
    colors: ["buk", "szary"],
    inStock: true,
  },
  {
    id: 11,
    name: "Fotel obrotowy I-LINE",
    category: "biuro",
    subcategory: "fotele",
    price: 513,
    originalPrice: 570,
    image: "/ergonomic-office-chair-black-mesh.jpg",
    isPromo: true,
    colors: ["czarny"],
    inStock: true,
  },
  {
    id: 12,
    name: "Biurko Kubuś 120x60",
    category: "szkola",
    subcategory: "biurka",
    price: 800,
    image: "/teacher-desk-wooden-classroom-furniture.jpg",
    isPromo: false,
    colors: ["buk", "biały"],
    inStock: true,
  },
  {
    id: 13,
    name: "Krzesło Titan+ antybakteryjne",
    category: "szkola",
    subcategory: "krzesla",
    price: 227,
    image: "/school-chair-iso-standard.jpg",
    isPromo: false,
    colors: ["szary", "niebieski", "zielony"],
    inStock: true,
  },
  {
    id: 14,
    name: "Stolik przedszkolny okrągły",
    category: "przedszkole",
    subcategory: "stoliki",
    price: 320,
    image: "/round-kindergarten-table--colorful-children-furnit.jpg",
    isPromo: false,
    colors: ["buk", "biały", "kolorowy"],
    inStock: true,
  },
  {
    id: 15,
    name: "Szafka na kubeczki",
    category: "przedszkole",
    subcategory: "szafki",
    price: 420,
    image: "/kindergarten-cup-storage-cabinet-colorful.jpg",
    isPromo: false,
    colors: ["buk", "biały"],
    inStock: true,
  },
  {
    id: 16,
    name: "Fotel Gamingowy Race Tilt",
    category: "biuro",
    subcategory: "fotele",
    price: 403,
    originalPrice: 620,
    image: "/ergonomic-office-chair-black-mesh.jpg",
    isPromo: true,
    colors: ["czarny", "czerwony"],
    inStock: true,
  },
]

const subcategories: Record<string, { label: string; value: string }[]> = {
  przedszkole: [
    { label: "Krzesełka", value: "krzesla" },
    { label: "Stoliki", value: "stoliki" },
    { label: "Regały", value: "regaly" },
    { label: "Szafki", value: "szafki" },
  ],
  szkola: [
    { label: "Krzesła szkolne", value: "krzesla" },
    { label: "Stoły szkolne", value: "stoly" },
    { label: "Biurka", value: "biurka" },
    { label: "Regały", value: "regaly" },
  ],
  biuro: [
    { label: "Fotele obrotowe", value: "fotele" },
    { label: "Biurka", value: "biurka" },
    { label: "Szafy", value: "szafy" },
  ],
  multimedia: [
    { label: "Monitory interaktywne", value: "monitory" },
    { label: "Tablice", value: "tablice" },
    { label: "Projektory", value: "projektory" },
  ],
}

const priceRanges = [
  { label: "Do 200 zł", min: 0, max: 200 },
  { label: "200 - 500 zł", min: 200, max: 500 },
  { label: "500 - 1000 zł", min: 500, max: 1000 },
  { label: "1000 - 2000 zł", min: 1000, max: 2000 },
  { label: "Powyżej 2000 zł", min: 2000, max: Number.POSITIVE_INFINITY },
]

interface ProductCatalogProps {
  category?: string
}

export function ProductCatalog({ category }: ProductCatalogProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("default")
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([])
  const [showPromoOnly, setShowPromoOnly] = useState(false)
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let products = allProducts

    // Filter by category
    if (category) {
      products = products.filter((p) => p.category === category)
    }

    // Filter by subcategory
    if (selectedSubcategories.length > 0) {
      products = products.filter((p) => selectedSubcategories.includes(p.subcategory))
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      products = products.filter((p) => {
        return selectedPriceRanges.some((rangeIndex) => {
          const range = priceRanges[rangeIndex]
          return p.price >= range.min && p.price < range.max
        })
      })
    }

    // Filter promo only
    if (showPromoOnly) {
      products = products.filter((p) => p.isPromo)
    }

    // Filter in stock only
    if (showInStockOnly) {
      products = products.filter((p) => p.inStock)
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        products = [...products].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        products = [...products].sort((a, b) => b.price - a.price)
        break
      case "name":
        products = [...products].sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return products
  }, [category, selectedSubcategories, selectedPriceRanges, showPromoOnly, showInStockOnly, sortBy])

  const toggleSubcategory = (value: string) => {
    setSelectedSubcategories((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const togglePriceRange = (index: number) => {
    setSelectedPriceRanges((prev) => (prev.includes(index) ? prev.filter((v) => v !== index) : [...prev, index]))
  }

  const clearFilters = () => {
    setSelectedSubcategories([])
    setSelectedPriceRanges([])
    setShowPromoOnly(false)
    setShowInStockOnly(false)
  }

  const activeFiltersCount =
    selectedSubcategories.length + selectedPriceRanges.length + (showPromoOnly ? 1 : 0) + (showInStockOnly ? 1 : 0)

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Subcategories */}
      {category && subcategories[category] && (
        <div>
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            Kategoria
            <ChevronDown className="h-4 w-4" />
          </h3>
          <div className="space-y-2">
            {subcategories[category].map((sub) => (
              <div key={sub.value} className="flex items-center gap-2">
                <Checkbox
                  id={sub.value}
                  checked={selectedSubcategories.includes(sub.value)}
                  onCheckedChange={() => toggleSubcategory(sub.value)}
                />
                <Label htmlFor={sub.value} className="text-sm text-foreground cursor-pointer">
                  {sub.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Price ranges */}
      <div>
        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          Cena
          <ChevronDown className="h-4 w-4" />
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <div key={range.label} className="flex items-center gap-2">
              <Checkbox
                id={`price-${index}`}
                checked={selectedPriceRanges.includes(index)}
                onCheckedChange={() => togglePriceRange(index)}
              />
              <Label htmlFor={`price-${index}`} className="text-sm text-foreground cursor-pointer">
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Additional filters */}
      <div>
        <h3 className="font-semibold text-foreground mb-3">Dodatkowe filtry</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox id="promo" checked={showPromoOnly} onCheckedChange={() => setShowPromoOnly(!showPromoOnly)} />
            <Label htmlFor="promo" className="text-sm text-foreground cursor-pointer">
              Tylko promocje
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="instock"
              checked={showInStockOnly}
              onCheckedChange={() => setShowInStockOnly(!showInStockOnly)}
            />
            <Label htmlFor="instock" className="text-sm text-foreground cursor-pointer">
              Tylko dostępne
            </Label>
          </div>
        </div>
      </div>

      {/* Clear filters */}
      {activeFiltersCount > 0 && (
        <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
          <X className="h-4 w-4 mr-2" />
          Wyczyść filtry ({activeFiltersCount})
        </Button>
      )}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Filtry</h2>
            <FilterContent />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
            <p className="text-muted-foreground">
              Znaleziono <span className="font-semibold text-foreground">{filteredProducts.length}</span> produktów
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Mobile Filter Button */}
              <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden relative bg-transparent">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtry
                    {activeFiltersCount > 0 && (
                      <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filtry</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sortuj" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Domyślnie</SelectItem>
                  <SelectItem value="price-asc">Cena: rosnąco</SelectItem>
                  <SelectItem value="price-desc">Cena: malejąco</SelectItem>
                  <SelectItem value="name">Nazwa A-Z</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="hidden sm:flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("rounded-r-none", viewMode === "grid" && "bg-muted")}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                  <span className="sr-only">Widok siatki</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("rounded-l-none", viewMode === "list" && "bg-muted")}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                  <span className="sr-only">Widok listy</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">Nie znaleziono produktów spełniających kryteria.</p>
              <Button variant="outline" onClick={clearFilters}>
                Wyczyść filtry
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                        <span className="px-4 py-2 bg-muted text-muted-foreground text-sm font-medium rounded">
                          Niedostępny
                        </span>
                      </div>
                    )}
                  </Link>
                  <div className="p-5">
                    <Link href={`/produkt/${product.id}`}>
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-foreground">{product.price} zł</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice} zł</span>
                        )}
                      </div>
                      <Button size="icon" variant="outline" disabled={!product.inStock} className="bg-transparent">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Dodaj do koszyka</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col sm:flex-row bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <Link href={`/produkt/${product.id}`} className="relative w-full sm:w-48 h-48 shrink-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.isPromo && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                        PROMOCJA
                      </span>
                    )}
                  </Link>
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <Link href={`/produkt/${product.id}`}>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-2">Kolory: {product.colors.join(", ")}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.inStock ? (
                          <span className="text-green-600">Dostępny</span>
                        ) : (
                          <span className="text-red-500">Niedostępny</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-foreground">{product.price} zł</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice} zł</span>
                        )}
                      </div>
                      <Button disabled={!product.inStock}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Do koszyka
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
