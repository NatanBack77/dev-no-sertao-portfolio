import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = document.querySelectorAll<HTMLElement>('.reveal')

    if (reduced) {
      els.forEach(el => el.classList.add('is-in'))
      return
    }

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            const delay = el.style.getPropertyValue('--d') || '0ms'
            setTimeout(() => el.classList.add('is-in'), parseInt(delay) || 0)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}
