import { useEffect } from 'react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { TweaksPanel } from './components/TweaksPanel'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'
import { Services } from './sections/Services'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)').forEach(el => {
        const io = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              const delay = parseInt((e.target as HTMLElement).style.getPropertyValue('--d')) || 0
              setTimeout(() => (e.target as HTMLElement).classList.add('is-in'), delay)
              io.unobserve(e.target)
            }
          })
        }, { threshold: 0.12 })
        io.observe(el)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main id="topo">
        <Hero />
        <svg className="dunes" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path fill="var(--bg-app-2)" d="M0 90 V52 C220 18 360 70 600 50 C840 30 1010 8 1240 36 C1340 48 1400 44 1440 40 V90 Z" />
        </svg>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Stack />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel />
    </>
  )
}

export default App
