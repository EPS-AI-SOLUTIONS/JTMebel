import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Przedszkole i Żłobek",
    description: "Krzesła, stoły, kolekcje Mini, Bunio, Domki, Sawanna oraz szafki i wyposażenie do higieny",
    image: "/colorful-kindergarten-furniture--small-chairs-and-.jpg",
    href: "/kategoria/przedszkole",
    count: "200+ produktów",
  },
  {
    name: "Szkoła",
    description: "Krzesła i stoły szkolne, kolekcje Kubuś, JT, Domino oraz tablice i regały",
    image: "/modern-school-classroom-furniture--student-desks-a.jpg",
    href: "/kategoria/szkola",
    count: "300+ produktów",
  },
  {
    name: "Biuro",
    description: "Fotele obrotowe, krzesła konferencyjne, biurka gabinetowe i lady recepcyjne",
    image: "/professional-office-furniture--modern-executive-de.jpg",
    href: "/kategoria/biuro",
    count: "100+ produktów",
  },
  {
    name: "Multimedia",
    description: "Monitory interaktywne, projektory, ekrany, wizualizery i programy Laptop dla Nauczyciela",
    image: "/interactive-whiteboard-in-classroom--modern-presen.jpg",
    href: "/kategoria/multimedia",
    count: "50+ produktów",
  },
  {
    name: "Place zabaw",
    description: "Huśtawki, karuzele, piaskownice i zestawy zabawowe dla dzieci",
    image: "/colorful-children-chair-for-kindergarten--stackabl.jpg",
    href: "/kategoria/place-zabaw",
    count: "80+ produktów",
  },
  {
    name: "Tablice",
    description: "Tablice ceramiczne, lakierowane, korkowe, szklane i gabloty informacyjne",
    image: "/interactive-whiteboard-touchscreen-display--modern.jpg",
    href: "/kategoria/tablice",
    count: "40+ produktów",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Kompleksowe wyposażenie
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferujemy pełną gamę mebli i wyposażenia dla placówek edukacyjnych oraz przestrzeni biurowych
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                  {category.count}
                </span>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/80 mb-4">{category.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Zobacz produkty
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
