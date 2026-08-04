import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Phone,
} from '@phosphor-icons/react'
import { BrandLogo } from '@/components/site/BrandLogo'
import { brand, footerLinks, images, regions } from '@/lib/content'

const experienceLinks = [
  'RIS methode',
  'Automaat of schakel',
  'Vaste instructeur',
  'Gratis proefles',
  '7 dagen per week',
] as const

const mainLinks = [
  'Home',
  'Prijzen',
  'Bijzondere lessen',
  'Contact',
  'Reviews',
] as const

const mid = Math.ceil(regions.length / 2)
const regionsLeft = regions.slice(0, mid)
const regionsRight = regions.slice(mid)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="vv-foot">
      <div className="vv-foot__bg" aria-hidden>
        <img
          src={images.exterior}
          alt=""
          className="vv-foot__bg-img"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="vv-foot__bg-veil" />
        <div className="vv-foot__bg-grain" />
      </div>

      <div className="vv-foot__crest" aria-hidden>
        <div className="vv-foot__crest-edge" />
        <div className="vv-foot__crest-peak">
          <span className="vv-foot__crest-mark">
            <img src={brand.logo} alt="" width={44} height={44} />
          </span>
        </div>
      </div>

      <div className="vv-shell vv-foot__shell">
        <div className="vv-foot__grid">
          <div className="vv-foot__col">
            <h3 className="vv-foot__heading">Werkgebied</h3>
            <ul className="vv-foot__list">
              {regions.map((region) => (
                <li key={region.id}>
                  <span className="vv-foot__strong">{region.name}</span>
                  <span className="vv-foot__soft">{region.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="vv-foot__col">
            <h3 className="vv-foot__heading">Ervaring</h3>
            <ul className="vv-foot__links">
              {experienceLinks.map((label) => (
                <li key={label}>
                  <span aria-disabled="true">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="vv-foot__col">
            <h3 className="vv-foot__heading">Informatie</h3>
            <ul className="vv-foot__links">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <span aria-disabled="true">{link.label}</span>
                </li>
              ))}
            </ul>
            <h3 className="vv-foot__heading vv-foot__heading--spaced">
              Gegevens
            </h3>
            <ul className="vv-foot__meta">
              <li>
                <span className="vv-foot__meta-key">KVK</span> {brand.kvk}
              </li>
              <li>
                <span className="vv-foot__meta-key">BTW</span> {brand.btw}
              </li>
            </ul>
          </div>

          <div className="vv-foot__col vv-foot__col--main">
            <ul className="vv-foot__main">
              {mainLinks.map((label) => (
                <li key={label}>
                  <span aria-disabled="true">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="vv-foot__col vv-foot__col--aside">
            <h3 className="vv-foot__heading">Contact</h3>
            <address className="vv-foot__address">
              <p className="vv-foot__brand-line">{brand.name}</p>
              <p>
                {brand.address.street}
                <br />
                {brand.address.postal} {brand.address.city}
              </p>
              <a href={brand.phoneHref} className="vv-foot__contact">
                <Phone size={13} weight="fill" aria-hidden />
                {brand.phone}
              </a>
              <a href={brand.emailHref} className="vv-foot__contact">
                <EnvelopeSimple size={13} weight="fill" aria-hidden />
                {brand.email}
              </a>
            </address>

            <div className="vv-foot__social">
              <p className="vv-foot__heading">Volg ons</p>
              <div className="vv-foot__social-row">
                <span
                  className="vv-foot__social-btn"
                  aria-disabled="true"
                  title="Binnenkort"
                >
                  <InstagramLogo size={15} weight="fill" aria-hidden />
                </span>
                <span
                  className="vv-foot__social-btn"
                  aria-disabled="true"
                  title="Binnenkort"
                >
                  <FacebookLogo size={15} weight="fill" aria-hidden />
                </span>
              </div>
            </div>

            <div className="vv-foot__cta-wrap">
              <p className="vv-foot__heading">Kennismaking</p>
              <span
                className="vv-foot__cta"
                aria-disabled="true"
                title="Binnenkort beschikbaar"
              >
                <span>Gratis proefles</span>
              </span>
            </div>
          </div>
        </div>

        <div className="vv-foot__recommend">
          <div className="vv-foot__recommend-rule">
            <span>Onze regio's</span>
          </div>
          <div className="vv-foot__recommend-row">
            <div className="vv-foot__recommend-side">
              {regionsLeft.map((region, index) => (
                <span key={region.id} className="vv-foot__recommend-item">
                  {index > 0 ? (
                    <span className="vv-foot__dot" aria-hidden />
                  ) : null}
                  {region.name}
                </span>
              ))}
            </div>

            <div className="vv-foot__recommend-brand">
              <BrandLogo compact />
            </div>

            <div className="vv-foot__recommend-side vv-foot__recommend-side--end">
              {regionsRight.map((region, index) => (
                <span key={region.id} className="vv-foot__recommend-item">
                  {index > 0 ? (
                    <span className="vv-foot__dot" aria-hidden />
                  ) : null}
                  {region.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="vv-foot__legal">
          <p>
            © {year} {brand.name}
          </p>
          <p className="vv-foot__legal-tag">{brand.tagline}</p>
          <p>
            <span aria-disabled="true">Privacybeleid</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
