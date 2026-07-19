import { Gauge, Users, Zap, ArrowUpFromLine, Clock, Mountain, Sparkles } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/FadeIn"
import { aircraftFleet } from "@/lib/data"
import { cn } from "@/lib/utils"

const specIcons = [Users, Zap, Mountain, ArrowUpFromLine, Gauge, Clock]

export default function Aircraft() {
  const caravan = aircraftFleet[0]
  const specs = [
    { label: "Capaciteit", value: caravan.capacity },
    { label: "Motor", value: caravan.engine },
    { label: "Werkplafond", value: caravan.ceiling },
    { label: "Klimsnelheid", value: caravan.climbRate },
    { label: "Kruissnelheid", value: caravan.cruiseSpeed },
    { label: "Tijd naar altitude", value: caravan.timeToAltitude },
  ]

  return (
    <>
      <PageHero
        eyebrow="Ons vliegtuig"
        title="Gebouwd voor hoogte."
        description="Onze Cessna Grand Caravan is gekozen, onderhouden en gevlogen voor één taak — springers snel, veilig en vaak naar altitude brengen."
        image={caravan.image}
      />

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Turbinekracht"
          title="Eén vliegtuig, één missie"
          description="Onze Cessna 208B Grand Caravan is het type dat wereldwijd het meest gebruikt wordt door valschermspringclubs — en het toestel dat je op onze eigen foto's hieronder ziet."
        />
      </section>

      <div className="pb-24 md:pb-32">
        <section className="container-page">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={caravan.image}
                alt={caravan.name}
                className="h-[52vh] min-h-[360px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:items-start">
            <FadeIn className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
                {caravan.tagline}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
                {caravan.name}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {caravan.whyIdeal}
              </p>

              <div className="mt-8 rounded-xl bg-sky-light p-6">
                <div className="flex items-center gap-2 text-navy">
                  <Sparkles className="size-4 text-sky" />
                  <h4 className="text-sm font-semibold uppercase tracking-wide">
                    Weetjes
                  </h4>
                </div>
                <ul className="mt-4 space-y-3">
                  {caravan.facts.map((fact) => (
                    <li
                      key={fact}
                      className="text-sm leading-relaxed text-navy/80"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {specs.map((spec, i) => {
                  const Icon = specIcons[i % specIcons.length]
                  return (
                    <div
                      key={spec.label}
                      className="rounded-xl border border-border bg-white p-5"
                    >
                      <Icon className="size-4 text-sky" />
                      <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                        {spec.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-snug text-navy">
                        {spec.value}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className={cn("mt-4 grid gap-4 sm:grid-cols-2")}>
                {caravan.gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={caravan.name}
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  )
}
