import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";
import { resume } from "@/data/resume";
import { Button } from "@/components/v2/ui/button";
import { Printer } from "lucide-react";
import { PageSeo } from "@/components/v2/seo/PageSeo";

export default function ResumePage() {
  const handlePdf = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <>
      <PageSeo title="Résumé" description="Résumé: Nasirullah Oladipo" />
      <div className="resume-shell min-h-screen bg-site-page text-site-ink print:bg-white print:text-black">
        <div className="no-print">
          <Navbar isSticky={true} isTransparent={false} />
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 px-4 py-8">
            <Button type="button" onClick={handlePdf} className="gap-2">
              <Printer className="size-4" aria-hidden />
              Print / Save as PDF
            </Button>
            {/* <p className="font-body text-center text-sm text-site-ink-muted">
              Use your browser print dialog — choose &quot;Save as PDF&quot; to
              download.
            </p> */}
          </div>
        </div>

        <article
          id="resume-print"
          className="resume-print mx-auto max-w-3xl px-6 pb-16 pt-4 print:max-w-none print:px-12 print:pb-12 print:pt-8"
        >
          <header className="border-b border-[#464646] pb-8 print:border-black">
            <h1 className="font-display text-4xl font-semibold tracking-tight">
              {resume.name}
            </h1>
            <p className="mt-2 font-body text-lg text-site-ink-muted print:text-neutral-700">
              {resume.headline} · {resume.location}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-body text-sm">
              <li>
                <a
                  href={`mailto:${resume.email}`}
                  className="underline-offset-2 print:text-black"
                >
                  {resume.email}
                </a>
              </li>
              <li>{resume.phone}</li>
              <li>
                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 print:text-black"
                >
                  LinkedIn
                </a>
              </li>
              {resume.githubProfiles.map((gh) => (
                <li key={gh.url}>
                  <a
                    href={gh.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 print:text-black"
                  >
                    GitHub ({gh.label})
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resume.website}
                  className="underline-offset-2 print:text-black"
                >
                  {resume.website.replace(/^https?:\/\//, "")}
                </a>
              </li>
            </ul>
          </header>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold uppercase tracking-wide print:text-black">
              Summary
            </h2>
            <p className="mt-3 font-body leading-relaxed text-site-ink-muted print:text-neutral-800">
              {resume.summary}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold uppercase tracking-wide print:text-black">
              Experience
            </h2>
            <ul className="mt-4 space-y-8">
              {resume.experience.map((job) => (
                <li key={job.company + job.role}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <h3 className="font-display text-lg font-medium text-white print:text-black">
                      {job.role}
                    </h3>
                    <span className="font-body text-sm text-site-ink-muted print:text-neutral-600">
                      {job.start} – {job.end}
                    </span>
                  </div>
                  <p className="font-body text-site-ink-muted print:text-neutral-700">
                    {job.company} · {job.type}
                  </p>
                  <ul className="mt-2 list-disc pl-5 font-body text-sm leading-relaxed text-site-ink print:text-neutral-900">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold uppercase tracking-wide print:text-black">
              Education
            </h2>
            <ul className="mt-4 space-y-4">
              {resume.education.map((ed) => (
                <li key={ed.school}>
                  <p className="font-display font-medium text-white print:text-black">
                    {ed.school}
                  </p>
                  <p className="font-body text-site-ink-muted print:text-neutral-700">
                    {ed.credential}
                  </p>
                  <p className="mt-1 font-body text-sm leading-relaxed text-site-ink-muted print:text-neutral-800">
                    {ed.detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold uppercase tracking-wide print:text-black">
              Certifications
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-sm text-site-ink-muted print:text-neutral-800">
              {resume.certifications.map((c) => (
                <li key={c.name}>
                  <span className="text-site-ink print:text-black">
                    {c.name}
                  </span>
                  {c.issuer ? ` · ${c.issuer}` : ""}
                  {c.year ? ` (${c.year})` : ""}
                  {c.url ? (
                    <>
                      {" "}
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline print:text-black"
                      >
                        Verify
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold uppercase tracking-wide print:text-black">
              Skills
            </h2>
            <p className="mt-3 font-body text-site-ink-muted print:text-neutral-800">
              <span className="font-medium text-white print:text-black">
                Core:{" "}
              </span>
              {resume.skills.core.join(", ")}
            </p>
            <p className="mt-2 font-body text-site-ink-muted print:text-neutral-800">
              <span className="font-medium text-white print:text-black">
                Also:{" "}
              </span>
              {resume.skills.also.join(", ")}
            </p>
          </section>
        </article>

        <div className="no-print">
          <Footer />
        </div>
      </div>
    </>
  );
}
