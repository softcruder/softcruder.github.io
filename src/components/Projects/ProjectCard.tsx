import { useCallback, useState } from "react";
import ArrowButton from "@/components/v2/buttons/ArrowButton";
import GsapButton from "@/components/v2/buttons/GsapButton";
import { ExternalLink, MonitorPlay } from "lucide-react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

/** Clipped iframe preview: no interaction, no internal scroll focus; visual crop only. */
export default function ProjectCard({ project }: { project: Project }) {
  const [iframeBlocked, setIframeBlocked] = useState(false);
  const preview = project.previewUrl ?? project.demoLink;

  const onIframeError = useCallback(() => {
    setIframeBlocked(true);
  }, []);

  return (
    <section className="mx-[6%] my-6 max-[767px]:mx-4 md:mx-[10%]">
      <article className="flex flex-col overflow-hidden border border-border bg-site-surface shadow-md">
        <header className="border-b border-border px-5 py-4 md:px-6 md:py-5">
          {project.category ? (
            <span className="font-body text-[10px] uppercase tracking-[0.35em] text-site-ink-muted md:text-xs">
              {project.category}
            </span>
          ) : null}
          <h2 className="mt-1 font-display text-xl font-medium capitalize leading-tight text-site-ink md:text-2xl">
            {project.name}
          </h2>
        </header>

        <div
          className={cn(
            "grid grid-cols-1 gap-6 p-5 md:grid-cols-[40%_60%] md:items-start md:gap-8 md:p-6",
          )}
        >
          <div className="min-h-0 min-w-0 md:max-w-none">
            <div className="relative w-full overflow-hidden rounded-md border border-border bg-black/50">
              <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px] md:h-[min(260px,36vh)]">
                {!iframeBlocked ? (
                  <iframe
                    title={`Preview of ${project.name}`}
                    src={preview}
                    className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    onError={onIframeError}
                  />
                ) : (
                  <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-4 bg-[#111] px-4 text-center">
                    <MonitorPlay className="size-10 text-white/40" aria-hidden />
                    <p className="font-body text-sm text-site-ink-muted">
                      This site can&apos;t be embedded. Open the live demo
                      instead.
                    </p>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wide text-site-ink underline-offset-4 hover:underline"
                    >
                      <ExternalLink className="size-4" />
                      Open demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex min-h-0 min-w-0 flex-col gap-6">
            <p className="font-body text-base leading-relaxed text-site-ink md:text-[17px]">
              {project.description}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-4 md:border-t-0 md:pt-0">
              <GsapButton text="GitHub" href={project.githubLink} />
              <ArrowButton
                text="Live demo"
                href={project.demoLink}
                direction="right"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
