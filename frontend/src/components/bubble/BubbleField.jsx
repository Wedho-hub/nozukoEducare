import './BubbleField.css'

/**
 * BubbleField — floating translucent colour circles.
 * variants: "hero" (large vivid, dark bg) | "light" (subtle, white bg) | "dots" (tiny)
 * Parent must have position: relative; overflow: hidden.
 */
export default function BubbleField({ variant = 'light' }) {
  return (
    <div className={`bubble-field bubble-field--${variant}`} aria-hidden="true">
      <div className="bf-b bf-b1" />
      <div className="bf-b bf-b2" />
      <div className="bf-b bf-b3" />
      <div className="bf-b bf-b4" />
      <div className="bf-b bf-b5" />
      <div className="bf-b bf-b6" />
    </div>
  )
}
