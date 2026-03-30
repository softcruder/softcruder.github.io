import Link from "next/link";
import Image from "next/image";

export type SliderItemProps = {
  imgSrc: string;
  bgColor: string;
  title: string;
  subtitle: string;
  description: string;
  demoUrl: string;
  repoUrl: string;
};

export default function SliderItem({
  imgSrc,
  bgColor,
  title,
  subtitle,
  description,
  demoUrl,
  repoUrl,
}: SliderItemProps) {
  return (
    <div
      className="slider-item rounded-lg border border-border p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-md md:w-1/2">
          <Image
            src={imgSrc}
            alt={title}
            width={640}
            height={360}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 text-site-ink">
          <h2 className="font-display text-xl font-semibold">{title}</h2>
          <h3 className="font-body text-sm text-site-ink-muted">{subtitle}</h3>
          <p className="font-body text-sm leading-relaxed">{description}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 min-w-32 items-center justify-center rounded border border-secondary bg-transparent px-4 py-2 text-xs font-medium uppercase tracking-wide text-site-ink transition-colors hover:bg-secondary hover:text-primary"
            >
              Live Demo
            </Link>
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 min-w-32 items-center justify-center rounded border border-border bg-transparent px-4 py-2 text-xs font-medium uppercase tracking-wide text-site-ink-muted transition-colors hover:border-secondary hover:text-site-ink"
            >
              GitHub Repo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
