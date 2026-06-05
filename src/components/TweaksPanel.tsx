import { useState } from 'react'
import { Settings2, X } from 'lucide-react'
import { useTweaks, PALETAS } from '../hooks/useTweaks'

export function TweaksPanel() {
  const [open, setOpen] = useState(false)
  const [tweaks, setTweak] = useTweaks()

  const swatchEntries = Object.entries(PALETAS) as [string, typeof PALETAS.terracota][]

  return (
    <>
      <button
        className="tweaks-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Ajustes visuais"
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 900,
          width: '2.75rem', height: '2.75rem', borderRadius: '50%',
          background: 'var(--bg-app-2)', border: '1px solid var(--border-1)',
          color: 'var(--primary)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(var(--glow),0.25)',
        }}
      >
        <Settings2 size={18} strokeWidth={1.75} />
      </button>

      {open && (
        <div
          style={{
            position: 'fixed', bottom: '5rem', right: '1.5rem', zIndex: 900,
            background: 'var(--bg-app-2)', border: '1px solid var(--border-1)',
            borderRadius: 'var(--r-lg)', padding: '1.25rem', minWidth: '220px', maxWidth: 'calc(100vw - 3rem)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.75rem', color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Ajustes</span>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--fg-3)', cursor: 'pointer', padding: '0' }}>
              <X size={14} strokeWidth={1.75} />
            </button>
          </div>

          <p style={{ fontSize: '0.7rem', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '0.5rem' }}>Tema</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            {(['escuro', 'claro'] as const).map(t => (
              <button key={t} onClick={() => setTweak('tema', t)} style={{
                flex: 1, padding: '0.4rem', fontSize: '0.8rem', cursor: 'pointer',
                borderRadius: 'var(--r-md)', border: '1px solid var(--border-1)',
                background: tweaks.tema === t ? 'var(--primary)' : 'var(--bg-app)',
                color: tweaks.tema === t ? 'var(--bg-app)' : 'var(--fg-2)',
              }}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <p style={{ fontSize: '0.7rem', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '0.5rem' }}>Paleta</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            {swatchEntries.map(([name, p]) => (
              <button key={name} title={name} onClick={() => setTweak('paleta', name)} style={{
                width: '2rem', height: '2rem', borderRadius: '50%', cursor: 'pointer',
                background: p.escuro.primary,
                border: tweaks.paleta === name ? '2px solid var(--fg-1)' : '2px solid transparent',
              }} />
            ))}
          </div>

          <p style={{ fontSize: '0.7rem', color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '0.5rem' }}>Animação</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {(['sutil', 'padrao', 'expressivo'] as const).map(a => (
              <button key={a} onClick={() => setTweak('animacao', a)} style={{
                flex: 1, padding: '0.4rem', fontSize: '0.75rem', cursor: 'pointer',
                borderRadius: 'var(--r-md)', border: '1px solid var(--border-1)',
                background: tweaks.animacao === a ? 'var(--primary)' : 'var(--bg-app)',
                color: tweaks.animacao === a ? 'var(--bg-app)' : 'var(--fg-2)',
              }}>
                {a === 'padrao' ? 'Padrão' : a.charAt(0).toUpperCase() + a.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
