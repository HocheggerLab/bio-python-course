import React from 'react'

export type CardColor = 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'red' | 'neutral'

/* Technical-docs surfaces: one flat panel colour for every card, with the
   semantic colour carried by the heading and the accent rule instead of a
   tinted fill. Keeps the pedagogical colour signal, drops the sticker look. */
const cardColorClasses: Record<CardColor, string> = {
  blue: 'border-white/10 bg-bio-dark/40 hover:border-bio-blue/40',
  green: 'border-white/10 bg-bio-dark/40 hover:border-bio-green/40',
  yellow: 'border-white/10 bg-bio-dark/40 hover:border-bio-yellow/40',
  purple: 'border-white/10 bg-bio-dark/40 hover:border-purple-400/40',
  pink: 'border-white/10 bg-bio-dark/40 hover:border-pink-400/40',
  red: 'border-white/10 bg-bio-dark/40 hover:border-red-400/40',
  neutral: 'border-white/10 bg-bio-dark/40 hover:border-white/20',
}

/* Left/top accent rule colour — this is what now carries the semantics for
   the ~250 cards that set `border-l-4` / `border-t-4`. */
const accentRuleByColor: Record<CardColor, string> = {
  blue: 'border-l-bio-blue border-t-bio-blue',
  green: 'border-l-bio-green border-t-bio-green',
  yellow: 'border-l-bio-yellow border-t-bio-yellow',
  purple: 'border-l-purple-400 border-t-purple-400',
  pink: 'border-l-pink-400 border-t-pink-400',
  red: 'border-l-red-400 border-t-red-400',
  neutral: 'border-l-white/30 border-t-white/30',
}

const accentTextByColor: Record<CardColor, string> = {
  blue: 'text-bio-blue',
  green: 'text-bio-green',
  yellow: 'text-bio-yellow',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
  red: 'text-red-400',
  neutral: 'text-white',
}

const accentMutedByColor: Record<CardColor, string> = {
  blue: 'text-bio-blue/70',
  green: 'text-bio-green/70',
  yellow: 'text-bio-yellow/70',
  purple: 'text-purple-400/70',
  pink: 'text-pink-400/70',
  red: 'text-red-400/70',
  neutral: 'text-white/70',
}

const accentBorderByColor: Record<CardColor, string> = {
  blue: 'border-bio-blue/20 text-bio-blue/60',
  green: 'border-bio-green/20 text-bio-green/60',
  yellow: 'border-bio-yellow/20 text-bio-yellow/60',
  purple: 'border-purple-400/20 text-purple-400/60',
  pink: 'border-pink-400/20 text-pink-400/60',
  red: 'border-red-500/20 text-red-400/60',
  neutral: 'border-white/20 text-white/60',
}

const numberBubbleByColor: Record<CardColor, string> = {
  blue: 'bg-bio-blue/20 text-bio-blue',
  green: 'bg-bio-green/20 text-bio-green',
  yellow: 'bg-bio-yellow/20 text-bio-yellow',
  purple: 'bg-purple-400/20 text-purple-400',
  pink: 'bg-pink-400/20 text-pink-400',
  red: 'bg-red-500/20 text-red-400',
  neutral: 'bg-white/10 text-white',
}

export const cardAccents = {
  text: accentTextByColor,
  muted: accentMutedByColor,
  border: accentBorderByColor,
}

type Layout = 'center' | 'between' | 'start' | 'middle'

const layoutClass: Record<Layout, string> = {
  center: 'items-center justify-center text-center',
  between: 'justify-between',
  start: 'justify-start',
  middle: 'justify-center',
}

type Padding = 'normal' | 'compact' | 'tight'

const paddingClass: Record<Padding, string> = {
  normal: 'p-4 md:p-6 xl:p-10 2xl:p-14',
  compact: 'p-4 md:p-5 xl:p-7 2xl:p-9',
  tight: 'p-3 md:p-4 xl:p-5 2xl:p-6',
}

interface SlideCardBaseProps {
  color?: CardColor
  layout?: Layout
  padding?: Padding
  className?: string
  children: React.ReactNode
}

interface SlideCardLinkProps extends SlideCardBaseProps {
  href: string
  external?: boolean
}

type SlideCardProps = SlideCardBaseProps | SlideCardLinkProps

const isLink = (p: SlideCardProps): p is SlideCardLinkProps =>
  typeof (p as SlideCardLinkProps).href === 'string'

/**
 * Standardised slide card.
 * Responsive padding scale: mobile → md → xl → 2xl.
 * Use `layout='center'` for centered hero-style cards (StatCard-like),
 * `layout='between'` for header/body/footer cards (FeatureCard-like).
 */
