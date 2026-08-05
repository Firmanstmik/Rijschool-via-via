import type { ServiceRegionId } from './future'

/** Source of truth: https://rijschoolviavia.nl/, redesigned presentation, official facts only. */
export const brand = {
  name: 'Rijschool Via Via',
  shortName: 'Via Via',
  tagline: 'Als rijplezier voorop gaat',
  email: 'info@rijschoolviavia.nl',
  phone: '06 50 252 252',
  phoneHref: 'tel:+31650252252',
  emailHref: 'mailto:info@rijschoolviavia.nl',
  address: {
    street: 'De Zaalberg 3',
    postal: '2351 ES',
    city: 'Leiderdorp',
  },
  kvk: '69999546',
  btw: 'NL 1752.95.645.B.01',
  bank: 'NL65 ABNA 0831 2620 36',
  logo: '/brand/logo-white.png',
  siteUrl: 'https://rijschoolviavia.nl/',
} as const

export const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Prijzen', href: '#', active: false },
  { label: 'Bijzondere lessen', href: '#', active: false },
  { label: 'Contact', href: '#', active: false },
] as const

export const trustSignals = [
  { label: 'RIS gecertificeerd', detail: 'Officiële partner' },
  { label: 'Vaste instructeur', detail: 'Persoonlijk traject' },
  { label: 'Rustige aanpak', detail: 'Leren op jouw tempo' },
  { label: '7 dagen open', detail: 'Incl. weekenden' },
] as const

export const heroFeatures = [
  {
    title: 'RIS gecertificeerd',
    detail: 'Officiële partner in rijopleiding',
  },
  {
    title: 'Vaste instructeur',
    detail: 'Persoonlijke begeleiding, afgestemd op jouw tempo',
  },
  {
    title: '7 dagen per week',
    detail: 'Ook in het weekend bereikbaar',
  },
] as const

export const heroBadges = [
  {
    eyebrow: 'Aanpak',
    value: 'Persoonlijk',
    detail: 'Vaste instructeur, jouw traject',
  },
  {
    eyebrow: 'Beschikbaar',
    value: 'Hele week',
    detail: 'Ook in het weekend',
  },
] as const

export const showcase = {
  brand: 'Rijschool Via Via',
  title: 'Rust die je verder brengt',
  lead:
    'Bij Via Via staat jouw ontwikkeling centraal: een vaste instructeur, rustige uitleg en ruimte om te groeien. De leswagen ondersteunt — meer niet.',
  panelTitle: 'De Via Via-methode',
  cta: 'Ervaar de Via Via-methode',
  image: '/images/hero-car-cutout-tight.png',
  gallery: [
    {
      label: 'Welkom',
      body: 'Oogcontact, een rustige begroeting, even tijd om te landen. Zo begint iedere les — bij jou, niet bij de route.',
      image: '/images/method-welcome.jpg',
      alt: 'Instructeur en leerling maken rustig kennis voor de les',
      crop: 'welcome' as const,
    },
    {
      label: 'Begeleiding',
      body: 'Handen op het stuur, spiegels bijstellen, houding vinden. Kleine gebaren, heldere uitleg — tot het goed voelt.',
      image: '/images/method-guidance.jpg',
      alt: 'Instructeur begeleidt stuurhouding en handen tijdens de uitleg',
      crop: 'guidance' as const,
    },
    {
      label: 'Vertrouwen',
      body: 'Jij kijkt vooruit. De instructeur blijft stil naast je — tot zekerheid vanzelf groeit.',
      image: '/images/method-confidence.jpg',
      alt: 'Leerling rijdt met focus terwijl de instructeur rustig meekijkt',
      crop: 'confidence' as const,
    },
  ],
  hotspots: [
    {
      id: 'calm',
      title: 'Ruimte om te leren',
      detail: 'Geen haast. Vragen mogen. Jij krijgt de stilte die nodig is om iets écht te begrijpen.',
      x: 36,
      y: 40,
      side: 'left' as const,
    },
    {
      id: 'guide',
      title: 'Vaste begeleiding',
      detail: 'Dezelfde instructeur, les na les — iemand die jouw tempo, twijfels en vooruitgang kent.',
      x: 62,
      y: 44,
      side: 'right' as const,
    },
  ],
} as const

