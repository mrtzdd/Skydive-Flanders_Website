import { photos } from "@/lib/photos"

// Contactgegevens, prijzen, openingsuren, documenten en boekingslinks
// hieronder komen van de echte skydiveflanders.be, zodat deze pagina
// écht bruikbaar is voor een bezoeker en geen ontwerp-mockup blijft.
// Skydive Flanders (Paracentrum Vlaanderen vzw) baat drie gelijkwaardige
// dropzones uit — hieronder allemaal met dezelfde structuur, geen enkele
// dropzone is "de hoofdlocatie" van de site.
export type Dropzone = {
  slug: string
  name: string
  addressLine1: string
  addressLine2: string
  phone: string
  phoneHref: string
  mapLink: string
  mapEmbedSrc: string
  tandemBookingUrl: string
  affBookingUrl: string
}

export const dropzones: Dropzone[] = [
  {
    slug: "moorsele",
    name: "Moorsele",
    addressLine1: "Ledegemstraat 140",
    addressLine2: "8560 Moorsele",
    phone: "056 50 39 40",
    phoneHref: "+3256503940",
    mapLink: "https://maps.app.goo.gl/9m9m6m1r7Ecs1Znr9",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Ledegemstraat%20140%2C%208560%20Moorsele%2C%20Belgium&t=k&z=15&output=embed",
    tandemBookingUrl: "https://bookings.burblesoft.com/5225/65?lang=dutch",
    affBookingUrl: "https://bookings.burblesoft.com/5225/75?lang=dutch",
  },
  {
    slug: "schaffen",
    name: "Schaffen",
    addressLine1: "Nieuwe Dijkstraat 44",
    addressLine2: "3290 Schaffen",
    phone: "013 33 75 43",
    phoneHref: "+3213337543",
    mapLink: "https://maps.google.com/maps?q=Nieuwe+Dijkstraat+44%2C+3290+Schaffen%2C+Belgium",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Nieuwe%20Dijkstraat%2044%2C%203290%20Schaffen%2C%20Belgium&t=k&z=15&output=embed",
    tandemBookingUrl: "https://bookings.burblesoft.com/5215/65?lang=dutch",
    affBookingUrl: "https://bookings.burblesoft.com/5215/75?lang=dutch",
  },
  {
    slug: "zwartberg",
    name: "Zwartberg",
    addressLine1: "Vliegplein 1",
    addressLine2: "3600 Genk",
    phone: "089 84 27 76",
    phoneHref: "+3289842776",
    mapLink: "https://maps.google.com/maps?q=Vliegplein+1%2C+3600+Genk%2C+Belgium",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=Vliegplein%201%2C%203600%20Genk%2C%20Belgium&t=k&z=15&output=embed",
    tandemBookingUrl: "https://bookings.burblesoft.com/3993/21?lang=dutch",
    affBookingUrl: "https://bookings.burblesoft.com/3993/75?lang=dutch",
  },
]

export const siteConfig = {
  name: "Skydive Flanders",
  shortName: "Skydive Flanders",
  location: "Moorsele, Schaffen & Zwartberg",
  tagline: "Beleef de hemel zoals nooit tevoren.",
  legalEntity: {
    name: "Paracentrum Vlaanderen – Skydive Flanders vzw",
    address: "Nieuwe Dijkstraat 44, 3290 Schaffen",
    vatNumber: "BE 0459.591.542",
  },
  secretariat: {
    addressLine1: "Skydive Flanders — Secretariaat",
    addressLine2: "Ledegemstraat 140, B-8560 Moorsele",
    phone: "0498 50 94 68",
    phoneHref: "+32498509468",
    hours: "Maandag & donderdag, 9:00 – 18:00",
  },
  // Algemeen/administratief contactpunt — praktisch gezien hetzelfde als het
  // secretariaat, gebruikt voor telefoon-CTA's die geen specifieke dropzone
  // kiezen (bv. FAQ-pagina).
  phone: "0498 50 94 68",
  phoneHref: "+32498509468",
  email: "info@skydiveflanders.be",
  social: {
    instagram: "https://www.instagram.com/skydiveflanders/",
    facebook: "https://www.facebook.com/PCVMoorsele/",
  },
  openingHours: [
    { days: "Weekends & feestdagen (elke dropzone)", hours: "09:00 – 13:00 (later bij springactiviteit)" },
    { days: "Weekdagen", hours: "Wisselend — zie de actuele agenda op skydiveflanders.be" },
    { days: "Secretariaat (administratie, telefoon)", hours: "Maandag & donderdag, 9:00 – 18:00" },
  ],
  weatherSheetUrl:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQBkLtqly3BO5cNe41AjqoyA43uaoxAhY6OJgKGvyU-FNvUxZb2Zo4h3ebay9OAyu8yDT8PRYZS_lAt/pubhtml?gid=1088644180",
  documentsUrl: "https://skydiveflanders.be/documenten",
  agendaUrl: "https://skydiveflanders.be/agenda",
}

