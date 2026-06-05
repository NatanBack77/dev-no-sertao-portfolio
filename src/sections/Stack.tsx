import { Marquee } from '../components/Marquee'

export function Stack() {
  return (
    <section className="section section--alt" id="stack">
      <div className="wrap">
        <div className="s-head">
          <div className="eyebrow reveal"><span className="num">05</span> Stack tecnológica</div>
          <h2 className="reveal" style={{ '--d': '60ms' } as React.CSSProperties}>
            As ferramentas do meu dia a dia.
          </h2>
        </div>
      </div>
      <Marquee />
    </section>
  )
}
