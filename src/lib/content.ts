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
    'Eerst de mens. Dan de les. Via Via begeleidt jou in rust — tot vertrouwen vanzelf groeit.',
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
      body: 'Kleine gebaren. Heldere uitleg. Iemand die naast je blijft tot het goed voelt.',
      image: '/images/method-guidance.jpg',
      alt: 'Instructeur begeleidt stuurhouding en handen tijdens de uitleg',
      crop: 'guidance' as const,
    },
    {
      label: 'Vertrouwen',
      body: 'Jij kijkt vooruit. De instructeur blijft stil — tot zekerheid vanzelf groeit.',
      image: '/images/method-confidence.jpg',
      alt: 'Leerling rijdt met focus terwijl de instructeur rustig meekijkt',
      crop: 'confidence' as const,
    },
  ],
  beliefs: [
    {
      id: 'calm',
      title: 'Jouw tempo',
      body: 'Je wordt nooit in het ritme van een ander geduwd. Vragen mogen. Stilte mag.',
    },
    {
      id: 'guide',
      title: 'Iemand die blijft',
      body: 'Je begint nooit opnieuw bij iemand die je niet kent. Dezelfde begeleider, les na les.',
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
    heroImage: '/images/philosophy-hero.png',
    heroAlt:
      'Donkere premium SUV op een schilderachtige bergweg bij schemering — symbool van vrijheid en vakmanschap',
    closing: 'Vertrouwen is de basis. Vaardigheid volgt vanzelf.',
    signature: 'Via Via',
    pillars: [
      {
        id: 'trust',
        num: '01',
        title: 'Betrouwbaarheid',
        body: 'Je weet waar je aan toe bent: een vaste lijn, duidelijke afspraken en aandacht voor jouw ontwikkeling.',
        icon: 'shield' as const,
      },
      {
        id: 'skill',
        num: '02',
        title: 'Vakbekwaamheid',
        body: 'Onze instructeurs leggen helder uit, kijken goed en weten wanneer jij klaar bent voor de volgende stap.',
        icon: 'star' as const,
      },
      {
        id: 'value',
        num: '03',
        title: 'Verantwoordelijkheid',
        body: 'We leren je niet alleen slagen, maar zelfstandig en met vertrouwen deelnemen aan het verkeer.',
        icon: 'scale' as const,
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
    subtitle: 'Eerst de mens. Dan de les.',
    intro:
      'Jij hoeft niet in een vast stramien te passen. We bouwen jouw rijopleiding rond jouw tempo, jouw vragen en jouw vertrouwen.',
    heroImage: '/images/personal-hero.png',
    heroAlt: 'Instructeur en leerling delen een rustig moment van vertrouwen in de auto',
    closing: 'Vertrouwen is de basis. Vaardigheid volgt vanzelf.',
    signature: 'Via Via',
    pillars: [
      {
        id: 'tempo',
        num: '01',
        title: 'Jouw tempo.',
        body: 'Geen haast. Geen druk. We lessen op een manier die bij jóu past — niet andersom.',
        image: '/images/personal-01-tempo.png',
        alt: 'Leerling rijdt met kalme focus en concentratie',
      },
      {
        id: 'guide',
        num: '02',
        title: 'Iemand die blijft.',
        body: 'Altijd dezelfde instructeur. Wel zo vertrouwd. Wel zo effectief.',
        image: '/images/personal-02-guide.png',
        alt: 'Vaste instructeur begeleidt de leerling met rust en aandacht',
      },
    ],
  },
  experience: {
    eyebrow: 'Onze overtuiging',
    titleLine1: 'Meer vertrouwen.',
    titleLine2: 'Zekerder de weg op.',
    body1:
      'Bij Via Via leer je in een rustige sfeer — met duidelijke uitleg en iemand die naast je blijft staan.',
    body2:
      'Geen druk. Geen haast. Wel aandacht voor jouw vragen, jouw tempo en jouw groei.',
    body3:
      'Van Leiden tot Zoeterwoude: dichtbij, persoonlijk, en altijd met dezelfde begeleider.',
    heroImage: '/images/experience-trust.png',
    heroAlt:
      'Instructeur en leerling in een rustig gesprek tijdens de rijles — warm licht, Leiden op de achtergrond',
    quote: {
      text: 'Rust in de auto. Ruimte om te groeien.',
      signature: 'Via Via',
    },
    pillars: [
      {
        id: 'steps',
        num: '01',
        title: 'Stap voor stap',
        body: 'We bouwen samen rustig op — met heldere doelen en feedback die je verder helpt.',
        icon: 'steps' as const,
      },
      {
        id: 'guide',
        num: '02',
        title: 'Persoonlijke begeleiding',
        body: 'Altijd dezelfde instructeur. Iemand die jou kent, en die blijft.',
        icon: 'guide' as const,
      },
      {
        id: 'calm',
        num: '03',
        title: 'Rust en vertrouwen',
        body: 'Een sfeer waarin vragen mogen — en zekerheid vanzelf groeit.',
        icon: 'calm' as const,
      },
    ],
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


