import { useState } from 'react'
import { HouseLine, MapPin } from '@phosphor-icons/react'
import { Reveal, RevealItem, RevealStagger } from '@/components/site/Reveal'
import { brand, home, images, regions } from '@/lib/content'
import { cn } from '@/lib/cn'

export function ServiceArea() {
  const { area } = home
  const [active, setActive] = useState(regions[0]?.id ?? 'leiderdorp')
  const activeRegion = regions.find((r) => r.id === active) ?? regions[0]

  return (
    <section
      id="regio"
      className="vv-atlas"
      aria-labelledby="region-heading"
    >
      <div className="vv-atlas__glow vv-atlas__glow--a" aria-hidden />
      <div className="vv-atlas__glow vv-atlas__glow--b" aria-hidden />
      <div className="vv-atlas__grid" aria-hidden />

      <div className="vv-shell vv-atlas__shell">
        <Reveal className="vv-atlas__intro">
          <p className="vv-atlas__eyebrow">{area.eyebrow}</p>
          <div className="vv-atlas__intro-row">
            <h2 id="region-heading" className="vv-atlas__title">
              {area.titleLine1}
              <br />
              {area.titleLine2}
            </h2>
            <p className="vv-atlas__lead">{area.body}</p>
          </div>
        </Reveal>

        <div className="vv-atlas__stage">
          <Reveal className="vv-atlas__media" variant="scale">
            <div className="vv-atlas__frame">
              <img
                src={images.region}
                alt="Leswagen van Rijschool Via Via in de regio Leiden"
                className="vv-atlas__img"
                width={1400}
                height={900}
                loading="lazy"
              />
              <div className="vv-atlas__veil" aria-hidden />
              <div className="vv-atlas__scan" aria-hidden />

              <div className="vv-atlas__plaque">
                <span className="vv-atlas__plaque-icon" aria-hidden>
                  <HouseLine size={16} weight="fill" />
                </span>
                <div>
                  <p className="vv-atlas__plaque-label">Thuisbasis</p>
                  <p className="vv-atlas__plaque-value">
                    {brand.address.street}, {brand.address.city}
                  </p>
                </div>
              </div>

              <div className="vv-atlas__count" aria-hidden>
                <span>05</span>
                <small>regio’s</small>
              </div>
            </div>
          </Reveal>

          <Reveal className="vv-atlas__panel" delay={0.1} variant="slide">
            <p className="vv-atlas__panel-kicker">Onze dekking</p>
            <p className="vv-atlas__panel-active">
              <MapPin size={16} weight="fill" aria-hidden />
              <span>{activeRegion.name}</span>
            </p>
            <p className="vv-atlas__panel-detail">{activeRegion.description}</p>

            <RevealStagger className="vv-atlas__rail">
              {regions.map((region, index) => {
                const isActive = region.id === active
                return (
                  <RevealItem key={region.id}>
                    <button
                      type="button"
                      className={cn(
                        'vv-atlas__stop',
                        isActive && 'is-active',
                      )}
                      onMouseEnter={() => setActive(region.id)}
                      onFocus={() => setActive(region.id)}
                      onClick={() => setActive(region.id)}
                      aria-pressed={isActive}
                    >
                      <span className="vv-atlas__stop-index">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="vv-atlas__stop-copy">
                        <span className="vv-atlas__stop-name">{region.name}</span>
                        <span className="vv-atlas__stop-desc">
                          {region.description}
                        </span>
                      </span>
                      <span className="vv-atlas__stop-dot" aria-hidden />
                    </button>
                  </RevealItem>
                )
              })}
            </RevealStagger>

            <a href={brand.phoneHref} className="vv-atlas__cta">
              Twijfel over jouw regio? Bel ons
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
