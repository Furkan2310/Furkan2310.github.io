export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-label fi">Contact</div>
      <h2 className="section-title fi d1">Me contacter</h2>
      <div className="contact-grid">
        <div className="contact-info fi d2">
          <div className="contact-links-list">
            <a href="https://github.com/Furkan2310" className="clink" target="_blank" rel="noreferrer">
              <span className="clink-icon">⌥</span>GitHub
            </a>
            <a href="https://www.linkedin.com/in/furkan-ozkan-4817243bb/" className="clink" target="_blank" rel="noreferrer">
              <span className="clink-icon">↗</span>Linkedin
            </a>
          </div>
        </div>

        <form className="contact-form fi d3" action="https://formspree.io/f/mreoaqbk" method="POST">
          <div className="fgroup">
            <label className="flabel">Nom</label>
            <input className="finput" type="text" name="nom" placeholder="Monsieur/Madame X" />
          </div>
          <div className="fgroup">
            <label className="flabel">Email</label>
            <input className="finput" type="email" name="email" placeholder="Paul@exemple.com" />
          </div>
          <div className="fgroup">
            <label className="flabel">Message</label>
            <textarea className="ftextarea" name="message" placeholder="Dis-moi tout..." />
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>Envoyer →</button>
        </form>
      </div>
    </section>
  )
}
