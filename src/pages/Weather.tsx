import { ExternalLink, CalendarDays } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/FadeIn"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { photos } from "@/lib/photos"

export default function Weather() {
  return (
    <>
      <PageHero
        eyebrow="Meteo & Status"
        title="Kunnen we vandaag springen?"
        description="Valschermspringen hangt af van wind, wolkenbasis en luchtruim. Dit live statusbord wordt bijgehouden door de dropzones zelf — bekijk het voor je vertrekt."
        image={photos.canopyPair}
        size="compact"
      />

      <section className="container-page py-16">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-sky-light p-6 sm:flex-row sm:items-center">
            <p className="text-sm text-navy/80">
              Dit bord dekt alle drie de dropzones van Skydive Flanders —
              Moorsele, Schaffen en Zwartberg — en wordt door het team ter
              plaatse up-to-date gehouden.
            </p>
            <Button asChild className="shrink-0 bg-cta text-cta-foreground hover:bg-cta/90">
              <a href={siteConfig.weatherSheetUrl} target="_blank" rel="noreferrer">
                Open volledig overzicht
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Skydive Flanders — live dropzone-status"
              src={siteConfig.weatherSheetUrl}
              className="h-[70vh] min-h-[520px] w-full"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </section>

      <section className="bg-muted py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Plan vooruit"
            title="Bekijk de planning voor je boekt"
            align="left"
            className="mx-0 text-left"
          />
          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <CalendarDays className="size-5 text-sky" />
                <p className="text-sm text-navy/80">
                  Openingsdagen, springweken en evenementen wijzigen doorheen
                  het seizoen — bekijk de live agenda voor alle drie dropzones.
                </p>
              </div>
              <Button asChild variant="outline" className="shrink-0">
                <a href={siteConfig.agendaUrl} target="_blank" rel="noreferrer">
                  Open de live agenda
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
