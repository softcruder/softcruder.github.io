import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";

const NAV = [
  { n: "01", href: "/", label: "Home" },
  { n: "02", href: "/about", label: "About" },
  { n: "03", href: "/projects", label: "Projects" },
  { n: "04", href: "/resume", label: "Résumé" },
  { n: "05", href: "/changelog", label: "Changelog" },
  { n: "06", href: "/contact", label: "Contact" },
];

export default function Navbar({
  isSticky,
  isTransparent,
}: {
  isSticky?: boolean;
  isTransparent?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColor =
    isScrolled || isTransparent || isMobile
      ? "var(--black-bg-color)"
      : "var(--primary-color)";

  return (
    <>
      <header
        className={isSticky ? "sticky" : ""}
        style={{ backgroundColor }}
      >
        <div className="brand">
          <div className="logo">
            <Link href="/">&lt;SOFTCRÜDER /&gt;</Link>
          </div>
          <nav
            className="desktop-nav hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-2 font-body text-xs uppercase tracking-widest text-site-ink no-underline transition-opacity hover:opacity-80"
              >
                <span className="text-site-ink-muted">{item.n}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="menu-icon lg:hidden" onClick={() => setMenuOpen((o) => !o)}>
            <Image
              src="/images/burger.svg"
              alt="Menu"
              className="burger"
              width={24}
              height={24}
            />
          </div>
        </div>
        {menuOpen ? (
          <div className="menu-container">
            <ul>
              {NAV.map((item) => (
                <li key={item.href} className="menu-item">
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    <span className="text-site-ink-muted">{item.n}</span>{" "}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="close-icon" onClick={() => setMenuOpen(false)}>
              <Image src="/images/close.svg" alt="" width={24} height={24} />
              CLOSE
            </div>
          </div>
        ) : null}
        <style jsx>{`
          header {
            top: 0;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            z-index: 999;
            transition: background-color 0.3s ease-in-out;
          }
          .sticky {
            position: fixed;
          }
          .brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 20px;
          }
          .logo {
            padding: 5px;
            border: 1px solid var(--secondary-color);
          }
          .logo a {
            font-size: clamp(14px, 2vw, 24px);
            font-weight: normal;
            color: #eee;
            text-decoration: none;
          }
          .menu-icon {
            align-content: flex-end;
            margin-right: 10px;
            cursor: pointer;
          }
          .menu-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            min-height: 40vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--black-bg-color) !important;
            box-shadow: 0px 0px 69px rgba(16, 16, 16, 0.5);
            z-index: 999;
            padding: 4rem 0 2rem;
          }
          .menu-container ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .menu-container li {
            padding: 12px 20px;
            text-align: center;
          }
          .menu-item a {
            font-size: 1.1rem;
          }
          .menu-item a:hover {
            text-decoration: underline;
            font-weight: bold;
          }
          .close-icon {
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
          }
          @media (min-width: 768px) {
            header {
              height: 70px;
            }
            .brand {
              padding: 0 24px;
            }
            .logo {
              margin-left: 0;
            }
          }
        `}</style>
      </header>
    </>
  );
}