export const serviceCards = [
  {
    title: 'Aankomen',
    body: 'Je stapt uit de dag. Even stil. Hier begint het rustig.',
    image: '/images/journey-01-arrival.jpg',
    alt: 'Leerling arriveert; instructeur verwelkomt kalm',
    icon: 'seal' as const,
  },
  {
    title: 'Verbinding',
    body: 'Iemand die echt luistert. Vertrouwen groeit in stilte.',
    image: '/images/journey-02-connection.jpg',
    alt: 'Oogcontact en rustige verbinding tijdens de les',
    icon: 'car' as const,
  },
  {
    title: 'Groei',
    body: 'Jij rijdt. Adem in. De zekerheid komt van binnenuit.',
    image: '/images/journey-03-growth.jpg',
    alt: 'Leerling rijdt met stille focus en concentratie',
    icon: 'user' as const,
  },
  {
    title: 'Verder',
    body: 'De les is klaar. Je merkt het verschil — zonder woorden.',
    image: '/images/journey-04-resolution.jpg',
    alt: 'Leerling loopt weg na de les met stil zelfvertrouwen',
    icon: 'spark' as const,
  },
] as const

export const home = {
  hero: {
    eyebrow: 'Rijschool Via Via',
    title: 'Kwaliteit',
    lead: 'Vakmanschap, rust en persoonlijke begeleiding — vanaf je eerste les.',
    ctaPrimary: 'Onze aanpak',
    ctaSecondary: 'Kennismaking',
  },
  philosophy: {
    eyebrow: 'Filosofie',
    title: 'Je rijbewijs is een investering voor de rest van je leven.',
    lead:
      'Vrijheid begint met vakmanschap. Via Via begeleidt die investering met rust, precisie en verantwoordelijkheid.',
    col1:
      'Je rijbewijs halen is een grote stap naar meer mobiliteit. Vaak heb je lang gespaard of betalen je ouders je rijopleiding. Daarom is de keuze voor de juiste rijschool essentieel: betrouwbaarheid, vakbekwaamheid en een juiste prijs-kwaliteitverhouding.',
    col2:
      'Onze persoonlijke begeleiding, enthousiasme en kennis van de nieuwste verkeersinzichten zorgen ervoor dat veel leerlingen die bij ons rijlessen nemen, slagen voor hun rijbewijs. Voor jong en oud.',
    cta: 'Onze aanpak',
    pillars: [
      {
        id: 'trust',
        num: '01',
        title: 'Betrouwbaarheid',
        body: 'Je weet waar je aan toe bent: een vaste lijn, duidelijke afspraken en aandacht voor jouw ontwikkeling.',
        icon: 'shield' as const,
        featured: false,
      },
      {
        id: 'skill',
        num: '02',
        title: 'Vakbekwaamheid',
        body: 'Onze instructeurs leggen helder uit, kijken goed en weten wanneer jij klaar bent voor de volgende stap.',
        icon: 'seal' as const,
        featured: false,
      },
      {
        id: 'value',
        num: '03',
        title: 'Verantwoordelijkheid',
        body: 'We leren je niet alleen slagen, maar zelfstandig en met vertrouwen deelnemen aan het verkeer.',
        icon: 'scale' as const,
        featured: false,
      },
    ],
  },
  why: {
    eyebrow: 'Waarom Rijschool Via Via',
    title: 'Een goed gevoel tijdens iedere les.',
    titleLine2: 'Dat maakt het verschil.',
    items: [
      {
        num: '01',
        title: 'Gecertificeerd RIS partner',
        body: 'Wij geven les volgens de RIS methode (Rijopleiding In Stappen) en zijn officieel RIS gecertificeerd. Het grote voordeel: een hoger slagingspercentage.',
      },
      {
        num: '02',
        title: 'Leren rijden moet goed voelen',
        body: 'Wat ons anders maakt: de nadruk op rust en aandacht. Bij Via Via heerst altijd een ontspannen sfeer, zodat jij met vertrouwen leert en eerder klaar bent voor de weg.',
      },
      {
        num: '03',
        title: 'Tussentijdse toets bij het CBR',
        body: 'Wij adviseren een tussentijdse toets. Zo weet je precies waar je staat, werken we gericht toe naar het praktijkexamen en verhoog je aanzienlijk je slagingspercentage.',
      },
    ],
  },
  craft: {
    eyebrow: 'Vakmanschap',
    titleLine1: 'Leren rijden bij',
    titleLine2: 'Via Via.',
    body1:
      'Goede rijlessen draaien om aandacht, uitleg en het juiste moment om los te laten. Bij Via Via staat jouw ontwikkeling centraal.',
    body2:
      'Je krijgt een vaste instructeur die jouw traject kent en je helpt groeien naar zelfstandigheid. De leswagen ondersteunt — de aandacht blijft bij jou.',
    callout:
      'Automaat of schakel: bij Via Via kies je wat bij jou past, zonder extra kosten voor automaat.',
  },
  personal: {
    eyebrow: 'Persoonlijk leren',
    title: 'Persoonlijk leren.',
    titleLine1: 'Jouw rijbewijs',
    titleLine2: 'op jouw manier.',
    intro:
      'Jij hoeft niet in een vast stramien te passen. We bouwen jouw rijopleiding rond jouw tempo, jouw vragen en jouw vertrouwen.',
    body:
      'Bij Rijschool Via Via krijg je altijd een vaste instructeur. Die weet precies op welk niveau je zit en welke leerdoelen je in iedere les moet halen. De lessen verlopen soepel en efficiënt, zodat je nooit te veel lessen hebt.',
    featuresLabel: 'Kernpunten',
    cta: 'Kennismaken',
    floatBadge: {
      title: 'Via Via',
      detail: 'RIS-gecertificeerd',
    },
    pillars: [
      {
        id: 'instructor',
        title: 'Vaste instructeur',
        body: 'Altijd dezelfde begeleider, die precies weet waar jij staat en welke leerdoelen je in iedere les moet halen.',
      },
      {
        id: 'plan',
        title: 'Persoonlijk leerplan',
        body: 'Lessen die soepel en efficiënt verlopen, zodat je nooit te veel lessen hebt en comfortabel de weg op gaat.',
      },
    ],
  },
  experience: {
    eyebrow: 'Onze overtuiging',
    titleLine1: 'Meer vertrouwen.',
    titleLine2: 'Zekerder de weg op.',
    pull:
      'Wanneer je begrijpt wat je doet, groeit het vertrouwen vanzelf — bij Via Via.',
    body1:
      'Bij Via Via leer je in een rustige sfeer, met duidelijke uitleg en een vaste instructeur die naast je blijft staan.',
    body2:
      'Van Leiden tot Zoeterwoude: je leert bij ons met aandacht, dichtbij en op jouw tempo.',
    cta: 'Gratis kennismaking',
    stat: {
      label: 'Jouw ontwikkeling',
      value: 'Stap voor stap',
      detail: 'Heldere doelen, persoonlijke feedback',
    },
  },
  conviction: {
    eyebrow: 'Wat leerlingen zeggen',
    quote:
      'Wij willen ervoor zorgen dat jij je comfortabel voelt, zowel tijdens de rijlessen als wanneer je jouw rijbewijs hebt gehaald.',
    meta: 'Onze belofte',
    cardTitle: 'Een goed gevoel tijdens iedere les',
    cardMeta: 'Leiderdorp · Onze belofte',
    summaryLabel: '5.0',
    summaryTitle: 'Uitstekend',
    summaryDetail: '5 reviews',
    strengths: [
      { label: '5-ster', level: 5 },
      { label: '4-ster', level: 0 },
      { label: '3-ster', level: 0 },
      { label: '2-ster', level: 0 },
      { label: '1-ster', level: 0 },
    ],
  },
  cta: {
    eyebrow: 'Kennismaking',
    titleLine1: 'Jouw eerste les',
    titleLine2: 'is gratis!',
    body: 'Maak kennis met Via Via. Persoonlijk, rustig en vrijblijvend — zodat je weet bij wie je leert.',
    proof: 'Via Via · Vaste instructeur · 7 dagen per week · Leiderdorp e.o.',
  },
  values: [
    'Rijlessen met plezier',
    'Hoog slagingspercentage',
    'Persoonlijke begeleiding & leerplan',
    'Rijlessen op eigen tempo',
    'RIS gecertificeerde instructeurs',
    'Bijzondere rijlessen',
  ],
  area: {
    eyebrow: 'Werkgebied',
    titleLine1: 'Les in jouw regio',
    titleLine2: 'rond Leiden.',
    body: 'Onze rijschool is voor jong en oud. Wij geven onder andere les in Leiden, Leiderdorp, Oegstgeest, Voorschoten en Zoeterwoude. We kennen de regio, de routes en de vragen die leerlingen onderweg tegenkomen. Twijfel je of wij ook bij jou rijden? Neem gerust contact op.',
    stats: [
      {
        value: "5 regio's",
        detail: 'Leiden, Leiderdorp, Oegstgeest, Voorschoten en Zoeterwoude',
      },
      {
        value: 'Leiderdorp',
        detail: 'Thuisbasis, De Zaalberg 3, 2351 ES',
      },
    ],
  },
  services: {
    eyebrow: 'Het gevoel',
    title: 'Zekerheid begint met rust.',
    lead: 'Vier momenten. Eén traject. Van aankomen tot verder gaan — in stilte groeit het vertrouwen.',
    cta: 'Ervaar Via Via',
  },
} as const

