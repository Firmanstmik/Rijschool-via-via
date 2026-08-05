import { useState } from 'react'
import { ArrowRight, Heart, MapPin, Quotes, User, UsersThree } from '@phosphor-icons/react'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { brand, home, regions } from '@/lib/content'
import { cn } from '@/lib/cn'

const icons = {
  steps: User,
  guide: UsersThree,
  calm: Heart,
} as const

export function Experience() {
  const { experience } = home
  const [active, setActive] = useState(regions[0]?.id ?? 'leiderdorp')
  const activeRegion = regions.find((region) => region.id === active) ?? regions[0]

  return (
    <section
      id="ervaring"
      className="vv-conviction"
      aria-labelledby="experience-heading"
    >
      <div className="vv-shell vv-conviction__shell">
        <div className="vv-conviction__stage">
          <Reveal className="vv-conviction__photo-wrap" delay={0.05}>
            <figure className="vv-conviction__photo">
              <img
                src={experience.heroImage}
                alt={experience.heroAlt}
                className="vv-conviction__photo-img"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <div className="vv-conviction__photo-shade" aria-hidden />

              <figcaption className="vv-conviction__quote">
                <Quotes
                  size={13}
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

          <Reveal className="vv-conviction__copy" delay={0.1}>
            <p className="vv-conviction__eyebrow">{experience.eyebrow}</p>
            <h2 id="experience-heading" className="vv-conviction__title">
              {experience.titleLine1}
              <br />
              {experience.titleLine2}
            </h2>
            <div className="vv-conviction__prose">
              <p>{experience.body1}</p>
              <p>{experience.body2}</p>
              {experience.body3 ? <p>{experience.body3}</p> : null}
            </div>
          </Reveal>

          <RevealStagger
            className="vv-conviction__principles"
            delayChildren={0.14}
            staggerChildren={0.1}
          >
            {experience.pillars.map((pillar, index) => {
              const Icon = icons[pillar.icon]

              return (
                <RevealItem key={pillar.id}>
                  <article
                    className="vv-conviction-principle"
                    data-last={index === experience.pillars.length - 1}
                  >
                    <p className="vv-conviction-principle__num">{pillar.num}</p>
                    <Icon
                      size={14}
                      weight="light"
                      className="vv-conviction-principle__icon"
                      aria-hidden
                    />
                    <h3 className="vv-conviction-principle__title">{pillar.title}</h3>
                    <p className="vv-conviction-principle__body">{pillar.body}</p>
                  </article>
                </RevealItem>
              )
            })}
          </RevealStagger>

          <Reveal className="vv-conviction__region-wrap" delay={0.18}>
            <aside
              id="regio"
              className="vv-conviction__region"
              aria-labelledby="region-panel-heading"
            >
              <p id="region-panel-heading" className="vv-conviction__region-kicker">
                Dichtbij leren
              </p>

              <p className="vv-conviction__region-active">
                <MapPin size={15} weight="fill" aria-hidden />
                <span>{activeRegion.name}</span>
              </p>
              <p className="vv-conviction__region-detail">{activeRegion.description}</p>

              <ul className="vv-conviction__region-list" role="list">
                {regions.map((region, index) => {
                  const isActive = region.id === active

                  return (
                    <li key={region.id}>
                      <button
                        type="button"
                        className={cn(
                          'vv-conviction__region-item',
                          isActive && 'is-active',
                        )}
                        onMouseEnter={() => setActive(region.id)}
                        onFocus={() => setActive(region.id)}
                        onClick={() => setActive(region.id)}
                        aria-pressed={isActive}
                      >
                        <span className="vv-conviction__region-index">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="vv-conviction__region-copy">
                          <span className="vv-conviction__region-name">{region.name}</span>
                          <span className="vv-conviction__region-desc">
                            {region.description}
                          </span>
                        </span>
                        <span className="vv-conviction__region-dot" aria-hidden />
                      </button>
                    </li>
                  )
                })}
              </ul>

              <a href={brand.phoneHref} className="vv-conviction__region-cta">
                Twijfel over jouw regio? Bel ons
                <ArrowRight size={13} weight="bold" aria-hidden />
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