export const bookingLinks = {
  mailingList:
    "https://b3797163.sibforms.com/serve/MUIFAErsVwMMZ2Jd1iOcE33UBwDgsB-yDKcGyjnzojh-WHfQFCP1U_agn4705GzWHWN6lOnXkNeiX_nT7gAQtYDVGhw519ULokLEA10WWUNin2oNiGpSkilWkr4KeEQfjOdPDcA-blEQAboONyLF89ULVhFzvQujnjwxJeLOXOjktAXcARPawwvFF1Erf7dks73F9_bDMSemhE3D",
}

export type Document = {
  category: string
  title: string
  description: string
  href: string
  external?: boolean
}

export const documents: Document[] = [
  { category: "Tandem", title: "Medisch attest valschermspringen", description: "Enkel nodig vanaf 70 jaar", href: "https://skydiveflanders.be/documents/geneeskundigeverklaring.pdf" },
  { category: "Tandem", title: "Medical Certificate (Engels)", description: "Engelstalige versie, enkel nodig vanaf 70 jaar", href: "https://skydiveflanders.be/documents/medicalcertificate.pdf" },
  { category: "Tandem", title: "Toelating minderjarige", description: "Formulier voor minderjarige deelnemers", href: "https://skydiveflanders.be/documents/toelating_minderjarige.pdf" },
  { category: "AFF", title: "Medisch attest valschermspringen", description: "Verplicht voor AFF-cursisten", href: "https://skydiveflanders.be/documents/geneeskundigeverklaring.pdf" },
  { category: "AFF", title: "Medical Certificate (Engels)", description: "Engelstalige versie, verplicht voor AFF-cursisten", href: "https://skydiveflanders.be/documents/medicalcertificate.pdf" },
  { category: "AFF", title: "Toelating minderjarige", description: "Formulier voor minderjarige deelnemers", href: "https://skydiveflanders.be/documents/toelating_minderjarige.pdf" },
  { category: "Ervaren skydivers", title: "Infofiche leden en gastspringers", description: "Praktische informatie voor licentiehouders", href: "https://skydiveflanders.be/documents/info_renewal_nl.pdf" },
  { category: "Ervaren skydivers", title: "Infosheet members and guests (Engels)", description: "Engelstalige versie voor gastspringers", href: "https://skydiveflanders.be/documents/info_renewal_en.pdf" },
  { category: "Ervaren skydivers", title: "Medisch attest valschermspringen", description: "Medisch attest voor ervaren springers", href: "https://skydiveflanders.be/documents/geneeskundigeverklaring.pdf" },
  { category: "Ervaren skydivers", title: "Medisch attest voor 75+", description: "Specifiek medisch attest voor springers vanaf 75 jaar", href: "https://skydiveflanders.be/documents/medische_keuring_75plus.pdf" },
  { category: "Reglementen", title: "Basisveiligheidsreglement", description: "Algemene veiligheidsregels (VVP)", href: "https://docs.google.com/document/d/e/2PACX-1vQopCCA2u-XuuWaWGqB43-DJXsBG-JFCEcaUkdsIsax71XARH3qG4CmEkTz3be8gdH4YoQKBFrzCaiR/pub", external: true },
  { category: "Reglementen", title: "Huishoudelijk reglement", description: "Huishoudelijk reglement van de vereniging", href: "https://skydiveflanders.be/documents/huishoudelijk_reglement_PCV.pdf" },
  { category: "Reglementen", title: "Statuten Paracentrum Vlaanderen vzw", description: "Statuten van de vereniging", href: "https://skydiveflanders.be/documents/Statuten_Paracentrum_Vlaanderen_Skydive_Flanders_vzw.pdf" },
  { category: "Reglementen", title: "VVP Canopy Calculator", description: "Canopy calculator-tool van de federatie", href: "https://canopy.valschermsport.be/", external: true },
  { category: "Verzekering", title: "Algemene voorwaarden", description: "Algemene voorwaarden verzekering", href: "https://drive.google.com/file/d/1Rs3aIeo5O5fR8mZoz4MWFOun5CP7r3zk/view", external: true },
  { category: "Verzekering", title: "Overzicht waarborgen", description: "Overzicht van alle waarborgen", href: "https://drive.google.com/file/d/1K4ftybXV4R-ikoHQVi9AwNbzyn7ZsDqm/view", external: true },
  { category: "Voorvalmeldingen", title: "Voorvalmelding skydivers en dropzones (VVP)", description: "Meld een voorval bij de VVP", href: "https://www.valschermsport.be/voorvalmelding", external: true },
  { category: "Voorvalmeldingen", title: "Voorvalmelding piloten en vliegtuigen (Pilot of Trust)", description: "Meld een voorval voor piloten", href: "https://forms.gle/1oW4zQ26vRJWyBKL6", external: true },
]

