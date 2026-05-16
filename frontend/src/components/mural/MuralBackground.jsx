import './MuralBackground.css'

/**
 * Decorative abstract-art mural layer — absolutely positioned, pointer-events none.
 * variant="hero"  → light shapes for dark (blue) backgrounds
 * variant="light" → tinted shapes for cream/white backgrounds
 */
export default function MuralBackground({ variant = 'light' }) {
  return (
    <div className={`mural mural--${variant}`} aria-hidden="true">
      {/* Large background numbers */}
      <span className="mural__num mural__num--1">1</span>
      <span className="mural__num mural__num--2">2</span>
      <span className="mural__num mural__num--3">3</span>
      <span className="mural__letter mural__letter--a">A</span>
      <span className="mural__letter mural__letter--b">B</span>

      {/* Circles */}
      <div className="mural__circle mural__circle--lg mural__circle--top-right" />
      <div className="mural__circle mural__circle--md mural__circle--bottom-left" />
      <div className="mural__ring mural__ring--top-left" />
      <div className="mural__ring mural__ring--bottom-right" />

      {/* Small filled dots */}
      <div className="mural__dot mural__dot--1" />
      <div className="mural__dot mural__dot--2" />
      <div className="mural__dot mural__dot--3" />
      <div className="mural__dot mural__dot--4" />
      <div className="mural__dot mural__dot--5" />

      {/* Triangle / diamond accents (CSS clip-path) */}
      <div className="mural__tri mural__tri--1" />
      <div className="mural__tri mural__tri--2" />

      {/* Curved blob */}
      <div className="mural__blob mural__blob--1" />
    </div>
  )
}
