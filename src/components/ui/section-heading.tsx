import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/motion/FadeIn"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.2em]",
            light ? "text-sky-light" : "text-sky"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold md:text-4xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-balance text-base leading-relaxed md:text-lg",
            light ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  )
}
