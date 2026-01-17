import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-muted py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "Strona główna", href: "/" },
                { label: "Kontakt", href: "/kontakt" },
              ]}
            />
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-foreground mt-4 mb-2">Kontakt</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Masz pytania? Skontaktuj się z nami. Nasz zespół jest gotowy, aby pomóc Ci w wyborze odpowiednich mebli.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Dane kontaktowe</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Adres</h3>
                      <p className="text-muted-foreground">
                        ul. Gdańska 45
                        <br />
                        83-300 Kartuzy
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Telefon</h3>
                      <a href="tel:+48586847525" className="text-muted-foreground hover:text-accent transition-colors">
                        +48 58 684 75 25
                      </a>
                      <br />
                      <span className="text-muted-foreground text-sm">
                        Fax: 58 684 76 07
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">E-mail</h3>
                      <a
                        href="mailto:biuro@jtmebel.pl"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        biuro@jtmebel.pl
                      </a>
                      <br />
                      <a
                        href="mailto:sklep@jtmebel.pl"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        sklep@jtmebel.pl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Godziny pracy</h3>
                      <p className="text-muted-foreground">
                        Poniedziałek - Piątek: 8:00 - 16:00
                        <br />
                        Sobota - Niedziela: Zamknięte
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Wyślij wiadomość</h2>
                <p className="text-muted-foreground mb-6">
                  Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 lg:mt-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Nasza lokalizacja</h2>
            <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.5!2d18.1947!3d54.3339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0b3e3b3b3b3b%3A0x0!2sGda%C5%84ska%2045%2C%2083-300%20Kartuzy!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa lokalizacji JT Mebel - ul. Gdańska 45, 83-300 Kartuzy"
              />
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-12 lg:mt-16 bg-muted rounded-lg p-6 lg:p-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Dane firmowe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">JT Mebel Sp. z o.o.</p>
                <p>ul. Gdańska 45</p>
                <p>83-300 Kartuzy</p>
              </div>
              <div>
                <p><span className="font-medium">NIP:</span> 5891962096</p>
                <p><span className="font-medium">REGON:</span> 220798559</p>
                <p><span className="font-medium">KRS:</span> 0000331351</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
