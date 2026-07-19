import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/motion/FadeIn"
import { photos } from "@/lib/photos"

const cards = [
  {
    title: "Gestructureerd opleidingsprogramma",
    description:
      "Zeven duidelijke stappen van Registratie tot je A-licentie, begeleid door gebrevetteerde instructeurs bij elke stap.",
    image: photos.affExit,
    href: "/opleiding",
    cta: "Bekijk het opleidingstraject",
  },
  {
    title: "Veiligheid is nooit een bijzaak",
    description:
      "Reserveschermen, AAD-systemen, gebrevetteerde instructeurs en continue weersopvolging — ingebouwd in elke sprong.",
    image: photos.landing,
    href: "/veiligheid",
    cta: "Lees onze veiligheidsnormen",
  },
]

export function TrainingSafetyTeaser() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <FadeIn key={card.title} delay={i * 0.1}>
            <Link
              to={card.href}
              className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-2xl"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
              <div className="relative z-10 p-8">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  {card.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
