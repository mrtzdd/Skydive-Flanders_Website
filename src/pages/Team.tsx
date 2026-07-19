import { PageHero } from "@/components/layout/PageHero"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/motion/FadeIn"
import { AvatarPlaceholder } from "@/components/ui/avatar-placeholder"
import { teamMembers } from "@/lib/data"
import { photos } from "@/lib/photos"

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Ons team"
        title="Duizenden sprongen. Eén gedeelde passie."
        description="Maak kennis met de gebrevetteerde instructeurs, coaches en piloten die van Skydive Flanders een van de meest gerespecteerde dropzones van België maken."
        image={photos.bigFormation}
      />

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="De mensen achter elke sprong"
          title="Instructeurs, coaches & piloten"
        />

        <FadeIn>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
            Ter illustratie — vervang deze profielen door de echte huidige
            instructeurs zodra hun foto's en gegevens beschikbaar zijn.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <FadeIn key={member.slug} delay={(i % 3) * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl bg-navy">
                <AvatarPlaceholder
                  name={member.name}
                  className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-105"
                  textClassName="text-5xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-xl font-semibold text-white">
                    {member.name}
                  </p>
                  <p className="text-sm text-sky-light">{member.role}</p>

                  <div className="mt-3 flex gap-4 text-xs text-white/70">
                    <span>{member.years} jaar ervaring</span>
                    {member.jumps !== "—" && <span>{member.jumps} sprongen</span>}
                  </div>

                  <div className="grid max-h-0 grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:mt-4 group-hover:max-h-40 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-white/85">
                        {member.bio}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {member.qualifications.map((q) => (
                          <span
                            key={q}
                            className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white"
                          >
                            {q}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
