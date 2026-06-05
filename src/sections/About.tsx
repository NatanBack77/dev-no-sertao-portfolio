import { Gauge, Infinity, ShieldCheck } from 'lucide-react'
import { ImageSlot } from '../components/ImageSlot'

export function About() {
  return (
    <section className="section section--alt" id="sobre">
      <div className="wrap">
        <div className="about__grid">
          <div className="about__photo reveal">
            <ImageSlot id="foto-perfil" shape="rounded" radius="10" placeholder="Solte sua foto aqui" style={{ width: '100%' }} />
            <div className="about__photo-tag mono">
              <b>Natanael Marcelino</b>
              Juazeiro do Norte · CE · BR
            </div>
          </div>
          <div className="about__body">
            <div className="eyebrow reveal"><span className="num">01</span> Sobre</div>
            <h2 className="reveal" style={{ '--d': '60ms' } as React.CSSProperties}>
              Do interior do Ceará para a engenharia que sustenta aplicações em produção.
            </h2>
            <p className="reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
              Sou desenvolvedor <strong>Back-End e DevOps</strong> de Juazeiro do Norte, CE, apaixonado por
              tecnologia e inovação. Tenho experiência no desenvolvimento de <strong>APIs escaláveis</strong>,
              otimização de desempenho e automação de processos.
            </p>
            <p className="reveal" style={{ '--d': '180ms' } as React.CSSProperties}>
              Acredito que boas práticas de <strong>CI/CD, Docker e Kubernetes</strong> são fundamentais para a
              confiabilidade de aplicações em produção. Atualmente curso <strong>Sistemas de Informação</strong> na
              UniFAP — e estou sempre em busca de novos desafios.
            </p>
            <div className="about__values">
              <div className="about__value reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
                <div className="ic"><Gauge size={20} strokeWidth={1.75} /></div>
                <h4>Performance</h4>
                <p>Cache, queries e medição antes do palpite.</p>
              </div>
              <div className="about__value reveal" style={{ '--d': '140ms' } as React.CSSProperties}>
                <div className="ic"><Infinity size={20} strokeWidth={1.75} /></div>
                <h4>Automação</h4>
                <p>CI/CD, IaC e deploys que se repetem sozinhos.</p>
              </div>
              <div className="about__value reveal" style={{ '--d': '200ms' } as React.CSSProperties}>
                <div className="ic"><ShieldCheck size={20} strokeWidth={1.75} /></div>
                <h4>Confiabilidade</h4>
                <p>Observabilidade real e deploys sem downtime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
