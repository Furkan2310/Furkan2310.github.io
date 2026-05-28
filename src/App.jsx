import { useEffect, useState } from "react"
import "./styles/global.css"
import Particles from "./components/Particles"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const mv = e => setCursor({ x: e.clientX, y: e.clientY })
    const mv2 = e => setTimeout(() => setRing({ x: e.clientX, y: e.clientY }), 55)
    window.addEventListener("mousemove", mv)
    window.addEventListener("mousemove", mv2)
    return () => {
      window.removeEventListener("mousemove", mv)
      window.removeEventListener("mousemove", mv2)
    }
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("vis")),
      { threshold: 0.1 }
    )
    document.querySelectorAll(".fi").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <Particles />
      <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y }} />
      <div className="cursor-ring" style={{ left: ring.x, top: ring.y }} />
      <Navbar onNav={scrollTo} />
      <Hero onNav={scrollTo} />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
