import { experience } from '../data/experience'

export function Experience() {
  return (
    <section className="section section--alt" id="experiencia">
      <div className="wrap">
        <div className="s-head">
          <div className="eyebrow reveal"><span className="num">03</span> Experiência</div>
          <h2 className="reveal" style={{ '--d': '60ms' } as React.CSSProperties}>
            Trajetória construída sustentando plataformas em produção.
          </h2>
        </div>
        <div className="tl">
          {experience.map((job, i) => (
            <div className={`tl__item${job.current ? ' is-now' : ''} reveal`} key={i}>
              <div className="tl__date mono">{job.date}</div>
              <div className="tl__role">{job.role}</div>
              <div className="tl__co">{job.company} <span className="sep">·</span> {job.context}</div>
              <p className="tl__desc">{job.description}</p>
              <div className="tl__tags">
                {job.tags.map(tag => (
                  <span className="chip" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
