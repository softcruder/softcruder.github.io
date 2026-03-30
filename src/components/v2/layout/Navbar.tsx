import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { cn } from "@/lib/utils";

const NAV = [
  { n: "01", href: "/", label: "Home" },
  { n: "02", href: "/about", label: "About" },
  { n: "03", href: "/projects", label: "Projects" },
  { n: "04", href: "/resume", label: "Résumé" },
  { n: "05", href: "/changelog", label: "Changelog" },
  { n: "06", href: "/contact", label: "Contact" },
];

/** v2 — Site header (Tailwind only). */
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
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass =
    isScrolled || isTransparent || isMobile
      ? "bg-site-page"
      : "bg-site-surface";

  return (
    <header
      className={cn(
        "z-999 flex h-[50px] w-full max-w-full items-center justify-center transition-colors duration-300 md:h-[70px] text-site-ink",
        isSticky ? "sticky top-0" : "",
        bgClass,
      )}
    >
      <div className="flex w-full items-center justify-between px-5 md:px-6">
        <div className="border border-secondary p-1">
          <Link
            href="/"
            className="text-[clamp(14px,2vw,24px)] font-normal text-[#eee] no-underline"
          >
            &lt;SOFTCRÜDER /&gt;
          </Link>
        </div>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
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
        <button
          type="button"
          className="cursor-pointer lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <Image src="/images/burger.svg" alt="" width={24} height={24} />
        </button>
      </div>
      {menuOpen ? (
        <div className="absolute left-0 top-0 z-999 flex min-h-[40vh] w-full flex-col items-start justify-center bg-site-page px-4 pb-8 pt-16 shadow-[0_0_69px_rgba(16,16,16,0.5)]">
          <ul className="m-0 list-none p-0">
            {NAV.map((item) => (
              <li key={item.href} className="px-5 py-3 text-start">
                <Link
                  href={item.href}
                  className="flex items-center gap-2.5 text-site-ink hover:font-bold hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-site-ink-muted">{item.n}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="absolute right-2.5 top-5 flex cursor-pointer items-center gap-1.5 text-md"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/images/close.svg" alt="" width={24} height={24} />
            CLOSE
          </button>
        </div>
      ) : null}
    </header>
  );
}