export const stats = [
  { value: "3", label: "Dropzones in Vlaanderen" },
  { value: "€250", label: "Tandemsprong, vanaf" },
  { value: "12+", label: "Minimumleeftijd om te springen" },
  { value: "VVP", label: "Lid van de Belgische federatie" },
]

export type Service = {
  slug: string
  title: string
  description: string
  longDescription: string
  priceLabel: string
  image: string
  href: string
  icon: "parachute" | "graduation" | "users" | "target" | "gift"
}

// Prijzen en vereisten zijn de echte, actuele cijfers van
// skydiveflanders.be/prijslijst.
export const services: Service[] = [
  {
    slug: "tandem",
    title: "Tandemsprongen",
    description: "Perfect voor verjaardagen, bucketlists en onvergetelijke ervaringen.",
    longDescription:
      "Geen ervaring nodig. Je bent stevig vastgemaakt aan een ervaren tandem-instructeur voor ongeveer 50 seconden vrije val vanaf zo'n 4.000 meter, gevolgd door een rustige vlucht onder het scherm over het Vlaamse platteland. Vanaf 12 jaar, max. 95 kg.",
    priceLabel: "Vanaf €250",
    image: photos.canopyPair,
    href: "/reserveren",
    icon: "parachute",
  },
  {
    slug: "aff",
    title: "AFF-opleiding",
    description: "Word een gebrevetteerde parachutist via een gestructureerde opleiding.",
    longDescription:
      "De AFF-opleiding (Accelerated Free Fall) leidt je van grondopleiding tot zelfstandige, gebrevetteerde skydiver via een beproefd, internationaal erkend lesprogramma. Vanaf 16 jaar, max. 110 kg, medisch attest vereist.",
    priceLabel: "Initiatiesprong €385 · Volledige opleiding €1.275",
    image: photos.affExit,
    href: "/opleiding",
    icon: "graduation",
  },
  {
    slug: "licensed",
    title: "Ervaren springers",
    description: "Faciliteiten, coaching, fun jumps en gemeenschap.",
    longDescription:
      "Rig aan, laad in en spring met een fijne, actieve community. Manifest, pakruimte en materiaalopslag op elke dropzone — ledenprijs vanaf €24,50 per sprong, niet-leden vanaf €31.",
    priceLabel: "Vanaf €24,50/sprong (leden)",
    image: photos.landing,
    href: "/team",
    icon: "users",
  },
  {
    slug: "coaching",
    title: "Coaching",
    description: "Canopy coaching, FS, freefly en progressie.",
    longDescription:
      "Individuele en kleinschalige coaching in canopy piloting, formatie-valschermspringen en freefly, verkocht als pakketten op maat van jouw logboek en doelen — van je eerste solo tot competitieniveau.",
    priceLabel: "Coaching pack (10 sprongen) vanaf €360",
    image: photos.fs4,
    href: "/opleiding",
    icon: "target",
  },
  {
    slug: "vouchers",
    title: "Cadeaubonnen",
    description: "Prachtige waardebonnen voor een onvergetelijke ervaring.",
    longDescription:
      "Geef iemand de hemel cadeau. Onze tandem-waardebonnen zijn 2 jaar geldig vanaf aankoop en bruikbaar op al onze drie dropzones — Moorsele, Schaffen of Zwartberg.",
    priceLabel: "Vanaf €250",
    image: photos.sunsetCaravan,
    href: "/reserveren",
    icon: "gift",
  },
]

