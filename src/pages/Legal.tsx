import type { ReactNode } from "react"
import { FadeIn } from "@/components/motion/FadeIn"
import { siteConfig } from "@/lib/data"

export function Privacy() {
  return (
    <LegalLayout title="Privacybeleid">
      <p>
        Skydive Flanders verzamelt enkel de gegevens die nodig zijn om je
        boeking te verwerken, vragen te beantwoorden en — indien je dit
        aangeeft — af en toe een nieuwsbriefupdate te sturen. We verkopen
        nooit persoonsgegevens aan derden.
      </p>
      <p>
        Boekings- en medische verklaringsgegevens worden bewaard zolang de
        Belgische luchtvaart- en verzekeringsregelgeving dit vereist, en
        daarna veilig verwijderd. Je kan op elk moment inzage, correctie of
        verwijdering van je gegevens aanvragen via{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-sky underline">
          {siteConfig.email}
        </a>
        .
      </p>
      <p>
        Dit is nog voorlopige tekst — laat dit nakijken door een jurist en
        vul aan met de concrete gegevensstromen (boekingssysteem,
        betalingsverwerker, mailinglijst-provider) voor deze pagina live gaat.
      </p>
    </LegalLayout>
  )
}

export function Cookies() {
  return (
    <LegalLayout title="Cookiebeleid">
      <p>
        Deze website gebruikt enkel essentiële cookies die nodig zijn voor de
        kernfunctionaliteit. Worden er later analytics-, advertentie- of
        ingesloten-kaart-cookies toegevoegd, dan moet deze pagina worden
        bijgewerkt en een toestemmingsbanner worden voorzien.
      </p>
      <p>
        Dit is nog voorlopige tekst — vul aan met inhoud die overeenkomt met
        je effectieve cookiegebruik voor deze pagina live gaat.
      </p>
    </LegalLayout>
  )
}

function LegalLayout({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="container-page py-32">
      <FadeIn className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-navy md:text-4xl">
          {title}
        </h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </FadeIn>
    </section>
  )
}
