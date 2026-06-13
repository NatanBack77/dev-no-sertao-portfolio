import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="contact__glow" aria-hidden="true" />
      <div className="wrap contact__in">
        <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>
          <span className="num">08</span> Contato
        </div>
        <h2 className="reveal" style={{ '--d': '60ms' } as React.CSSProperties}>
          Tem um sistema para <em>escalar</em>?<br />Bora conversar.
        </h2>
        <p className="reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
          Disponível para projetos, freelas e oportunidades em back-end, DevOps e infraestrutura. Costumo responder em até 24h.
        </p>
        <div className="contact__actions reveal" style={{ '--d': '180ms' } as React.CSSProperties}>
          <a className="btn btn--primary" href="mailto:natan.devback@gmail.com">
            <Mail size={16} strokeWidth={1.75} /> natan.devback@gmail.com
          </a>
          <a className="btn btn--ghost" href="https://wa.me/5588981994045" target="_blank" rel="noopener">
            <Phone size={16} strokeWidth={1.75} /> (88) 98199-4045
          </a>
        </div>
        <div className="contact__links reveal" style={{ '--d': '240ms' } as React.CSSProperties}>
          <a className="clink" href="https://github.com/NatanBack77" target="_blank" rel="noopener">
            <GithubIcon /> github.com/NatanBack77
          </a>
          <a className="clink" href="https://linkedin.com/in/natanael-marcelino-78487b291" target="_blank" rel="noopener">
            <LinkedinIcon /> LinkedIn
          </a>
          <a className="clink" href="https://www.instagram.com/devnsertao/" target="_blank" rel="noopener">
            <Instagram size={16} strokeWidth={1.75} /> @devnsertao
          </a>
          <a className="clink" href="#">
            <MapPin size={16} strokeWidth={1.75} /> Juazeiro do Norte · CE · Brasil
          </a>
        </div>
      </div>
    </section>
  )
}
