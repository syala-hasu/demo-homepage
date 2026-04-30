import { persona } from '../data/persona'
import './About.css'

function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <h2 id="about-heading" className="about__heading">
          About
        </h2>
        <div className="about__body">
          <img
            className="about__avatar"
            src={persona.avatarUrl}
            alt={`${persona.name} のプロフィール画像`}
            width={160}
            height={160}
          />
          <div className="about__text">
            <p className="about__name">{persona.name}</p>
            <p className="about__bio">{persona.bio}</p>
            <dl className="about__facts">
              <div className="about__fact">
                <dt>訪問国数</dt>
                <dd>{persona.countriesVisited} カ国</dd>
              </div>
              <div className="about__fact">
                <dt>拠点</dt>
                <dd>{persona.basedIn}</dd>
              </div>
              <div className="about__fact">
                <dt>旅歴</dt>
                <dd>{persona.yearsTraveling} 年</dd>
              </div>
              <div className="about__fact">
                <dt>好きな地域</dt>
                <dd>{persona.favoriteRegion}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
