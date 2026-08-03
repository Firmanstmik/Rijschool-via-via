import type { Icon } from '@phosphor-icons/react'
import { cn } from '@/lib/cn'

type SectionEyebrowProps = {
  children: React.ReactNode
  icon?: Icon
  className?: string
  centered?: boolean
}

export function SectionEyebrow({
  children,
  icon: Glyph,
  className,
  centered = false,
}: SectionEyebrowProps) {
  return (
    <div
      className={cn(
        'vv-eyebrow-row',
        centered && 'vv-eyebrow-row--center',
        className,
      )}
    >
      {Glyph ? (
        <Glyph className="vv-eyebrow-icon" size={16} weight="light" aria-hidden />
      ) : null}
      <p className="vv-eyebrow">{children}</p>
    </div>
  )
}
