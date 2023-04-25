import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section copyright">
          <p>
            <span className="copy-text">© Nasirullah Oladipo</span> <br />
            Made with <span className="alt-link">React {<FaReact className="logo" />}</span>  and powered by <Link href="https://nextjs.org" target="_blank"> <span className="alt-link">Next.js {<SiNextdotjs />}</span></Link>. | Portfolio Version: <Link href="/changelog"><span className="alt-link">v2.1</span></Link>
          </p>
          
        </div>
        <div className="footer-section footer-links">
          <ul>
            <li>
              <Link href="/resume">
                <span className="footer-item">Resume</span> 
              </Link>
            </li>
            <li>
              <Link href="https://softcruder.github.io/v1">
              <span className="footer-item">version 1.*</span>
              </Link>
            </li>
            <li>
              <Link href="/style-guide">
              <span className="footer-item">Style Guide</span>
              </Link>
            </li>
            <li>
              <Link href="/licensing">
              <span className="footer-item">Licensing</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--primary-color);
          color: var(--text-color-2);
          padding: 5px;
          margin-top: 20px;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: .4px;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 1640px;
          width: 100%;
        }

        .footer-section {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 10px;
        }

        .footer-section p {
          margin: 0;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: .4px;
        }

        .footer-links ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 5px;
        }

        .footer-links li {
          padding: 5px;
        }

        .footer-item {
          text-decoration: none;
          color: var(--text-color-2);
          text-transform: capitalize !important;
          font-size: 16px;
          line-height: 22px;
        }

        .footer-item:hover {
          text-decoration: underline;
          color: var(--text-color);
        }

        .alt-link {
          color: var(--text-color);
          text-transform: none;
        }

        .copy-text {
          color: var(--text-color);
        }

        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-section {
            flex: 1;
            justify-content: flex-start;
            padding: 20px;
            text-align: left;
          }
          .footer-section p {
            font-size: 12px;
            line-height: 18px;
          }
          .footer-item {
            font-size: 12px;
            line-height: 18px;
          }
          .footer-links {
            display: flex;
            justify-content: flex-end;
            padding: 0 10px;
          }
          .footer-links li {
            padding: 0 5px;
            text-wrap: normal;
          }
        }

        @media (max-width: 767px) {
          .footer-container {
            flex-direction: column;
          }
          .footer-section{
            text-align: center;
            padding: 0;
          }
          .footer-section p {
            font-size: 10px;
            line-height: 16px;
          }
          .footer-item {
            font-size: 10px;
            line-height: 16px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
