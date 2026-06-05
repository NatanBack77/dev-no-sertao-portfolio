import { useEffect } from 'react'
import { Terminal } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
  scrollTo: (id: string) => void
}

const links = [
  { id: 'sobre', num: '01', label: 'Sobre' },
  { id: 'skills', num: '02', label: 'Habilidades' },
  { id: 'experiencia', num: '03', label: 'Experiência' },
  { id: 'projetos', num: '04', label: 'Projetos' },
  { id: 'servicos', num: '06', label: 'Serviços' },
  { id: 'formacao', num: '07', label: 'Formação' },
  { id: 'contato', num: '08', label: 'Contato' },
]

export function MobileMenu({ open, onClose, scrollTo }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={`mmenu${open ? ' is-open' : ''}`} id="mobile-menu" aria-hidden={!open}>
      <nav className="mmenu__links" aria-label="Seções (mobile)">
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={e => { e.preventDefault(); scrollTo(l.id) }}>
            <span className="mono">{l.num}</span> {l.label}
          </a>
        ))}
      </nav>
      <a className="btn btn--primary mmenu__cta" href="#contato" onClick={e => { e.preventDefault(); scrollTo('contato') }}>
        <Terminal size={16} strokeWidth={1.75} /> Vamos conversar
      </a>
    </div>
  )
}
