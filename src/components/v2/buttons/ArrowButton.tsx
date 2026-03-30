import Link from "next/link";
import Image from "next/image";
import { siteCtaMinSize } from "@/lib/cta-button-classes";
import { cn } from "@/lib/utils";

export type ArrowButtonProps = {
  text?: string;
  href?: string;
  direction?: "left" | "right";
  target?: string;
  className?: string;
};

/**
 * v2 — Text + SVG arrow (matches legacy /images/btn-arrow-*.svg, scale on hover).
 */
export default function ArrowButton({
  text,
  href,
  direction = "right",
  target = "_blank",
  className,
}: ArrowButtonProps) {
  const label = text ? (
    <span className="arwText font-body text-sm uppercase tracking-wide text-site-ink-body">
      {text}
    </span>
  ) : null;

  const arrowLeft = (
    <span
      className={cn(
        "arrow-left mr-2 inline-flex shrink-0 items-center justify-center transition-transform duration-200 ease-in-out",
        "group-hover:scale-[1.3]",
      )}
    >
      <Image
        src="/images/btn-arrow-left.svg"
        alt=""
        width={40}
        height={14}
        className="h-[14px] w-auto"
      />
    </span>
  );

  const arrowRight = (
    <span className="arrow-right ml-5 inline-flex shrink-0 items-center justify-center transition-transform duration-200 ease-in-out group-hover:scale-[1.3]">
      <Image
        src="/images/btn-arrow-right.svg"
        alt=""
        width={40}
        height={14}
        className="h-[14px] w-auto"
      />
    </span>
  );

  const content =
    direction === "left" ? (
      <>
        {arrowLeft}
        {label}
      </>
    ) : (
      <>
        {label}
        {arrowRight}
      </>
    );

  const cls = cn(
    siteCtaMinSize,
    "group arwBtn inline-flex flex-row flex-nowrap items-center justify-center border-none bg-transparent font-body text-inherit no-underline outline-none max-[991px]:min-w-[10rem] max-[991px]:px-4 max-[991px]:text-xs",
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={cls}>
      {content}
    </button>
  );
}
