export default function Home() {
  return (
    <main>
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
              <span>OZDEMIR</span>
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
            <img src="/bensu.jpeg" alt="Bensu Ozdemir" />
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
          <h2>PORTFOLIO</h2>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <span>01 / MOBILE APPLICATION</span>
            <h3>NAVIUNI</h3>
            <p>React Native · Expo · TypeScript</p>
            <a href="/work/naviuni">VIEW PROJECT →</a>
          </article>

          <article className="project-card">
            <span>02 / WEB PLATFORM</span>
            <h3>GREENURBS</h3>
            <p>Digital Technology · ESG · Web Platform</p>
            <a href="/work/greenurbs">VIEW PROJECT →</a>
          </article>

          <article className="project-card">
            <span>03 / DIGITAL PROJECT</span>
            <h3>RIGHT AFTER</h3>
            <p>Digital Product · Design · Development</p>
            <a href="/work/right-after">VIEW PROJECT →</a>
          </article>

          <article className="project-card">
            <span>04 / IMMERSIVE VR EXPERIENCE</span>
            <h3>NATUREVISTA VR</h3>
            <p>Unity 6 · URP · OpenXR · Android VR</p>
            <a href="/work/naturevista">VIEW PROJECT →</a>
          </article>
        </div>
      </section>

      <section id="about" className="about-preview">
        <span className="about-number">02 / THE PERSON BEHIND THE WORK</span>

        <div className="about-content">
          <h2 className="about-headline">
            Curious by nature.
            <br />
            <em>Creative at heart.</em>
          </h2>

          <div className="about-text">
            <p>
              I&apos;ve always been drawn to the space where creativity meets
              technology. What excites me most about software development
              isn&apos;t just writing code, but the possibility of turning an
              idea into something people can actually experience.
            </p>

            <p>
              With a background in Computer Science, my curiosity has taken me
              from building mobile applications and designing digital platforms
              to experimenting with virtual reality and exploring artificial
              intelligence. I enjoy learning new technologies, challenging
              myself creatively, and finding thoughtful solutions to complex
              problems.
            </p>

            <p>
              Outside of the technical side, I&apos;m someone who values good
              design, fresh perspectives, and the process of bringing ideas to
              life. Whether I&apos;m developing a product independently or
              collaborating with a team, I care about creating work that feels
              both purposeful and genuinely engaging.
            </p>
          </div>

          <div className="about-interests">
            DEVELOPMENT · DESIGN · AI · CREATIVE TECHNOLOGY
          </div>
        </div>
      </section>

      <footer id="contact">
        <div>
          <span>LET&apos;S BUILD SOMETHING.</span>
          <h2>BENSU OZDEMIR</h2>
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
