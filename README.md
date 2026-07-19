# Skydive Flanders — Dropzone Moorsele

Nederlandstalige, aviation-geïnspireerde site voor de Skydive Flanders
dropzone in Moorsele. Gebouwd met React, TypeScript, Vite, Tailwind CSS,
shadcn/ui en Framer Motion.

## Ontwikkelen

```bash
npm install
npm run dev      # start de dev server
npm run build    # productie build (tsc + vite build)
npm run preview  # preview van de productie build
npm run lint      # oxlint
```

## Wat is echt vs. illustratief

Deze site combineert echte, geverifieerde gegevens van
[skydiveflanders.be](https://skydiveflanders.be) met een aantal
illustratieve placeholders die nog vervangen moeten worden.

**Echt / geverifieerd** (in lijn met de bron):
- Logo (`public/brand/logo.svg`, `favicon.ico`) en alle foto's in
  `public/photos/` — rechtstreeks gedownload van skydiveflanders.be/images/
- Prijzen, leeftijds- en gewichtslimieten (`src/lib/data.ts` → `services`, `faqs`)
- FAQ-antwoorden — letterlijk overgenomen van de echte FAQ-pagina
- Contactgegevens, openingsuren en de twee zusterdropzones (Schaffen,
  Zwartberg) — `siteConfig` in `src/lib/data.ts`
- Documenten & formulieren (`/documenten`) — echte medische attesten,
  toestemmingsformulieren, reglementen en verzekeringsdocumenten, gelinkt
  naar de effectief gehoste bestanden
- Meteo/status-bord (`/weer`) — bevat het echte, live Google Sheet-statusbord
  van de club (ook gelinkt vanaf de homepage)
- Reserveer-CTA's (`/reserveren`) — linken rechtstreeks naar het echte
  Burblesoft-boekingssysteem voor Dropzone Moorsele; er is geen nep lokaal
  "reservatie"-formulier, want een echte boeking moet via het echte systeem
- Testimonials — drie letterlijke, echte klantenreviews (aangeleverd door de
  klant als screenshots)
- Mailinglijst-knop — linkt naar het echte inschrijfformulier

**Illustratief / placeholder** (niet gekoppeld aan echte gegevens):
- Vliegtuigspecificaties (algemene Cessna Grand Caravan-specificaties, niet
  de exacte specificaties van een specifiek toestel/staartnummer)
- Namen, rollen en biografieën van teamleden, en de nieuws-/evenementensectie
  op de homepage
- Teamportretten zijn bewust *geen* stockfoto's van willekeurige mensen — ze
  tonen initialen op een marineblauwe gradient (`AvatarPlaceholder`) tot
  echte foto's beschikbaar zijn

Voor een echte productielancering zijn vooral de teamprofielen (namen,
foto's, biografieën) nog te vervangen door de effectieve huidige staf.

## Fotomateriaal

Alle foto's in `public/photos/` zijn gedownload van
`skydiveflanders.be/images/` (zie `src/lib/photos.ts` voor de mapping) —
geen stockfoto's. Het logo komt van `skydiveflanders.be/logo.svg`.
