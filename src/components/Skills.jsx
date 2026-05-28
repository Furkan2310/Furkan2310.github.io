import { SKILLS } from "../data.js"

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-label fi">Stack</div>
      <h2 className="section-title fi d1">Mes technologies</h2>
      <div className="skills-grid">
        {SKILLS.map((cat, ci) => (
          <div key={cat.cat} className={`skill-cat fi d${ci + 1}`}>
            <div className="skill-cat-title">
              <span>{cat.icon}</span>{cat.cat}
            </div>
            <div className="skill-list">
              {cat.items.map(sk => (
                <div key={sk.name} className="skill-row">
                  <div className="skill-top">
                    <div className="skill-name-wrap">
                      <img src={sk.logo} alt={sk.name} className="skill-icon" />
                      {sk.name}
                    </div>
                    <span className={`skill-badge ${sk.level === "Débutant" ? "badge-beginner" : "badge-intermediate"}`}>
                      {sk.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
