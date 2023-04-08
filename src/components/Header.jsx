import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollPosition === 0 && isScrolled) {
      setIsScrolled(false);
    }
  }, [scrollPosition, isScrolled]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className={styles["logo-container"]}>
        <Link href="/" className={styles["logo-link"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff"><circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83m13.79-4-5.74 9.94"/></svg>
        </Link>
      </div>
      <div className={styles["menu-container"]}>
        <button className={styles["menu-icon"]} onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="21" viewBox="0 0 32 21"><g fill="none" stroke="#fff"><path data-name="Line 2" d="M0 .5h32"/><path data-name="Line 3" d="M0 10.5h32"/><path data-name="Line 4" d="M0 20.5h32"/></g></svg>
        </button>
        <div
          className={`${styles["menu-items-container"]} ${
            menuOpen ? styles.open : ""
          }`}
        >
        <div className={styles["close-button-container"]}>
          <button className={styles["close-button"]} onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
          <nav className={styles["menu-items"]}>
            <ul>
              <li>
                <Link href="/" className="styles.link"> Home </Link>
              </li>
              <li>
                <Link href="/about" className="styles.link"> About </Link>
              </li>
              <li>
                <Link href="/contact" className="styles.link"> Contact </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;