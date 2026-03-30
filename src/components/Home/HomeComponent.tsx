import { useEffect, useRef } from "react";
import gsap from "gsap";
import GsapButton from "@/components/v2/buttons/GsapButton";
import ArrowButton from "@/components/v2/buttons/ArrowButton";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { GITHUB_PROFILES } from "@/config/social";

type HomeLayoutProps = {
  title: string;
  subtitle: string;
  intro: string;
};

export default function HomeLayout({
  title,
  subtitle,
  intro,
}: HomeLayoutProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", { y: 48, opacity: 0, duration: 0.9, stagger: 0.12 }, 0);
      tl.from(
        ".hero-social a",
        { y: 12, opacity: 0, duration: 0.45, stagger: 0.06 },
        "-=0.4",
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="home-layout">
      <div className="split">
        <div className="content-container">
          <span className="big-title hero-line">{title}</span>
          <h2 className="hero-line">{subtitle}</h2>
          <p className="intro hero-line">
            Hey there! <br /> {intro}
          </p>
          <div className="button-container hero-line">
            <GsapButton text="Projects" href="/projects" target="_self" />
            <ArrowButton
              text="About Me"
              href="/about"
              direction="right"
              target="_self"
            />
          </div>
          <div className="social-icons hero-social">
            <span className="social-text">FOLLOW ME</span>
            <br />
            <Link href="https://twitter.com/NasirOladipo" target="_blank">
              <span className="twitter">
                <SlSocialTwitter />
              </span>
            </Link>
            {GITHUB_PROFILES.map((gh) => (
              <Link
                key={gh.id}
                href={gh.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`GitHub (${gh.label})`}
                aria-label={`GitHub ${gh.label}`}
              >
                <span className="github github-stack">
                  <FaGithub />
                  <span className="github-label">{gh.label}</span>
                </span>
              </Link>
            ))}
            <Link
              href="https://linkedin.com/in/nasirullah-oladipo"
              target="_blank"
            >
              <span className="linkedin">
                <FaLinkedin />
              </span>
            </Link>
            <Link href="https://softcruder.hashnode.dev/" target="_blank">
              <span className="hashnode">
                <SiHashnode />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile-footer">
        <div className="social-icons-mobile">
          <span className="social-text">FOLLOW ME</span>
          <br />
          <Link href="https://twitter.com/NasirOladipo" target="_blank">
            <span className="twitter">
              <SlSocialTwitter />
            </span>
          </Link>
          {GITHUB_PROFILES.map((gh) => (
            <Link
              key={gh.id}
              href={gh.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`GitHub (${gh.label})`}
              aria-label={`GitHub ${gh.label}`}
            >
              <span className="github github-stack">
                <FaGithub />
                <span className="github-label">{gh.label}</span>
              </span>
            </Link>
          ))}
          <Link
            href="https://linkedin.com/in/nasirullah-oladipo"
            target="_blank"
          >
            <span className="linkedin">
              <FaLinkedin />
            </span>
          </Link>
          <Link href="https://softcruder.hashnode.dev/" target="_blank">
            <span className="hashnode">
              <SiHashnode />
            </span>
          </Link>
        </div>
        <div className="mob-footer-btn">
          <ArrowButton
            text="contact Me"
            target="_self"
            href="/contact"
            direction="right"
          />
        </div>
      </div>

      <style jsx>{`
        .home-layout {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: "Questrial", sans-serif;
        }

        .split {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .content-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0 14%;
        }

        .big-title {
          font-size: 8vw;
          line-height: 9vw;
          font-weight: bold;
          margin-bottom: 2rem;
          font-family: "DM Sans", sans-serif;
        }

        h2 {
          font-size: 1.4rem;
          line-height: 2.5rem;
          letter-spacing: 0.5px;
          text-transform: capitalize;
          font-weight: 400;
          order: -1;
        }

        p {
          margin-bottom: 3rem;
        }

        span,
        h2,
        p {
          text-align: left;
        }

        .button-container {
          display: flex;
          gap: 1rem;
        }

        .social-icons {
          position: absolute;
          bottom: 0;
          left: 1rem;
        }

        .mobile-footer {
          display: none;
        }

        .social-icons a {
          margin-right: 1rem;
          cursor: pointer;
          display: inline-block;
        }

        .github-stack {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          vertical-align: bottom;
        }

        .github-label {
          font-size: 7px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          line-height: 1;
          opacity: 0.85;
        }

        .social-icons a:hover {
          opacity: 0.8;
        }

        span.social-text {
          writing-mode: sideways-lr;
        }
        @media screen and (max-width: 991px) {
          section {
            background-image: url(/images/home-profile.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            color: var(--primary-color);
          }

          .content-container {
            max-width: 85vw;
          }
          .button-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
            margin-bottom: 1.3rem;
          }

          .social-text {
            color: var(--secondary-color);
          }

          p {
            color: var(--secondary-color) !important;
          }
        }
        @media screen and (max-width: 767px) {
          section {
            background-image: none;
            background-color: var(--black-bg-color);
            color: var(--secondary-color);
          }
          p {
            color: var(--secondary-color) !important;
          }
          h2,
          p {
            font-size: 2.5vw;
            line-height: 3.5vw;
            letter-spacing: 0.2px;
          }
          .intro {
            margin-bottom: 1rem;
          }
          .content-container {
            width: 100%;
            padding: 0 32px 0 32px;
            margin-top: 30%;
          }
          .big-title {
            margin-bottom: 1rem;
          }
          .button-container {
            margin-top: 1rem;
            margin-bottom: 0.65rem;
            flex-direction: column-reverse;
          }
          .social-icons {
            display: none;
          }

          .mobile-footer {
            position: absolute;
            bottom: 0;
            padding-left: 1rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .social-icons-mobile a {
            margin-right: 0.5rem;
            cursor: pointer;
            padding-bottom: 0.5rem;
            display: inline-block;
          }

          span.social-text {
            display: none;
          }

          .github-label {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