export type Aircraft = {
  slug: string
  name: string
  tagline: string
  image: string
  gallery: string[]
  capacity: string
  engine: string
  ceiling: string
  climbRate: string
  cruiseSpeed: string
  timeToAltitude: string
  whyIdeal: string
  facts: string[]
}

// Skydive Flanders vliegt met de Cessna 208B Grand Caravan — het toestel op
// deze pagina, herkenbaar aan registraties zoals OO-JEE en OO-FNG op onze
// eigen foto's hieronder.
export const aircraftFleet: Aircraft[] = [
  {
    slug: "caravan",
    name: "Cessna 208B Grand Caravan",
    tagline: "Ons turbine-springvliegtuig",
    image: photos.caravanMorning,
    gallery: [photos.tandemExit, photos.affExit],
    capacity: "±14 skydivers + piloot",
    engine: "Pratt & Whitney PT6A turbopropmotor",
    ceiling: "Werkplafond rond 4.500 m (~15.000 ft)",
    climbRate: "Snelle klim, ontworpen voor herhaalde liften per dag",
    cruiseSpeed: "Kruissnelheid rond 280 km/u",
    timeToAltitude: "±15-20 minuten naar sprong-altitude",
    whyIdeal:
      "Een brede roldeur, vlakke vloer en een stabiele uitstap maken de Caravan tot de gouden standaard voor tandem- en studentenliften — stabiel bij het uitstappen, snel naar hoogte, en berucht betrouwbaar.",
    facts: [
      "De Grand Caravan is een van de best verkochte turbopropvliegtuigen ooit, met meer dan 3.000 exemplaren wereldwijd.",
      "De enkele PT6-turbine kan op Jet A1 draaien en heeft een tijd-tussen-revisies van meer dan 3.600 uur.",
      "Dankzij zijn lage stalsnelheid en grote deur is de Caravan wereldwijd het meest gebruikte toestel voor valschermspringclubs.",
    ],
  },
]

export type TrainingStep = {
  step: number
  title: string
  description: string
  icon: "clipboard" | "book" | "backpack" | "plane-takeoff" | "trending-up" | "user-check" | "award"
}

export const trainingSteps: TrainingStep[] = [
  {
    step: 1,
    title: "Registratie",
    description:
      "Vul je medische verklaring in en schrijf je online of via het manifest in. We plannen een opleidingsdatum die past bij jouw agenda.",
    icon: "clipboard",
  },
  {
    step: 2,
    title: "Grondopleiding",
    description:
      "Een volledige dag theorie en praktijk op de trainingsmodule: procedures aan boord, lichaamshouding in vrije val, scherm-controle en noodprocedures.",
    icon: "book",
  },
  {
    step: 3,
    title: "Kennismaking met materiaal",
    description:
      "Leer elk onderdeel van je uitrusting kennen — hoofdscherm, reserve, AAD en harnas — en hoe je het voor elke sprong controleert.",
    icon: "backpack",
  },
  {
    step: 4,
    title: "Eerste sprong",
    description:
      "Je eerste AFF-sprong: je stapt uit met twee instructeurs die je begeleiden, en stuurt onder radiobegeleiding je eigen scherm naar de grond.",
    icon: "plane-takeoff",
  },
  {
    step: 5,
    title: "Progressie",
    description:
      "Zeven gestructureerde AFF-niveaus met stap voor stap minder begeleiding naarmate je zelfvertrouwen en vaardigheden groeien, telkens met een volledige debriefing.",
    icon: "trending-up",
  },
  {
    step: 6,
    title: "Zelfstandige springer",
    description:
      "Spring zelfstandig onder toezicht en bouw de sprongen en vaardigheden op die nodig zijn voor je licentie-examen.",
    icon: "user-check",
  },
  {
    step: 7,
    title: "A-licentie",
    description:
      "Behaal je theoretisch en praktisch examen voor je A-licentie — een gebrevetteerde skydiver, vrij om op elke dropzone ter wereld te springen.",
    icon: "award",
  },
]

export type SafetyPoint = {
  title: string
  description: string
  icon: "shield-check" | "life-buoy" | "graduation-cap" | "cloud-sun" | "clipboard-check" | "globe" | "eye"
}

