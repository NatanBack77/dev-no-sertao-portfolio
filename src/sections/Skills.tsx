import { Server, Database, Container, Activity } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { BrandIcon } from '../components/BrandIcon'

const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={20} strokeWidth={1.75} />,
  database: <Database size={20} strokeWidth={1.75} />,
  container: <Container size={20} strokeWidth={1.75} />,
  activity: <Activity size={20} strokeWidth={1.75} />,
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="s-head">
          <div className="eyebrow reveal"><span className="num">02</span> Habilidades técnicas</div>
          <h2 className="reveal" style={{ '--d': '60ms' } as React.CSSProperties}>
            Profundidade onde importa: back-end, dados, infra e observabilidade.
          </h2>
        </div>
        <div className="skills__grid reveal">
          {skillGroups.map(group => (
            <article className="skillcard" key={group.id}>
              <div className="skillcard__h">
                <div className="ic">{iconMap[group.icon]}</div>
                <h3>{group.title}</h3>
                <span className="idx mono">{group.id}</span>
              </div>
              {group.skills.map(skill => (
                <div className="skill" key={skill.name}>
                  <div className="skill__top">
                    <span className="nm">
                      {skill.name}
                      {skill.tools && skill.tools.length > 0 && (
                        <span className="skill__logos">
                          {skill.tools.map(tool => (
                            <BrandIcon key={tool.name} slug={tool.slug} name={tool.name} mono={tool.mono} size="1rem" />
                          ))}
                        </span>
                      )}
                    </span>
                    <span className="lv">{skill.level}</span>
                  </div>
                  <div className="bar">
                    <i style={{ '--w': `${skill.value}%` } as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
