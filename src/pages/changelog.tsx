import { useMemo, useState } from "react";
import LogCard from "@/components/LogCard";
import Navbar from "@/components/v2/layout/Navbar";
import GsapButton from "@/components/v2/buttons/GsapButton";
import Footer from "@/components/v2/layout/Footer";
import PageSpinner from "@/components/v2/feedback/PageSpinner";
import { Button as UIButton } from "@/components/v2/ui/button";
import { PageSeo } from "@/components/v2/seo/PageSeo";
import { useGithubCommits } from "@/hooks/useGithubCommits";

const PAGE_SIZE = 15;
const REPO = { owner: "softcruder", name: "softcruder.github.io" } as const;

export default function Changelog() {
  const { data: commits = [], error, isLoading, mutate } = useGithubCommits(
    REPO.owner,
    REPO.name,
  );
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(commits.length / PAGE_SIZE));
  const pageClamped = Math.min(page, totalPages - 1);

  const slice = useMemo(() => {
    const start = pageClamped * PAGE_SIZE;
    return commits.slice(start, start + PAGE_SIZE);
  }, [commits, pageClamped]);

  if (error) {
    return (
      <>
        <PageSeo title="Changelog" noIndex />
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-24">
          <p className="text-center font-body text-site-ink">{error.message}</p>
          <p className="max-w-md text-center font-body text-sm text-site-ink-muted">
            If this keeps happening, try again or send a note from the contact
            page.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <UIButton type="button" variant="outline" onClick={() => mutate()}>
              Retry
            </UIButton>
            <GsapButton text="Contact" href="/contact" target="_self" />
          </div>
        </div>
        <Footer isSticky={true} />
      </>
    );
  }

  return (
    <>
      <PageSeo
        title="Changelog"
        description="Repository commits for this site: updates and history."
      />
      <Navbar isSticky={true} isTransparent={true} />
      <section className="changelog z-[-1] mt-[100px]">
        <span className="big-title mt-10 block pb-5 pt-10 text-center text-[3rem]">
          Changelog
        </span>
        {isLoading ? (
          <PageSpinner label="Loading commits..." />
        ) : (
          <>
            {slice.map((commit) => (
              <LogCard
                key={commit.sha}
                date={new Date(commit.commit.author.date).toLocaleString(
                  "en-NG",
                  {
                    timeZone: "Africa/Lagos",
                    timeZoneName: "short",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  },
                )}
                author={commit.commit.author.name}
                message={commit.commit.message}
              />
            ))}
            <div className="mb-16 flex flex-col items-center gap-4 px-6">
              <p className="font-body text-sm text-site-ink-muted">
                Page {pageClamped + 1} of {totalPages} · {commits.length}{" "}
                commits
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <UIButton
                  type="button"
                  variant="outline"
                  disabled={pageClamped <= 0}
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                >
                  Previous
                </UIButton>
                <UIButton
                  type="button"
                  variant="outline"
                  disabled={pageClamped >= totalPages - 1}
                  onClick={() =>
                    setPage((p) => Math.min(totalPages - 1, p + 1))
                  }
                >
                  Next
                </UIButton>
              </div>
            </div>
          </>
        )}
        <Footer />
      </section>
    </>
  );
}
