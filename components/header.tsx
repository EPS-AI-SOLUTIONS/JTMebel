"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User, Search, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const categories = [
  {
    name: "Przedszkole",
    href: "/kategoria/przedszkole",
    subcategories: ["Meble", "Szafki", "Stoliki", "Krzesełka", "Regały"],
  },
  {
    name: "Szkoła",
    href: "/kategoria/szkola",
    subcategories: ["Ławki szkolne", "Krzesła", "Biurka nauczyciela", "Szafy", "Tablice"],
  },
  {
    name: "Biuro",
    href: "/kategoria/biuro",
    subcategories: ["Biurka", "Fotele", "Szafy biurowe", "Regały", "Recepcje"],
  },
  {
    name: "Multimedia",
    href: "/kategoria/multimedia",
    subcategories: ["Projektory", "Ekrany", "Tablice interaktywne", "Uchwyty"],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border">
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+48123456789" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              +48 123 456 789
            </a>
            <span>Pon - Pt: 8:00 - 16:00</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Darmowa dostawa od 5000 zł</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={category.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",
                    activeDropdown === category.name && "text-primary",
                  )}
                >
                  {category.name}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", activeDropdown === category.name && "rotate-180")}
                  />
                </Link>
                {activeDropdown === category.name && (
                  <div className="absolute top-full left-0 w-48 bg-card border border-border rounded-lg shadow-lg py-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`${category.href}/${sub.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/promocje"
              className="px-4 py-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Promocje
            </Link>
            <Link
              href="/o-nas"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              O nas
            </Link>
            <Link
              href="/kontakt"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden lg:flex hover:text-primary">
              <Search className="h-5 w-5" />
              <span className="sr-only">Szukaj</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:flex hover:text-primary">
              <User className="h-5 w-5" />
              <span className="sr-only">Konto</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Koszyk</span>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="px-4 py-3 text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              href="/promocje"
              className="px-4 py-3 text-accent font-medium hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Promocje
            </Link>
            <Link
              href="/o-nas"
              className="px-4 py-3 text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              O nas
            </Link>
            <Link
              href="/kontakt"
              className="px-4 py-3 text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="border-t border-border mt-2 pt-4">
              <a href="tel:+48123456789" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +48 123 456 789
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
