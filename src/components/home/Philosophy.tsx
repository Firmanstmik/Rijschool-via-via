import { Scales, SealCheck, ShieldCheck } from '@phosphor-icons/react'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { home } from '@/lib/content'

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
        <header className="vv-invest__header">
          <Reveal delay={0.08}>
            <p className="vv-invest__eyebrow">{philosophy.eyebrow}</p>
          </Reveal>

          <Reveal delay={0.32}>
            <h2 id="philosophy-heading" className="vv-invest__title">
              {philosophy.title}
            </h2>
          </Reveal>

          <Reveal delay={0.78}>
            <p className="vv-invest__lead">{philosophy.lead}</p>
          </Reveal>
        </header>

        <RevealStagger
          className="vv-invest__cards"
          delayChildren={1.15}
          staggerChildren={0.2}
        >
          {philosophy.pillars.map((pillar) => {
            const Icon = icons[pillar.icon]

            return (
              <RevealItem key={pillar.id}>
                <article className="vv-invest-card">
                  <div className="vv-invest-card__icon" aria-hidden>
                    <Icon size={14} weight="light" />
                  </div>

                  <p className="vv-invest-card__num">{pillar.num}</p>
                  <h3 className="vv-invest-card__title">{pillar.title}</h3>
                  <p className="vv-invest-card__body">{pillar.body}</p>
                </article>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
