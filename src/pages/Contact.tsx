import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/FadeIn"
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons"
import { siteConfig, dropzones } from "@/lib/data"
import { photos } from "@/lib/photos"

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Drie dropzones, in het hart van Vlaanderen."
        description="Vragen, groepsboekingen, persaanvragen of gewoon de weg — hier vind je alles om ons te bereiken, op elke dropzone."
        image={photos.caravanMorning}
        size="compact"
      />

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Secretariaat"
          title="Contactgegevens secretariaat"
          description="Voor reservaties en algemene vragen kan je ons altijd contacteren. Voor veelgestelde vragen, bekijk onze FAQ-pagina."
          align="left"
          className="mx-0 max-w-2xl text-left"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-sky" />
                <div>
                  <p className="font-semibold text-navy">Administratief contactnummer</p>
                  <a href={`tel:${siteConfig.secretariat.phoneHref}`} className="text-sm text-muted-foreground hover:text-sky">
                    {siteConfig.secretariat.phone}
                  </a>
                  <p className="text-xs text-muted-foreground">{siteConfig.secretariat.hours}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-sky" />
                <div>
                  <p className="font-semibold text-navy">E-mail</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-sky">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-sky" />
                <div>
                  <p className="font-semibold text-navy">Secretariaat</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.secretariat.addressLine1}
                    <br />
                    {siteConfig.secretariat.addressLine2}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-sky" />
                <div>
                  <p className="font-semibold text-navy">Maatschappelijke zetel</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.legalEntity.name}
                    <br />
                    {siteConfig.legalEntity.address}
                    <br />
                    Ondernemingsnummer: {siteConfig.legalEntity.vatNumber}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-sky-light text-navy hover:bg-sky hover:text-white"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full bg-sky-light text-navy hover:bg-sky hover:text-white"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <div className="flex items-start gap-3 rounded-2xl bg-sky-light p-6">
              <Clock className="mt-0.5 size-5 shrink-0 text-sky" />
              <div>
                <p className="font-semibold text-navy">Openingstijden dropzones</p>
                <p className="mt-1 text-sm leading-relaxed text-navy/80">
                  Onze dropzones zijn normaal elk weekend en op feestdagen
                  open van 9u tot 13u. Bij springactiviteiten blijven we
                  langer open. In de winterperiode gelden aangepaste
                  openingstijden.
                </p>
                <Link
                  to="/agenda"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-sky hover:text-navy"
                >
                  Bekijk de actuele planning
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Onze dropzones"
            title="Moorsele, Schaffen & Zwartberg"
            description="Drie gelijkwaardige dropzones, dezelfde club, dezelfde veiligheidscultuur."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {dropzones.map((dz, i) => (
              <FadeIn
                key={dz.slug}
                delay={i * 0.08}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border"
              >
                <div className="h-48 w-full">
                  <iframe
                    title={`Skydive Flanders — Dropzone ${dz.name}`}
                    src={dz.mapEmbedSrc}
                    className="size-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">
                    Dropzone {dz.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {dz.addressLine1}
                    <br />
                    {dz.addressLine2}
                  </p>
                  <a
                    href={`tel:${dz.phoneHref}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-navy"
                  >
                    <Phone className="size-3.5" />
                    {dz.phone}
                  </a>
                  <a
                    href={dz.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex items-center gap-1 text-sm font-semibold text-sky hover:text-navy"
                  >
                    Route in Google Maps
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
