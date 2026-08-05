import { useState } from 'react'
import {
  Path,
  SealCheck,
  Sparkle,
  UserFocus,
  ArrowUpRight,
} from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { home, serviceCards } from '@/lib/content'
import { cn } from '@/lib/cn'

const icons = {
  seal: SealCheck,
  car: Path,
  user: UserFocus,
  spark: Sparkle,
} as const

export function ServicesGrid() {
  const { services } = home
  const reduce = useReducedMotion()
  const [active, setActive] = useState<string | null>(null)

  return (
    <section
      id="aanbod"
      className="vv-services"
      aria-labelledby="services-heading"
    >
      <div className="vv-shell">
        <Reveal className="vv-services__header">
          <p className="vv-showroom__eyebrow vv-showroom__eyebrow--muted">
            {services.eyebrow}
          </p>
          <h2 id="services-heading" className="vv-services__title">
            {services.title}
          </h2>
          <p className="vv-services__lead">{services.lead}</p>
        </Reveal>

        <RevealStagger className="vv-services__grid">
          {serviceCards.map((card, index) => {
            const Icon = icons[card.icon]
            const isActive = active === card.title

            return (
              <RevealItem key={card.title}>
                <motion.article
                  className={cn(
                    'vv-service-card',
                    isActive && 'is-active',
                  )}
                  onHoverStart={() => setActive(card.title)}
                  onHoverEnd={() => setActive(null)}
                  onFocus={() => setActive(card.title)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="vv-service-card__copy">
                    <span className="vv-service-card__index" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                    <div className="vv-service-card__meta">
                      <Icon
                        size={22}
                        weight="light"
                        className="vv-service-card__icon"
                        aria-hidden
                      />
                      <span className="vv-service-card__hint">
                        Hoe we begeleiden
                        <ArrowUpRight size={14} weight="bold" aria-hidden />
                      </span>
                    </div>
                  </div>
                  <div className="vv-service-card__media">
                    <motion.img
                      src={card.image}
                      alt=""
                      loading="lazy"
                      width={480}
                      height={360}
                      animate={
                        reduce
                          ? undefined
                          : { scale: isActive ? 1.04 : 1.02 }
                      }
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="vv-service-card__shade" aria-hidden />
                    <div className="vv-service-card__shine" aria-hidden />
                  </div>
                </motion.article>
              </RevealItem>
            )
          })}
        </RevealStagger>

        <Reveal className="vv-services__cta" delay={0.12}>
          <span
            className="vv-btn vv-btn--primary vv-btn--showroom"
            aria-disabled="true"
            title="Binnenkort beschikbaar"
          >
            <span>{services.cta}</span>
          </span>
        </Reveal>
      </div>
    </section>
  )
}