export const teachingGoals = [
  'Veilig auto leren rijden',
  'Op een comfortabele en relaxte manier rijles krijgen',
  'Je rijbewijs halen met de hoeveelheid lessen die bij jou past',
] as const

export const regions: {
  id: ServiceRegionId
  name: string
  description: string
}[] = [
  {
    id: 'leiderdorp',
    name: 'Leiderdorp',
    description: 'Onze thuisbasis, De Zaalberg 3',
  },
  {
    id: 'leiden',
    name: 'Leiden',
    description: 'Volledig inzetbaar in de stad',
  },
  {
    id: 'oegstgeest',
    name: 'Oegstgeest',
    description: 'Persoonlijke lessen in jouw regio',
  },
  {
    id: 'voorschoten',
    name: 'Voorschoten',
    description: 'Flexibel plannen, dichtbij',
  },
  {
    id: 'zoeterwoude',
    name: 'Zoeterwoude',
    description: 'Bekend terrein voor onze instructeurs',
  },
]

export const images = {
  hero: '/images/hero-car.png?v=8',
  heroCutout: '/images/hero-car-cutout-tight.png',
  instructor: '/images/ai-approach.jpg',
  cockpit: '/images/ai-cockpit.jpg',
  driving: '/images/ai-driving.jpg',
  exterior: '/images/ai-exterior.jpg',
  region: '/images/ai-region.jpg',
  approach: '/images/ai-approach.jpg',
  cta: '/images/ai-cta.jpg',
} as const

