import { Link } from "react-router-dom"
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons"
import { siteConfig, bookingLinks } from "@/lib/data"
import { logoSrc } from "@/lib/photos"
import { Button } from "@/components/ui/button"

const exploreLinks = [
  { to: "/vliegtuig", label: "Vliegtuig" },
  { to: "/opleiding", label: "Opleiding" },
  { to: "/veiligheid", label: "Veiligheid" },
  { to: "/team", label: "Team" },
  { to: "/galerij", label: "Galerij" },
]

const infoLinks = [
  { to: "/faq", label: "FAQ" },
  { to: "/documenten", label: "Documenten" },
  { to: "/weer", label: "Meteo & Status" },
  { to: "/reserveren", label: "Reserveren" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacybeleid" },
  { to: "/cookies", label: "Cookies" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logoSrc} alt="Skydive Flanders" className="h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Een van de meest actieve valschermspringclubs van België —
            tandemsprongen, AFF-opleiding en een hechte community op drie
            dropzones in Vlaanderen.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Ontdek
          </h3>
          <ul className="mt-4 space-y-3">
            {exploreLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/75 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Informatie
          </h3>
          <ul className="mt-4 space-y-3">
            {infoLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/75 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
              <span>
                {siteConfig.secretariat.addressLine1}
                <br />
                {siteConfig.secretariat.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-sky" />
              <a href={`tel:${siteConfig.secretariat.phoneHref}`}>{siteConfig.secretariat.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-sky" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Blijf op de hoogte
          </h3>
          <p className="mt-4 text-sm text-white/60">
            Geen plaatsen beschikbaar? Schrijf je in op de mailinglijst en
            krijg een seintje zodra er nieuwe plaatsen vrijkomen.
          </p>
          <Button
            asChild
            size="default"
            className="mt-4 w-full bg-sky text-white hover:bg-sky/90"
          >
            <a href={bookingLinks.mailingList} target="_blank" rel="noreferrer">
              Schrijf je in
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} — Dropzone
            Moorsele. Alle rechten voorbehouden.
          </p>
          <p>Met passie voor luchtvaart gebouwd in Vlaanderen, België.</p>
        </div>
      </div>
    </footer>
  )
}
