import ProjectCard from "@/components/Projects/ProjectCard";
import PageSpinner from "@/components/v2/feedback/PageSpinner";
import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";
import { PageSeo } from "@/components/v2/seo/PageSeo";
import { Button } from "@/components/v2/ui/button";
import { useProjectsJson } from "@/hooks/useProjectsJson";

export default function ProjectsPage() {
  const { data: projects, error, isLoading, mutate } = useProjectsJson();

  if (error) {
    return (
      <>
        <PageSeo title="Projects" noIndex />
        <Navbar isSticky={true} isTransparent={false} />
        <section className="z-[-1] mx-auto mt-[100px] max-w-xl px-6 pb-24">
          <p className="font-body text-site-ink">{error.message}</p>
          <p className="mt-3 font-body text-sm text-site-ink-muted">
            Check your connection and try again, or open the contact page if the
            problem continues.
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-6"
            onClick={() => mutate()}
          >
            Retry
          </Button>
        </section>
        <Footer />
      </>
    );
  }

  if (isLoading || !projects) {
    return (
      <>
        <PageSeo
          title="Projects"
          description="Portfolio: internal tools, web apps, and experiments by Nasirullah Oladipo."
        />
        <Navbar isSticky={true} isTransparent={false} />
        <section className="z-[-1] mt-[100px]">
          <PageSpinner label="Loading projects..." />
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <PageSeo
        title="Projects"
        description="Portfolio: internal tools, web apps, and experiments by Nasirullah Oladipo."
      />
      <Navbar isSticky={true} isTransparent={false} />
      <section className="z-[-1] mt-[100px]">
        <span className="big-title mt-10 block pb-5 pt-10 text-center text-[3rem] font-medium">
          Portfolio
        </span>
        <div className="projects-list mx-auto max-w-6xl">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
