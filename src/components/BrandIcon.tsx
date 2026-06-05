import { useState } from 'react'
import * as si from 'simple-icons'

function toPascal(slug: string) {
  return slug.charAt(0).toUpperCase() + slug.slice(1)
}

type Props = {
  slug: string
  name: string
  mono?: string
}

export function BrandIcon({ slug, name, mono }: Props) {
  const [hovered, setHovered] = useState(false)
  const key = 'si' + toPascal(slug) as keyof typeof si
  const icon = si[key] as { path: string; hex: string } | undefined

  if (!icon || mono) {
    return (
      <span
        className="tech__logo is-mono"
        title={name}
        aria-label={name}
      >
        {mono || name.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <svg
      className="tech__logo"
      viewBox="0 0 24 24"
      aria-label={name}
      style={{ color: hovered ? `#${icon.hex}` : 'var(--fg-3)', transition: 'color 200ms', width: '2rem', height: '2rem', flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <title>{name}</title>
      <path d={icon.path} fill="currentColor" />
    </svg>
  )
}
