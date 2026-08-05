import { Scales, ShieldCheck, Star } from '@phosphor-icons/react'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { home } from '@/lib/content'

const icons = {
  shield: ShieldCheck,
  star: Star,
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
      <div className="vv-invest__hero">
        <img
          src={philosophy.heroImage}
          alt={philosophy.heroAlt}
          className="vv-invest__hero-img"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
        />
        <div className="vv-invest__hero-shade" aria-hidden />
        <div className="vv-invest__hero-glow" aria-hidden />

        <div className="vv-shell vv-invest__hero-copy">
          <Reveal>
            <p className="vv-invest__eyebrow">{philosophy.eyebrow}</p>
            <h2 id="philosophy-heading" className="vv-invest__title">
              {philosophy.title}
            </h2>
            <p className="vv-invest__lead">{philosophy.lead}</p>
          </Reveal>
        </div>
      </div>

      <div className="vv-invest__body">
        <div className="vv-shell">
          <RevealStagger
            className="vv-invest__pillars"
            delayChildren={0.12}
            staggerChildren={0.14}
          >
            {philosophy.pillars.map((pillar, index) => {
              const Icon = icons[pillar.icon]

              return (
                <RevealItem key={pillar.id}>
                  <article
                    className="vv-invest-pillar"
                    data-pillar={pillar.id}
                    data-last={index === philosophy.pillars.length - 1}
                  >
                    <p className="vv-invest-pillar__num" aria-hidden>
                      {pillar.num}
                    </p>
                    <div className="vv-invest-pillar__icon" aria-hidden>
                      <Icon size={15} weight="light" />
                    </div>
                    <h3 className="vv-invest-pillar__title">{pillar.title}</h3>
                    <p className="vv-invest-pillar__body">{pillar.body}</p>
                  </article>
                </RevealItem>
              )
            })}
          </RevealStagger>

          <Reveal className="vv-invest__closing" delay={0.25}>
            <p className="vv-invest__closing-text">{philosophy.closing}</p>
            <p className="vv-invest__signature">
              <span>{philosophy.signature}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
