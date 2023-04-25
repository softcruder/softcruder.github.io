import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";


function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header className={props.isSticky ? "sticky" : ""} style={{ backgroundColor: props.isTransparent && isMobile ? "transparent"  : "var(--primary-color)", }}>
        <div className="brand">
          <div className="logo">
            <Link href="/"> &lt;SOFTCRÜDER /&gt;</Link>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <Image
              src="/images/burger.svg"
              alt="Menu Burger"
              className="burger"
              width={24}
              height={24}
            />
          </div>
        </div>
        {menuOpen && (
          <div className="menu-container">
            <ul>
              <li className="menu-item">
                <Link href="/" >Home</Link>
              </li>
              <li className="menu-item">
                <Link href="/about" >About</Link>
              </li>
              <li className="menu-item">
                <Link href="/projects" >Projects</Link>
              </li>
              <li className="menu-item">
                <Link href="/contact" >Contact</Link>
              </li>
            </ul>
            <div className="close-icon" onClick={toggleMenu}>
              <Image
                src="/images/close.svg"
                alt="Close Menu"
                width={24}
                height={24}
              />
              CLOSE
            </div>
          </div>
        )}
        <style jsx>{`
          header {
            background-color: transparent;
            top: 0;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
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
            justify-content: flex-start;
          }
          .logo a {
            font-size: 24px;
            font-weight: normal;
            color: #333;
            text-decoration: none;
          }
          .menu-icon {
            align-content: flex-end;
            margin-right: 10px;
          }
          .menu-icon img {
            cursor: pointer;
          }
          .menu-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 35vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--black-bg-color) !important;
            box-shadow: 0px 0px 69px rgba(16, 16, 16, 0.5);
            z-index: 999;
          }
          .menu-container ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .menu-container li {
            padding: 10px 20px;
          }
          .menu-item a:hover {
            text-decoration: underline;
            font-weight: bold;
          }
          .menu-container li:first-child {
            border-top: none;
          }
          .close-icon {
            cursor: pointer;
            position: absolute;
            top: 20px;
            right: 10px;
            display: flex;
            align-items: center;
          }

          .close-icon img {
            margin-right: 5px;
          }
          @media (min-width: 768px) {
            header {
              height: 70px;
            }
            .brand {
              padding: 0 10px;
            }
            .logo {
              margin-left: 10px;
            }
            .menu-icon {
              margin-right: 0;
            }
            .menu-container {
            height: 40vh;
            }
          }
        `}</style>
      </header>
    </>
  );
}

export default Navbar;
