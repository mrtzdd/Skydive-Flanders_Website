import { PageHero } from "@/components/layout/PageHero"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/FadeIn"
import { safetyPoints, safetyStats } from "@/lib/data"
import { safetyIconMap } from "@/lib/icon-map"
import { photos } from "@/lib/photos"

export default function Safety() {
  return (
    <>
      <PageHero
        eyebrow="Veiligheid"
        title="Veiligheid is geen checklist. Het is de cultuur."
        description="Elke sprong bij Skydive Flanders steunt op strikte procedures, gecertificeerd materiaal en instructeurs die niets aan het toeval overlaten. Dit is hoe we dat waarmaken."
        image={photos.affExit}
      />

      <section className="container-page py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {safetyStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.06} className="text-center">
              <p className="font-display text-3xl font-semibold text-navy md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Onze normen"
            title="Zeven verbintenissen bij elke lift"
            description="Dit zijn geen ambities — het zijn geschreven procedures, jaarlijks geëvalueerd en bevestigd bij elke springer die bij ons over de vloer komt."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safetyPoints.map((point, i) => {
              const Icon = safetyIconMap[point.icon]
              return (
                <FadeIn
                  key={point.title}
                  delay={(i % 3) * 0.08}
                  className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-sky-light text-sky">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <img
              src={photos.caravanMorning}
              alt="Ons vliegtuig klaargezet voor de eerste lift van de dag"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Geruststelling, van in het ontwerp"
              title="Je bent nooit de enige die aan je veiligheid denkt."
              description=""
              className="mx-0 text-left"
            />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Vanaf het moment dat je je registreert, waakt een keten van
              getrainde mensen over je sprong: de vouwer die je reservescherm
              plooide, de manifest-verantwoordelijke die je materiaal
              controleerde, de instructeur die je uitstap briefte, en de
              piloot die het weer opvolgt tot op altitude. Hetzelfde systeem
              dat op al onze drie dropzones vertrouwd wordt, lift na lift.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
