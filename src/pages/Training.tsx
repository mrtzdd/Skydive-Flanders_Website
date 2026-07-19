import { Link } from "react-router-dom"
import { FileText, ExternalLink } from "lucide-react"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/FadeIn"
import { Button } from "@/components/ui/button"
import { trainingSteps } from "@/lib/data"
import { trainingIconMap } from "@/lib/icon-map"
import { photos } from "@/lib/photos"
import { cn } from "@/lib/utils"

export default function Training() {
  return (
    <>
      <PageHero
        eyebrow="Opleiding"
        title="Word een gebrevetteerde skydiver."
        description="Een gestructureerde, internationaal erkende progressie — van je eerste dag in de klas tot het moment dat je zelfstandig, gebrevetteerd en zelfverzekerd springt."
        image={photos.affExit}
      />

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Het traject"
          title="Zeven stappen naar je A-licentie"
          description="Elke AFF-student doorloopt dezelfde beproefde structuur, individueel begeleid door gebrevetteerde instructeurs bij elke stap."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-6 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />
          <div className="space-y-12 md:space-y-16">
            {trainingSteps.map((step, i) => {
              const Icon = trainingIconMap[step.icon]
              const isRight = i % 2 === 1
              return (
                <FadeIn key={step.step} delay={0.04 * i}>
                  <div
                    className={cn(
                      "relative flex items-start gap-6 md:gap-10",
                      isRight && "md:flex-row-reverse"
                    )}
                  >
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-background bg-navy text-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                      <Icon className="size-5" />
                    </div>
                    <div
                      className={cn(
                        "flex-1 rounded-2xl border border-border bg-white p-6 shadow-sm md:w-[calc(50%-2.5rem)]",
                        isRight ? "md:ml-auto" : "md:mr-auto"
                      )}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-sky">
                        Stap {step.step}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Klaar om te starten, of wil je eerst meer weten?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Download het medisch attest en de toestemmingsformulieren die je
              nodig hebt, of lees het volledige AFF-curriculum van de
              Belgische federatie voor je je eerste sprong boekt.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
                <Link to="/documenten">
                  <FileText className="size-4" />
                  AFF-documenten & formulieren
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:text-navy"
              >
                <a href="https://www.valschermsport.be/opleiding/aff" target="_blank" rel="noreferrer">
                  AFF-curriculum (VVP)
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
            <Button asChild size="lg" className="mt-4 bg-cta text-cta-foreground hover:bg-cta/90">
              <Link to="/reserveren">
                Boek je AFF-initiatiesprong — €385
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
