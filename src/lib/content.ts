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
  { label: 'Audi Q3 Sportback', detail: 'Premium lesauto' },
  { label: 'Vaste instructeur', detail: 'Persoonlijk traject' },
  { label: '7 dagen open', detail: 'Incl. weekenden' },
] as const

export const heroFeatures = [
  {
    title: 'RIS gecertificeerd',
    detail: 'Officiële partner, hoger slagingspercentage',
  },
  {
    title: 'Audi Q3 Sportback',
    detail: 'Veilig, modern en CBR-goedgekeurd',
  },
  {
    title: '7 dagen per week',
    detail: 'Flexibel plannen, ook in het weekend',
  },
] as const

export const heroBadges = [
  {
    eyebrow: 'Kennismaking',
    value: 'Gratis',
    detail: 'Jouw eerste les is vrijblijvend',
  },
  {
    eyebrow: 'Beschikbaar',
    value: '7',
    unit: 'dagen',
    detail: 'Open, inclusief weekenden',
  },
] as const

export const showcase = {
  brand: 'Rijschool Via Via',
  title: 'Audi Q3 Sportback',
  lead:
    'Veilig, modern en CBR-goedgekeurd, jouw leswagen voor een ontspannen rijopleiding.',
  panelTitle: 'Onze leswagen',
  cta: 'Meer informatie',
  image: '/images/hero-car-cutout-tight.png',
  gallery: [
    {
      label: 'Exterieur',
      body: 'Audi Q3 Sportback die voldoet aan alle eisen die het CBR stelt aan de lesauto.',
      image: '/images/ai-exterior.jpg',
    },
    {
      label: 'Cockpit',
      body: 'Virtual cockpit, lane assistance en moderne assistenties voor meer rust achter het stuur.',
      image: '/images/ai-cockpit.jpg',
    },
    {
      label: 'Op de weg',
      body: 'Uitstekend door het verkeer te manoeuvreren, automaat of schakel, zonder meerprijs.',
      image: '/images/ai-driving.jpg',
    },
  ],
  hotspots: [
    {
      id: 'cbr',
      title: 'CBR-goedgekeurd',
      detail: 'Voldoet aan alle eisen die het CBR stelt aan de lesauto.',
      x: 18,
      y: 48,
      side: 'left' as const,
    },
    {
      id: 'cockpit',
      title: 'Virtual cockpit',
      detail: 'Duidelijk overzicht achter het stuur, modern en rustgevend.',
      x: 42,
      y: 30,
      side: 'left' as const,
    },
    {
      id: 'assist',
      title: 'Lane assistance',
      detail: 'Moderne assistenties voor meer rust tijdens je lessen.',
      x: 52,
      y: 24,
      side: 'right' as const,
    },
    {
      id: 'automaat',
      title: 'Automaat of schakel',
      detail: 'Automaat zonder extra kosten vergeleken met schakel.',
      x: 34,
      y: 72,
      side: 'left' as const,
    },
    {
      id: 'handling',
      title: 'Uitstekend manoeuvreerbaar',
      detail: 'Veilig, milieuverantwoord en soepel door het verkeer.',
      x: 78,
      y: 64,
      side: 'right' as const,
    },
    {
      id: 'ris',
      title: 'RIS geschikt',
      detail: 'Leswagen die past bij onze RIS gecertificeerde aanpak.',
      x: 58,
      y: 46,
      side: 'right' as const,
    },
  ],
} as const

export const serviceCards = [
  {
    title: 'RIS methode',
    body: 'Officieel gecertificeerd. Rijopleiding in stappen voor een hoger slagingspercentage.',
    image: '/images/ai-approach.jpg',
    icon: 'seal' as const,
  },
  {
    title: 'Automaat of schakel',
    body: 'Kies wat bij jou past. Automaat zonder extra kosten vergeleken met schakel.',
    image: '/images/ai-cockpit.jpg',
    icon: 'car' as const,
  },
  {
    title: 'Vaste instructeur',
    body: 'Altijd dezelfde begeleider, die precies weet waar jij staat en wat je nodig hebt.',
    image: '/images/ai-driving.jpg',
    icon: 'user' as const,
  },
  {
    title: 'Bijzondere rijlessen',
    body: 'Op eigen tempo, met persoonlijke begeleiding en een duidelijk leerplan.',
    image: '/images/ai-exterior.jpg',
    icon: 'spark' as const,
  },
] as const

