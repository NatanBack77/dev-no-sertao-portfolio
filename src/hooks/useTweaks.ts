import { useState, useLayoutEffect } from 'react'

const STORAGE_KEY = 'devnsertao-tweaks'

export type TweakState = {
  tema: 'escuro' | 'claro'
  paleta: 'terracota' | 'ocre' | 'caatinga' | 'brasa'
  animacao: 'sutil' | 'padrao' | 'expressivo'
}

const DEFAULTS: TweakState = { tema: 'escuro', paleta: 'terracota', animacao: 'padrao' }

export const PALETAS = {
  terracota: {
    escuro: { primary: '#d8853f', hover: '#e5985a', accent: '#dcab4e', glow: '216,133,63' },
    claro:  { primary: '#a85d23', hover: '#8a4a1c', accent: '#a8781f', glow: '168,93,35' },
    swatch: ['#d8853f', '#dcab4e', '#221a10'],
  },
  ocre: {
    escuro: { primary: '#dcab4e', hover: '#e8bd66', accent: '#d8853f', glow: '220,171,78' },
    claro:  { primary: '#a8781f', hover: '#8a6116', accent: '#a85d23', glow: '168,120,31' },
    swatch: ['#dcab4e', '#d8853f', '#221a10'],
  },
  caatinga: {
    escuro: { primary: '#8a9152', hover: '#9aa162', accent: '#dcab4e', glow: '138,145,82' },
    claro:  { primary: '#59602c', hover: '#474d22', accent: '#a8781f', glow: '89,96,44' },
    swatch: ['#8a9152', '#dcab4e', '#1c150c'],
  },
  brasa: {
    escuro: { primary: '#cf5a3a', hover: '#dc6e4e', accent: '#dcab4e', glow: '207,90,58' },
    claro:  { primary: '#a8401f', hover: '#8a3318', accent: '#a8781f', glow: '168,64,31' },
    swatch: ['#cf5a3a', '#dcab4e', '#221a10'],
  },
}

export const ANIM = {
  sutil:      { dist: '14px', dur: '520ms', marq: '52s' },
  padrao:     { dist: '26px', dur: '700ms', marq: '36s' },
  expressivo: { dist: '46px', dur: '920ms', marq: '24s' },
}

function load(): TweakState {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }
  } catch {
    return DEFAULTS
  }
}

function applyAll(t: TweakState) {
  const html = document.documentElement
  html.setAttribute('data-theme', t.tema === 'claro' ? 'light' : 'dark')
  html.setAttribute('data-anim', t.animacao)
  const p = (PALETAS[t.paleta] || PALETAS.terracota)[t.tema === 'claro' ? 'claro' : 'escuro']
  const r = html.style
  r.setProperty('--primary', p.primary)
  r.setProperty('--primary-hover', p.hover)
  r.setProperty('--accent', p.accent)
  r.setProperty('--glow', p.glow)
  r.setProperty('--primary-soft', `color-mix(in srgb, ${p.primary} 16%, var(--bg-app))`)
  const a = ANIM[t.animacao] || ANIM.padrao
  r.setProperty('--reveal-dist', a.dist)
  r.setProperty('--reveal-dur', a.dur)
  r.setProperty('--marq-dur', a.marq)
}

export function useTweaks(): [TweakState, (key: keyof TweakState, value: string) => void] {
  const [state, setState] = useState<TweakState>(load)

  useLayoutEffect(() => { applyAll(state) }, [state])

  function setTweak(key: keyof TweakState, value: string) {
    setState(prev => {
      const next = { ...prev, [key]: value } as TweakState
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  return [state, setTweak]
}
