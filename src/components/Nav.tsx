import { useEffect, useState } from 'react'
import { Terminal } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 24) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.getElementById('nav')
    const offset = nav ? nav.getBoundingClientRect().height : 0
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="wrap nav__in">
          <a className="brand" href="#topo" aria-label="Dev no Sertão — início" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img src="/assets/logo-badge.png" alt="Brasão Dev no Sertão" />
            <span className="brand__txt">
              <b>Dev no Sertão</b>
              <span>Back-end &amp; DevOps</span>
            </span>
          </a>
          <nav className="nav__links" aria-label="Seções">
            <a href="#sobre" onClick={e => { e.preventDefault(); scrollTo('sobre') }}>Sobre</a>
            <a href="#skills" onClick={e => { e.preventDefault(); scrollTo('skills') }}>Habilidades</a>
            <a href="#experiencia" onClick={e => { e.preventDefault(); scrollTo('experiencia') }}>Experiência</a>
            <a href="#projetos" onClick={e => { e.preventDefault(); scrollTo('projetos') }}>Projetos</a>
            <a href="#servicos" onClick={e => { e.preventDefault(); scrollTo('servicos') }}>Serviços</a>
          </nav>
          <div className="nav__cta">
            <a className="btn btn--primary nav__desk-cta" href="#contato" onClick={e => { e.preventDefault(); scrollTo('contato') }}>
              <Terminal size={16} strokeWidth={1.75} /> Vamos conversar
            </a>
            <button
              className="nav__burger"
              id="burger"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(o => !o)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} scrollTo={scrollTo} />
    </>
  )
}
