import { useState, useRef, type DragEvent } from 'react'

type Props = {
  id: string
  shape?: 'rect' | 'rounded' | 'circle'
  radius?: string
  placeholder?: string
  style?: React.CSSProperties
}

export function ImageSlot({ id, shape = 'rect', radius = '6', placeholder = 'Solte uma imagem aqui', style }: Props) {
  const storageKey = `imgslot-${id}`
  const [src, setSrc] = useState<string | null>(() => localStorage.getItem(storageKey))
  const [over, setOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const borderRadius =
    shape === 'circle' ? '50%' :
    shape === 'rounded' ? `${radius}px` : '0'

  function handleFile(file: File) {
    if (!file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = e => {
      const url = e.target?.result as string
      localStorage.setItem(storageKey, url)
      setSrc(url)
    }
    reader.readAsDataURL(file)
  }

  function onDrop(e: DragEvent) {
    e.preventDefault()
    setOver(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  return (
    <div
      className="image-slot"
      style={{
        ...style,
        borderRadius,
        border: over ? '2px dashed var(--primary)' : '2px dashed var(--border-1)',
        background: 'var(--bg-app-2)',
        position: 'relative',
        minHeight: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onDragOver={e => { e.preventDefault(); setOver(true) }}
      onDragLeave={() => setOver(false)}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      aria-label={placeholder}
    >
      {src ? (
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      ) : (
        <span style={{ color: 'var(--fg-3)', fontSize: '0.8rem', textAlign: 'center', padding: '1rem' }}>{placeholder}</span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
      />
    </div>
  )
}
