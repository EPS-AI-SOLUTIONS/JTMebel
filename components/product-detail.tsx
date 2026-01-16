"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Minus, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductDetailProps {
  product: {
    id: number
    name: string
    category: string
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
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<"description" | "specifications">("description")

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="container mx-auto px-4 pb-12 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {discount > 0 && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                -{discount}%
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                    selectedImage === index ? "border-accent" : "border-border hover:border-muted-foreground",
                  )}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - zdjęcie ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.category}</p>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">{product.price} zł</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">{product.originalPrice} zł</span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-green-600 font-medium">Dostępny</span>
              </>
            ) : (
              <>
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-red-500 font-medium">Niedostępny</span>
              </>
            )}
          </div>

          {/* Color Selection */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">
              Kolor: <span className="text-muted-foreground">{selectedColor.name}</span>
            </p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all",
                    selectedColor.name === color.name ? "border-foreground scale-110" : "border-border hover:scale-105",
                  )}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {selectedColor.name === color.name && <Check className="h-5 w-5 text-white drop-shadow-md" />}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">Ilość</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-r-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-muted-foreground text-sm">
                Suma: {(product.price * quantity).toLocaleString()} zł
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button size="lg" className="flex-1" disabled={!product.inStock}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Dodaj do koszyka
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              <Heart className="mr-2 h-5 w-5" />
              Do ulubionych
            </Button>
            <Button size="icon" variant="outline" className="shrink-0 bg-transparent">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Udostępnij</span>
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Darmowa dostawa</p>
                <p className="text-xs text-muted-foreground">Od 5000 zł</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Gwarancja</p>
                <p className="text-xs text-muted-foreground">24 miesiące</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Zwrot</p>
                <p className="text-xs text-muted-foreground">14 dni</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 lg:mt-16">
        <div className="border-b border-border">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("description")}
              className={cn(
                "pb-4 text-lg font-medium border-b-2 transition-colors",
                activeTab === "description"
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              Opis produktu
            </button>
            <button
              onClick={() => setActiveTab("specifications")}
              className={cn(
                "pb-4 text-lg font-medium border-b-2 transition-colors",
                activeTab === "specifications"
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              Specyfikacja
            </button>
          </div>
        </div>

        <div className="py-8">
          {activeTab === "description" ? (
            <div className="max-w-3xl space-y-6">
              <p className="text-lg text-foreground leading-relaxed">{product.description}</p>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Cechy produktu</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={spec.label} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                      <td className="py-3 px-4 font-medium text-foreground">{spec.label}</td>
                      <td className="py-3 px-4 text-muted-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
