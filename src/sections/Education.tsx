import { GraduationCap, Truck, Cpu, Cloud, RadioTower, Terminal, FlaskConical, Rocket, Route } from 'lucide-react'
import { education, certifications } from '../data/education'

const eduIconMap: Record<string, React.ReactNode> = {
  'graduation-cap': <GraduationCap size={20} strokeWidth={1.75} />,
  'truck': <Truck size={20} strokeWidth={1.75} />,
  'cpu': <Cpu size={20} strokeWidth={1.75} />,
}

const certIconMap: Record<string, React.ReactNode> = {
  'cloud': <Cloud size={16} strokeWidth={1.75} />,
  'radio-tower': <RadioTower size={16} strokeWidth={1.75} />,
  'terminal': <Terminal size={16} strokeWidth={1.75} />,
  'flask-conical': <FlaskConical size={16} strokeWidth={1.75} />,
  'rocket': <Rocket size={16} strokeWidth={1.75} />,
  'route': <Route size={16} strokeWidth={1.75} />,
}

export function Education() {
  return (
    <section className="section section--alt" id="formacao">
      <div className="wrap">
        <div className="s-head">
          <div className="eyebrow reveal"><span className="num">07</span> Formação &amp; Certificações</div>
          <h2 className="reveal" style={{ '--d': '60ms' } as React.CSSProperties}>
            Base acadêmica sólida e aprendizado que não para.
          </h2>
        </div>
        <div className="edu__grid">
          <div className="edu__col">
            <h3 className="edu__label mono reveal">Formação acadêmica</h3>
            <div className="edu">
              {education.map((ed, i) => (
                <article className="educard reveal" key={ed.title} style={i > 0 ? { '--d': `${i * 80}ms` } as React.CSSProperties : {}}>
                  <div className="educard__ic">
                    {ed.logo ? <img src={ed.logo} alt="" /> : eduIconMap[ed.icon]}
                  </div>
                  <div className="educard__body">
                    <div className="educard__date mono">
                      {ed.date} {ed.current && <span className="educard__now">Cursando</span>}
                    </div>
                    <h4>{ed.title}</h4>
                    <p>{ed.institution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="certs__col">
            <h3 className="edu__label mono reveal">Certificações</h3>
            <ul className="certs reveal">
              {certifications.map(cert => (
                <li key={cert.name}>
                  {certIconMap[cert.icon]} {cert.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
