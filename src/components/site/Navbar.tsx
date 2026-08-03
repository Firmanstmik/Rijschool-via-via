import { useEffect, useState } from 'react'
import { EnvelopeSimple, Phone } from '@phosphor-icons/react'
import { brand, navItems } from '@/lib/content'
import { cn } from '@/lib/cn'
import { Topbar } from '@/components/site/Topbar'
import { BrandLogo } from '@/components/site/BrandLogo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [topbarHidden, setTopbarHidden] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 16)
      setTopbarHidden(y > 28)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('vv-topbar-collapsed', topbarHidden)
  }, [topbarHidden])

  return (
    <>
      <Topbar hidden={topbarHidden} />
      <header
        className={cn(
          'vv-header vv-header--showroom',
          (solid || open) && 'is-solid',
          topbarHidden && 'is-topbar-hidden',
        )}
      >
        <div className="vv-header__glow" aria-hidden />
        <div className="vv-shell vv-shell--nav vv-header__inner">
          <a href="#top" className="vv-logo-link" aria-label="Rijschool Via Via home">
            <BrandLogo />
          </a>

          <nav className="vv-nav" aria-label="Hoofdnavigatie">
            {navItems.map((item) => (
              <span
                key={item.label}
                className={cn('vv-nav-link', item.active && 'is-active')}
                aria-current={item.active ? 'page' : undefined}
                aria-disabled={!item.active ? true : undefined}
                title={item.active ? undefined : 'Binnenkort beschikbaar'}
              >
                {item.label}
              </span>
            ))}
          </nav>

          <div className="vv-header__actions">
            <a href={brand.phoneHref} className="vv-header__phone">
              <span className="vv-header__phone-icon" aria-hidden>
                <Phone size={14} weight="light" />
              </span>
              <span className="vv-header__phone-text">{brand.phone}</span>
            </a>

            <a
              href={brand.emailHref}
              className="vv-header__social"
              aria-label={`Mail ${brand.email}`}
            >
              <EnvelopeSimple size={16} weight="light" aria-hidden />
            </a>

            <span
              className="vv-header__cta"
              aria-disabled="true"
              title="Binnenkort beschikbaar"
            >
              <span>Gratis proefles</span>
            </span>

            <button
              type="button"
              className="vv-menu-btn"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Menu sluiten' : 'Menu openen'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="vv-menu-btn__bar" aria-hidden />
              <span className="vv-menu-btn__bar" aria-hidden />
              <span className="vv-menu-btn__bar" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div id="mobile-nav" className="vv-header vv-header--mobile is-solid">
          <div className="vv-shell vv-shell--nav py-5">
            {navItems.map((item) => (
              <span
                key={item.label}
                className={cn('vv-mobile-link', item.active && 'is-active')}
                aria-disabled={!item.active}
              >
                {item.label}
              </span>
            ))}
            <a href={brand.phoneHref} className="vv-btn vv-btn--ghost vv-btn--showroom">
              <Phone size={14} weight="light" aria-hidden />
              <span>{brand.phone}</span>
            </a>
            <span
              className="vv-btn vv-btn--primary vv-btn--showroom is-disabled"
              aria-disabled="true"
            >
              <span>Gratis proefles</span>
            </span>
          </div>
        </div>
      ) : null}
    </>
  )
}
