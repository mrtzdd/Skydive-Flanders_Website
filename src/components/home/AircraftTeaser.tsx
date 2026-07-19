import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion/FadeIn"
import { Button } from "@/components/ui/button"
import { aircraftFleet } from "@/lib/data"

export function AircraftTeaser() {
  const caravan = aircraftFleet[0]

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <motion.img
        src={caravan.image}
        alt="Onze Cessna Grand Caravan"
        className="absolute inset-0 size-full object-cover opacity-30"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />

      <div className="container-page relative z-10">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-light">
              Ons vliegtuig
            </p>
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Turbinevliegtuig, gebouwd voor hoogte, gemaakt om te springen.
            </h2>
            <p className="mt-4 text-balance text-lg text-white/75">
              Onze Cessna 208B Grand Caravan is gekozen en onderhouden voor
              één doel: je snel en veilig naar sprong-altitude brengen, lift
              na lift.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-2xl font-semibold">{caravan.capacity}</p>
                <p className="text-sm text-white/60">Capaciteit</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold">{caravan.timeToAltitude}</p>
                <p className="text-sm text-white/60">Naar sprong-altitude</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <Button
              asChild
              size="lg"
              className="mt-10 bg-white text-navy hover:bg-white/90"
            >
              <Link to="/vliegtuig">
                Ontdek ons vliegtuig
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
