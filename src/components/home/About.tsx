import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, Users2, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/motion/FadeIn"
import { SectionHeading } from "@/components/ui/section-heading"
import { photos } from "@/lib/photos"
import { stats } from "@/lib/data"

const pillars = [
  {
    icon: ShieldCheck,
    title: "Veiligheid op de eerste plaats",
    description:
      "Elke procedure, elk toestel, elke lift — gecontroleerd tegenover strikte interne normen, ruim binnen de wettelijke limieten.",
  },
  {
    icon: Users2,
    title: "Een warme community",
    description:
      "Van je eerste tandemsprong tot je duizendste sprong — onze dropzones zijn waar de skydiving-community van Vlaanderen samenkomt.",
  },
  {
    icon: Sparkles,
    title: "Modern materiaal",
    description:
      "Turbine-vliegtuigen, hedendaags materiaal en AAD-uitrusting doorheen al ons student- en huurmateriaal.",
  },
]

export function About() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <FadeIn className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={photos.caravanMorning}
              alt="Onze Cessna Grand Caravan in de vroege ochtend"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden max-w-[220px] rounded-xl bg-white p-5 shadow-xl md:block">
            <p className="font-display text-3xl font-semibold text-navy">
              3 Dropzones
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Moorsele, Schaffen & Zwartberg — één club, verspreid over Vlaanderen.
            </p>
          </div>
        </FadeIn>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Over Skydive Flanders"
            title="Een professionele dropzone met een echt gastvrije sfeer."
            description="Skydive Flanders combineert een gedisciplineerde, veiligheid-eerst cultuur met de ontspannen sfeer die springers steeds doet terugkomen — beginners en ervaren licentiehouders. Onze dropzone in Moorsele is een van de drie die we in Vlaanderen uitbaten, bemand door gebrevetteerde instructeurs met een gedeelde passie voor luchtvaart die in elke briefing doorschijnt."
            className="mx-0 text-left"
          />

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08} y={12}>
                <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </FadeIn>
            ))}
          </div>

          <Link
            to="/team"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-sky hover:text-navy"
          >
            Maak kennis met onze instructeurs
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon
          return (
            <FadeIn
              key={pillar.title}
              delay={i * 0.1}
              y={16}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-sky-light text-sky">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
