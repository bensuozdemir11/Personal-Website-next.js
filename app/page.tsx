export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-top">
          <span>// COMPUTER SCIENCE · SOFTWARE</span>
          <span>2026 / LONDON, UK</span>
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <h1>
              BENSU
              <br />
              <em>OZDEMIR</em>
            </h1>

            <p className="hero-description">
              I build software and digital products that make life
              easier, smarter and more connected.
            </p>

            <a href="#work" className="hero-button">
              EXPLORE MY WORK →
            </a>
          </div>

          <div className="hero-photo">
            <img
              src="/portrait.jpg"
              alt="Bensu Ozdemir"
            />
            <span>PORTRAIT / 2026</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SOFTWARE ENGINEERING</span>
          <span>DIGITAL PRODUCTS</span>
          <span>CREATIVE TECHNOLOGY</span>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="work-section">
        <div className="section-heading">
          <span>01 — SELECTED WORK</span>
          <h2>Things I’ve built.</h2>
        </div>

        <div className="projects">
          <article className="project">
            <div className="project-number">01</div>
            <h3>NaviUni</h3>
            <p>
              A mobile application designed to make university life
              easier and more connected.
            </p>
            <span>React Native · Expo · TypeScript</span>
          </article>

          <article className="project">
            <div className="project-number">02</div>
            <h3>GREENURBS</h3>
            <p>
              An ESG-focused web application and digital platform
              developed through the UKSPF programme.
            </p>
            <span>React · Node.js · PostgreSQL</span>
          </article>

          <article className="project">
            <div className="project-number">03</div>
            <h3>BENORA</h3>
            <p>
              A digital services concept exploring technology,
              design and real-world problem solving.
            </p>
            <span>Next.js · Tailwind · Figma</span>
          </article>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview">
        <div>
          <span>02 — ABOUT ME</span>
          <h2>Computer science, but make it human.</h2>
        </div>

        <p>
          I’m a Computer Science graduate from London South Bank
          University with an interest in software engineering,
          digital products and creative technology.
        </p>

        <a href="/about">READ MORE →</a>
      </section>

      {/* INTERESTS */}
      <section className="interests">
        <div className="interests-title">
          <h2>
            THINGS
            <br />
            I’M EXCITED
            <br />
            ABOUT
          </h2>
        </div>

        <div className="interest-list">
          <span>SOFTWARE ENGINEERING</span>
          <span>MOBILE DEVELOPMENT</span>
          <span>GAME DEVELOPMENT</span>
          <span>AI & EMERGING TECHNOLOGY</span>
          <span>SUSTAINABILITY & IMPACT</span>
        </div>
      </section>
    </main>
  );
}
