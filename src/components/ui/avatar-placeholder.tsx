import { Plane } from "lucide-react"
import { cn } from "@/lib/utils"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function AvatarPlaceholder({
  name,
  className,
  textClassName,
}: {
  name: string
  className?: string
  textClassName?: string
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-light text-white",
        className
      )}
    >
      <Plane className="absolute -bottom-3 -right-3 size-16 rotate-45 text-white/10" strokeWidth={1.5} />
      <span className={cn("font-display font-semibold tracking-wide", textClassName)}>
        {initials(name)}
      </span>
    </div>
  )
}
