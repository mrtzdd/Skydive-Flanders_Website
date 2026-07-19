import { useEffect, useState } from "react"
import { CalendarDays, ExternalLink, Loader2, Users } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/FadeIn"
import { photos } from "@/lib/photos"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

type PlanningEntry = {
  date: string
  dropzone: string
  status: string
}

type StatusDef = {
  key: string
  label: string
  legendText: string | null
  color: string
  order: number
}

type PlanningResponse = {
  planning: PlanningEntry[]
  statuses: StatusDef[]
  aircraft: Record<string, string[]>
}

const dropzoneOrder = ["Moorsele", "Schaffen", "Zwartberg"]

const colorClasses: Record<string, string> = {
  green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  red: "bg-rose-50 text-rose-700 ring-rose-200",
  blue: "bg-blue-50 text-blue-700 ring-blue-200",
  purple: "bg-violet-50 text-violet-700 ring-violet-200",
  gray: "bg-gray-50 text-gray-600 ring-gray-200",
  cyan: "bg-cyan-50 text-cyan-700 ring-cyan-200",
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString("nl-BE", { weekday: "short", day: "numeric", month: "short" })
}

const calendars = [
  {
    title: "Evenementen",
    src: "https://calendar.google.com/calendar/u/0/embed?height=500&wkst=2&bgcolor=%23ffffff&ctz=Europe/Brussels&src=pcv.events@gmail.com&color=%232f7fc1&mode=AGENDA&showTitle=0",
  },
  {
    title: "Team Trainingen",
    src: "https://calendar.google.com/calendar/u/0/embed?height=500&wkst=2&bgcolor=%23ffffff&ctz=Europe/Brussels&src=4eur26008kedm0ot1apbqsv664@group.calendar.google.com&color=%232f7fc1&mode=AGENDA&showTitle=0",
  },
]

export default function Agenda() {
  const [data, setData] = useState<PlanningResponse | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetch("/api/planning")
      .then((res) => {
        if (!res.ok) throw new Error("bad response")
        return res.json()
      })
      .then((json: PlanningResponse) => {
        if (!cancelled) setData(json)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const statusByKey = new Map((data?.statuses ?? []).map((s) => [s.key, s]))
  const dates = data
    ? Array.from(new Set(data.planning.map((p) => p.date))).sort()
    : []

  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Springdagen, evenementen en planning."
        description="Wanneer zijn onze dropzones open, en wat staat er op de kalender? Live bijgehouden door het team ter plaatse."
        image={photos.bigway}
        size="compact"
      />

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Planning"
          title="Wanneer zijn we open?"
          description="De actuele openingsstatus per dropzone voor de komende twee weken."
        />

        <FadeIn delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {loading ? (
              <div className="flex items-center justify-center gap-2 p-16 text-muted-foreground">
                <Loader2 className="size-5 animate-spin" />
                <span className="text-sm">Planning wordt geladen…</span>
              </div>
            ) : error || !data ? (
              <div className="flex flex-col items-center gap-3 p-16 text-center">
                <p className="text-sm text-muted-foreground">
                  De live planning kon niet geladen worden.
                </p>
                <a
                  href={siteConfig.agendaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-navy"
                >
                  Bekijk de planning op skydiveflanders.be
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="px-4 py-3 text-left font-semibold">Datum</th>
                      {dropzoneOrder.map((dz) => (
                        <th key={dz} className="px-4 py-3 text-left font-semibold">
                          {dz}
                          {data.aircraft[dz]?.length ? (
                            <span className="ml-2 font-normal text-white/60">
                              {data.aircraft[dz].join(", ")}
                            </span>
                          ) : null}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dates.map((date, i) => (
                      <tr key={date} className={i % 2 === 1 ? "bg-muted/50" : undefined}>
                        <td className="px-4 py-3 font-medium text-navy">
                          {formatDate(date)}
                        </td>
                        {dropzoneOrder.map((dz) => {
                          const entry = data.planning.find(
                            (p) => p.date === date && p.dropzone === dz
                          )
                          const status = entry ? statusByKey.get(entry.status) : undefined
                          return (
                            <td key={dz} className="px-4 py-3">
                              {status ? (
                                <span
                                  className={cn(
                                    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
                                    colorClasses[status.color] ?? colorClasses.gray
                                  )}
                                >
                                  {status.label}
                                </span>
                              ) : (
                                <span className="text-xs text-muted-foreground">—</span>
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </FadeIn>

        {data && (
          <FadeIn delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-3">
              {data.statuses
                .slice()
                .sort((a, b) => a.order - b.order)
                .map((s) => (
                  <span
                    key={s.key}
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                      colorClasses[s.color] ?? colorClasses.gray
                    )}
                  >
                    {s.legendText ?? s.label}
                  </span>
                ))}
            </div>
          </FadeIn>
        )}
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Evenementen"
            title="Wat staat er op de kalender?"
            description="Boogie weekends, teamtrainingen en clubactiviteiten — rechtstreeks uit onze agenda."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {calendars.map((cal, i) => (
              <FadeIn key={cal.title} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border">
                  <div className="flex items-center gap-2 bg-navy px-5 py-4 text-white">
                    {i === 0 ? (
                      <CalendarDays className="size-5 text-sky-light" />
                    ) : (
                      <Users className="size-5 text-sky-light" />
                    )}
                    <h3 className="font-display text-lg font-semibold">{cal.title}</h3>
                  </div>
                  <iframe
                    title={cal.title}
                    src={cal.src}
                    className="h-[420px] w-full"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
