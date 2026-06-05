import { Sun } from 'lucide-react'

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div className="foot__brand">
            <img src="/assets/logo-badge.png" alt="Brasão Dev no Sertão" />
            <p>Back-end &amp; DevOps nascido no sertão de Juazeiro do Norte, CE. APIs escaláveis, deploys automatizados e sistemas que não caem.</p>
          </div>
          <div className="foot__col">
            <h5>Navegação</h5>
            <a href="#sobre">Sobre</a>
            <a href="#skills">Habilidades</a>
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
            <a href="#formacao">Formação</a>
          </div>
          <div className="foot__col">
            <h5>Conecte-se</h5>
            <a href="https://github.com/NatanBack77" target="_blank" rel="noopener">GitHub</a>
            <a href="https://linkedin.com/in/natanael-marcelino-78487b291" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:natan.devback@gmail.com">E-mail</a>
            <a href="https://wa.me/5588981994045" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
        <div className="foot__bar">
          <p>© {new Date().getFullYear()} Dev no Sertão — Natanael Marcelino. Todos os direitos reservados.</p>
          <p className="made"><Sun size={14} strokeWidth={1.75} /> Feito no sertão, com café e código.</p>
        </div>
      </div>
    </footer>
  )
}
