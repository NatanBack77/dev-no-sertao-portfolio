import { stack } from '../data/stack'
import { BrandIcon } from './BrandIcon'

const doubled = [...stack, ...stack]
const half = Math.ceil(stack.length / 2)
const rowA = doubled.slice(0, stack.length + half)
const rowB = doubled.slice(half)

type RowProps = { items: typeof stack; reverse?: boolean }

function Row({ items, reverse }: RowProps) {
  return (
    <div className={`marquee__row${reverse ? ' rev' : ''}`}>
      {items.map((t, i) => (
        <div key={`${t.slug}-${i}`} className="tech">
          <div className="tech__logo-wrap">
            <BrandIcon slug={t.slug} name={t.name} mono={t.mono} />
          </div>
          <span className="tech__name">{t.name}</span>
        </div>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <>
      <div className="marquee__wrap reveal">
        <div className="marquee">
          <Row items={rowA} />
        </div>
      </div>
      <div className="marquee__wrap reveal" style={{ borderTop: 'none' }}>
        <div className="marquee">
          <Row items={rowB} reverse />
        </div>
      </div>
    </>
  )
}
