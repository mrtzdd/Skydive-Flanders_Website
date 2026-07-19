import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { FadeIn } from "@/components/motion/FadeIn"
import { SectionHeading } from "@/components/ui/section-heading"
import { services } from "@/lib/data"
import { serviceIconMap } from "@/lib/icon-map"

export function Services() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Wat we aanbieden"
          title="Elke weg naar de hemel, onder één dak."
          description="Van een eenmalige, onvergetelijke tandemsprong tot een volledige carrière als skydiver — onze programma's zijn gestructureerd, begeleid en opgebouwd rond jouw progressie."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon]
            return (
              <FadeIn key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  to={service.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-navy backdrop-blur-sm">
                      <Icon className="size-5" />
                    </span>
                    <span className="absolute bottom-3 left-4 rounded-full bg-cta px-3 py-1 text-xs font-semibold text-cta-foreground">
                      {service.priceLabel}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky group-hover:text-navy">
                      Meer info
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
