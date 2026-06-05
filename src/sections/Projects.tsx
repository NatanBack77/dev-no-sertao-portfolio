import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { ImageSlot } from '../components/ImageSlot'

export function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="wrap">
        <div className="s-head">
          <div className="eyebrow reveal"><span className="num">04</span> Projetos em destaque</div>
          <h2 className="reveal" style={{ '--d': '60ms' } as React.CSSProperties}>
            Engenharia aplicada a problemas reais de escala e confiança.
          </h2>
          <p className="reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
            Plataformas financeiras, infraestrutura de deploy, observabilidade e sistemas de domínio — do código à produção.
          </p>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <article
              className="pcard reveal"
              key={p.no}
              style={{
                ...(p.featured ? { gridColumn: '1 / -1' } : {}),
                ...((i % 2 === 1 && !p.featured) ? { '--d': '80ms' } as React.CSSProperties : {}),
              }}
            >
              <div className="pcard__media">
                <ImageSlot id={p.slotId} shape="rect" placeholder={`Solte um print — ${p.title}`} />
                <span className="pcard__no">{p.no}</span>
              </div>
              <div className="pcard__body">
                <span className="pcard__cat">{p.category}</span>
                <h3 className="pcard__title">
                  {p.title} <ArrowUpRight size={16} strokeWidth={1.75} className="arr" />
                </h3>
                <p className="pcard__desc">{p.description}</p>
                <div className="pcard__tags">
                  {p.tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