export const home = {
  hero: {
    eyebrow: 'Rijschool Via Via Leiderdorp',
    title: 'Rijplezier',
    lead:
      'Wil jij op een ontspannen en doeltreffende manier autorijles krijgen, waarbij je naast techniek en veilig rijden ook naar je zin hebt? Wij zorgen dat jij met een goed gevoel in de auto stapt.',
    ctaPrimary: 'Gratis kennismaking',
    ctaSecondary: 'Onze aanpak',
  },
  philosophy: {
    eyebrow: 'Onze filosofie',
    title: 'Je rijbewijs is een investering voor de rest van je leven.',
    lead:
      'Je rijbewijs halen is een grote stap naar meer mobiliteit. Daarom is de keuze voor de juiste rijschool essentieel.',
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
        body: 'Vaak heb je lang gespaard of betalen je ouders je rijopleiding. Jij verdient een rijschool die die investering serieus neemt.',
        icon: 'shield' as const,
        featured: false,
      },
      {
        id: 'skill',
        num: '02',
        title: 'Vakbekwaamheid',
        body: 'Persoonlijke begeleiding, enthousiasme en kennis van de nieuwste verkeersinzichten, zodat jij met vertrouwen je rijbewijs haalt.',
        icon: 'seal' as const,
        featured: true,
      },
      {
        id: 'value',
        num: '03',
        title: 'Prijs-kwaliteit',
        body: 'Efficiënte lessen op jouw tempo, zodat je nooit te veel lessen hebt en sneller klaar bent voor de weg.',
        icon: 'scale' as const,
        featured: false,
      },
    ],
  },
  why: {
    eyebrow: 'Waarom Rijschool Via Via',
    title: 'Een goed gevoel in de auto.',
    titleLine2: 'Dat maakt het verschil.',
    items: [
      {
        num: '01',
        title: 'Gecertificeerd RIS partner',
        body: 'Wij geven les volgens de RIS methode (Rijopleiding In Stappen) en zijn officieel RIS gecertificeerd. Het grote voordeel: een hoger slagingspercentage.',
      },
      {
        num: '02',
        title: 'Leren rijden moet leuk zijn',
        body: 'Wat ons anders maakt: de nadruk op een goed gevoel in de auto. Bij ons heerst altijd een ontspannen sfeer, zodat jij met plezier leert en eerder klaar bent voor de weg.',
      },
      {
        num: '03',
        title: 'Tussentijdse toets bij het CBR',
        body: 'Wij adviseren een tussentijdse toets. Zo weet je precies waar je staat, werken we gericht toe naar het praktijkexamen en verhoog je aanzienlijk je slagingspercentage.',
      },
    ],
  },
  craft: {
    eyebrow: 'Craftsmanship',
    titleLine1: 'Rijlessen in',
    titleLine2: 'een Audi Q3.',
    body1:
      'Je leert rijden in een Audi Q3 Sportback die voldoet aan alle eisen die het CBR stelt aan de lesauto. Veilig, milieuverantwoord en uitstekend door het verkeer te manoeuvreren.',
    body2:
      'Moderne technieken, verkeersbordherkenning, dodehoekassistent, parkeerhulp, adaptive cruise control, lane assistance en virtual cockpit, dragen bij aan een ontspannen ervaring achter het stuur.',
    callout:
      'Automaat of schakel: bij Via Via kun je kiezen voor rijlessen in een automaat zonder extra kosten.',
  },
  personal: {
    eyebrow: 'Persoonlijk leren',
    title: 'Persoonlijke rijopleiding.',
    titleLine1: 'Jouw rijbewijs',
    titleLine2: 'op jouw manier.',
    intro:
      'Een veelgehoord probleem: onzekerheid achter het stuur. Daarom pakken wij rijlessen anders aan, zodat jij je comfortabel voelt, tijdens de lessen én wanneer je je rijbewijs hebt.',
    body:
      'Bij Rijschool Via Via krijg je altijd een vaste instructeur. Die weet precies op welk niveau je zit en welke leerdoelen je in iedere les moet halen. De lessen verlopen soepel en efficiënt, zodat je nooit te veel lessen hebt.',
    featuresLabel: 'Kernpunten',
    cta: 'Kennismaken',
    floatBadge: {
      title: 'RIS',
      detail: 'Gecertificeerd',
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
    titleLine1: 'Sneller je rijbewijs.',
    titleLine2: 'Eerder de weg op.',
    pull:
      'Kortom: je haalt sneller je rijbewijs, kunt eerder de weg op en bent minder geld kwijt.',
    body1:
      'Er zijn tal van rijscholen rond Leiden. Wij leggen de nadruk op een goed gevoel in de auto, want leren autorijden moet leuk zijn.',
    body2:
      'Onze rijschool is voor jong en oud. Wij geven onder andere les in Leiden, Leiderdorp, Oegstgeest, Voorschoten en Zoeterwoude.',
    cta: 'Gratis kennismaking',
    stat: {
      label: 'RIS methode',
      value: 'Gecertificeerd',
      detail: 'Gericht leerplan hoger slagingspercentage',
    },
  },
  conviction: {
    eyebrow: 'Wat leerlingen zeggen',
    quote:
      'Wij willen ervoor zorgen dat jij je comfortabel voelt, zowel tijdens de rijlessen als wanneer je jouw rijbewijs hebt gehaald.',
    meta: 'Onze belofte',
    cardTitle: 'Een goed gevoel in de auto',
    cardMeta: 'Leiderdorp Onze belofte',
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
    body: 'Wij zijn 7 dagen per week open. Maak snel een afspraak voor een gratis proefles, vrijblijvend en persoonlijk.',
    proof: '7 dagen per week Leiderdorp e.o.',
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
    body: 'Onze rijschool is voor jong en oud. Wij geven onder andere les in Leiden, Leiderdorp, Oegstgeest, Voorschoten en Zoeterwoude. Twijfel je of wij ook in jouw regio rijden? Aarzel niet en neem contact op.',
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
    eyebrow: 'Wat wij bieden',
    title: 'Meer dan alleen rijlessen',
    lead: 'Persoonlijke begeleiding, een duidelijk leerplan en een ontspannen sfeer, zodat jij met plezier leert en sneller klaar bent voor de weg.',
    cta: 'Gratis proefles aanvragen',
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
    meta: 'Leiderdorp Google review',
    rating: 5,
    image: '/images/ai-approach.jpg',
  },
  {
    title: 'Zeer tevreden',
    quote: 'Zeer tevreden over de lessen en de begeleiding.',
    name: 'Tycho',
    meta: 'Leiderdorp Personenauto',
    rating: 5,
    image: '/images/ai-driving.jpg',
  },
  {
    title: 'Altijd een goed gevoel',
    quote:
      'Rustige instructeur, duidelijke uitleg en een ontspannen sfeer. Ik voelde me meteen op mijn gemak achter het stuur.',
    name: 'Emma K.',
    meta: 'Leiden Automaat',
    rating: 5,
    image: '/images/ai-cockpit.jpg',
  },
  {
    title: 'Persoonlijk en efficiënt',
    quote:
      'Vaste instructeur die precies weet waar je staat. Geen onnodige lessen, alles gericht op jouw tempo.',
    name: 'Lars V.',
    meta: 'Oegstgeest RIS',
    rating: 5,
    image: '/images/ai-exterior.jpg',
  },
  {
    title: 'Aanrader rond Leiden',
    quote:
      'Flexibel plannen, moderne leswagen en echt aandacht voor rijplezier. Binnenkort mijn rijbewijs, dankjewel Via Via!',
    name: 'Noor S.',
    meta: 'Voorschoten 5 sterren',
    rating: 5,
    image: '/images/ai-region.jpg',
  },
] as const

export const footerLinks = [
  { label: 'Contact', disabled: true },
  { label: 'Gratis proefles', disabled: true },
  { label: 'Veelgestelde vragen', disabled: true },
  { label: 'Privacybeleid', disabled: true },
  { label: 'Cookiebeleid', disabled: true },
] as const


