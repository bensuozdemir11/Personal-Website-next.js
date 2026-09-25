import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        ◎ BENSU ÖZDEMİR
      </Link>

      <div className="nav-links">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/work">WORK</Link>
        <Link href="/experience">EXPERIENCE</Link>
        <Link href="/references">REFERENCES</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">CONTACT</Link>
      </div>

      <div className="nav-note">
        BUILDING
        <br />
        WHAT&apos;S NEXT ✦
      </div>
    </nav>
  );
}
