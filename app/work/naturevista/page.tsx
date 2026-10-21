import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NATUREVISTA VR | Bensu Ozdemir",
  description: "Unity 6 · URP · OpenXR · Android VR",
};

export default function ProjectPage() {
  return (
    <main className="portfolio-project-page">
      <header className="portfolio-project-header">
        <a href="/#work">← BACK TO PORTFOLIO</a>
        <span>04 / IMMERSIVE VR EXPERIENCE</span>
      </header>
      <section className="portfolio-project-title">
        <p>PORTFOLIO / 04</p>
        <h1>NATUREVISTA VR</h1>
        <span>Unity 6 · URP · OpenXR · Android VR</span>
      </section>
      <section className="portfolio-project-pages">
        <img src="/naturevista/page-1.jpg" alt="NatureVista VR immersive panoramas of UK landscapes" loading=eager />
        <img src="/naturevista/page-2.jpg" alt="Four UK locations and Unity panoramic VR environments" loading=lazy />
        <img src="/naturevista/page-3.jpg" alt="NatureVista technical implementation and Android VR deployment" loading=lazy />
      </section>
      <footer className="portfolio-project-footer">
        <a href="/#work">← BACK TO PORTFOLIO</a>
        <span>NATUREVISTA VR / CASE STUDY</span>
      </footer>
    </main>
  );
}