export const safetyPoints: SafetyPoint[] = [
  {
    title: "Grondige materiaalcontroles",
    description:
      "Elk toestel wordt gecontroleerd voor de eerste lift van de dag en opnieuw voor elke sprong, zowel door de springer zelf als door een manifest-verantwoordelijke.",
    icon: "shield-check",
  },
  {
    title: "Automatische reserveopeningsystemen",
    description:
      "Alle student- en huurmaterialen zijn uitgerust met een gecertificeerd Automatic Activation Device (AAD) en een reservescherm dat om de 6 maanden door een erkende vouwer wordt herplooid.",
    icon: "life-buoy",
  },
  {
    title: "Gebrevetteerde, actieve instructeurs",
    description:
      "Elke AFF- en tandem-instructeur heeft een geldig brevet van de Belgische federatie (VVP), met regelmatige bijscholing en herhalingstraining elk seizoen.",
    icon: "graduation-cap",
  },
  {
    title: "Continue weersopvolging",
    description:
      "Wind, wolkenbasis en zicht worden voor elke lift gecontroleerd tegenover strikte interne minima — ruim binnen de wettelijke limieten — en springen stopt zodra de omstandigheden verslechteren.",
    icon: "cloud-sun",
  },
  {
    title: "Vastgelegde veiligheidsprocedures",
    description:
      "Geschreven operationele procedures dekken alles van het laden van het vliegtuig tot noodrespons, jaarlijks herzien met onze veiligheidsverantwoordelijke en de nationale federatie.",
    icon: "clipboard-check",
  },
  {
    title: "Federatief gereguleerde normen",
    description:
      "Skydive Flanders werkt volgens de veiligheidsreglementen van de VVP (de Belgische parachutespringfederatie), met een vastgelegde procedure voor het melden van voorvallen voor zowel springers als piloten.",
    icon: "globe",
  },
  {
    title: "Nauwe begeleiding van studenten",
    description:
      "Studenten worden op de grond en in vrije val begeleid tijdens elke fase van hun opleiding, met een aangeduide cursusverantwoordelijke die de progressie van elke springer opvolgt.",
    icon: "eye",
  },
]

export const safetyStats = [
  { value: "3", label: "Dropzones, één veiligheidscultuur" },
  { value: "100%", label: "Studentmateriaal met AAD" },
  { value: "6-maandelijks", label: "Verplichte herplooiing reservescherm" },
  { value: "VVP", label: "Federatief gereguleerde normen" },
]

export type TeamMember = {
  slug: string
  name: string
  role: string
  years: number
  jumps: string
  qualifications: string[]
  bio: string
}

// Illustratieve profielen — namen en cijfers zijn ter illustratie, niet de
// echte huidige staf. Vervang deze door echte instructeursprofielen zodra
// die beschikbaar zijn.
export const teamMembers: TeamMember[] = [
  {
    slug: "bram-vandevelde",
    name: "Bram Vandevelde",
    role: "Hoofdinstructeur & Cursusverantwoordelijke",
    years: 28,
    jumps: "9.400+",
    qualifications: ["AFF-instructeur", "Tandem-instructeur Examinator", "Vouwer Klasse III"],
    bio: "Bram leidt het opleidingsprogramma al jarenlang. Hij herinnert zich nog elke eerste-sprong-zenuwen van zijn studenten — en haalt er plezier uit om ze ongelijk te bewijzen.",
  },
  {
    slug: "sofie-declerck",
    name: "Sofie Declerck",
    role: "Verantwoordelijke Tandemoperaties",
    years: 19,
    jumps: "6.200+",
    qualifications: ["Tandem-instructeur", "AFF-instructeur", "Canopy Coach"],
    bio: "Sofie vloog al tandempassagiers van zenuwachtige eerstelingen tot grootouders die hun bucketlist afvinken — en gaf elk van hen een compleet veilig gevoel.",
  },
  {
    slug: "tom-de-ridder",
    name: "Tom De Ridder",
    role: "Senior AFF-instructeur",
    years: 15,
    jumps: "4.800+",
    qualifications: ["AFF-instructeur", "Freefly Coach", "Windtunnel Coach"],
    bio: "Tom begeleidt de meeste van onze studenten door hun eerste solo-seizoen, met een rustige, technische debriefingstijl waar studenten steevast lovend over zijn.",
  },
  {
    slug: "eline-maes",
    name: "Eline Maes",
    role: "Tandem- & AFF-instructeur",
    years: 11,
    jumps: "3.100+",
    qualifications: ["Tandem-instructeur", "AFF-instructeur", "FS Coach"],
    bio: "Eline doorliep zelf onze AFF-opleiding en bleef hangen. Ze coacht nu het formatie-team waar ze ooit zelf van droomde deel van uit te maken.",
  },
  {
    slug: "kobe-vermeersch",
    name: "Kobe Vermeersch",
    role: "Hoofdpiloot",
    years: 22,
    jumps: "—",
    qualifications: ["ATPL", "Springvliegtuig-bevoegdheid", "Type-bevoegd op Caravan"],
    bio: "Kobe vloog al meer dan twintig jaar elke lift en kent het lokale luchtruim, het weer en de graspiste beter dan wie ook.",
  },
  {
    slug: "hanne-coppens",
    name: "Hanne Coppens",
    role: "Vouwer & Materiaalverantwoordelijke",
    years: 13,
    jumps: "2.600+",
    qualifications: ["Master Rigger", "AFF-instructeur"],
    bio: "Hanne onderhoudt elk toestel van het park nauwgezet, en geeft de materiaalmodule die AFF-studenten steevast als het grondigste lesuur van hun opleiding onthouden.",
  },
]

