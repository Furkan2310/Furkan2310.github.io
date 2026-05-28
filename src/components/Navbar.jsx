export default function Navbar({ onNav }) {
  return (
    <nav className="nav">
      <div className="nav-logo">dev<span>.</span>portfolio</div>
      <div className="nav-links">
        <a onClick={() => onNav("projects")}>Projets</a>
        <a onClick={() => onNav("skills")}>Skills</a>
        <a onClick={() => onNav("contact")}>Contact</a>
        <div className="nav-status">
          <div className="status-dot" />
          Disponible
        </div>
      </div>
    </nav>
  )
}
