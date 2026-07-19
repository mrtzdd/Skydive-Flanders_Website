import { CalendarDays, Newspaper, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/motion/FadeIn"
import { SectionHeading } from "@/components/ui/section-heading"
import { events, news } from "@/lib/data"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function NewsEvents() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blijf op de hoogte"
          title="Evenementen & nieuws van de dropzone"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="flex items-center gap-2 text-navy">
              <CalendarDays className="size-5 text-sky" />
              <h3 className="font-display text-lg font-semibold">Aankomende evenementen</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {events.map((event) => (
                <li
                  key={event.slug}
                  className="flex gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-border"
                >
                  <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-sky-light text-navy">
                    <span className="text-xs font-semibold uppercase">
                      {new Date(event.date).toLocaleDateString("nl-BE", { month: "short" })}
                    </span>
                    <span className="font-display text-xl font-semibold">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{event.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center gap-2 text-navy">
              <Newspaper className="size-5 text-sky" />
              <h3 className="font-display text-lg font-semibold">Laatste nieuws</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {news.map((item) => (
                <li
                  key={item.slug}
                  className="group rounded-xl bg-white p-5 shadow-sm ring-1 ring-border transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-sky">
                    {formatDate(item.date)}
                  </p>
                  <p className="mt-1.5 font-semibold text-navy">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.excerpt}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-sky opacity-0 transition-opacity group-hover:opacity-100">
                    Lees meer <ArrowRight className="size-3" />
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
