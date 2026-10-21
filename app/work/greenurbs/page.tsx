import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GREENURBS | Bensu Ozdemir",
  description: "STIF · Sustainability and Technology Innovation Forum",
};

export default function ProjectPage() {
  return (
    <main className="portfolio-project-page">
      <header className="portfolio-project-header">
        <a href="/#work">← BACK TO PORTFOLIO</a>
        <span>02 / ESG WEB PLATFORM</span>
      </header>
      <section className="portfolio-project-title">
        <p>PORTFOLIO / 02</p>
        <h1>GREENURBS</h1>
        <span>STIF · Sustainability and Technology Innovation Forum</span>
      </section>
      <section className="portfolio-project-pages">
        <img src="/greenurbs/page-1.jpg" alt="STIF platform overview and sustainability mission" loading=eager />
        <img src="/greenurbs/page-2.jpg" alt="STIF membership, ESG assessment, emissions insights and community tools" loading=lazy />
        <img src="/greenurbs/page-3.jpg" alt="STIF sustainability solutions and user journey" loading=lazy />
      </section>
      <footer className="portfolio-project-footer">
        <a href="/#work">← BACK TO PORTFOLIO</a>
        <span>GREENURBS / CASE STUDY</span>
      </footer>
    </main>
  );
}