export type GalleryCategory =
  | "Vliegtuig"
  | "Skydiving"
  | "Opleiding"
  | "Community"
  | "Events"
  | "Zonsondergang"

export type GalleryItem = {
  id: string
  category: GalleryCategory
  image: string
  caption: string
  span?: "tall" | "wide"
}

// Uitsluitend echte foto's van Skydive Flanders (skydiveflanders.be/images) —
// elk item heeft een echte foto, geen "foto volgt"-placeholders.
export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Skydiving", image: photos.tandemExit, caption: "Tandem-uitstap boven het Vlaamse platteland", span: "tall" },
  { id: "g2", category: "Vliegtuig", image: photos.caravanMorning, caption: "Onze Caravan in de vroege ochtendmist" },
  { id: "g3", category: "Zonsondergang", image: photos.sunsetCaravan, caption: "Laatste lift van de dag", span: "wide" },
  { id: "g4", category: "Opleiding", image: photos.affExit, caption: "AFF-uitstap met twee instructeurs" },
  { id: "g5", category: "Community", image: photos.landing, caption: "Duimen omhoog na de landing" },
  { id: "g6", category: "Events", image: photos.bigway, caption: "Big-way formatie tijdens een boogie-weekend" },
  { id: "g7", category: "Skydiving", image: photos.affSmiles, caption: "Vrije val met een glimlach", span: "tall" },
  { id: "g8", category: "Skydiving", image: photos.canopyFormation, caption: "Canopy-formatie boven de wolken" },
  { id: "g9", category: "Zonsondergang", image: photos.canopyPair, caption: "Twee schermen boven de wolkenlaag" },
  { id: "g10", category: "Community", image: photos.affSmiles, caption: "Debriefing en een lach na de lift" },
  { id: "g11", category: "Opleiding", image: photos.caravanMorning, caption: "Klaar op de grond voor de volgende lift", span: "wide" },
  { id: "g12", category: "Events", image: photos.bigFormation, caption: "Grote formatie-lift" },
  { id: "g13", category: "Skydiving", image: photos.fs4, caption: "4-way formatie-skydiving" },
  { id: "g14", category: "Skydiving", image: photos.tracking, caption: "Tracking-dive in groep" },
  { id: "g15", category: "Vliegtuig", image: photos.affExit, caption: "Uitstap uit de Caravan" },
  { id: "g16", category: "Community", image: photos.tracking, caption: "Samen in de lucht, samen op de grond" },
  { id: "g17", category: "Opleiding", image: photos.fs4, caption: "De sprong doornemen voor vertrek" },
  { id: "g18", category: "Vliegtuig", image: photos.tandemExit, caption: "Klaar voor de volgende lift" },
]

export type Testimonial = {
  quote: string
  source: string
}

