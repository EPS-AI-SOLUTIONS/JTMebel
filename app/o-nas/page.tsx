import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaSection } from "@/components/cta-section"
import { CheckCircle, Users, Award, Building2, TrendingUp } from "lucide-react"

const stats = [
  { value: "20+", label: "Lat doświadczenia", icon: Award },
  { value: "5000+", label: "Zrealizowanych projektów", icon: CheckCircle },
  { value: "1000+", label: "Zadowolonych klientów", icon: Users },
  { value: "500+", label: "Produktów w ofercie", icon: Building2 },
]

const milestones = [
  { year: "2003", title: "Założenie firmy", description: "Rozpoczęcie działalności jako mały zakład stolarski." },
  {
    year: "2008",
    title: "Rozbudowa produkcji",
    description: "Otwarcie nowego zakładu produkcyjnego i poszerzenie oferty.",
  },
  {
    year: "2013",
    title: "Certyfikacje jakości",
    description: "Uzyskanie certyfikatów ISO i norm europejskich dla mebli edukacyjnych.",
  },
  {
    year: "2018",
    title: "Ekspansja krajowa",
    description: "Dostawy do szkół i przedszkoli w całej Polsce.",
  },
  {
    year: "2023",
    title: "Modernizacja",
    description: "Wdrożenie nowoczesnych technologii produkcji i automatyzacji.",
  },
]

const values = [
  {
    title: "Jakość",
    description:
      "Każdy produkt przechodzi rygorystyczną kontrolę jakości. Używamy tylko certyfikowanych materiałów spełniających normy bezpieczeństwa.",
  },
  {
    title: "Innowacja",
    description:
      "Stale rozwijamy naszą ofertę, wprowadzając nowoczesne rozwiązania ergonomiczne i funkcjonalne dla edukacji i biznesu.",
  },
  {
    title: "Partnerstwo",
    description:
      "Budujemy długoterminowe relacje z klientami, oferując kompleksową obsługę od projektu po montaż i serwis.",
  },
  {
    title: "Odpowiedzialność",
    description:
      "Dbamy o środowisko naturalne, stosując ekologiczne materiały i procesy produkcyjne przyjazne dla planety.",
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
                Tworzymy przestrzenie do nauki i pracy
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Od ponad 20 lat dostarczamy wysokiej jakości meble dla edukacji i biznesu. Nasza misja to tworzenie
                ergonomicznych, bezpiecznych i estetycznych rozwiązań dla przedszkoli, szkół i biur w całej Polsce.
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
                  Nasza historia
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    JT Mebel powstało w 2003 roku jako mały zakład stolarski specjalizujący się w produkcji mebli
                    szkolnych. Założyciele firmy, pasjonaci rzemiosła stolarskiego, od początku stawiali na jakość i
                    dbałość o każdy detal.
                  </p>
                  <p>
                    Przez lata konsekwentnego rozwoju przekształciliśmy się w jednego z wiodących producentów mebli dla
                    sektora edukacyjnego i biznesowego w Polsce. Dziś nasza oferta obejmuje setki produktów - od
                    kolorowych krzesełek przedszkolnych po eleganckie meble gabinetowe.
                  </p>
                  <p>
                    Naszym największym kapitałem są ludzie - wykwalifikowani specjaliści, którzy z pasją projektują i
                    wytwarzają meble najwyższej jakości. To dzięki nim możemy spełniać oczekiwania nawet najbardziej
                    wymagających klientów.
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
                  Zespół profesjonalistów
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Nasz zespół to ponad 50 wykwalifikowanych specjalistów - projektantów, stolarzy, logistyków i
                    doradców handlowych. Każdy z nich wnosi do firmy unikalne umiejętności i doświadczenie.
                  </p>
                  <p>
                    Stawiamy na ciągły rozwój naszych pracowników, organizując szkolenia i warsztaty. Dzięki temu możemy
                    oferować naszym klientom rozwiązania na najwyższym poziomie.
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">Wykwalifikowani projektanci i stolarze</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">Profesjonalni doradcy handlowi</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">Własny zespół montażowy</span>
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
