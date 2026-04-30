import { persona } from '../data/persona'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__greeting">Hello, traveler —</p>
          <h1 id="hero-heading" className="hero__title">
            {persona.tagline}
          </h1>
          <p className="hero__subtitle">
            {persona.name} の旅ブログへようこそ。{persona.countriesVisited} カ国を巡って出会った、
            小さな景色と物語を集めています。
          </p>
        </div>
        <div className="hero__visual">
          <img
            className="hero__image"
            src={persona.heroImageUrl}
            alt={persona.heroImageAlt}
            width={1280}
            height={720}
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
