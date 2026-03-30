import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import GsapButton from "@/components/v2/buttons/GsapButton";
import ArrowButton from "@/components/v2/buttons/ArrowButton";
import { GITHUB_PROFILES } from "@/config/social";

export type HomeHeroProps = {
  title: string;
  subtitle: string;
  intro: string;
};

const iconWrap =
  "inline-flex size-9 items-center justify-center text-[1.35rem] text-[inherit] transition-opacity hover:opacity-80";

/** v2 — Home hero (Tailwind + GSAP). */
export default function HomeHero({ title, subtitle, intro }: HomeHeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(
        ".hero-line",
        { y: 48, opacity: 0, duration: 0.9, stagger: 0.12 },
        0,
      );
      tl.from(
        ".hero-social a",
        { y: 12, opacity: 0, duration: 0.45, stagger: 0.06 },
        "-=0.4",
      );
    }, el);
    return () => ctx.revert();
  }, []);

  const socialLinks = (
    <>
      <Link href="https://twitter.com/NasirOladipo" target="_blank">
        <span className={iconWrap}>
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
          <span className="flex flex-col items-center gap-0.5">
            <span className={iconWrap}>
              <FaGithub />
            </span>
            <span className="font-body text-[8px] uppercase leading-none tracking-wide text-site-ink-muted max-[767px]:hidden">
              {gh.label}
            </span>
          </span>
        </Link>
      ))}
      <Link href="https://linkedin.com/in/nasirullah-oladipo" target="_blank">
        <span className={iconWrap}>
          <FaLinkedin />
        </span>
      </Link>
      <Link href="https://softcruder.hashnode.dev/" target="_blank">
        <span className={iconWrap}>
          <SiHashnode />
        </span>
      </Link>
    </>
  );

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[90dvh] flex-col justify-center font-body max-[767px]:min-h-screen max-[767px]:bg-site-page max-[767px]:pb-28 max-[767px]:text-site-ink max-[991px]:min-h-screen max-[991px]:bg-[url('/images/home-profile.jpg')] max-[991px]:bg-cover max-[991px]:bg-center max-[991px]:bg-no-repeat max-[991px]:text-primary md:max-h-[90dvh] md:overflow-hidden md:pb-0"
    >
      <div className="flex h-full min-h-0 flex-1 flex-col justify-between">
        <div className="flex min-h-0 flex-1 flex-col justify-center px-[14%] max-[767px]:mt-[30%] max-[767px]:w-full max-[767px]:px-8 max-[991px]:max-w-[85vw]">
          <h2 className="hero-line order-first text-left text-[1.4rem] font-normal capitalize leading-10 tracking-wide max-[767px]:text-[2.5vw] max-[767px]:leading-[3.5vw] max-[767px]:tracking-wide">
            {subtitle}
          </h2>
          <span className="big-title hero-line mb-4 mt-0 block text-left font-display text-[8vw] font-bold leading-[9vw] max-[767px]:mb-4 max-[767px]:text-[8vw] max-[767px]:leading-[9vw] md:mb-6">
            {title}
          </span>
          <p className="hero-line intro mb-6 mt-0 text-left max-[767px]:mb-4 max-[991px]:text-secondary! max-[767px]:text-[2.5vw] max-[767px]:leading-[3.5vw] md:mb-8">
            Hey there! <br />
            {intro}
          </p>
          <div className="hero-line mb-4 flex gap-4 max-[767px]:mb-3 max-[767px]:flex-col-reverse max-[767px]:gap-4 max-[991px]:mt-6 max-[991px]:flex-col md:mb-6">
            <GsapButton text="Projects" href="/projects" target="_self" />
            <ArrowButton
              text="About Me"
              href="/about"
              direction="right"
              target="_self"
            />
          </div>
          <div className="hero-social absolute bottom-8 left-6 hidden flex-col items-center gap-4 md:flex">
            <span className="social-text font-body text-[10px] uppercase tracking-[0.35em] text-site-ink-muted [writing-mode:vertical-lr]">
              FOLLOW ME
            </span>
            <div className="flex flex-col gap-3">{socialLinks}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex w-full flex-row items-center justify-between pl-4 md:hidden">
        <div className="flex flex-row flex-wrap items-center gap-2">
          {socialLinks}
        </div>
        <div className="pr-4">
          <ArrowButton
            text="contact Me"
            target="_self"
            href="/contact"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
