export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(20,52,37,.91), rgba(20,52,37,.58)), url("${image}")` }}>
      <div className="container page-hero-content">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
