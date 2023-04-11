import React from "react";
import "@/styles/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="aside">
          <p>© Nasirullah Oladipo</p>
          <p>
            Made by <Link href="/">Softcruder</Link> and
            powered by <Link href="https://nextjs.org">Next</Link>. | Template
            Version: <Link href="/changelog">2.1</Link>
          </p>
        </div>
        <div className="aside">
          <Link href="/guestbook">Guestbook</Link>
          <Link href="/projects">Projects</Link>
          <Link href="style-guide">Style Guide</Link>
          <Link href="licensing">Licensing</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