export function SlideCard(props: SlideCardProps) {
  const { color = 'neutral', layout = 'center', padding = 'normal', className = '', children } = props
  const cls =
    `rounded-md border transition-colors flex flex-col ` +
    `${paddingClass[padding]} ` +
    `${cardColorClasses[color]} ${accentRuleByColor[color]} ` +
    `${layoutClass[layout]} ${className}`

  if (isLink(props)) {
    return (
      <a
        href={props.href}
        target={props.external ? '_blank' : undefined}
        rel={props.external ? 'noopener noreferrer' : undefined}
        className={cls}
      >
        {children}
      </a>
    )
  }

  return <div className={cls}>{children}</div>
}

/* ───── Typography primitives ───── */

export function CardIcon({
  children,
  size = 'md',
  className = '',
}: {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizes = {
    sm: 'text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl',
    md: 'text-4xl md:text-7xl xl:text-8xl 2xl:text-9xl',
    lg: 'text-5xl md:text-8xl xl:text-9xl 2xl:text-[10rem]',
  }
  return <div className={`${sizes[size]} ${className}`}>{children}</div>
}

export function CardEyebrow({
  children,
  color = 'neutral',
}: {
  children: React.ReactNode
  color?: CardColor
}) {
  return (
    <div
      className={`text-[10px] md:text-sm xl:text-base 2xl:text-lg font-semibold uppercase tracking-widest ${cardAccents.muted[color]}`}
    >
      {children}
    </div>
  )
}

export function CardHeading({
  children,
  size = 'md',
  color,
  className = '',
}: {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: CardColor
  className?: string
}) {
  const sizes = {
    sm: 'text-base md:text-2xl xl:text-3xl 2xl:text-4xl',
    md: 'text-lg md:text-3xl xl:text-4xl 2xl:text-5xl',
    lg: 'text-2xl md:text-5xl xl:text-6xl 2xl:text-7xl',
  }
  const colorClass = color ? cardAccents.text[color] : 'text-white'
  return <div className={`font-bold ${colorClass} ${sizes[size]} ${className}`}>{children}</div>
}

export function CardStatNumber({
  children,
  color = 'blue',
  className = '',
}: {
  children: React.ReactNode
  color?: CardColor
  className?: string
}) {
  return (
    <div
      className={`text-3xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold ${cardAccents.text[color]} ${className}`}
    >
      {children}
    </div>
  )
}

export function CardBody({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`text-gray-400 text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed ${className}`}
    >
      {children}
    </p>
  )
}

export function CardPill({
  children,
  color = 'neutral',
  className = '',
}: {
  children: React.ReactNode
  color?: CardColor
  className?: string
}) {
  return (
    <span
      className={`text-[10px] md:text-sm xl:text-base font-mono border rounded px-2.5 md:px-4 py-1 md:py-1.5 ${cardAccents.border[color]} ${className}`}
    >
      {children}
    </span>
  )
}

export function CardList({
  items,
  bullet = '✓',
  numbered = false,
  color = 'green',
  className = '',
}: {
  items: Array<string | React.ReactNode>
  bullet?: React.ReactNode
  numbered?: boolean
  color?: CardColor
  className?: string
}) {
  return (
    <ul className={`flex flex-col gap-2 md:gap-3 xl:gap-4 ${className}`}>
      {items.map((it, i) => (
        <li
          key={i}
          className="flex items-center gap-2 md:gap-3 text-sm md:text-base xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed"
        >
          {numbered ? (
            <span
              className={`shrink-0 inline-flex items-center justify-center rounded-full font-bold
                w-5 h-5 text-[10px]
                md:w-7 md:h-7 md:text-xs
                xl:w-9 xl:h-9 xl:text-sm
                2xl:w-11 2xl:h-11 2xl:text-base
                ${numberBubbleByColor[color]}`}
            >
              {i + 1}
            </span>
          ) : (
            <span className={`${cardAccents.text[color]} shrink-0 font-semibold`}>{bullet}</span>
          )}
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

/* ───── Composite: StatCard (Slide02 pattern) ───── */

export function StatCard({
  icon,
  stat,
  label,
  description,
  color = 'blue',
}: {
  icon: React.ReactNode
  stat: React.ReactNode
  label: string
  description: string
  color?: CardColor
}) {
  return (
    <SlideCard color={color} layout="center">
      <CardIcon className="mb-2 md:mb-4 xl:mb-6">{icon}</CardIcon>
      <CardStatNumber color={color} className="mb-1 md:mb-3">
        {stat}
      </CardStatNumber>
      <CardHeading className="mb-2 md:mb-4">{label}</CardHeading>
      <CardBody className="max-w-xs md:max-w-sm xl:max-w-md">{description}</CardBody>
    </SlideCard>
  )
}
