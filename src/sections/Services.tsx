import { ServerCog, Ship, LineChart, Check } from 'lucide-react'
import { services } from '../data/services'

const iconMap: Record<string, React.ReactNode> = {
  'server-cog': <ServerCog size={24} strokeWidth={1.75} />,
  'ship': <Ship size={24} strokeWidth={1.75} />,
  'line-chart': <LineChart size={24} strokeWidth={1.75} />,
}

export function Services() {
  return (
    <section className="section" id="servicos">
      <div className="wrap">
        <div className="s-head">
          <div className="eyebrow reveal"><span className="num">06</span> Serviços</div>
          <h2 className="reveal" style={{ '--d': '60ms' } as React.CSSProperties}>
            Como posso ajudar seu produto a crescer com segurança.
          </h2>
        </div>
        <div className="svc__grid">
          {services.map((svc, i) => (
            <article className="svc reveal" key={svc.no} style={i > 0 ? { '--d': `${i * 80}ms` } as React.CSSProperties : {}}>
              <div className="svc__no mono">{svc.no}</div>
              <div className="svc__ic">{iconMap[svc.icon]}</div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <ul className="svc__list">
                {svc.items.map(item => (
                  <li key={item}><Check size={14} strokeWidth={1.75} /> {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
