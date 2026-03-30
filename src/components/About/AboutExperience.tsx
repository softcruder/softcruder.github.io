import type { ExperienceEntry } from "@/components/content-option";
import { AboutReveal } from "./AboutReveal";
import { cn } from "@/lib/utils";

function isJob(
  e: ExperienceEntry,
): e is Extract<ExperienceEntry, { startDate: string }> {
  return "startDate" in e && "endDate" in e;
}

export function AboutExperience({ items }: { items: ExperienceEntry[] }) {
  return (
    <AboutReveal>
      <section className="border-t border-border bg-site-page px-[10%] py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-body text-xs uppercase tracking-[0.35em] text-site-ink-muted">
            Experience
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-medium text-white">
            Where I&apos;ve contributed
          </h2>
          <ul className="mt-12 flex flex-col gap-16">
            {items.map((entry, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={`${entry.where}-${entry.jobtitle}-${i}`}
                  className={cn(
                    "flex flex-col gap-6 border-b border-border pb-16 last:border-b-0 md:flex-row md:items-start md:gap-12",
                    i % 2 === 1 && "md:flex-row-reverse",
                  )}
                >
                  <div className="flex shrink-0 flex-col gap-2 md:w-[min(100%,280px)]">
                    <span className="font-display text-5xl font-semibold leading-none text-white/90 md:text-7xl">
                      {num}
                    </span>
                    <span className="font-body text-sm uppercase tracking-widest text-site-ink-muted">
                      {isJob(entry) ? (entry.type ?? "Role") : "Recognition"}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-2xl font-medium text-white md:text-3xl">
                      {entry.jobtitle}
                    </h3>
                    <p className="mt-2 font-body text-lg text-site-ink-muted">
                      {entry.where}
                      {isJob(entry) ? (
                        <>
                          {" "}
                          · {entry.startDate} – {entry.endDate}
                        </>
                      ) : (
                        <> · {entry.date}</>
                      )}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </AboutReveal>
  );
}
