export default function NaviUniPage() {
  return (
    <main className="naviuni-page">
      <header className="naviuni-header">
        <a href="/#work">← BACK TO PORTFOLIO</a>
        <span>01 / MOBILE APPLICATION</span>
      </header>

      <section className="naviuni-title">
        <p>PORTFOLIO / 01</p>

        <h1>NAVIUNI</h1>

        <span>Navigate. Learn. Succeed.</span>
      </section>

      <section className="naviuni-pages">
        <img
          src="/naviuni/page-1.png"
          alt="NaviUni portfolio overview"
        />

        <img
          src="/naviuni/page-2.png"
          alt="NaviUni features and interface"
        />

        <img
          src="/naviuni/page-3.png"
          alt="NaviUni technical review"
        />
      </section>

      <footer className="naviuni-footer">
        <a href="/#work">← BACK TO PORTFOLIO</a>

        <span>NAVIUNI / CASE STUDY</span>
      </footer>
    </main>
  );
}
