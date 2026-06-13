type Props = {
  id: string
  shape?: 'rect' | 'rounded' | 'circle'
  radius?: string
  placeholder?: string
  defaultSrc?: string
  style?: React.CSSProperties
}

export function ImageSlot({ id, shape = 'rect', radius = '6', placeholder = 'Sem imagem', defaultSrc, style }: Props) {
  const borderRadius =
    shape === 'circle' ? '50%' :
    shape === 'rounded' ? `${radius}px` : '0'

  return (
    <div
      className="image-slot"
      data-slot={id}
      style={{
        ...style,
        borderRadius,
        border: '2px dashed var(--border-1)',
        background: 'var(--bg-app-2)',
        position: 'relative',
        minHeight: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {defaultSrc ? (
        <img src={defaultSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      ) : (
        <span style={{ color: 'var(--fg-3)', fontSize: '0.8rem', textAlign: 'center', padding: '1rem' }}>{placeholder}</span>
      )}
    </div>
  )
}
