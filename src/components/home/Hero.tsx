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
  UserFocus,
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

const ease = [0.22, 1, 0.36, 1] as const
const featureIcons = [SealCheck, UserFocus, CalendarBlank] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 58,
    damping: 32,
    mass: 0.55,
    restDelta: 0.001,
  })

  const imgY = useTransform(progress, [0, 1], ['0%', '6%'])
  const imgScale = useTransform(progress, [0, 1], [1.03, 1.08])
  const veilOpacity = useTransform(progress, [0, 0.5, 0.9], [0, 0.16, 0.62])
  const contentOpacity = useTransform(progress, [0, 0.4, 0.68], [1, 0.94, 0])
  const contentY = useTransform(progress, [0, 1], ['0%', '8%'])
  const scrollOpacity = useTransform(progress, [0, 0.25, 0.48], [1, 0.35, 0])
  const scrollY = useTransform(progress, [0, 0.5], [0, 10])

  return (
    <section id="top" ref={ref} className="vv-showroom" aria-label="Hero">
      <div className="vv-showroom__stage" aria-hidden>
        <motion.div
          className="vv-showroom__media"
          style={reduce ? undefined : { y: imgY, scale: imgScale }}
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={images.hero} />
            <img
              src={images.heroMobile}
              alt=""
              className="vv-showroom__img"
              width={1080}
              height={1920}
              fetchPriority="high"
            />
          </picture>
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
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, ease, delay: 2.35 + i * 0.14 }}
              >
                <span className="vv-showroom__feature-mark" aria-hidden>
                  <Icon size={14} weight="regular" />
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
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.25, ease, delay: 0.85 }}
          >
            {home.hero.eyebrow}
          </motion.p>

          <h1 className="vv-showroom__title">
            <span className="vv-showroom__title-mask">
              <motion.span
                className="vv-showroom__brand"
                initial={reduce ? false : { y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.55, ease, delay: 1.05 }}
              >
                {home.hero.brand}
              </motion.span>
            </span>
            <span className="vv-showroom__title-mask vv-showroom__title-mask--sub">
              <motion.span
                className="vv-showroom__title-sub"
                initial={reduce ? false : { y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.45, ease, delay: 1.28 }}
              >
                {home.hero.title}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="vv-showroom__lead"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, ease, delay: 1.75 }}
          >
            {home.hero.lead}
          </motion.p>

          <motion.div
            className="vv-showroom__actions"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 2.05 }}
          >
            <a href="#aanpak" className="vv-btn vv-btn--primary vv-btn--showroom">
              <span>{home.hero.ctaPrimary}</span>
            </a>
            <a
              href="#proefles"
              className="vv-btn vv-btn--ghost vv-btn--showroom vv-btn--showroom-soft"
            >
              <span>{home.hero.ctaSecondary}</span>
            </a>
          </motion.div>

          <motion.p
            className="vv-showroom__proof"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease, delay: 2.25 }}
          >
            {home.hero.proof}
          </motion.p>
        </div>

        <aside className="vv-showroom__badges">
          {heroBadges.map((badge, i) => (
            <motion.div
              key={badge.eyebrow}
              className="vv-showroom__badge"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease, delay: 2.45 + i * 0.14 }}
            >
              <p className="vv-showroom__badge-eyebrow">{badge.eyebrow}</p>
              <p className="vv-showroom__badge-value">{badge.value}</p>
              <p className="vv-showroom__badge-detail">{badge.detail}</p>
            </motion.div>
          ))}

          <motion.div
            className="vv-showroom__contact"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.25, ease, delay: 2.75 }}
          >
            <a
              href={brand.phoneHref}
              className="vv-showroom__contact-link"
              aria-label={`Bel ${brand.phone}`}
            >
              <Phone size={14} weight="regular" aria-hidden />
            </a>
            <a
              href={brand.emailHref}
              className="vv-showroom__contact-link"
              aria-label={`Mail ${brand.email}`}
            >
              <EnvelopeSimple size={14} weight="regular" aria-hidden />
            </a>
          </motion.div>
        </aside>
      </motion.div>

      <motion.div
        className="vv-showroom__scroll-wrap"
        style={reduce ? undefined : { opacity: scrollOpacity, y: scrollY }}
      >
        <motion.a
          href="#aanpak"
          className="vv-showroom__scroll"
          aria-label="Scroll naar onze aanpak"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease, delay: 2.95 }}
        >
          <span className="vv-showroom__scroll-ring" aria-hidden>
            <span className="vv-showroom__scroll-mouse">
              <motion.span
                className="vv-showroom__scroll-wheel"
                animate={
                  reduce
                    ? undefined
                    : { y: [0, 6, 0], opacity: [0.4, 1, 0.4] }
                }
                transition={{
                  duration: 2.4,
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
