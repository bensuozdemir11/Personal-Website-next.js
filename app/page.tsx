export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">◎ BENSU ÖZDEMİR</div>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#references">REFERENCES</a>
          <a href="#cv">CV</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="nav-note">
          BUILDING
          <br />
          WHAT&apos;S NEXT ✦
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-top">
          <span>// COMPUTER SCIENCE · SOFTWARE</span>
          <span>2026 / LONDON, UK</span>
        </div>

        <div className="hero-content">
          <div className="hero-title">
            <h1>
              BENSU
              <br />
              <span>ÖZDEMİR</span>
            </h1>

            <p className="hero-description">
              I build software and digital products that make life easier,
              smarter and more connected.
            </p>

            <a href="#work" className="hero-button">
              EXPLORE MY WORK →
            </a>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <span>YOUR<br />PHOTO</span>
            </div>
            <p>PORTRAIT / 2026</p>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SOFTWARE ENGINEERING</span>
          <span>DIGITAL PRODUCTS</span>
          <span>CREATIVE TECHNOLOGY</span>
        </div>
      </section>

      <section id="work" className="work-preview">
        <div className="section-heading">
          <span>01</span>
          <h2>SELECTED WORK</h2>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <span>01 / MOBILE APPLICATION</span>
            <h3>NAVIUNI</h3>
            <p>React Native · Expo · TypeScript</p>
            <a href="#">VIEW PROJECT →</a>
          </article>

          <article className="project-card">
            <span>02 / WEB PLATFORM</span>
            <h3>GREENURBS</h3>
            <p>Digital Technology · ESG · Web Platform</p>
            <a href="#">VIEW PROJECT →</a>
          </article>

          <article className="project-card">
            <span>03 / DIGITAL SERVICES</span>
            <h3>BENORA</h3>
            <p>Technology · Digital Products · Creative Services</p>
            <a href="#">VIEW PROJECT →</a>
          </article>
        </div>
      </section>

      <section id="about" className="about-preview">
        <span>02 / ABOUT</span>

        <div>
          <h2>
            COMPUTER SCIENCE,
            <br />
            BUT ALWAYS CURIOUS
            <br />
            ABOUT WHAT&apos;S NEXT.
          </h2>

          <p>
            I&apos;m a Computer Science graduate from London South Bank
            University, interested in software engineering, digital products
            and emerging technology.
          </p>
        </div>
      </section>

      <footer id="contact">
        <div>
          <span>LET&apos;S BUILD SOMETHING.</span>
          <h2>BENSU ÖZDEMİR</h2>
        </div>

        <div className="footer-links">
          <a href="#">LINKEDIN ↗</a>
          <a href="#">GITHUB ↗</a>
          <a href="mailto:hello@bensuozdemir.com">EMAIL ↗</a>
        </div>
      </footer>
    </main>
  );
}
