import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mt-4">
              JT Mebel Sp. z o.o. - producent certyfikowanych mebli szkolnych i przedszkolnych z Kartuz.
              Wyposażyliśmy tysiące sal lekcyjnych w kraju i za granicą.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-white/60 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/60 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/60 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produkty</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/kategoria/przedszkole"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Meble przedszkolne
                </Link>
              </li>
              <li>
                <Link
                  href="/kategoria/szkola"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Meble szkolne
                </Link>
              </li>
              <li>
                <Link href="/kategoria/biuro" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Meble biurowe
                </Link>
              </li>
              <li>
                <Link
                  href="/kategoria/multimedia"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Multimedia
                </Link>
              </li>
              <li>
                <Link
                  href="/kategoria/place-zabaw"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  Place zabaw
                </Link>
              </li>
              <li>
                <Link href="/promocje" className="text-white/90 font-medium hover:text-white transition-colors">
                  Promocje
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informacje</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/o-nas" className="text-primary-foreground/80 hover:text-white transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/dostawa" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Dostawa
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Katalog i cennik PDF
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  ul. Gdańska 45
                  <br />
                  83-300 Kartuzy
                </span>
              </li>
              <li>
                <a
                  href="tel:+48586847525"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +48 58 684 75 25
                </a>
              </li>
              <li>
                <a
                  href="mailto:biuro@jtmebel.pl"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  biuro@jtmebel.pl
                </a>
              </li>
              <li>
                <a
                  href="mailto:sklep@jtmebel.pl"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  sklep@jtmebel.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} JT Mebel. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/regulamin" className="text-primary-foreground/60 hover:text-white transition-colors">
              Regulamin
            </Link>
            <Link
              href="/polityka-prywatnosci"
              className="text-primary-foreground/60 hover:text-white transition-colors"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