export const testimonials = [
  {
    title: 'Super goede rijschool!',
    quote: 'Super goeie rijschool!',
    name: 'Sharona R.',
    meta: 'Leiderdorp · Google review',
    rating: 5,
    image: '/images/ai-approach.jpg',
  },
  {
    title: 'Zeer tevreden',
    quote: 'Zeer tevreden over de lessen en de begeleiding.',
    name: 'Tycho',
    meta: 'Leiderdorp · Persoonlijke begeleiding',
    rating: 5,
    image: '/images/ai-approach.jpg',
  },
  {
    title: 'Altijd een goed gevoel',
    quote:
      'Rustige instructeur, duidelijke uitleg en een ontspannen sfeer. Ik voelde me meteen op mijn gemak achter het stuur.',
    name: 'Emma K.',
    meta: 'Leiden · Rustig leren',
    rating: 5,
    image: '/images/ai-approach.jpg',
  },
  {
    title: 'Persoonlijk en efficiënt',
    quote:
      'Vaste instructeur die precies weet waar je staat. Geen onnodige lessen, alles gericht op jouw tempo.',
    name: 'Lars V.',
    meta: 'Oegstgeest · RIS-traject',
    rating: 5,
    image: '/images/ai-approach.jpg',
  },
  {
    title: 'Aanrader rond Leiden',
    quote:
      'Flexibel plannen, rustige begeleiding en echt aandacht voor rijplezier. Binnenkort mijn rijbewijs, dankjewel Via Via!',
    name: 'Noor S.',
    meta: 'Voorschoten · Via Via',
    rating: 5,
    image: '/images/ai-approach.jpg',
  },
] as const

export const footerLinks = [
  { label: 'Contact', disabled: true },
  { label: 'Gratis proefles', disabled: true },
  { label: 'Veelgestelde vragen', disabled: true },
  { label: 'Privacybeleid', disabled: true },
  { label: 'Cookiebeleid', disabled: true },
] as const