// Echte, letterlijke reviews van klanten (screenshots aangeleverd door de
// klant), niet verzonnen.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Ze beleefden de sprong samen met ons, alsof het hun eerste keer was, terwijl ze er al honderden achter de rug hebben. Ze maakten grapjes, steunden ons, beantwoordden rustig al onze gekke vragen en, het allerbelangrijkste, ze zorgden ervoor dat angst veranderde in pure verwondering.",
    source: "Echte klantenreview",
  },
  {
    quote:
      "We dachten altijd dat een parachutesprong alleen om adrenaline ging. Maar het bleek ook te gaan om vertrouwen. We hebben ons toevertrouwd aan onze instructeurs (Jurgen Camps en Martijn Decauter), en dat was de beste beslissing van de dag.",
    source: "Echte klantenreview",
  },
  {
    quote:
      "Zelf springen is moed. Maar springen met zulke mensen naast je, dat is echt geluk. Dank jullie wel voor de hemel, voor de rust en voor het gevoel dat we niet zomaar \"klanten\" waren, maar deel van een grote luchtvaartfamilie.",
    source: "Echte klantenreview",
  },
]

export type FaqItem = { question: string; answer: string }

// Rechtstreeks overgenomen van de echte, actuele FAQ op
// skydiveflanders.be/faq — dezelfde tekst die een bezoeker daar te lezen
// krijgt.
export const faqs: FaqItem[] = [
  {
    question: "Wat zijn de algemene voorwaarden?",
    answer:
      "Het maximumgewicht voor een tandemsprong is 95 kg. Indien de weegschaal ter plaatse een hoger gewicht aangeeft, dan wordt de sprong geannuleerd. De minimumleeftijd voor een tandemsprong is 12 jaar. Minderjarigen hebben schriftelijke toestemming van een ouder of voogd nodig. Een tandemsprong vereist een normale fitheid en een volledige mobiliteit van rug en ledematen. Vanaf een leeftijd van 70 jaar is een medisch attest vereist. Bij slechte weersomstandigheden op de dag van de sprong wordt in overleg een nieuwe datum vastgelegd. De boeking kan tot een week vooraf kosteloos naar een andere datum verplaatst worden. Bij een annulatie worden 20 euro boekingskosten per persoon aangerekend. Het is niet toegelaten alcohol of andere verdovende middelen te gebruiken voor de sprong. Beeldmateriaal dat niet kan opgeleverd worden, geeft geen aanleiding tot een terugbetaling van de sprong.",
  },
  {
    question: "Hoe kan ik een boeking aanmaken met mijn cadeaubon?",
    answer:
      "Om een tandemsprong te boeken met een waardebon, kies je bij betalingsoptie voor \"Enkel voorschot €0,00\". Je kan de boeking dan afronden zonder te betalen. Breng de originele bon mee op de dag van de sprong. Eventuele bijbetaling voor de optie foto's en video dien je ter plaatse te betalen. Een vervallen bon wordt ter plaatse niet aanvaard.",
  },
  {
    question: "Is mijn waardebon nog bruikbaar als die is vervallen of komt te vervallen?",
    answer:
      "Een vervallen waardebon wordt ter plaatse niet aanvaard. Contacteer info@skydiveflanders.be.",
  },
  {
    question: "Kan ik mijn sprong uitstellen/annuleren?",
    answer:
      "Je kan tot een week vooraf de sprong kosteloos uitstellen, via de bevestigingsmail (\"Beheer boeking\"). Zijn er geen beschikbare plaatsen meer? Neem dan contact op met het secretariaat via info@skydiveflanders.be. Bij een definitieve annulatie worden 20 euro boekingskosten per persoon aangerekend. Uitstel dat aangevraagd wordt in de week voor de sprong wordt als een annulatie beschouwd. Heb je een reservatie maar kan je toch niet komen? Neem contact op met het secretariaat, of bel de betreffende dropzone — indien wij niets hebben vernomen, vervalt je ticket en de daarbij horende waarde.",
  },
  {
    question: "Hoe laat moet ik aanwezig zijn op de dag van mijn sprong?",
    answer: "Je dient je op het uur van je boeking aan het onthaal aan te melden.",
  },
  {
    question: "Hoeveel tijd moet ik voorzien voor het volledige bezoek?",
    answer:
      "We vragen om een halve dag (4u) vrij te houden. We streven ernaar jou zo snel mogelijk in de lucht te krijgen. We zijn echter afhankelijk van externe factoren zoals de weersomstandigheden en het luchtruim, die tot vertragingen kunnen leiden.",
  },
  {
    question: "Hoe lang duurt de sprong zelf?",
    answer:
      "Om te beginnen krijg je een opleiding van 10 à 20 minuten. Daarna wacht je op het terras tot je aan de beurt bent. De vlucht naar ±4.000 meter duurt ongeveer 15 minuten, daarna volgt ongeveer 50 seconden vrije val en tot slot een 5-tal minuten onder het geopende valscherm.",
  },
  {
    question: "Kan ik springen als ik lenzen of een bril draag?",
    answer: "Ja, dat kan zeker. Je krijgt ter plaatse een aangepaste bril die je over een bril kan aandoen.",
  },
  {
    question: "Wat gebeurt er als mijn sprong omwille van het weer niet kan doorgaan?",
    answer: "We zullen samen op zoek gaan naar een nieuwe datum zodat de sprong zo snel mogelijk opnieuw ingepland kan worden.",
  },
  {
    question: "Mogen vrienden en familie meekomen om te kijken?",
    answer: "Ja, supporters zijn welkom op onze dropzones en kunnen vanop een veilige afstand meekijken.",
  },
  {
    question: "Wat zijn de leeftijdsvereisten om te mogen springen?",
    answer:
      "De minimumleeftijd voor een tandemsprong is 12 jaar. Minderjarigen hebben schriftelijke toestemming van een ouder of voogd nodig — als die aanwezig is op de dag van de sprong, kan dit ter plaatse ondertekend worden. Het harnas moet passen; zo niet, kan ter plaatse beslist worden dat de sprong niet doorgaat. Vanaf 70 jaar is een medisch attest vereist. Voor AFF is de minimumleeftijd 16 jaar.",
  },
  {
    question: "Welke kledij moet ik aandoen?",
    answer: "Je draagt best sportieve kledij en gesloten, platte schoenen. Een beschermende jumpsuit wordt ter plaatse beschikbaar gesteld.",
  },
  {
    question: "Mag ik zelf een camera meenemen tijdens de sprong?",
    answer: "Nee, om veiligheidsredenen is het niet toegestaan eigen camera's mee te nemen tijdens de sprong.",
  },
  {
    question: "Kunnen meerdere personen tegelijk gefilmd worden?",
    answer: "Nee, elke deelnemer wordt individueel gefilmd door zijn of haar cameraman.",
  },
  {
    question: "Wat is het maximum toegelaten gewicht?",
    answer: "Het maximum toegelaten gewicht is 95 kg inclusief kledij (110 kg voor AFF). Dit kan om veiligheidsredenen niet overschreden worden.",
  },
]

