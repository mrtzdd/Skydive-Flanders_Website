import { FadeIn } from "@/components/motion/FadeIn"

export function QuoteSection() {
  return (
    <section className="border-y border-border bg-white py-16 md:py-20">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-display text-lg italic leading-relaxed text-navy/70 md:text-xl">
            "… For once you have tasted flight you will walk the earth with
            your eyes turned skywards, for there you have been and there you
            will long to return…"
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            — Leonardo da Vinci
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
