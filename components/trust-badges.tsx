import { Truck, Clock, Shield, Award } from "lucide-react"

const badges = [
  {
    icon: Truck,
    title: "Darmowa dostawa",
    description: "Przy zamówieniu od 5000 zł",
  },
  {
    icon: Clock,
    title: "Serwis 24H",
    description: "Szybka obsługa zgłoszeń",
  },
  {
    icon: Shield,
    title: "Bezpieczna przesyłka",
    description: "Gwarancja nienaruszalności",
  },
  {
    icon: Award,
    title: "20 lat doświadczenia",
    description: "Zaufany producent",
  },
]

export function TrustBadges() {
  return (
    <section className="py-8 lg:py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
