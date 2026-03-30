import gsap from "gsap";
import { siteCtaMinSize } from "@/lib/cta-button-classes";
import { cn } from "@/lib/utils";

export type GsapButtonProps = {
  text: string;
  href?: string;
  target?: string;
  className?: string;
};

/**
 * v2 — Primary CTA with GSAP hover; styles are Tailwind-only.
 */
export default function GsapButton({
  text,
  href,
  target = "_blank",
  className,
}: GsapButtonProps) {
  const cls = cn(
    siteCtaMinSize,
    "inline-flex cursor-pointer items-center justify-center border border-secondary bg-transparent text-site-ink-body no-underline transition-none",
    className,
  );

  const onEnter = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    gsap.to(e.currentTarget, {
      duration: 0.5,
      backgroundColor: "var(--secondary-color)",
      color: "var(--primary-color)",
      ease: "power2.out",
    });
  };

  const onLeave = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      backgroundColor: "transparent",
      color: "var(--text-color)",
      ease: "power2.out",
    });
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cls}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cls}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {text}
    </button>
  );
}