export const events = [
  {
    slug: "zomer-boogie",
    title: "Zomer Boogie Weekend",
    date: "2026-08-15",
    description: "Drie dagen big-way loads en een gezellige barbecue op het terras op zaterdagavond.",
  },
  {
    slug: "clubkampioenschap",
    title: "Clubkampioenschap Vlaanderen",
    date: "2026-09-05",
    description: "Accuracy landing en 4-way FS-wedstrijd, open voor alle leden met licentie.",
  },
  {
    slug: "nachtsprong",
    title: "Nachtsprong Demonstratie",
    date: "2026-09-19",
    description: "Enkel voor ervaren springers — een zeldzame demonstratie-nachtsprong gevolgd door een debriefing.",
  },
]

export const news = [
  {
    slug: "aff-seizoen-open",
    title: "AFF-seizoen 2026 nu open voor inschrijvingen",
    date: "2026-03-14",
    excerpt: "Grondopleidingsdata voor het komende seizoen staan online — vroege inschrijving inclusief gratis materiaalcheck.",
  },
  {
    slug: "instructeur-brevet",
    title: "Eline Maes behaalt haar Formatie-coach brevet",
    date: "2026-02-20",
    excerpt: "Nog een kwalificatie erbij voor ons groeiende coachingsteam, wat ons FS-progressieprogramma verder uitbreidt.",
  },
]

export const preparationChecklist = [
  "Breng een geldig identiteitsbewijs mee — vereist voor check-in en verzekering.",
  "Geen alcohol of andere verdovende middelen voor je sprong.",
  "Draag sportieve kledij en gesloten, platte schoenen — een jumpsuit wordt voorzien.",
  "Meld je aan de balie op je exacte boekingsuur.",
  "Vanaf 70 jaar (tandem) of voor alle AFF-cursisten: breng een ingevuld medisch attest mee — download het op onze Documentenpagina.",
  "Voorzie een halve dag (~4 uur) ter plaatse — weer en luchtruim kunnen je tijdslot doen verschuiven.",
]
