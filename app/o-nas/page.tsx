import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaSection } from "@/components/cta-section"
import { CheckCircle, Users, Award, Building2, TrendingUp } from "lucide-react"

const stats = [
  { value: "12+", label: "Lat doświadczenia", icon: Award },
  { value: "1000+", label: "Wyposażonych sal lekcyjnych", icon: CheckCircle },
  { value: "500+", label: "Zadowolonych klientów", icon: Users },
  { value: "800+", label: "Produktów w ofercie", icon: Building2 },
]

const milestones = [
  { year: "2012", title: "Założenie firmy", description: "Rozpoczęcie działalności JT Mebel Sp. z o.o. w Kartuzach." },
  {
    year: "2015",
    title: "Rozbudowa produkcji",
    description: "Inwestycja w nowoczesny park maszynowy gwarantujący wysoką jakość.",
  },
  {
    year: "2018",
    title: "Certyfikacje jakości",
    description: "Uzyskanie wymaganych certyfikatów zgodności z obowiązującymi normami.",
  },
  {
    year: "2020",
    title: "Ekspansja zagraniczna",
    description: "Dostawy mebli szkolnych do placówek w kraju i za granicą.",
  },
  {
    year: "2024",
    title: "Tysiące realizacji",
    description: "Wyposażenie tysięcy sal lekcyjnych i rozszerzenie oferty o multimedia.",
  },
]

const values = [
  {
    title: "Jakość",
    description:
      "Nasze wyroby posiadają wymagane certyfikaty zgodności z obowiązującymi normami. Nowoczesny park maszynowy gwarantuje najwyższą jakość.",
  },
  {
    title: "Kompleksowość",
    description:
      "Oprócz mebli szkolnych oferujemy szafki metalowe, tablice, monitory dotykowe, fotele obrotowe oraz sprzęt sportowy i medyczny.",
  },
  {
    title: "Terminowość",
    description:
      "Dysponujemy nowoczesnym parkiem maszynowym, który gwarantuje krótkie terminy realizacji zamówień seryjnych i indywidualnych.",
  },
  {
    title: "Zaufanie",
    description:
      "Celem firmy jest wytwarzanie produktów o jakości spełniającej oczekiwania klienta oraz utrwalenie opinii zaufanego producenta.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative bg-primary py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "Strona główna", href: "/" },
                { label: "O nas", href: "/o-nas" },
              ]}
            />
            <div className="max-w-3xl mt-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-primary-foreground mb-6 text-balance">
                Producent certyfikowanych mebli szkolnych
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                JT Mebel Sp. z o.o. z siedzibą w Kartuzach specjalizuje się w produkcji seryjnej mebli szkolnych
                i przedszkolnych. Wyposażyliśmy tysiące sal lekcyjnych zarówno w kraju jak i za granicą.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-12 lg:py-16 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <span className="block text-4xl lg:text-5xl font-serif font-bold text-foreground mb-2">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
                  O firmie
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    JT Mebel Sp. z o.o. z siedzibą w Kartuzach specjalizuje się przede wszystkim w produkcji seryjnej
                    mebli szkolnych, ale wykonujemy również na życzenie klienta indywidualne zamówienia.
                  </p>
                  <p>
                    W ciągu naszej działalności wyposażyliśmy w nasze meble szkolne tysiące sal lekcyjnych
                    zarówno w kraju jak i za granicą. Dysponujemy nowoczesnym i kompleksowym parkiem maszynowym,
                    który gwarantuje wysoką jakość i krótkie terminy realizacji.
                  </p>
                  <p>
                    Nasze wyroby posiadają wymagane certyfikaty zgodności z obowiązującymi normami.
                    Celem firmy jest wytwarzanie produktów o jakości spełniającej oczekiwania klienta
                    oraz utrwalenie opinii zaufanego producenta.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/furniture-factory-production-line--craftsman-worki.jpg"
                    alt="Produkcja mebli JT Mebel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Kamienie milowe</h2>
              <p className="text-lg text-muted-foreground">Kluczowe momenty w historii naszej firmy</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-start gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Nasze wartości</h2>
              <p className="text-lg text-muted-foreground">Zasady, którymi kierujemy się w codziennej pracy</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card border border-border rounded-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src="/professional-man-in-suit-business-portrait-office-setting.jpg"
                    alt="Członek zespołu JT Mebel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden mt-8">
                  <img
                    src="/professional-woman-office-portrait-confident-business-attire.jpg"
                    alt="Członek zespołu JT Mebel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
                  Zakres usług
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Oprócz podstawowego asortymentu mebli szkolnych i przedszkolnych, oferujemy kompleksowe
                    wyposażenie placówek edukacyjnych i biurowych.
                  </p>
                  <p>
                    W naszej ofercie znajdziesz również szafki szkolne metalowe, tablice, monitory dotykowe,
                    fotele obrotowe, sprzęt i wyposażenie sportowe oraz medyczne.
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">Meble szkolne i przedszkolne</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">Tablice i monitory interaktywne</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">Wyposażenie sportowe i medyczne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
