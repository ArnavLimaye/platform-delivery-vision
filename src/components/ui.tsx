import type { ReactNode, CSSProperties } from 'react'

export function Card({
  children,
  className = '',
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`bg-bg-primary border border-border-secondary rounded-2xl p-5 md:p-6 shadow-card mb-5 ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children, icon }: { children: ReactNode; icon?: string }) {
  return (
    <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-text-primary tracking-tight mb-1.5">
      {icon && <span className="text-lg leading-none">{icon}</span>}
      <span>{children}</span>
    </h3>
  )
}

export function CardSubtitle({ children }: { children: ReactNode }) {
  return <p className="text-xs md:text-sm text-gray-header mb-4">{children}</p>
}

export function SectionLabel({ children, accent }: { children: ReactNode; accent?: string }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full mb-3"
      style={{
        color: accent ?? 'rgb(var(--primary))',
        background: `${accent ?? '#108E66'}14`,
      }}
    >
      {children}
    </div>
  )
}

/* A soft chip used for list items */
export function Chip({ children, accent }: { children: ReactNode; accent?: string }) {
  return (
    <span
      className="inline-flex items-center text-[13px] font-medium text-text-secondary bg-bg-secondary border border-border-secondary rounded-lg px-3 py-1.5 leading-snug"
      style={accent ? { borderLeft: `3px solid ${accent}` } : undefined}
    >
      {children}
    </span>
  )
}

/* Bulleted list row with a colored dot */
export function BulletRow({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
      <span
        className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: accent }}
      />
      <span>{children}</span>
    </li>
  )
}
