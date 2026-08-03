import {
  ArrowRight,
  Scales,
  SealCheck,
  ShieldCheck,
} from '@phosphor-icons/react'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { home } from '@/lib/content'
import { cn } from '@/lib/cn'

const icons = {
  shield: ShieldCheck,
  seal: SealCheck,
  scale: Scales,
} as const

export function Philosophy() {
  const { philosophy } = home

  return (
    <section
      id="filosofie"
      className="vv-invest"
      aria-labelledby="philosophy-heading"
    >
      <div className="vv-invest__grid" aria-hidden />
      <div className="vv-invest__glow" aria-hidden />

      <div className="vv-shell vv-invest__shell">
        <Reveal className="vv-invest__header">
          <p className="vv-invest__eyebrow">{philosophy.eyebrow}</p>
          <h2 id="philosophy-heading" className="vv-invest__title">
            {philosophy.title}
          </h2>
          <p className="vv-invest__lead">{philosophy.lead}</p>
        </Reveal>

        <RevealStagger className="vv-invest__cards">
          {philosophy.pillars.map((pillar) => {
            const Icon = icons[pillar.icon]
            const featured = pillar.featured

            return (
              <RevealItem key={pillar.id}>
                <article
                  className={cn(
                    'vv-invest-card',
                    featured && 'vv-invest-card--featured',
                  )}
                >
                  <div className="vv-invest-card__icon" aria-hidden>
                    <Icon size={28} weight={featured ? 'fill' : 'duotone'} />
                  </div>

                  <p className="vv-invest-card__num">{pillar.num}</p>
                  <h3 className="vv-invest-card__title">{pillar.title}</h3>
                  <p className="vv-invest-card__body">{pillar.body}</p>

                  {featured ? (
                    <a href="#aanpak" className="vv-invest-card__cta">
                      <span>{philosophy.cta}</span>
                      <ArrowRight size={16} weight="bold" aria-hidden />
                    </a>
                  ) : (
                    <span className="vv-invest-card__spacer" aria-hidden />
                  )}
                </article>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
