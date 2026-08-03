import {
  CalendarBlank,
  EnvelopeSimple,
  Phone,
  SealCheck,
  Star,
} from '@phosphor-icons/react'
import { brand } from '@/lib/content'
import { cn } from '@/lib/cn'

function GoogleMark() {
  return (
    <svg
      className="vv-topbar__google"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export function Topbar({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className={cn('vv-topbar', hidden && 'is-hidden')}
      role="region"
      aria-label="Contact en kenmerken"
      aria-hidden={hidden}
    >
      <div className="vv-shell vv-shell--nav vv-topbar__inner">
        <div className="vv-topbar__cluster">
          <div className="vv-topbar__pill" aria-label="Beoordeling 5,0 uit 5">
            <span className="vv-topbar__google-wrap" aria-hidden>
              <GoogleMark />
            </span>
            <span className="vv-topbar__score">5,0</span>
            <span className="vv-topbar__stars" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={10} weight="fill" />
              ))}
            </span>
            <span className="vv-topbar__pill-label">Google Reviews</span>
          </div>

          <div className="vv-topbar__trust">
            <span className="vv-topbar__chip">
              <SealCheck size={13} weight="fill" aria-hidden />
              <span>RIS gecertificeerd</span>
            </span>
            <span className="vv-topbar__divider" aria-hidden />
            <span className="vv-topbar__chip">
              <CalendarBlank size={13} weight="fill" aria-hidden />
              <span>7 dagen per week</span>
            </span>
            <span
              className="vv-topbar__divider vv-topbar__chip--quiet"
              aria-hidden
            />
            <span className="vv-topbar__chip vv-topbar__chip--quiet">
              <span>Gratis proefles</span>
            </span>
          </div>

          <div className="vv-topbar__contacts">
            <a href={brand.phoneHref} className="vv-topbar__link">
              <Phone size={13} weight="fill" aria-hidden />
              <span>{brand.phone}</span>
            </a>
            <span className="vv-topbar__divider" aria-hidden />
            <a href={brand.emailHref} className="vv-topbar__link">
              <EnvelopeSimple size={13} weight="fill" aria-hidden />
              <span>{brand.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
