import type { ReactNode } from "react"
import { FadeIn } from "@/components/motion/FadeIn"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  image: string
  children?: ReactNode
  size?: "default" | "compact"
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
  size = "default",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-navy",
        size === "compact" ? "h-[56vh] min-h-[420px]" : "h-[68vh] min-h-[520px]"
      )}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
      <div className="container-page relative z-10 pb-14 pt-32 md:pb-20">
        <FadeIn>
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl text-balance text-4xl font-semibold text-white md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-balance text-lg text-white/80">
              {description}
            </p>
          )}
          {children}
        </FadeIn>
      </div>
    </section>
  )
}
