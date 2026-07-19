import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/motion/FadeIn"
import { Button } from "@/components/ui/button"
import { photos } from "@/lib/photos"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[420px]">
        <img
          src={photos.sunsetCaravan}
          alt="Zonsondergang bij onze Caravan"
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="container-page relative z-10 flex h-full flex-col items-center justify-center text-center">
          <FadeIn>
            <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">
              Jouw plaats op de volgende lift wacht.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-white/80">
              België's actieve skydiving-ervaring is dichterbij dan je denkt.
              Reserveer je sprong en zie Vlaanderen vanaf 4.000 meter hoogte.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-cta text-cta-foreground hover:bg-cta/90"
            >
              <Link to="/reserveren">
                Reserveer Nu
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
