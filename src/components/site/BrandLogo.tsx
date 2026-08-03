import { cn } from '@/lib/cn'

export function BrandLogo({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <span className={cn('vv-logo', compact && 'vv-logo--compact', className)}>
      <span className="vv-logo__eyebrow">Rijschool</span>
      <span className="vv-logo__name">Via Via</span>
    </span>
  )
}
