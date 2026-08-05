import { ArrowRight, Heart, Quotes, User, UsersThree } from '@phosphor-icons/react'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { home } from '@/lib/content'

const icons = {
  steps: User,
  guide: UsersThree,
  heart: Heart,
} as const

export function Experience() {
  const { experience } = home

  return (
    <section
      id="ervaring"
      className="vv-conviction"
      aria-labelledby="experience-heading"
    >
      <div className="vv-shell vv-conviction__shell">
        <div className="vv-conviction__hero">
          <Reveal className="vv-conviction__media-wrap" delay={0.06}>
            <figure className="vv-conviction__media">
              <img
                src={experience.heroImage}
                alt={experience.heroAlt}
                className="vv-conviction__media-img"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <div className="vv-conviction__media-shade" aria-hidden />

              <figcaption className="vv-conviction__quote">
                <Quotes
                  size={14}
                  weight="light"
                  className="vv-conviction__quote-icon"
                  aria-hidden
                />
                <p className="vv-conviction__quote-text">{experience.quote.text}</p>
                <p className="vv-conviction__quote-signature">
                  {experience.quote.signature}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="vv-conviction__copy" delay={0.12}>
            <p className="vv-conviction__eyebrow">{experience.eyebrow}</p>
            <h2 id="experience-heading" className="vv-conviction__title">
              {experience.titleLine1}
              <br />
              {experience.titleLine2}
            </h2>
            <p className="vv-conviction__body">{experience.body1}</p>
            <p className="vv-conviction__body">{experience.body2}</p>
          </Reveal>
        </div>

        <RevealStagger
          className="vv-conviction__pillars"
          delayChildren={0.14}
          staggerChildren={0.12}
        >
          {experience.pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon]

            return (
              <RevealItem key={pillar.id}>
                <article
                  className="vv-conviction-pillar"
                  data-last={index === experience.pillars.length - 1}
                >
                  <p className="vv-conviction-pillar__num" aria-hidden>
                    {pillar.num}
                    <span className="vv-conviction-pillar__rule" />
                  </p>
                  <div className="vv-conviction-pillar__icon" aria-hidden>
                    <Icon size={15} weight="light" />
                  </div>
                  <h3 className="vv-conviction-pillar__title">{pillar.title}</h3>
                  <p className="vv-conviction-pillar__body">{pillar.body}</p>
                </article>
              </RevealItem>
            )
          })}
        </RevealStagger>

        <Reveal className="vv-conviction__cta-wrap" delay={0.2}>
          <a href="#proefles" className="vv-conviction__cta">
            <span>{experience.cta}</span>
            <ArrowRight size={14} weight="bold" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
