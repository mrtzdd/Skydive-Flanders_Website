import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Award, GraduationCap, Wind } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { FadeIn } from "@/components/motion/FadeIn"
import { Button } from "@/components/ui/button"
import { pricing } from "@/lib/data"
import { photos } from "@/lib/photos"

const headlineIcon = { parachute: Wind, graduation: GraduationCap, award: Award }

function PriceRows({ rows }: { rows: { label: string; price: string }[] }) {
  return (
    <div className="divide-y divide-border">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-4 py-2.5">
          <span className="text-sm text-navy/80">{row.label}</span>
          <span className="text-sm font-semibold text-navy">{row.price}</span>
        </div>
      ))}
    </div>
  )
}

function Card({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border ${className ?? ""}`}>
      <div className="bg-navy px-6 py-4">
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

export default function Prijslijst() {
  return (
    <>
      <PageHero
        eyebrow="Prijslijst"
        title="Transparante prijzen."
        description="Voor alle sprongen en opleidingen — dezelfde bedragen die je bij het boeken te zien krijgt."
        image={photos.landing}
        size="compact"
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.headline.map((item, i) => {
            const Icon = headlineIcon[item.icon]
            return (
              <FadeIn
                key={item.title}
                delay={i * 0.08}
                className="flex flex-col rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-border"
              >
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-sky-light text-sky">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 font-display text-3xl font-semibold text-navy">
                  {item.price}
                </p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
                {"extra" in item && item.extra && (
                  <p className="mt-3 text-sm text-navy/80">{item.extra}</p>
                )}
                {"includes" in item && item.includes && (
                  <div className="mt-3 rounded-lg bg-sky-light p-3 text-left text-xs leading-relaxed text-navy/80">
                    <p className="mb-1 font-semibold text-navy">Inclusief:</p>
                    <ul className="space-y-0.5">
                      {item.includes.map((line) => (
                        <li key={line}>• {line}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {"footnote" in item && item.footnote && (
                  <p className="mt-3 text-xs text-muted-foreground">{item.footnote}</p>
                )}
                <Button asChild className="mt-6 w-full bg-cta text-cta-foreground hover:bg-cta/90">
                  <Link to={item.href}>{item.cta}</Link>
                </Button>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.1}>
          <Card title={pricing.repeatJumps.title} className="mt-8">
            <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {pricing.repeatJumps.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 py-2">
                  <span className="text-sm text-navy/80">{row.label}</span>
                  <span className="text-sm font-semibold text-navy">{row.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.12}>
          <Card title={pricing.followUp.title} className="mt-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {pricing.followUp.packs.map((pack) => (
                <div key={pack.title}>
                  <h4 className="mb-1 font-semibold text-navy">{pack.title}</h4>
                  <PriceRows rows={pack.rows} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{pricing.followUp.note}</p>
          </Card>
        </FadeIn>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <FadeIn delay={0.14}>
            <Card title={pricing.members.title}>
              <PriceRows rows={pricing.members.rows} />
              <p className="mt-4 text-center text-[11px] text-muted-foreground">
                {pricing.members.note}
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={0.16}>
            <Card title={pricing.nonMembers.title}>
              <PriceRows rows={pricing.nonMembers.rows} />
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.18}>
          <Card title={pricing.trainingBlocks.title} className="mt-8">
            <PriceRows rows={pricing.trainingBlocks.rows} />
            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              {pricing.trainingBlocks.note}
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card title={pricing.membership.title} className="mt-8">
            <div className="grid gap-x-8 sm:grid-cols-2">
              <div>
                {pricing.membership.rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-2.5">
                    <span className="text-sm text-navy/80">{row.label}</span>
                    <span className="text-sm font-semibold text-navy">{row.price}</span>
                  </div>
                ))}
              </div>
              <div>
                {pricing.membership.rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-2.5">
                    <span className="text-sm text-navy/80">Na 1 september</span>
                    <span className="text-sm font-semibold text-navy">{row.afterSeptember}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 rounded-lg bg-sky-light px-3 py-2.5">
              <span className="text-sm text-navy/80">{pricing.membership.surcharge.label}</span>
              <span className="text-sm font-semibold text-navy">{pricing.membership.surcharge.price}</span>
            </div>
            <div className="mt-4 rounded-lg bg-emerald-50 p-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-emerald-800">
                  {pricing.membership.earlyBird.label}
                </span>
                <span className="text-sm font-semibold text-emerald-800">
                  {pricing.membership.earlyBird.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-emerald-700">{pricing.membership.earlyBird.note}</p>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.22}>
          <p className="mt-10 rounded-xl bg-sky-light px-5 py-4 text-center text-sm text-navy/70">
            {pricing.footnote}
          </p>
        </FadeIn>
      </section>
    </>
  )
}
