import { useState } from "react"
import { CheckCircle2, ClipboardCheck, ExternalLink, Gift, Mail, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { FadeIn } from "@/components/motion/FadeIn"
import { Button } from "@/components/ui/button"
import { bookingLinks, dropzones, preparationChecklist, siteConfig } from "@/lib/data"
import { photos } from "@/lib/photos"
import { cn } from "@/lib/utils"

export default function Booking() {
  const [dzSlug, setDzSlug] = useState(dropzones[0].slug)
  const dz = dropzones.find((d) => d.slug === dzSlug) ?? dropzones[0]

  const bookingOptions = [
    {
      title: "Tandemsprong",
      price: "€250",
      priceNote: "€275 aan de kassa · vanaf 12 jaar, max. 95 kg",
      description:
        "Geen ervaring nodig — vrije val vastgemaakt aan een gebrevetteerde instructeur, rechtstreeks te boeken via onze live beschikbaarheidskalender.",
      href: dz.tandemBookingUrl,
    },
    {
      title: "AFF Initiatiesprong",
      price: "€385",
      priceNote: "Inclusief 1 dag opleiding · vanaf 16 jaar, max. 110 kg, medisch attest vereist",
      description:
        "Start je traject naar een A-licentie met een volledige dag grondopleiding gevolgd door je eerste AFF-sprong.",
      href: dz.affBookingUrl,
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Reserveren"
        title="Reserveer je plaats."
        description="Realtime beschikbaarheid op elk van onze drie dropzones — boek rechtstreeks en het secretariaat bevestigt per e-mail."
        image={photos.sunsetCaravan}
        size="compact"
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Kies je dropzone
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {dropzones.map((option) => (
                  <button
                    key={option.slug}
                    type="button"
                    onClick={() => setDzSlug(option.slug)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      dzSlug === option.slug
                        ? "border-navy bg-navy text-white"
                        : "border-border bg-white text-navy/70 hover:border-navy/40"
                    )}
                  >
                    <MapPin className="size-3.5" />
                    {option.name}
                  </button>
                ))}
              </div>
            </FadeIn>

            {bookingOptions.map((option, i) => (
              <FadeIn
                key={option.title}
                delay={i * 0.08}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm md:p-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-navy">
                      {option.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {option.priceNote}
                    </p>
                  </div>
                  <p className="font-display text-3xl font-semibold text-navy">
                    {option.price}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full bg-cta text-cta-foreground hover:bg-cta/90 sm:w-auto"
                >
                  <a href={option.href} target="_blank" rel="noreferrer">
                    Boek {option.title} in {dz.name}
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </FadeIn>
            ))}

            <FadeIn
              delay={0.16}
              className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-sky-light p-8 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-3">
                <Gift className="mt-0.5 size-5 shrink-0 text-sky" />
                <div>
                  <p className="font-semibold text-navy">Boeken met een cadeaubon?</p>
                  <p className="mt-1 text-sm text-navy/70">
                    Kies bij het afrekenen voor "Enkel voorschot €0,00" en
                    breng je originele bon mee op de dag zelf.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="rounded-xl border border-dashed border-border p-5 text-xs leading-relaxed text-muted-foreground">
                Boeken opent het officiële reserveringssysteem van Skydive
                Flanders voor Dropzone {dz.name} in een nieuw tabblad. Geen
                plaatsen beschikbaar? Schrijf je in op de{" "}
                <a href={bookingLinks.mailingList} target="_blank" rel="noreferrer" className="font-semibold text-sky hover:underline">
                  mailinglijst
                </a>{" "}
                voor nieuwe beschikbaarheid, of neem contact op met het
                secretariaat hieronder.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-2xl bg-navy p-8 text-white">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="size-5 text-sky" />
                <h3 className="font-display text-lg font-semibold">
                  Voor je aankomt
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {preparationChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/80">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-border p-8">
              <h3 className="font-display text-lg font-semibold text-navy">
                Dropzone {dz.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {dz.addressLine1}, {dz.addressLine2}
              </p>
              <a href={`tel:${dz.phoneHref}`} className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
                <Phone className="size-3.5" />
                {dz.phone}
              </a>

              <h3 className="mt-6 font-display text-lg font-semibold text-navy">
                Liever telefonisch overleggen?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Het secretariaat helpt je graag met groepsboekingen,
                cadeaubonnen of alles wat datumgevoelig is.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="size-4 text-sky" />
                  <a href={`tel:${siteConfig.secretariat.phoneHref}`} className="font-semibold text-sky">
                    {siteConfig.secretariat.phone}
                  </a>
                  <span className="text-xs text-muted-foreground">({siteConfig.secretariat.hours})</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="size-4 text-sky" />
                  <a href={`mailto:${siteConfig.email}`} className="font-semibold text-sky">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
