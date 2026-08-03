import { ArrowRight } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
  showArrow?: boolean
  children: ReactNode
}

export function Button({
  variant = 'primary',
  showArrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'vv-btn',
        variant === 'primary' ? 'vv-btn--primary' : 'vv-btn--ghost',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight size={15} strokeWidth={1.75} aria-hidden /> : null}
    </button>
  )
}

export function ButtonLink({
  href,
  variant = 'primary',
  showArrow = true,
  className,
  children,
}: {
  href: string
  variant?: 'primary' | 'ghost'
  showArrow?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={cn(
        'vv-btn',
        variant === 'primary' ? 'vv-btn--primary' : 'vv-btn--ghost',
        className,
      )}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight size={15} strokeWidth={1.75} aria-hidden /> : null}
    </a>
  )
}
