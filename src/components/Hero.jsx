import { useState, useEffect } from "react"
import { TYPING_TEXTS } from "../data.js"

function useTyping(texts, speed = 65, pause = 1600) {
  const [display, setDisplay] = useState("")
  const [idx, setIdx] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = texts[idx]
    const t = setTimeout(() => {
      if (!del) {
        if (display.length < cur.length) setDisplay(cur.slice(0, display.length + 1))
        else setTimeout(() => setDel(true), pause)
      } else {
        if (display.length > 0) setDisplay(display.slice(0, -1))
        else { setDel(false); setIdx((idx + 1) % texts.length) }
      }
    }, del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [display, del, idx, texts, speed, pause])

  return display
}

export default function Hero({ onNav }) {
  const typed = useTyping(TYPING_TEXTS)

  return (
    <div className="hero">
      <div className="hero-layout">
        <div>
          <div className="hero-tag"> développeur full stack</div>
          <h1 className="hero-name">
            Furkan<br /><span className="kaki">Ozkan.</span>
          </h1>
          <div className="hero-typing">
            {typed}<span className="cursor-blink">|</span>
          </div>
          <div className="hero-label">// About me</div>
          <p className="hero-desc">
            Étudiant développeur en 1ère année à Epitech, je suis passionné par la création
d'applications web, aussi bien côté frontend que backend. Rigoureux et curieux,
j'aime apprendre de nouveaux outils et relever des défis techniques.
Actuellement à la recherche d'un stage pour acquérir une première expérience
professionnelle et contribuer à des projets concrets.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" onClick={() => onNav("projects")}>Voir mes projets</a>
            <a className="btn btn-secondary" href="/cv.pdf" download>↓ Télécharger CV</a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="photo-glow" />
          <div className="hero-photo-frame">
            <div className="photo-corner tl" />
            <div className="photo-corner tr" />
            <div className="photo-corner bl" />
            <div className="photo-corner br" />
            <img src="/moi.jpg" alt="Furkan" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <img src="/moi.jpg" alt="Moi" />
            </div>
          </div>
        </div>
      </div>
  )
}
