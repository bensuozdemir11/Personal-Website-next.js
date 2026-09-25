"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
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
              <em>ÖZDEMİR</em>
            </h1>

            <p className="intro">
              I build software and digital products that make life
              easier, smarter and more connected.
            </p>

            <a href="#work" className="button">
              EXPLORE MY WORK →
            </a>
          </div>
<div className="hero-image">
  <img
    src="/bensu.jpg"
    alt="Bensu Ozdemir"
  />
  <p>PORTRAIT / 2026</p>
</div>

        <div className="hero-bottom">
          <span>SOFTWARE ENGINEERING</span>
          <span>DIGITAL PRODUCTS</span>
          <span>CREATIVE TECHNOLOGY</span>
        </div>
      </section>
    </main>
  );
}
