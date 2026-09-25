import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero">
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

            <a href="/work" className="hero-button">
              EXPLORE MY WORK →
            </a>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <span>
                YOUR
                <br />
                PHOTO
              </span>
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

      <section className="work-preview">
        <div className="section-heading">
          <span>01</span>
          <h2>SELECTED WORK</h2>
        </div>

        <div className="project-grid">
          <ProjectCard
            number="01"
            category="MOBILE APPLICATION"
            title="NAVIUNI"
            description="React Native · Expo · TypeScript"
          />

          <ProjectCard
            number="02"
            category="WEB PLATFORM"
            title="GREENURBS"
            description="Digital Technology · ESG · Web Platform"
          />

          <ProjectCard
            number="03"
            category="DIGITAL SERVICES"
            title="BENORA"
            description="Technology · Digital Products · Creative Services"
          />
        </div>
      </section>

      <section className="about-preview">
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

          <a href="/about" className="hero-button">
            MORE ABOUT ME →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
