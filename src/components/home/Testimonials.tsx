import { Star } from "lucide-react"
import { FadeIn } from "@/components/motion/FadeIn"
import { SectionHeading } from "@/components/ui/section-heading"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeading
        eyebrow="Wat springers zeggen"
        title="Vertrouwd door beginners én ervaren springers."
        description="Echte woorden van echte klanten — letterlijk overgenomen uit hun review."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <FadeIn
            key={t.quote.slice(0, 24)}
            delay={(i % 3) * 0.08}
            className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm"
          >
            <div className="flex gap-0.5 text-cta">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/85">
              "{t.quote}"
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t.source}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
