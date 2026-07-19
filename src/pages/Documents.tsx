import { FileText, ExternalLink, Download } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/FadeIn"
import { documents } from "@/lib/data"
import { photos } from "@/lib/photos"

const categoryOrder = [
  "Tandem",
  "AFF",
  "Ervaren skydivers",
  "Reglementen",
  "Verzekering",
  "Voorvalmeldingen",
]

export default function Documents() {
  const grouped = categoryOrder.map((category) => ({
    category,
    items: documents.filter((doc) => doc.category === category),
  }))

  return (
    <>
      <PageHero
        eyebrow="Documenten"
        title="Formulieren, attesten & reglementen."
        description="Elk medisch attest, toestemmingsformulier en reglement dat je nodig hebt voor je sprong — rechtstreeks van de bron."
        image={photos.tracking}
        size="compact"
      />

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Voor je vliegt"
          title="Download wat je nodig hebt"
          description="Breng het relevante medisch attest of toestemmingsformulier mee op de dag zelf — de meeste zijn enkel vereist vanaf een bepaalde leeftijd of voor AFF-cursisten."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {grouped.map((group) =>
            group.items.length ? (
              <FadeIn key={group.category}>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((doc) => (
                    <li key={doc.title}>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start gap-3 rounded-xl border border-border bg-white p-4 transition-colors hover:border-sky"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sky-light text-sky">
                          <FileText className="size-4" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-sm font-semibold text-navy">
                            {doc.title}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {doc.description}
                          </span>
                        </span>
                        <span className="mt-1 shrink-0 text-sky opacity-0 transition-opacity group-hover:opacity-100">
                          {doc.external ? (
                            <ExternalLink className="size-4" />
                          ) : (
                            <Download className="size-4" />
                          )}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ) : null
          )}
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-12 text-center text-xs text-muted-foreground">
            Documenten staan gehost op skydiveflanders.be en externe
            federatie-/verzekeringssites — ze openen in een nieuw tabblad en
            tonen steeds de recentste officiële versie.
          </p>
        </FadeIn>
      </section>
    </>
  )
}
