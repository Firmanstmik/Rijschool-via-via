import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  SealCheck,
  CarProfile,
  CalendarBlank,
  EnvelopeSimple,
  Phone,
} from '@phosphor-icons/react'
import {
  brand,
  heroBadges,
  heroFeatures,
  home,
  images,
} from '@/lib/content'

const ease = [0.16, 1, 0.3, 1] as const
const featureIcons = [SealCheck, CarProfile, CalendarBlank] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 68,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  })

  const imgY = useTransform(progress, [0, 1], ['0%', '10%'])
  const imgScale = useTransform(progress, [0, 1], [1.05, 1.12])
  const veilOpacity = useTransform(progress, [0, 0.45, 0.85], [0, 0.28, 0.72])
  const contentOpacity = useTransform(progress, [0, 0.35, 0.62], [1, 0.9, 0])
  const contentY = useTransform(progress, [0, 1], ['0%', '12%'])
  const scrollOpacity = useTransform(progress, [0, 0.28, 0.5], [1, 0.45, 0])
  const scrollY = useTransform(progress, [0, 0.5], [0, 18])

  return (
    <section id="top" ref={ref} className="vv-showroom" aria-label="Hero">
      <div className="vv-showroom__stage" aria-hidden>
        <motion.div
          className="vv-showroom__media"
          style={reduce ? undefined : { y: imgY, scale: imgScale }}
        >
          <motion.img
            src={images.hero}
            alt="Audi Q3 Sportback leswagen van Rijschool Via Via"
            className="vv-showroom__img"
            width={1920}
            height={1080}
            fetchPriority="high"
            initial={reduce ? false : { scale: 1.1, opacity: 0.35 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <div className="vv-showroom__grade" />
        <div className="vv-showroom__glow" />
        <div className="vv-showroom__vignette" />
        <div className="vv-showroom__grain" />
        <motion.div
          className="vv-showroom__veil"
          style={reduce ? undefined : { opacity: veilOpacity }}
        />
      </div>

      <motion.div
        className="vv-showroom__layout"
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
      >
        <aside className="vv-showroom__features">
          {heroFeatures.map((item, i) => {
            const Icon = featureIcons[i] ?? SealCheck
            return (
              <motion.div
                key={item.title}
                className="vv-showroom__feature"
                initial={reduce ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease, delay: 0.55 + i * 0.1 }}
              >
                <span className="vv-showroom__feature-mark" aria-hidden>
                  <Icon size={18} weight="light" />
                </span>
                <div>
                  <p className="vv-showroom__feature-title">{item.title}</p>
                  <p className="vv-showroom__feature-detail">{item.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </aside>

        <div className="vv-showroom__center">
          <motion.p
            className="vv-showroom__eyebrow"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
          >
            {home.hero.eyebrow}
          </motion.p>

          <h1 className="vv-showroom__title">
            <span className="vv-showroom__title-mask">
              <motion.span
                initial={reduce ? false : { y: '108%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.35, ease, delay: 0.32 }}
              >
                {home.hero.title}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="vv-showroom__lead"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease, delay: 0.55 }}
          >
            {home.hero.lead}
          </motion.p>

          <motion.div
            className="vv-showroom__actions"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.72 }}
          >
            <span
              className="vv-btn vv-btn--primary vv-btn--showroom"
              aria-disabled="true"
              title="Binnenkort beschikbaar"
            >
              <span>{home.hero.ctaPrimary}</span>
            </span>
            <a href="#aanbod" className="vv-btn vv-btn--ghost vv-btn--showroom">
              <span>{home.hero.ctaSecondary}</span>
            </a>
          </motion.div>
        </div>

        <aside className="vv-showroom__badges">
          {heroBadges.map((badge, i) => (
            <motion.div
              key={badge.eyebrow}
              className="vv-showroom__badge"
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease, delay: 0.62 + i * 0.12 }}
            >
              <p className="vv-showroom__badge-eyebrow">{badge.eyebrow}</p>
              <p className="vv-showroom__badge-value">
                {badge.value}
                {'unit' in badge && badge.unit ? (
                  <span className="vv-showroom__badge-unit">{badge.unit}</span>
                ) : null}
              </p>
              <p className="vv-showroom__badge-detail">{badge.detail}</p>
            </motion.div>
          ))}

          <motion.div
            className="vv-showroom__contact"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease, delay: 0.9 }}
          >
            <a
              href={brand.phoneHref}
              className="vv-showroom__contact-link"
              aria-label={`Bel ${brand.phone}`}
            >
              <Phone size={16} weight="light" aria-hidden />
            </a>
            <a
              href={brand.emailHref}
              className="vv-showroom__contact-link"
              aria-label={`Mail ${brand.email}`}
            >
              <EnvelopeSimple size={16} weight="light" aria-hidden />
            </a>
          </motion.div>
        </aside>
      </motion.div>

      <motion.div
        className="vv-showroom__scroll-wrap"
        style={reduce ? undefined : { opacity: scrollOpacity, y: scrollY }}
      >
        <motion.a
          href="#leswagen"
          className="vv-showroom__scroll"
          aria-label="Scroll naar onze leswagen"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.15 }}
        >
          <span className="vv-showroom__scroll-ring" aria-hidden>
            <span className="vv-showroom__scroll-glow" />
            <span className="vv-showroom__scroll-mouse">
              <motion.span
                className="vv-showroom__scroll-wheel"
                animate={
                  reduce
                    ? undefined
                    : { y: [0, 8, 0], opacity: [0.3, 1, 0.3] }
                }
                transition={{
                  duration: 1.85,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
          </span>
          <span className="vv-showroom__scroll-label">Scroll</span>
          <span className="vv-showroom__scroll-line" aria-hidden />
        </motion.a>
      </motion.div>
    </section>
  )
}
