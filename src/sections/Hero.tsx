import { FolderGit2, Send } from 'lucide-react'

export function Hero() {
  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const nav = document.getElementById('nav')
    const offset = nav ? nav.getBoundingClientRect().height : 0
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="wrap hero__in">
        <div className="hero__copy">
          <div className="hero__eyebrow eyebrow">
            <span className="num">//</span> Junior Backend &amp; DevOps Engineer · Juazeiro do Norte, CE
          </div>
          <h1>
            <span className="ln"><span>Sistemas que</span></span>
            <span className="ln"><span>escalam do</span></span>
            <span className="ln"><span><em>sertão</em> ao mundo.</span></span>
          </h1>
          <p className="hero__sub">
            Sou <strong>Natanael Marcelino</strong>, desenvolvedor Back-End &amp; DevOps em
            Juazeiro do Norte. Construo APIs escaláveis, automatizo deploys e cuido da
            observabilidade que mantém aplicações de pé em produção.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projetos" onClick={e => { e.preventDefault(); scrollTo('projetos') }}>
              <FolderGit2 size={16} strokeWidth={1.75} /> Ver projetos
            </a>
            <a className="btn btn--ghost" href="#contato" onClick={e => { e.preventDefault(); scrollTo('contato') }}>
              <Send size={16} strokeWidth={1.75} /> Entrar em contato
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="n mono"><span>7</span></div>
              <div className="l">projetos entregues</div>
            </div>
            <div className="hero__stat">
              <div className="n mono"><span>0</span></div>
              <div className="l">downtime — deploys canary &amp; blue-green</div>
            </div>
            <div className="hero__stat">
              <div className="n mono">24<span>/</span>7</div>
              <div className="l">observabilidade com OpenTelemetry</div>
            </div>
          </div>
        </div>
        <div className="hero__emblem" aria-hidden="true">
          <div className="hero__emblem-disc">
            <img src="/assets/logo-badge.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span className="line" /> Role para explorar
      </div>
    </section>
  )
}
