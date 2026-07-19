import { CloudSun, CalendarDays, ArrowRight, ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/motion/FadeIn"
import { siteConfig } from "@/lib/data"

export function ConditionsWidget() {
  return (
    <section className="container-page -mt-20 relative z-20 pb-4 md:-mt-24">
      <FadeIn>
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-border md:grid-cols-2">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-2 text-navy">
              <CloudSun className="size-5 text-sky" />
              <h3 className="font-display text-lg font-semibold">
                Kunnen we vandaag springen?
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Wind, wolkenbasis en vliegtuigbeschikbaarheid kunnen doorheen de
              dag veranderen. Bekijk het live statusbord van de dropzones
              Moorsele, Schaffen en Zwartberg voor je vertrekt.
            </p>
            <a
              href={siteConfig.weatherSheetUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-navy"
            >
              Bekijk live dropzone-status
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="flex flex-col justify-between border-t border-border bg-sky-light/60 p-8 md:border-l md:border-t-0 md:p-10">
            <div className="flex items-center gap-2 text-navy">
              <CalendarDays className="size-5 text-sky" />
              <h3 className="font-display text-lg font-semibold">
                Wat is er te doen op de dropzone
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">
              Openingsdagen, springweken en evenementen wijzigen doorheen het
              seizoen — bekijk de actuele planning voor alle drie dropzones.
            </p>
            <a
              href={siteConfig.agendaUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-navy"
            >
              Open de live agenda
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
