import { useState, useEffect } from "react"
import { PROJECTS } from "../data.js"

export default function Projects() {
  const [active, setActive] = useState(0)
  const n = PROJECTS.length
  const mod = x => ((x % n) + n) % n

  const getClass = i => {
    const d = mod(i - active)
    if (d === 0) return "active"
    if (d === 1) return "next"
    if (d === n - 1) return "prev"
    if (d === 2) return "far-next"
    if (d === n - 2) return "far-prev"
    return "hidden"
  }

  const prev = () => setActive(mod(active - 1))
  const next = () => setActive(mod(active + 1))

  useEffect(() => {
    const h = e => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [active])

  const p = PROJECTS[active]

  return (
    <section id="projects" className="section">
      <div className="section-label fi">Projets</div>
      <h2 className="section-title fi d1">Les projets que j'ai réalisés.</h2>

      <div className="fi d2">
        <div className="carousel-wrapper">
          {PROJECTS.map((proj, i) => (
            <div key={i} className={`project-slide ${getClass(i)}`} onClick={() => setActive(i)}>
              <div className="slide-preview">
  {proj.preview
    ? <img src={proj.preview} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    : <>
        <div className="slide-preview-icon">⌗</div>
        <span className="slide-preview-label">{proj.title}</span>
      </>
  }
</div>
              {getClass(i) === "active" && (
                <div className="slide-overlay">
                  <a href={proj.github} className="slide-link" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={proj.live} className="slide-link" target="_blank" rel="noreferrer">Live ↗</a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="carousel-info">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="carousel-tags">
            {p.tags.map(t => <span key={t} className="ctag">{t}</span>)}
          </div>
        </div>

        <div className="carousel-nav">
          <button className="carousel-btn" onClick={prev}>←</button>
          <div className="carousel-dots">
            {PROJECTS.map((_, i) => (
              <div key={i} className={`cdot${i === active ? " on" : ""}`} onClick={() => setActive(i)} />
            ))}
          </div>
          <button className="carousel-btn" onClick={next}>→</button>
        </div>
      </div>
    </section>
  )
}
